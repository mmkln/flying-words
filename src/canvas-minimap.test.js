import assert from 'node:assert/strict';
import test from 'node:test';

import {
  getBoardViewport,
  getMinimapProjection,
} from './canvas-minimap.js';

test('calculates the visible Board rectangle in world coordinates', () => {
  assert.deepEqual(
    getBoardViewport(
      { x: -200, y: -100, scale: 0.5 },
      { width: 1000, height: 600 },
    ),
    {
      x: 400,
      y: 200,
      width: 2000,
      height: 1200,
    },
  );
});

test('converts world coordinates to minimap coordinates and back', () => {
  const projection = getMinimapProjection(
    [{ x: 100, y: 200, width: 200, height: 100 }],
    { x: 0, y: 0, scale: 1 },
    { width: 1000, height: 600 },
    180,
    110,
  );
  const mapped = projection.worldToMap(250, 300);
  const restored = projection.mapToWorld(mapped.x, mapped.y);

  assert.ok(Math.abs(restored.x - 250) < 0.001);
  assert.ok(Math.abs(restored.y - 300) < 0.001);
});

test('keeps the current viewport inside the minimap when there are no cards', () => {
  const projection = getMinimapProjection(
    [],
    { x: -400, y: 150, scale: 0.8 },
    { width: 960, height: 640 },
    180,
    110,
  );
  const viewport = getBoardViewport(
    { x: -400, y: 150, scale: 0.8 },
    { width: 960, height: 640 },
  );
  const topLeft = projection.worldToMap(viewport.x, viewport.y);
  const bottomRight = projection.worldToMap(
    viewport.x + viewport.width,
    viewport.y + viewport.height,
  );

  assert.ok(topLeft.x >= 0);
  assert.ok(topLeft.y >= 0);
  assert.ok(bottomRight.x <= 180);
  assert.ok(bottomRight.y <= 110);
});
