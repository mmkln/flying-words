import assert from 'node:assert/strict';
import test from 'node:test';

import { calculateBoardUsableRect } from './board-viewport-layout.js';

test('uses the canvas inset when no app chrome covers the Board', () => {
  assert.deepEqual(
    calculateBoardUsableRect({
      canvas: { left: 0, top: 0, right: 1200, bottom: 800 },
      margin: 20,
    }),
    {
      left: 20,
      top: 20,
      right: 1180,
      bottom: 780,
      width: 1160,
      height: 760,
    },
  );
});

test('excludes the toolbar, bottom dock, and Board inspector', () => {
  assert.deepEqual(
    calculateBoardUsableRect({
      canvas: { left: 0, top: 0, right: 1440, bottom: 900 },
      topToolbar: { left: 20, top: 18, right: 1420, bottom: 58 },
      bottomDock: { left: 300, top: 792, right: 1140, bottom: 884 },
      rightInspector: { left: 1100, top: 78, right: 1420, bottom: 500 },
      margin: 20,
    }),
    {
      left: 20,
      top: 78,
      right: 1080,
      bottom: 772,
      width: 1060,
      height: 694,
    },
  );
});

test('keeps a valid rectangle when chrome leaves almost no free space', () => {
  const result = calculateBoardUsableRect({
    canvas: { left: 10, top: 10, right: 110, bottom: 110 },
    topToolbar: { left: 10, top: 10, right: 110, bottom: 95 },
    bottomDock: { left: 10, top: 20, right: 110, bottom: 110 },
    rightInspector: { left: 20, top: 10, right: 110, bottom: 110 },
    margin: 10,
  });

  assert.equal(result.width, 1);
  assert.equal(result.height, 1);
});
