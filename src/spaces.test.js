import assert from 'node:assert/strict';
import test from 'node:test';

import {
  DEFAULT_SPACE_ID,
  SPACES,
  SpaceId,
  getThoughtSpaceId,
  isSpaceId,
  isThoughtAvailableInSpace,
  normalizeSpaceId,
} from './spaces.js';

test('exposes exactly four stable spaces', () => {
  assert.equal(SPACES.length, 4);
  assert.deepEqual(
    SPACES.map(({ id }) => id),
    [SpaceId.ONE, SpaceId.TWO, SpaceId.THREE, SpaceId.FOUR],
  );
});

test('falls back to the first space for legacy and invalid layouts', () => {
  assert.equal(normalizeSpaceId('unknown'), DEFAULT_SPACE_ID);
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
  assert.equal(isThoughtAvailableInSpace(globalThought, SpaceId.FOUR), true);
  assert.equal(isThoughtAvailableInSpace(pinnedThought, SpaceId.THREE), true);
  assert.equal(isThoughtAvailableInSpace(pinnedThought, SpaceId.TWO), false);
});
