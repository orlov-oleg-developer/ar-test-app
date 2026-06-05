import * as THREE from 'three';

export type PlacementMode = 'target' | 'catapult' | 'fire';

export type Projectile = {
  mesh: THREE.Mesh;
  velocity: THREE.Vector3;
  bornAt: number;
};

export type SceneState = {
  mode: PlacementMode;
  targets: THREE.Object3D[];
  catapult?: THREE.Object3D;
  reticle?: THREE.Mesh;
  hitTestSource?: XRHitTestSource;
  hitTestSourceRequested: boolean;
  pullStart?: THREE.Vector2;
  pullLast?: THREE.Vector2;
  pullPixels: number;
  pullPower: number;
  activePointerId?: number;
  projectiles: Projectile[];
  score: number;
  dragObject?: THREE.Object3D;
  dragStart?: THREE.Vector2;
  didDrag: boolean;
  catapultArm?: THREE.Object3D;
  catapultShell?: THREE.Object3D;
};
