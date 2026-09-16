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

test('removing a thought from one Board keeps its other Board and relationships', () => {
  const relationships = { version: 1, outgoing: [{ targetId: 'another-thought' }] };
  const meta = withCanvasPlacement(
    withCanvasPlacement({ connections: relationships }, 'board-1', { x: 120, y: 80 }),
    'board-2',
    { x: 340, y: 210 },
  );

  const nextMeta = withoutCanvasPlacement(meta, 'board-1');

  assert.equal(getCanvasPlacement({ meta: nextMeta }, 'board-1'), null);
  assert.deepEqual(getCanvasPlacement({ meta: nextMeta }, 'board-2'), { x: 340, y: 210 });
  assert.deepEqual(nextMeta.connections, relationships);
  assert.deepEqual(getCanvasPlacement({ meta }, 'board-1'), { x: 120, y: 80 });

  const restoredMeta = withCanvasPlacement(nextMeta, 'board-1', { x: 120, y: 80 });
  assert.deepEqual(getCanvasPlacement({ meta: restoredMeta }, 'board-1'), { x: 120, y: 80 });
  assert.deepEqual(getCanvasPlacement({ meta: restoredMeta }, 'board-2'), { x: 340, y: 210 });
  assert.deepEqual(restoredMeta.connections, relationships);
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
