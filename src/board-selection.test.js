import assert from 'node:assert/strict';
import test from 'node:test';

import {
  boardSelectionRectangle,
  captureBoardSelectionOrigins,
  selectBoardCardsInRectangle,
  toggleBoardSelection,
  translateBoardSelectionOrigins,
} from './board-selection.js';

test('toggles Board selection without mutating the previous Set', () => {
  const selected = new Set(['first']);
  const added = toggleBoardSelection(selected, 'second');
  const removed = toggleBoardSelection(added, 'first');

  assert.deepEqual([...selected], ['first']);
  assert.deepEqual([...added], ['first', 'second']);
  assert.deepEqual([...removed], ['second']);
});

test('normalizes a marquee dragged in any direction', () => {
  assert.deepEqual(
    boardSelectionRectangle({ x: 160, y: 120 }, { x: 20, y: 40 }),
    { left: 20, top: 40, right: 160, bottom: 120 },
  );
});

test('selects only cards touched by the marquee', () => {
  const selected = selectBoardCardsInRectangle([
    { id: 'inside', x: 20, y: 20, width: 80, height: 40 },
    { id: 'edge', x: 95, y: 50, width: 80, height: 40 },
    { id: 'outside', x: 220, y: 20, width: 80, height: 40 },
  ], { left: 0, top: 0, right: 120, bottom: 80 });

  assert.deepEqual([...selected], ['inside', 'edge']);
});

test('moves every selected card by the same delta', () => {
  const origins = captureBoardSelectionOrigins([
    { id: 'a', x: 10, y: 20 },
    { id: 'b', x: 90, y: 75 },
    { id: 'c', x: 400, y: 300 },
  ], new Set(['a', 'b']));

  const positions = translateBoardSelectionOrigins(origins, { x: 35, y: -10 });

  assert.deepEqual(positions, [
    { id: 'a', x: 45, y: 10 },
    { id: 'b', x: 125, y: 65 },
  ]);
  assert.equal(positions[1].x - positions[0].x, 80);
  assert.equal(positions[1].y - positions[0].y, 55);
});
