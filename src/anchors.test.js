import assert from 'node:assert/strict';
import test from 'node:test';

import {
  getAnchor,
  hasAnchor,
  withAnchor,
  withoutAnchor,
} from './anchors.js';

test('adds a global anchor without changing unrelated thought metadata', () => {
  const meta = withAnchor({
    knowledge: { version: 1, kind: 'question' },
    canvas: {
      version: 2,
      placements: { 'canvas-1': { x: 120, y: -40 } },
    },
    spatial: {
      version: 1,
      placements: { spatial: { x: 8, y: 12, z: -4, pinned: true } },
    },
  }, 1234);

  assert.deepEqual(meta.knowledge, { version: 1, kind: 'question' });
  assert.deepEqual(meta.canvas.placements['canvas-1'], { x: 120, y: -40 });
  assert.deepEqual(meta.spatial.placements.spatial, { x: 8, y: 12, z: -4, pinned: true });
  assert.deepEqual(meta.navigation, {
    version: 2,
    anchor: { createdAt: 1234 },
  });
  assert.equal(hasAnchor({ meta }), true);
});

test('reads the latest valid legacy Board anchor without mutating metadata', () => {
  const thought = {
    meta: {
      navigation: {
        version: 1,
        anchors: {
          'canvas-1': { createdAt: 10 },
          'canvas-2': { createdAt: 20 },
          broken: { createdAt: 'yesterday' },
        },
      },
    },
  };

  assert.deepEqual(getAnchor(thought), { createdAt: 20 });
  assert.deepEqual(thought.meta.navigation.anchors['canvas-1'], { createdAt: 10 });
});

test('writing an anchor canonicalizes legacy Board anchor metadata', () => {
  const meta = withAnchor({
    navigation: {
      version: 1,
      scenes: [{ id: 'scene-1' }],
      anchors: { 'canvas-1': { createdAt: 10 } },
    },
  }, 30);

  assert.deepEqual(meta.navigation, {
    version: 2,
    scenes: [{ id: 'scene-1' }],
    anchor: { createdAt: 30 },
  });
});

test('removes canonical and legacy anchors while preserving sibling navigation metadata', () => {
  const meta = withoutAnchor({
    color: { accent: 'gold' },
    navigation: {
      version: 1,
      scenes: [{ id: 'scene-1' }],
      anchor: { createdAt: 30 },
      anchors: { 'canvas-1': { createdAt: 10 } },
    },
  });

  assert.deepEqual(meta, {
    color: { accent: 'gold' },
    navigation: {
      version: 2,
      scenes: [{ id: 'scene-1' }],
    },
  });
});

test('ignores malformed anchor metadata', () => {
  assert.equal(hasAnchor({
    meta: {
      navigation: {
        version: 2,
        anchor: { createdAt: 'tomorrow' },
      },
    },
  }), false);
});
