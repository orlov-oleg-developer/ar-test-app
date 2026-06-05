import * as THREE from 'three';
import type { SceneState } from './types';

const GRAVITY = new THREE.Vector3(0, -0.018, 0);
const TARGET_CENTER = new THREE.Vector3();
const PROJECTILE_GEOMETRY = new THREE.SphereGeometry(0.06, 18, 18);
const PROJECTILE_MATERIAL = new THREE.MeshStandardMaterial({ color: 0x101010, roughness: 0.45 });
const LOADED_SHELL_MATERIAL = new THREE.MeshStandardMaterial({ color: 0xffcc33, roughness: 0.35 });

export function attachCatapultRig(catapult: THREE.Object3D, state: SceneState) {
  const modelArm = findCatapultPart(catapult, 'center_beam');

  if (modelArm) {
    const modelShell = findCatapultPart(catapult, 'shell');
    if (modelShell) modelShell.visible = false;

    modelArm.userData.restRotationX = modelArm.rotation.x;
    modelArm.userData.pullDirection = 1;

    const shell = new THREE.Mesh(new THREE.SphereGeometry(8, 20, 20), LOADED_SHELL_MATERIAL);
    shell.name = 'LoadedShell';
    shell.position.set(0, 4.5, 85);
    modelArm.add(shell);

    state.catapultArm = modelArm;
    state.catapultShell = shell;
    updateCatapultArm(state, 0);
    return;
  }

  const pivot = new THREE.Group();
  pivot.name = 'PullArm';
  pivot.position.set(0, 0.36, 0.1);
  pivot.userData.restRotationX = -0.15;
  pivot.userData.pullDirection = -1;

  const arm = new THREE.Mesh(
    new THREE.BoxGeometry(0.045, 0.045, 0.58),
    new THREE.MeshStandardMaterial({ color: 0x6b3d1e }),
  );
  arm.position.z = -0.28;

  const cup = new THREE.Mesh(
    new THREE.SphereGeometry(0.075, 16, 10),
    new THREE.MeshStandardMaterial({ color: 0x3b2415 }),
  );
  cup.scale.y = 0.35;
  cup.position.z = -0.58;

  const shell = new THREE.Mesh(
    new THREE.SphereGeometry(0.085, 20, 20),
    LOADED_SHELL_MATERIAL,
  );
  shell.name = 'LoadedShell';
  shell.position.set(0, 0.09, -0.58);

  pivot.add(arm, cup, shell);
  catapult.add(pivot);

  state.catapultArm = pivot;
  state.catapultShell = shell;
  updateCatapultArm(state, 0);
}

export function updateCatapultArm(state: SceneState, power: number) {
  if (!state.catapultArm || !state.catapultShell) return;
  const restRotationX =
    typeof state.catapultArm.userData.restRotationX === 'number' ? state.catapultArm.userData.restRotationX : -0.15;
  const pullDirection =
    typeof state.catapultArm.userData.pullDirection === 'number' ? state.catapultArm.userData.pullDirection : -1;
  state.catapultArm.rotation.x = restRotationX + pullDirection * power * 0.85;
  state.catapultShell.visible = true;
}

export function fireProjectile(scene: THREE.Scene, state: SceneState, audio: HTMLAudioElement) {
  if (!state.catapult) return;

  const origin = launchOrigin(state.catapult, state);
  const direction = launchDirection(state);
  const mesh = new THREE.Mesh(PROJECTILE_GEOMETRY, PROJECTILE_MATERIAL);
  mesh.position.copy(origin);
  scene.add(mesh);

  const speed = 1.6 + state.pullPower * 4.2;
  const velocity = direction.multiplyScalar(speed);
  velocity.y += 0.35 + state.pullPower * 0.85;
  state.projectiles.push({ mesh, velocity, bornAt: performance.now() });

  if (state.catapultShell) state.catapultShell.visible = false;
  window.setTimeout(() => {
    if (state.catapultShell) state.catapultShell.visible = true;
  }, 450);

  audio.currentTime = 0;
  void audio.play().catch(() => undefined);
}

export function updateProjectiles(scene: THREE.Scene, state: SceneState, setScore: (score: number) => void) {
  state.projectiles = state.projectiles.filter((projectile) => {
    projectile.velocity.add(GRAVITY);
    projectile.mesh.position.addScaledVector(projectile.velocity, 0.016);

    for (const target of state.targets) {
      if (target.userData.hit) continue;
      TARGET_CENTER.copy(target.position);
      TARGET_CENTER.y += 0.22;
      const distance = projectile.mesh.position.distanceTo(TARGET_CENTER);
      if (distance < 0.32) {
        target.userData.hit = true;
        target.rotation.x = -Math.PI / 2.4;
        target.position.y = Math.max(0, target.position.y - 0.08);
        state.score += 1;
        setScore(state.score);
        scene.remove(projectile.mesh);
        return false;
      }
    }

    const age = performance.now() - projectile.bornAt;
    if (age > 6000 || projectile.mesh.position.y < -1) {
      scene.remove(projectile.mesh);
      return false;
    }

    return true;
  });
}

export function launchOrigin(catapult: THREE.Object3D, state?: SceneState) {
  if (state?.catapultShell) {
    const origin = new THREE.Vector3();
    state.catapultShell.getWorldPosition(origin);
    return origin;
  }

  return catapult.position.clone().add(new THREE.Vector3(0, 0.28, 0));
}

export function launchDirection(state: SceneState) {
  if (state.catapult) {
    const target = nearestLiveTarget(state.catapult.position, state.targets);
    if (target) {
      const direction = target.position.clone().sub(state.catapult.position);
      direction.y = 0;
      if (direction.lengthSq() > 0.0001) return direction.normalize();
    }
  }

  return state.catapult ? catapultForward(state.catapult) : new THREE.Vector3(0, 0, -1);
}

function nearestLiveTarget(origin: THREE.Vector3, targets: THREE.Object3D[]) {
  let nearest: THREE.Object3D | undefined;
  let nearestDistance = Number.POSITIVE_INFINITY;

  for (const target of targets) {
    if (target.userData.hit) continue;
    const distance = target.position.distanceTo(origin);
    if (distance < nearestDistance) {
      nearest = target;
      nearestDistance = distance;
    }
  }

  return nearest;
}

function catapultForward(catapult: THREE.Object3D) {
  const direction = new THREE.Vector3(0, 0, -1);
  direction.applyQuaternion(catapult.quaternion);
  direction.y = 0;
  return direction.normalize();
}

function findCatapultPart(root: THREE.Object3D, partName: string) {
  const normalizedPartName = normalizeName(partName);
  let exactMatch: THREE.Object3D | undefined;
  let partialMatch: THREE.Object3D | undefined;

  root.traverse((child) => {
    if (exactMatch) return;

    const normalizedName = normalizeName(child.name);
    if (normalizedName === normalizedPartName || normalizedName === `${normalizedPartName}1`) {
      exactMatch = child;
      return;
    }

    if (!partialMatch && normalizedName.includes(normalizedPartName)) {
      partialMatch = child;
    }
  });

  return exactMatch ?? partialMatch;
}

function normalizeName(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '');
}
