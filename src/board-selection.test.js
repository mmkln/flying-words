import assert from 'node:assert/strict';
import test from 'node:test';

import {
  BoardSelectionGesturePhase,
  activateBoardSelectionGesture,
  boardSelectionRectangle,
  boardSelectionGesturePassedThreshold,
  captureBoardSelectionOrigins,
  createBoardSelectionGesture,
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

test('keeps a secondary-pointer gesture pending until it passes the drag threshold', () => {
  const gesture = createBoardSelectionGesture({
    pointerId: 4,
    button: 2,
    startClient: { x: 100, y: 80 },
    startWorld: { x: 240, y: 160 },
    cardId: 'thought-1',
  });

  assert.equal(gesture.phase, BoardSelectionGesturePhase.PENDING);
  assert.equal(
    boardSelectionGesturePassedThreshold(gesture, { x: 104, y: 83 }, 6),
    false,
  );
  assert.equal(
    boardSelectionGesturePassedThreshold(gesture, { x: 106, y: 80 }, 6),
    true,
  );
});

test('activates a replacing marquee without mutating the previous selection', () => {
  const selected = new Set(['first', 'second']);
  const gesture = createBoardSelectionGesture({
    pointerId: 7,
    button: 2,
    startClient: { x: 20, y: 40 },
    startWorld: { x: 50, y: 100 },
  });
  const activated = activateBoardSelectionGesture(gesture, selected);

  assert.equal(activated.gesture.phase, BoardSelectionGesturePhase.MARQUEE);
  assert.deepEqual([...activated.gesture.previousIds], ['first', 'second']);
  assert.deepEqual([...activated.gesture.baseIds], []);
  assert.deepEqual([...activated.selectedIds], []);
  assert.deepEqual([...selected], ['first', 'second']);
});

test('activates an additive marquee with a copy of the current selection', () => {
  const selected = new Set(['first']);
  const gesture = createBoardSelectionGesture({
    pointerId: 8,
    button: 0,
    startClient: { x: 10, y: 20 },
    startWorld: { x: 30, y: 60 },
    additive: true,
    immediate: true,
  });
  const activated = activateBoardSelectionGesture(gesture, selected);

  assert.equal(gesture.phase, BoardSelectionGesturePhase.MARQUEE);
  assert.deepEqual([...activated.gesture.baseIds], ['first']);
  assert.deepEqual([...activated.selectedIds], ['first']);
  assert.notEqual(activated.gesture.baseIds, activated.selectedIds);
});
