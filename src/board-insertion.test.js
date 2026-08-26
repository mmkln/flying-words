import assert from 'node:assert/strict';
import test from 'node:test';

import { planBoardInsertion } from './board-insertion.js';
import { rectanglesOverlap } from './board-rectangle-collision.js';

const card = (id, x, y) => ({ id, x, y, width: 280, height: 96 });

test('keeps a Board insertion in place and moves only overlapping cards', () => {
  const candidate = card('new', 0, 0);
  const result = planBoardInsertion({
    candidate,
    obstacles: [card('overlap', 0, 0), card('untouched', 600, 0)],
    gap: 8,
  });

  assert.deepEqual(result.position, candidate);
  assert.equal(result.moved.length, 1);
  assert.equal(result.moved[0].id, 'overlap');
  assert.equal(
    rectanglesOverlap(candidate, { ...result.moved[0], width: 280, height: 96 }, 8),
    false,
  );
});

test('does not move Board cards when the insertion slot is already clear', () => {
  const candidate = card('new', 0, 0);
  const result = planBoardInsertion({
    candidate,
    obstacles: [card('existing', 400, 0)],
    gap: 8,
  });

  assert.deepEqual(result, { position: candidate, moved: [] });
});
