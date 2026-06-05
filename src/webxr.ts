import * as THREE from 'three';
import type { SceneState } from './types';

export function updateHitTest(renderer: THREE.WebGLRenderer, frame: XRFrame, state: SceneState) {
  const referenceSpace = renderer.xr.getReferenceSpace();
  const session = renderer.xr.getSession();
  if (!referenceSpace || !session || !state.reticle) return;

  if (!state.hitTestSourceRequested) {
    session.requestReferenceSpace('viewer').then((viewerSpace) => {
      const requestHitTestSource = session.requestHitTestSource?.bind(session);
      if (!requestHitTestSource) return;
      const hitTestPromise = requestHitTestSource({ space: viewerSpace });
      if (!hitTestPromise) return;
      hitTestPromise.then((source) => {
        state.hitTestSource = source;
      });
    });
    session.addEventListener('end', () => {
      state.hitTestSourceRequested = false;
      state.hitTestSource = undefined;
    });
    state.hitTestSourceRequested = true;
  }

  if (!state.hitTestSource) return;

  const hitTestResults = frame.getHitTestResults(state.hitTestSource);
  if (hitTestResults.length > 0) {
    const hit = hitTestResults[0];
    const pose = hit.getPose(referenceSpace);
    if (!pose) return;
    state.reticle.visible = true;
    state.reticle.matrix.fromArray(pose.transform.matrix);
  } else {
    state.reticle.visible = false;
  }
}
