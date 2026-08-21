import assert from 'node:assert/strict';
import test from 'node:test';

import {
  getSpatialPlacement,
  hasSpatialPlacement,
  withSpatialPlacement,
  withoutSpatialPlacement,
} from './spatial-placements.js';

test('adds one Spatial placement without changing unrelated metadata', () => {
  const meta = {
    knowledge: { version: 1, kind: 'thought' },
    custom: { keep: true },
  };
  const next = withSpatialPlacement(meta, 'spatial-1', { x: 12.4, y: -8.7, z: 90.5 });

  assert.deepEqual(getSpatialPlacement({ meta: next }, 'spatial-1'), {
    x: 12,
    y: -9,
    z: 91,
    pinned: false,
  });
  assert.deepEqual(next.knowledge, meta.knowledge);
  assert.deepEqual(next.custom, meta.custom);
});

test('keeps placements independent between Spatial spaces', () => {
  let meta = withSpatialPlacement({}, 'spatial-1', { x: 10, y: 20, z: 30 });
  meta = withSpatialPlacement(meta, 'spatial-2', { x: -10, y: -20, z: -30 });

  assert.deepEqual(getSpatialPlacement({ meta }, 'spatial-1'), {
    x: 10,
    y: 20,
    z: 30,
    pinned: false,
  });
  assert.deepEqual(getSpatialPlacement({ meta }, 'spatial-2'), {
    x: -10,
    y: -20,
    z: -30,
    pinned: false,
  });
});

test('removes one Spatial placement while preserving sibling metadata', () => {
  let meta = withSpatialPlacement({ custom: true }, 'spatial-1', { x: 1, y: 2, z: 3 });
  meta = withSpatialPlacement(meta, 'spatial-2', { x: 4, y: 5, z: 6 });
  const next = withoutSpatialPlacement(meta, 'spatial-1');

  assert.equal(hasSpatialPlacement({ meta: next }, 'spatial-1'), false);
  assert.equal(hasSpatialPlacement({ meta: next }, 'spatial-2'), true);
  assert.equal(next.custom, true);
});

test('ignores malformed Spatial coordinates', () => {
  const thought = {
    meta: {
      spatial: {
        version: 1,
        placements: {
          valid: { x: 1, y: 2, z: 3 },
          missingDepth: { x: 1, y: 2 },
          invalid: { x: 1, y: 2, z: '3' },
        },
      },
    },
  };

  assert.deepEqual(getSpatialPlacement(thought, 'valid'), {
    x: 1,
    y: 2,
    z: 3,
    pinned: false,
  });
  assert.equal(getSpatialPlacement(thought, 'missingDepth'), null);
  assert.equal(getSpatialPlacement(thought, 'invalid'), null);
});

test('persists the explicit pinned state', () => {
  const meta = withSpatialPlacement({}, 'spatial-1', {
    x: 12,
    y: 24,
    z: 36,
    pinned: true,
  });

  assert.deepEqual(getSpatialPlacement({ meta }, 'spatial-1'), {
    x: 12,
    y: 24,
    z: 36,
    pinned: true,
  });
});
