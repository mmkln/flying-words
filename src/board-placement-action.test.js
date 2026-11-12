import assert from 'node:assert/strict';
import test from 'node:test';

import { getBoardPlacementActionLabel } from './board-placement-action.js';

test('describes the shared Board placement action with thought context', () => {
  assert.equal(
    getBoardPlacementActionLabel('A useful thought'),
    'Add “A useful thought” to this Board',
  );
});

test('keeps the Board placement label concise for long thoughts', () => {
  const label = getBoardPlacementActionLabel('A'.repeat(100));

  assert.equal(label, `Add “${'A'.repeat(77)}…” to this Board`);
});

test('falls back to a generic Board placement label', () => {
  assert.equal(
    getBoardPlacementActionLabel(''),
    'Add thought to this Board',
  );
});
