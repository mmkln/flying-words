import assert from 'node:assert/strict';
import test from 'node:test';

import {
  DEFAULT_SPACE_ID,
  SpaceId,
  SpaceKind,
  getBoardSpaces,
  getSpace,
  getSpaceCapabilities,
  getSpaces,
  getThoughtSpaceId,
  isCanvasSpace,
  isFlowSpace,
  isSpaceId,
  isSpatialSpace,
  isThoughtAvailableInSpace,
  normalizeSpaceId,
  setBoardSpaces,
} from './spaces.js';

test('exposes three Flow spaces, one fallback Canvas, and one Spatial view', () => {
  setBoardSpaces([]);
  assert.equal(getSpaces().length, 5);
  assert.deepEqual(
    getSpaces().map(({ id }) => id),
    [SpaceId.ONE, SpaceId.TWO, SpaceId.THREE, SpaceId.CANVAS, SpaceId.SPATIAL],
  );
  assert.equal(isFlowSpace(SpaceId.ONE), true);
  assert.equal(getSpace(SpaceId.CANVAS).kind, SpaceKind.CANVAS);
  assert.equal(isCanvasSpace(SpaceId.CANVAS), true);
  assert.equal(getSpace(SpaceId.SPATIAL).kind, SpaceKind.SPATIAL);
  assert.equal(isSpatialSpace(SpaceId.SPATIAL), true);
});

test('adds account Boards as Canvas spaces', () => {
  const boardId = '4db158ff-6f66-4332-97a7-cf38c3e094de';
  setBoardSpaces([
    { id: boardId, title: 'Research Board' },
    { id: boardId, title: 'Duplicate ignored' },
  ]);

  assert.deepEqual(getBoardSpaces(), [{
    id: boardId,
    label: 'Research Board',
    kind: SpaceKind.CANVAS,
  }]);
  assert.equal(isCanvasSpace(boardId), true);
  assert.equal(getSpace(boardId).label, 'Research Board');
  assert.deepEqual(
    getSpaces().map(({ id }) => id),
    [SpaceId.ONE, SpaceId.TWO, SpaceId.THREE, boardId, SpaceId.SPATIAL],
  );

  setBoardSpaces([]);
});

test('enables magnets in Flow and connections in Canvas and Spatial', () => {
  setBoardSpaces([]);
  assert.deepEqual(getSpaceCapabilities(SpaceId.ONE), {
    magnets: true,
    connections: false,
    camera: false,
  });
  assert.deepEqual(getSpaceCapabilities(SpaceId.CANVAS), {
    magnets: false,
    connections: true,
    camera: true,
  });
  assert.deepEqual(getSpaceCapabilities(SpaceId.SPATIAL), {
    magnets: false,
    connections: true,
    camera: true,
  });
});

test('falls back to the first space for legacy and invalid layouts', () => {
  setBoardSpaces([]);
  assert.equal(normalizeSpaceId('unknown'), DEFAULT_SPACE_ID);
  assert.equal(normalizeSpaceId('space-4'), SpaceId.THREE);
  assert.equal(getThoughtSpaceId({ pinned: true, meta: {} }), DEFAULT_SPACE_ID);
  assert.equal(isSpaceId(DEFAULT_SPACE_ID), true);
});

test('makes unpinned thoughts global and pinned thoughts space-specific', () => {
  setBoardSpaces([]);
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
  setBoardSpaces([]);
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

test('shows every thought in Spatial while placements only describe fixed positions', () => {
  setBoardSpaces([]);
  const thought = {
    pinned: false,
    meta: {
      spatial: {
        version: 1,
        placements: {
          [SpaceId.SPATIAL]: { x: 10, y: -20, z: 30 },
        },
      },
    },
  };

  assert.equal(isThoughtAvailableInSpace(thought, SpaceId.SPATIAL), true);
  assert.equal(isThoughtAvailableInSpace({ pinned: false, meta: {} }, SpaceId.SPATIAL), true);
  assert.equal(isThoughtAvailableInSpace(thought, SpaceId.ONE), true);
});
