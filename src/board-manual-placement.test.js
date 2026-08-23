import assert from 'node:assert/strict';
import test from 'node:test';

import { resolveManualBoardPosition } from './board-manual-placement.js';
import { rectanglesOverlap } from './board-rectangle-collision.js';

const gap = 8;
const card = (x, y, width = 120, height = 64) => ({ x, y, width, height });

test('keeps a manually dragged Board card at the pointer position when it is clear', () => {
  const candidate = card(20, 30);
  const result = resolveManualBoardPosition({
    candidate,
    obstacles: [card(400, 300)],
    gap,
  });

  assert.deepEqual(result, candidate);
});

test('stops manual placement with the smaller Board clearance', () => {
  const obstacle = card(200, 100);
  const result = resolveManualBoardPosition({
    candidate: card(170, 100),
    obstacles: [obstacle],
    gap,
  });

  assert.equal(rectanglesOverlap(result, obstacle, gap), false);
  assert.equal(
    result.x + result.width + gap === obstacle.x
      || obstacle.x + obstacle.width + gap === result.x
      || result.y + result.height + gap === obstacle.y
      || obstacle.y + obstacle.height + gap === result.y,
    true,
  );
});

test('finds a legal position when a dragged card meets multiple neighbours', () => {
  const obstacles = [
    card(200, 100),
    card(200, 172),
    card(328, 100),
  ];
  const result = resolveManualBoardPosition({
    candidate: card(220, 120),
    obstacles,
    gap,
  });

  obstacles.forEach((obstacle) => {
    assert.equal(rectanglesOverlap(result, obstacle, gap), false);
  });
});
