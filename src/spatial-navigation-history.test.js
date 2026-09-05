import assert from 'node:assert/strict';
import test from 'node:test';

import { createSpatialNavigationHistory } from './spatial-navigation-history.js';

const A = '00000000-0000-4000-8000-000000000001';
const B = '00000000-0000-4000-8000-000000000002';
const C = '00000000-0000-4000-8000-000000000003';
const available = () => true;

function snapshot(thoughtId, x = 10) {
  return {
    thoughtId,
    camera: {
      position: { x, y: 160, z: 720 },
      target: { x: 0, y: 0, z: 0 },
    },
  };
}

test('Back restores B then A with their own camera snapshots', () => {
  const history = createSpatialNavigationHistory();
  history.record(snapshot(A, 10), B);
  history.record(snapshot(B, 20), C);
  assert.deepEqual(history.peek(available), snapshot(B, 20));
  assert.deepEqual(history.pop(available), snapshot(B, 20));
  assert.deepEqual(history.pop(available), snapshot(A, 10));
  assert.equal(history.pop(available), null);
  assert.equal(history.peek(available), null);
});

test('initial selection and refocusing the same thought add no history', () => {
  const history = createSpatialNavigationHistory();
  history.record(snapshot(null), A);
  history.record(snapshot(A), A);
  history.record(null, B);
  assert.equal(history.peek(available), null);
});

test('snapshots are isolated from the camera and callers of peek', () => {
  const history = createSpatialNavigationHistory();
  const state = snapshot(A);
  history.record(state, B);
  state.camera.position.x = 999;
  const preview = history.peek(available);
  preview.camera.target.y = 999;
  assert.deepEqual(history.pop(available), snapshot(A));
});

test('deleted, removing or unavailable thoughts can be skipped', () => {
  const history = createSpatialNavigationHistory();
  history.record(snapshot(A), B);
  history.record(snapshot(B), C);
  const isValid = (id) => id === A;
  assert.deepEqual(history.peek(isValid), snapshot(A));
  assert.deepEqual(history.pop(isValid), snapshot(A));
  assert.equal(history.peek(available), null);
});

test('checking availability does not consume history', () => {
  const history = createSpatialNavigationHistory();
  history.record(snapshot(A), B);
  assert.equal(history.peek(() => false), null);
  assert.deepEqual(history.peek(available), snapshot(A));
  assert.deepEqual(history.peek(available), snapshot(A));
  assert.deepEqual(history.pop(available), snapshot(A));
});

test('keeps only the latest 50 transitions by default', () => {
  const history = createSpatialNavigationHistory();
  for (let index = 0; index < 51; index += 1) {
    history.record(snapshot(String(index)), String(index + 1));
  }
  for (let index = 50; index > 0; index -= 1) {
    assert.equal(history.pop(available).thoughtId, String(index));
  }
  assert.equal(history.pop(available), null);
});

test('clear removes every previous account or layout snapshot', () => {
  const history = createSpatialNavigationHistory();
  history.record(snapshot(A), B);
  history.record(snapshot(B), C);
  history.clear();
  assert.equal(history.peek(available), null);
  assert.equal(history.pop(available), null);
  history.record(snapshot(C), A);
  assert.equal(history.pop(available).thoughtId, C);
});

test('a new branch after Back records the current view without a Back loop', () => {
  const history = createSpatialNavigationHistory();
  history.record(snapshot(A), B);
  history.record(snapshot(B), C);
  const previous = history.pop(available);
  assert.equal(previous.thoughtId, B);
  history.record(snapshot(B, 42), A);
  assert.deepEqual(history.pop(available), snapshot(B, 42));
  assert.deepEqual(history.pop(available), snapshot(A));
  assert.equal(history.pop(available), null);
});
