import assert from 'node:assert/strict';
import test from 'node:test';

import {
  getBoardAnchor,
  hasBoardAnchor,
  withBoardAnchor,
  withoutBoardAnchor,
} from './board-anchors.js';

test('adds a Board anchor without changing unrelated thought metadata', () => {
  const meta = withBoardAnchor({
    knowledge: { version: 1, kind: 'question' },
    canvas: {
      version: 2,
      placements: { 'canvas-1': { x: 120, y: -40 } },
    },
  }, 'canvas-1', 1234);

  assert.deepEqual(meta.knowledge, { version: 1, kind: 'question' });
  assert.deepEqual(meta.canvas.placements['canvas-1'], { x: 120, y: -40 });
  assert.deepEqual(meta.navigation.anchors['canvas-1'], { createdAt: 1234 });
  assert.equal(hasBoardAnchor({ meta }, 'canvas-1'), true);
});

test('removes one Board anchor while preserving another one', () => {
  const meta = withoutBoardAnchor({
    navigation: {
      version: 1,
      anchors: {
        'canvas-1': { createdAt: 10 },
        'canvas-2': { createdAt: 20 },
      },
    },
  }, 'canvas-1');

  assert.equal(getBoardAnchor({ meta }, 'canvas-1'), null);
  assert.deepEqual(getBoardAnchor({ meta }, 'canvas-2'), { createdAt: 20 });
});

test('removes an empty navigation envelope without changing sibling metadata', () => {
  const meta = withoutBoardAnchor({
    color: { accent: 'gold' },
    navigation: {
      version: 1,
      anchors: { 'canvas-1': { createdAt: 10 } },
    },
  }, 'canvas-1');

  assert.deepEqual(meta, { color: { accent: 'gold' } });
});

test('preserves other navigation metadata when the final anchor is removed', () => {
  const meta = withoutBoardAnchor({
    navigation: {
      version: 1,
      scenes: [{ id: 'scene-1' }],
      anchors: { 'canvas-1': { createdAt: 10 } },
    },
  }, 'canvas-1');

  assert.deepEqual(meta.navigation, {
    version: 1,
    scenes: [{ id: 'scene-1' }],
  });
});

test('ignores malformed Board anchor metadata', () => {
  const thought = {
    meta: {
      navigation: {
        version: 1,
        anchors: {
          'canvas-1': { createdAt: 'yesterday' },
        },
      },
    },
  };

  assert.equal(hasBoardAnchor(thought, 'canvas-1'), false);
});
