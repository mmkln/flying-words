import assert from 'node:assert/strict';
import test from 'node:test';

import {
  DEFAULT_SPACE_ID,
  SPACES,
  SpaceId,
  SpaceKind,
  getSpace,
  getThoughtSpaceId,
  isCanvasSpace,
  isSpaceId,
  isThoughtAvailableInSpace,
  normalizeSpaceId,
} from './spaces.js';

test('exposes three stable flow spaces and one fixed Canvas', () => {
  assert.equal(SPACES.length, 4);
  assert.deepEqual(
    SPACES.map(({ id }) => id),
    [SpaceId.ONE, SpaceId.TWO, SpaceId.THREE, SpaceId.CANVAS],
  );
  assert.equal(getSpace(SpaceId.CANVAS).kind, SpaceKind.CANVAS);
  assert.equal(isCanvasSpace(SpaceId.CANVAS), true);
});

test('falls back to the first space for legacy and invalid layouts', () => {
  assert.equal(normalizeSpaceId('unknown'), DEFAULT_SPACE_ID);
  assert.equal(normalizeSpaceId('space-4'), SpaceId.THREE);
  assert.equal(getThoughtSpaceId({ pinned: true, meta: {} }), DEFAULT_SPACE_ID);
  assert.equal(isSpaceId(DEFAULT_SPACE_ID), true);
});

test('makes unpinned thoughts global and pinned thoughts space-specific', () => {
  const globalThought = { pinned: false, meta: {} };
  const pinnedThought = {
    pinned: true,
    meta: { layout: { spaceId: SpaceId.THREE } },
  };

  assert.equal(isThoughtAvailableInSpace(globalThought, SpaceId.ONE), true);
  assert.equal(isThoughtAvailableInSpace(globalThought, SpaceId.THREE), true);
  assert.equal(isThoughtAvailableInSpace(pinnedThought, SpaceId.THREE), true);
  assert.equal(isThoughtAvailableInSpace(pinnedThought, SpaceId.TWO), false);
});

test('keeps Canvas placement independent from flying spaces', () => {
  const canvasThought = {
    pinned: false,
    meta: {
      canvas: {
        version: 2,
        placements: { [SpaceId.CANVAS]: { x: 240, y: -80 } },
      },
    },
  };

  assert.equal(isThoughtAvailableInSpace(canvasThought, SpaceId.CANVAS), true);
  assert.equal(isThoughtAvailableInSpace(canvasThought, SpaceId.ONE), true);
});
