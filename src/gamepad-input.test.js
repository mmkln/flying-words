import test from 'node:test';
import assert from 'node:assert/strict';

import {
  GAMEPAD_STICK_DEAD_ZONE,
  normalizeGamepadStick,
  readSpatialGamepad,
} from './gamepad-input.js';

function createButtons(values = {}) {
  return Array.from({ length: 16 }, (_, index) => {
    const value = values[index] || 0;
    return { pressed: value > 0.5, value };
  });
}

function createGamepad({
  axes = [0, 0, 0, 0],
  buttonValues = {},
  connected = true,
  mapping = 'standard',
} = {}) {
  return {
    index: 2,
    connected,
    mapping,
    axes,
    buttons: createButtons(buttonValues),
  };
}

test('removes radial stick drift inside the dead zone', () => {
  assert.deepEqual(
    normalizeGamepadStick(
      GAMEPAD_STICK_DEAD_ZONE / 2,
      -GAMEPAD_STICK_DEAD_ZONE / 2,
    ),
    { x: 0, y: 0 },
  );
});

test('normalizes a stick radially without exceeding unit length', () => {
  const horizontal = normalizeGamepadStick(1, 0);
  const diagonal = normalizeGamepadStick(1, 1);

  assert.deepEqual(horizontal, { x: 1, y: 0 });
  assert.ok(Math.abs(Math.hypot(diagonal.x, diagonal.y) - 1) < 0.000001);
  assert.ok(diagonal.x > 0);
  assert.ok(diagonal.y > 0);
});

test('maps standard Xbox sticks, triggers, and face buttons', () => {
  const state = readSpatialGamepad([
    createGamepad({
      axes: [0.7, -0.6, -0.5, 0.8],
      buttonValues: { 0: 1, 2: 1, 6: 0.2, 7: 0.9 },
    }),
  ]);

  assert.equal(state.index, 2);
  assert.ok(state.leftStick.x > 0);
  assert.ok(state.leftStick.y < 0);
  assert.ok(state.rightStick.x < 0);
  assert.ok(state.rightStick.y > 0);
  assert.ok(state.zoom > 0.68 && state.zoom < 0.69);
  assert.equal(state.selectPressed, true);
  assert.equal(state.focusPressed, true);
  assert.equal(state.backPressed, false);
  assert.equal(state.fitAllPressed, false);
});

test('reports a held button only on its rising edge', () => {
  const gamepad = createGamepad({ buttonValues: { 3: 1 } });
  const first = readSpatialGamepad([gamepad]);
  const held = readSpatialGamepad([gamepad], first.buttons);

  assert.equal(first.fitAllPressed, true);
  assert.equal(held.fitAllPressed, false);
});

test('removes minor trigger drift from zoom input', () => {
  const state = readSpatialGamepad([
    createGamepad({ buttonValues: { 7: 0.03 } }),
  ]);

  assert.equal(state.zoom, 0);
});

test('ignores disconnected and non-standard controllers', () => {
  assert.equal(readSpatialGamepad([createGamepad({ connected: false })]), null);
  assert.equal(readSpatialGamepad([createGamepad({ mapping: '' })]), null);
});
