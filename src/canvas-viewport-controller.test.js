import test from 'node:test';
import assert from 'node:assert/strict';
import { fitCanvasCameraToRects } from './canvas-viewport-controller.js';

test('fits world rectangles in the viewport without zooming above 100 percent', () => {
  assert.deepEqual(fitCanvasCameraToRects([
    { left: 100, top: 200, right: 380, bottom: 296 },
  ], { width: 1000, height: 600 }, { padding: 80 }), {
    x: 260,
    y: 52,
    scale: 1,
  });
});

test('scales a large world down around its centre', () => {
  const camera = fitCanvasCameraToRects([
    { left: 0, top: 0, right: 2000, bottom: 1000 },
  ], { width: 1000, height: 600 }, { padding: 100 });
  assert.equal(camera.scale, 0.4);
  assert.equal(camera.x, 100);
  assert.equal(camera.y, 100);
});

