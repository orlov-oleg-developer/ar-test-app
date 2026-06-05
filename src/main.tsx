import { StrictMode, useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import * as THREE from 'three';
import { ARButton } from 'three/examples/jsm/webxr/ARButton.js';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { assetUrl } from './assets';
import {
  attachCatapultRig,
  fireProjectile,
  launchDirection,
  launchOrigin,
  updateCatapultArm,
  updateProjectiles,
} from './catapult';
import { disposeObject } from './dispose';
import { createCatapult, cloneOrFallback, normalizeModel } from './models';
import { pickMovableObject, setRayFromPointer } from './picking';
import type { PlacementMode, SceneState } from './types';
import { updateHitTest } from './webxr';
import './styles.css';

function App() {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneState = useRef<SceneState>({
    mode: 'target',
    targets: [],
    hitTestSourceRequested: false,
    pullPixels: 0,
    pullPower: 0,
    projectiles: [],
    score: 0,
    didDrag: false,
  });
  const [mode, setMode] = useState<PlacementMode>('target');
  const [score, setScore] = useState(0);
  const [power, setPower] = useState(0);
  const [message, setMessage] = useState('Start AR, scan a flat surface, then tap to place targets.');
  const [xrStatus, setXrStatus] = useState('Checking Android WebXR support...');

  useEffect(() => {
    sceneState.current.mode = mode;
  }, [mode]);

  useEffect(() => {
    if (!window.isSecureContext) {
      setXrStatus('WebXR needs HTTPS. Use the GitHub Pages URL, not plain HTTP.');
      return;
    }

    if (!('xr' in navigator)) {
      setXrStatus('WebXR is not available. Open this page directly in Android Chrome.');
      return;
    }

    navigator.xr
      ?.isSessionSupported('immersive-ar')
      .then((supported) => {
        setXrStatus(
          supported
            ? 'AR is supported. Press START AR.'
            : 'immersive-ar is not supported on this browser/device. Use Android Chrome with Google Play Services for AR.',
        );
      })
      .catch(() => {
        setXrStatus('Chrome blocked the WebXR support check. Check site permissions and ARCore support.');
      });
  }, []);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const state = sceneState.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 30);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.xr.enabled = true;
    mount.appendChild(renderer.domElement);

    const audio = new Audio(assetUrl('catapult.wav'));
    const loader = new FBXLoader();
    const raycaster = new THREE.Raycaster();
    const dragPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    const dragPoint = new THREE.Vector3();
    const aimEnd = new THREE.Vector3();
    let catapultModel: THREE.Object3D | undefined;
    let targetModel: THREE.Object3D | undefined;

    scene.add(new THREE.HemisphereLight(0xffffff, 0x556677, 2.4));
    const light = new THREE.DirectionalLight(0xffffff, 2);
    light.position.set(1, 3, 2);
    scene.add(light);

    const reticleGeometry = new THREE.RingGeometry(0.08, 0.1, 32).rotateX(-Math.PI / 2);
    const reticleMaterial = new THREE.MeshBasicMaterial({ color: 0x44d7a8 });
    const reticle = new THREE.Mesh(reticleGeometry, reticleMaterial);
    reticle.matrixAutoUpdate = false;
    reticle.visible = false;
    scene.add(reticle);
    state.reticle = reticle;

    const lineMaterial = new THREE.LineBasicMaterial({ color: 0xff6a3d });
    const lineGeometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3()]);
    const aimLine = new THREE.Line(lineGeometry, lineMaterial);
    aimLine.visible = false;
    scene.add(aimLine);

    loader.load(assetUrl('catapult.fbx'), (model) => {
      catapultModel = normalizeModel(model, 0.45);
    });

    loader.load(assetUrl('target.fbx'), (model) => {
      targetModel = normalizeModel(model, 0.32);
    });

    const arButton = ARButton.createButton(renderer, {
      requiredFeatures: ['hit-test'],
      optionalFeatures: ['dom-overlay'],
      domOverlay: { root: document.body },
    });
    arButton.classList.add('systemArButton');
    document.body.appendChild(arButton);

    const placeObject = () => {
      if (!reticle.visible) {
        setMessage('Point the phone at a floor or table until the green reticle appears.');
        return;
      }

      if (state.mode === 'target') {
        const target = cloneOrFallback(targetModel, 'target');
        target.position.setFromMatrixPosition(reticle.matrix);
        target.userData.hit = false;
        target.userData.movable = true;
        scene.add(target);
        state.targets.push(target);
        setMessage(`Targets: ${state.targets.length}. Drag a target to move it, or switch to catapult mode.`);
        return;
      }

      if (state.mode === 'catapult') {
        if (state.catapult) {
          scene.remove(state.catapult);
        }
        const catapult = createCatapult(catapultModel);
        catapult.position.setFromMatrixPosition(reticle.matrix);
        catapult.lookAt(camera.position.x, catapult.position.y, camera.position.z);
        catapult.userData.movable = true;
        attachCatapultRig(catapult, state);
        scene.add(catapult);
        state.catapult = catapult;
        setMode('fire');
        setMessage('Catapult is ready. Pull back on the screen and release to fire.');
      }
    };

    const shouldIgnorePointer = (event: PointerEvent) => {
      const target = event.target;
      return target instanceof Element && Boolean(target.closest('.controls, #ARButton'));
    };

    const onPointerDown = (event: PointerEvent) => {
      if (shouldIgnorePointer(event)) return;
      event.preventDefault();

      if (state.mode !== 'fire') {
        const movable = pickMovableObject(event, camera, raycaster, state);
        if (movable) {
          state.dragObject = movable;
          state.dragStart = new THREE.Vector2(event.clientX, event.clientY);
          state.didDrag = false;
          setMessage('Drag to move the selected object.');
        }
        return;
      }

      if (event.target instanceof Element) {
        event.target.setPointerCapture?.(event.pointerId);
      }
      state.activePointerId = event.pointerId;
      state.pullStart = new THREE.Vector2(event.clientX, event.clientY);
      state.pullLast = state.pullStart.clone();
      state.pullPixels = 0;
      state.pullPower = 0;
      updateCatapultArm(state, 0);
      setMessage('Keep pulling to charge, then release.');
    };

    const onPointerMove = (event: PointerEvent) => {
      if (shouldIgnorePointer(event)) return;
      event.preventDefault();

      if (state.dragObject && state.dragStart) {
        const current = new THREE.Vector2(event.clientX, event.clientY);
        state.didDrag = state.didDrag || current.distanceTo(state.dragStart) > 8;

        if (state.didDrag) {
          dragPlane.constant = -state.dragObject.position.y;
          setRayFromPointer(event, camera, raycaster);
          if (raycaster.ray.intersectPlane(dragPlane, dragPoint)) {
            state.dragObject.position.x = dragPoint.x;
            state.dragObject.position.z = dragPoint.z;

            if (state.dragObject === state.catapult) {
              state.dragObject.lookAt(camera.position.x, state.dragObject.position.y, camera.position.z);
            }
          }
        }
        return;
      }

      if (state.mode !== 'fire' || !state.pullStart || !state.catapult) return;
      if (state.activePointerId !== undefined && event.pointerId !== state.activePointerId) return;

      const current = new THREE.Vector2(event.clientX, event.clientY);
      const last = state.pullLast ?? state.pullStart;
      const delta = current.distanceTo(last);
      state.pullLast = current;
      state.pullPixels = Math.min(state.pullPixels + delta, 90);
      state.pullPower = state.pullPixels / 90;
      setPower(Math.round(state.pullPower * 100));
      updateCatapultArm(state, state.pullPower);

      const start = launchOrigin(state.catapult, state);
      const forward = launchDirection(state);
      aimEnd.copy(start).addScaledVector(forward, 0.35 + state.pullPower * 0.7);
      aimLine.geometry.setFromPoints([start, aimEnd]);
      aimLine.visible = true;
    };

    const onPointerUp = (event: PointerEvent) => {
      if (shouldIgnorePointer(event)) return;
      event.preventDefault();

      if (state.dragObject) {
        const wasDragged = state.didDrag;
        state.dragObject = undefined;
        state.dragStart = undefined;
        state.didDrag = false;
        if (wasDragged) {
          setMessage('Object moved. Drag again or tap empty space to place a new object.');
        }
        return;
      }

      if (state.mode !== 'fire') {
        placeObject();
        return;
      }

      if (!state.catapult || !state.pullStart) return;
      if (state.pullPower > 0.03) {
        fireProjectile(scene, state, audio);
        setMessage('Shot fired. Pull and release again to shoot another projectile.');
      } else {
        setMessage('Pull farther back before releasing.');
      }

      if (event.target instanceof Element) {
        event.target.releasePointerCapture?.(event.pointerId);
      }
      state.activePointerId = undefined;
      state.pullStart = undefined;
      state.pullLast = undefined;
      state.pullPixels = 0;
      state.pullPower = 0;
      updateCatapultArm(state, 0);
      setPower(0);
      aimLine.visible = false;
    };

    const pointerOptions = { passive: false };
    document.addEventListener('pointerdown', onPointerDown, pointerOptions);
    document.addEventListener('pointermove', onPointerMove, pointerOptions);
    document.addEventListener('pointerup', onPointerUp, pointerOptions);

    renderer.setAnimationLoop((_, frame) => {
      if (frame) updateHitTest(renderer, frame, state);
      updateProjectiles(scene, state, setScore);
      renderer.render(scene, camera);
    });

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    return () => {
      renderer.setAnimationLoop(null);
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('resize', onResize);
      arButton.remove();
      mount.removeChild(renderer.domElement);
      disposeObject(scene);
      renderer.dispose();
    };
  }, []);

  const resetScene = () => {
    window.location.reload();
  };

  return (
    <main className="app">
      <div ref={mountRef} className="xrMount" />

      <section className="topPanel">
        <p className="eyebrow">Android WebXR</p>
        <h1>AR Catapult</h1>
        <p>{message}</p>
        <p className="xrStatus">{xrStatus}</p>
      </section>

      {mode === 'fire' && (
        <div className="firePad" aria-hidden="true">
          <span>Pull back and release</span>
        </div>
      )}

      <section className="hud" aria-label="Scene controls">
        <div className="stats">
          <span>Hits: {score}</span>
          <span>Power: {power}%</span>
        </div>
        <div className="controls">
          <button className={mode === 'target' ? 'active' : ''} onClick={() => setMode('target')}>
            Targets
          </button>
          <button className={mode === 'catapult' ? 'active' : ''} onClick={() => setMode('catapult')}>
            Catapult
          </button>
          <button className={mode === 'fire' ? 'active' : ''} onClick={() => setMode('fire')}>
            Fire
          </button>
          <button onClick={resetScene}>Reset</button>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
