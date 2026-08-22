import assert from 'node:assert/strict';
import test from 'node:test';

import {
  buildBoardGraphComponents,
  calculateBoardGraphLayout,
} from './board-graph-layout.js';
import { rectanglesOverlap } from './board-rectangle-collision.js';

const geometry = { cardWidth: 280, cardHeight: 96, gap: 24 };

function card(id, x, y) {
  return { id, x, y, width: geometry.cardWidth, height: geometry.cardHeight };
}

test('unifies semantic and magnetic relationships into graph components', () => {
  const cards = [
    card('a', 0, 0),
    card('b', 300, 0),
    card('c', 600, 0),
    card('d', 900, 0),
    card('e', 1200, 0),
  ];
  const graph = buildBoardGraphComponents(
    cards,
    [{ sourceId: 'a', targetId: 'b', spacing: 'normal' }],
    [{ parentId: 'b', childId: 'c' }],
  );

  assert.deepEqual(
    graph.components.map(({ memberIds, isolatedCloud }) => ({ memberIds, isolatedCloud })),
    [
      { memberIds: ['a', 'b', 'c'], isolatedCloud: false },
      { memberIds: ['d', 'e'], isolatedCloud: true },
    ],
  );
});

test('produces deterministic collision-free Board positions', () => {
  const cards = [
    card('a', 0, 0),
    card('b', 0, 0),
    card('c', 0, 0),
    card('d', 0, 0),
    card('e', 0, 0),
  ];
  const input = {
    cards,
    connections: [
      { sourceId: 'a', targetId: 'b', spacing: 'tight' },
      { sourceId: 'b', targetId: 'c', spacing: 'normal' },
    ],
    magnetRelations: [{ parentId: 'd', childId: 'e' }],
    geometry,
  };
  const first = calculateBoardGraphLayout(input);
  const second = calculateBoardGraphLayout(input);

  assert.deepEqual(first, second);
  assert.deepEqual(first.map(({ id }) => id), ['a', 'b', 'c', 'd', 'e']);
  first.forEach(({ x, y }) => {
    assert.ok(Number.isFinite(x));
    assert.ok(Number.isFinite(y));
  });

  for (let firstIndex = 0; firstIndex < first.length; firstIndex += 1) {
    for (let secondIndex = firstIndex + 1; secondIndex < first.length; secondIndex += 1) {
      assert.equal(
        rectanglesOverlap(
          { ...first[firstIndex], width: geometry.cardWidth, height: geometry.cardHeight },
          { ...first[secondIndex], width: geometry.cardWidth, height: geometry.cardHeight },
          geometry.gap,
        ),
        false,
      );
    }
  }
});

test('keeps the overall layout centred on the existing Board content', () => {
  const cards = [
    card('a', 1000, -400),
    card('b', 1320, -260),
    card('c', 1560, -100),
  ];
  const result = calculateBoardGraphLayout({
    cards,
    connections: [{ sourceId: 'a', targetId: 'b', spacing: 'normal' }],
    geometry,
  });
  const before = {
    x: cards.reduce((sum, item) => sum + item.x + item.width / 2, 0) / cards.length,
    y: cards.reduce((sum, item) => sum + item.y + item.height / 2, 0) / cards.length,
  };
  const after = {
    x: result.reduce((sum, item) => sum + item.x + geometry.cardWidth / 2, 0) / result.length,
    y: result.reduce((sum, item) => sum + item.y + geometry.cardHeight / 2, 0) / result.length,
  };

  assert.ok(Math.abs(before.x - after.x) <= 1);
  assert.ok(Math.abs(before.y - after.y) <= 1);
});
