import test from 'node:test';
import assert from 'node:assert/strict';
import {
  captureBoardPlacementGroup,
  placeBoardGroupAtAnchor,
  suggestBoardPlacementDraft,
  translateBoardPlacementDraft,
} from './board-placement-layout.js';

test('captures and restores relative positions as one group', () => {
  const group = captureBoardPlacementGroup([
    { id: 'a', x: 20, y: 30 },
    { id: 'b', x: 360, y: 190 },
  ]);
  assert.deepEqual(placeBoardGroupAtAnchor(group, { x: 100, y: 200 }), [
    { id: 'a', x: 100, y: 200 },
    { id: 'b', x: 440, y: 360 },
  ]);
});

test('moves every draft card by the same manual delta', () => {
  assert.deepEqual(translateBoardPlacementDraft([
    { id: 'a', x: 10, y: 20 },
    { id: 'b', x: 50, y: 80 },
  ], { x: -7, y: 13 }), [
    { id: 'a', x: 3, y: 33 },
    { id: 'b', x: 43, y: 93 },
  ]);
});

test('suggests a collision-free visible draft when the centre is occupied', () => {
  const draft = suggestBoardPlacementDraft({
    sourcePlacements: [{ id: 'a', x: 0, y: 0 }],
    occupiedCards: [{ id: 'existing', x: 360, y: 252, width: 280, height: 96 }],
    viewport: { x: 0, y: 0, width: 1000, height: 600 },
  });
  assert.equal(draft.length, 1);
  assert.notDeepEqual(draft[0], { id: 'a', x: 360, y: 252 });
});

