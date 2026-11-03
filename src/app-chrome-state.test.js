import assert from 'node:assert/strict';
import test from 'node:test';

import { deriveAppChromeState } from './app-chrome-state.js';

function derive(overrides = {}) {
  return deriveAppChromeState({
    applicationReady: true,
    viewMode: 'canvas',
    canvasActive: true,
    boardThoughtCount: 3,
    ...overrides,
  });
}

test('shows Board chrome for a populated active Board', () => {
  assert.deepEqual(derive(), {
    boardContextVisible: true,
    spacesButtonVisible: false,
    navigationHudVisible: true,
  });
});

test('hides Board navigation outside a Canvas space', () => {
  const state = derive({ canvasActive: false });

  assert.equal(state.boardContextVisible, false);
  assert.equal(state.spacesButtonVisible, true);
  assert.equal(state.navigationHudVisible, false);
});

test('hides Board navigation in Spaces overview', () => {
  const state = derive({ viewMode: 'spaces' });

  assert.equal(state.boardContextVisible, false);
  assert.equal(state.navigationHudVisible, false);
});

test('hides the minimap on an empty Board', () => {
  const state = derive({ boardThoughtCount: 0 });

  assert.equal(state.boardContextVisible, true);
  assert.equal(state.navigationHudVisible, false);
});

test('hides Board chrome before the application is ready', () => {
  const state = derive({ applicationReady: false });

  assert.equal(state.boardContextVisible, false);
  assert.equal(state.navigationHudVisible, false);
});
