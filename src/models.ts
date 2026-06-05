import * as THREE from 'three';

export function createCatapult(model: THREE.Object3D | undefined) {
  const group = new THREE.Group();
  group.name = 'CatapultRoot';
  group.add(cloneOrFallback(model, 'catapult'));
  return group;
}

export function normalizeModel(model: THREE.Object3D, targetSize: number) {
  const box = new THREE.Box3().setFromObject(model);
  const size = box.getSize(new THREE.Vector3());
  const maxAxis = Math.max(size.x, size.y, size.z) || 1;
  model.scale.multiplyScalar(targetSize / maxAxis);

  const normalizedBox = new THREE.Box3().setFromObject(model);
  model.position.y -= normalizedBox.min.y;

  model.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  return model;
}

export function cloneOrFallback(model: THREE.Object3D | undefined, kind: 'catapult' | 'target') {
  if (model) return model.clone(true);

  if (kind === 'target') {
    const group = new THREE.Group();
    const pole = new THREE.Mesh(
      new THREE.CylinderGeometry(0.01, 0.01, 0.35, 12),
      new THREE.MeshStandardMaterial({ color: 0x222222 }),
    );
    pole.position.y = 0.18;
    const target = new THREE.Mesh(
      new THREE.BoxGeometry(0.28, 0.18, 0.03),
      new THREE.MeshStandardMaterial({ color: 0xe34532 }),
    );
    target.position.y = 0.42;
    group.add(pole, target);
    return group;
  }

  const group = new THREE.Group();
  const body = new THREE.Mesh(
    new THREE.BoxGeometry(0.42, 0.15, 0.25),
    new THREE.MeshStandardMaterial({ color: 0x8b5a2b }),
  );
  body.position.y = 0.08;
  const arm = new THREE.Mesh(
    new THREE.BoxGeometry(0.06, 0.06, 0.5),
    new THREE.MeshStandardMaterial({ color: 0x5b351d }),
  );
  arm.position.set(0, 0.22, -0.08);
  arm.rotation.x = -0.45;
  group.add(body, arm);
  return group;
}
