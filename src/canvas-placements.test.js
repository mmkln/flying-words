import assert from 'node:assert/strict';
import test from 'node:test';

import {
  getCanvasPlacement,
  normalizeCanvasMeta,
  withoutCanvasPlacement,
  withCanvasPlacement,
} from './canvas-placements.js';

test('adds and removes one Canvas placement without changing other metadata', () => {
  const meta = withCanvasPlacement(
    { knowledge: { version: 1, kind: 'thought' } },
    'canvas-1',
    { x: 120.6, y: -40.4 },
  );

  assert.deepEqual(getCanvasPlacement({ meta }, 'canvas-1'), { x: 121, y: -40 });
  assert.deepEqual(meta.knowledge, { version: 1, kind: 'thought' });

  const nextMeta = withoutCanvasPlacement(meta, 'canvas-1');
  assert.equal(nextMeta.canvas, undefined);
  assert.deepEqual(nextMeta.knowledge, { version: 1, kind: 'thought' });
});

test('normalizes a legacy single Canvas placement to version 2', () => {
  const meta = normalizeCanvasMeta({
    canvas: { version: 1, spaceId: 'canvas-1', x: 50, y: 60 },
  });

  assert.deepEqual(meta.canvas, {
    version: 2,
    placements: { 'canvas-1': { x: 50, y: 60 } },
  });
});
