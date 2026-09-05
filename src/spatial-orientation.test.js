import assert from 'node:assert/strict';
import test from 'node:test';
import * as THREE from 'three';

import { createSpatialOrientationReader } from './spatial-orientation.js';

function cameraAtOrigin() {
  return new THREE.PerspectiveCamera(48, 1, 1, 10000);
}

function near(actual, expected) {
  assert.ok(Math.abs(actual - expected) < 1e-6, `${actual} ≈ ${expected}`);
}

test('world up follows camera roll at 0, 90 and 180 degrees', () => {
  const read = createSpatialOrientationReader();
  const camera = cameraAtOrigin();
  for (const [roll, x, y] of [[0, 0, 1], [Math.PI / 2, 1, 0], [Math.PI, 0, -1]]) {
    camera.quaternion.setFromAxisAngle(new THREE.Vector3(0, 0, 1), roll);
    const state = read(camera, null);
    near(state.upX, x);
    near(state.upY, y);
    near(state.equatorScale, 0);
    assert.equal(state.pole, null);
  }
});

test('looking along the vertical axis uses one explicit pole label', () => {
  const read = createSpatialOrientationReader();
  const camera = cameraAtOrigin();
  for (const [pitch, pole] of [[Math.PI / 2, 'up'], [-Math.PI / 2, 'down']]) {
    camera.quaternion.setFromAxisAngle(new THREE.Vector3(1, 0, 0), pitch);
    const state = read(camera, null);
    assert.equal(state.pole, pole);
    near(state.equatorScale, 1);
    assert.ok(Number.isFinite(state.equatorRotation));
  }
});

test('yaw alone does not change world up', () => {
  const camera = cameraAtOrigin();
  camera.quaternion.setFromAxisAngle(new THREE.Vector3(0, 1, 0), 1.2);
  const state = createSpatialOrientationReader()(camera, null);
  near(state.upX, 0);
  near(state.upY, 1);
});

test('center is ahead, off axis, behind or at the camera, not the orbit target', () => {
  const read = createSpatialOrientationReader();
  const camera = cameraAtOrigin();
  const cases = [
    [null, 'empty', null],
    [new THREE.Vector3(), 'at-center', null],
    [new THREE.Vector3(0, 0, -10), 'ahead', null],
    [new THREE.Vector3(0.01, 0, -10), 'ahead', null],
    [new THREE.Vector3(10, 0, -10), 'direction', 90],
    [new THREE.Vector3(-10, 0, -10), 'direction', -90],
    [new THREE.Vector3(0, 10, -10), 'direction', 0],
    [new THREE.Vector3(0, -10, -10), 'direction', 180],
    [new THREE.Vector3(0, 0, 10), 'behind', null],
    [new THREE.Vector3(0.01, 0, 10), 'behind', null],
    [new THREE.Vector3(10, 0, 10), 'behind', 90],
  ];
  for (const [center, expectedState, expectedBearing] of cases) {
    const state = read(camera, center);
    assert.equal(state.centerState, expectedState);
    if (expectedBearing === null) assert.equal(state.bearing, null);
    else near(state.bearing, expectedBearing);
  }
});

test('center bearing respects camera translation and final roll', () => {
  const camera = cameraAtOrigin();
  camera.position.set(100, 200, 300);
  camera.quaternion.setFromAxisAngle(new THREE.Vector3(0, 0, 1), Math.PI / 2);
  const state = createSpatialOrientationReader()(
    camera, new THREE.Vector3(100, 210, 290),
  );
  assert.equal(state.centerState, 'direction');
  near(state.bearing, 90);
});

test('orientation is finite across combined pitch, yaw and roll', () => {
  const camera = cameraAtOrigin();
  const read = createSpatialOrientationReader();
  for (let index = 0; index < 100; index += 1) {
    camera.quaternion.setFromEuler(new THREE.Euler(index * 0.12, index * 0.31, index * 0.27));
    const state = read(camera, new THREE.Vector3(12, -4, 9));
    for (const key of ['upX', 'upY', 'equatorScale', 'equatorRotation']) {
      assert.ok(Number.isFinite(state[key]), key);
    }
    assert.ok(state.bearing === null || Number.isFinite(state.bearing));
  }
});

test('reading orientation does not mutate camera or shared graph bounds', () => {
  const camera = cameraAtOrigin();
  camera.position.set(10, 15, 20);
  camera.lookAt(2, 3, 4);
  const center = new THREE.Vector3(2, 3, 4);
  const position = camera.position.clone();
  const rotation = camera.quaternion.clone();
  const centerCopy = center.clone();
  const read = createSpatialOrientationReader();
  const first = read(camera, center);
  read(camera, null);
  assert.equal(first.centerState, 'ahead');
  assert.deepEqual(camera.position, position);
  assert.deepEqual(camera.quaternion.toArray(), rotation.toArray());
  assert.deepEqual(center, centerCopy);
});
