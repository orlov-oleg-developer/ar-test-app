import * as THREE from 'three';
import type { SceneState } from './types';

export function setRayFromPointer(event: PointerEvent, camera: THREE.Camera, raycaster: THREE.Raycaster) {
  const pointer = new THREE.Vector2(
    (event.clientX / window.innerWidth) * 2 - 1,
    -(event.clientY / window.innerHeight) * 2 + 1,
  );
  raycaster.setFromCamera(pointer, camera);
}

export function pickMovableObject(
  event: PointerEvent,
  camera: THREE.Camera,
  raycaster: THREE.Raycaster,
  state: SceneState,
) {
  const objects = state.catapult ? [...state.targets, state.catapult] : [...state.targets];
  if (objects.length === 0) return undefined;

  setRayFromPointer(event, camera, raycaster);
  const hits = raycaster.intersectObjects(objects, true);
  const hit = hits[0];
  if (!hit) return undefined;

  return findMovableRoot(hit.object, state);
}

function findMovableRoot(object: THREE.Object3D, state: SceneState) {
  let current: THREE.Object3D | null = object;
  while (current) {
    if (current === state.catapult || state.targets.includes(current)) {
      return current;
    }
    current = current.parent;
  }

  return undefined;
}
