import assert from 'node:assert/strict';
import test from 'node:test';

import {
  getMissingBoardConnections,
  getMissingBoardConnectionIds,
  planBoardConnectionExpansion,
} from './board-connection-expansion.js';
import { rectanglesOverlap } from './board-rectangle-collision.js';
import { buildConnectionIndex, reconcileConnections } from './connections.js';

function thought(id) {
  return { id, meta: {} };
}

const geometry = { cardWidth: 280, cardHeight: 96, gap: 24 };

test('counts incoming, outgoing, and reciprocal neighbours missing from this Board', () => {
  const source = thought('source');
  const incoming = thought('incoming');
  const outgoing = thought('outgoing');
  const reciprocal = thought('reciprocal');
  reconcileConnections(source, [outgoing.id, reciprocal.id]);
  reconcileConnections(incoming, [source.id]);
  reconcileConnections(reciprocal, [source.id]);

  const index = buildConnectionIndex([source, incoming, outgoing, reciprocal]);
  const boardIds = new Set([source.id, outgoing.id]);
  assert.deepEqual(
    getMissingBoardConnectionIds(source.id, index, boardIds),
    [reciprocal.id, incoming.id],
  );

  boardIds.add(reciprocal.id);
  boardIds.add(incoming.id);
  assert.deepEqual(getMissingBoardConnectionIds(source.id, index, boardIds), []);
});

test('preserves connection direction for missing Board neighbours', () => {
  const source = thought('source');
  const incoming = thought('incoming');
  const outgoing = thought('outgoing');
  const reciprocal = thought('reciprocal');
  reconcileConnections(source, [outgoing.id, reciprocal.id]);
  reconcileConnections(incoming, [source.id]);
  reconcileConnections(reciprocal, [source.id]);

  const index = buildConnectionIndex([source, incoming, outgoing, reciprocal]);
  assert.deepEqual(
    getMissingBoardConnections(source.id, index, new Set([source.id])).map(
      ({ thoughtId, direction }) => ({ thoughtId, direction }),
    ),
    [
      { thoughtId: outgoing.id, direction: 'outgoing' },
      { thoughtId: reciprocal.id, direction: 'both' },
      { thoughtId: incoming.id, direction: 'incoming' },
    ],
  );
});

test('places every connected card without moving or overlapping existing cards', () => {
  const source = { id: 'source', x: 0, y: 0, width: 280, height: 96 };
  const neighbour = { id: 'existing', x: 304, y: 0, width: 280, height: 96 };
  const obstacles = [source, neighbour];
  const before = structuredClone(obstacles);
  const placements = planBoardConnectionExpansion({
    source,
    missingIds: ['first', 'second', 'third'],
    obstacles,
    geometry,
  });

  assert.deepEqual(obstacles, before);
  assert.deepEqual(placements.map(({ id }) => id), ['first', 'second', 'third']);
  const cards = placements.map((placement) => ({
    ...placement,
    width: geometry.cardWidth,
    height: geometry.cardHeight,
  }));
  cards.forEach((card, index) => {
    [...obstacles, ...cards.slice(0, index)].forEach((other) => {
      assert.equal(rectanglesOverlap(card, other, geometry.gap), false);
    });
  });
});

test('places a connected card inside the visible Board area when space exists', () => {
  const source = { id: 'source', x: 304, y: 120, width: 280, height: 96 };
  const obstacles = [
    source,
    { id: 'blocked-right', x: 608, y: 120, width: 280, height: 96 },
  ];
  const visibleBounds = { left: 0, top: 0, right: 1000, bottom: 700 };
  const [placement] = planBoardConnectionExpansion({
    source,
    missingIds: ['target'],
    obstacles,
    geometry,
    visibleBounds,
  });

  assert.ok(placement);
  const card = {
    ...placement,
    width: geometry.cardWidth,
    height: geometry.cardHeight,
  };
  assert.ok(card.x >= visibleBounds.left);
  assert.ok(card.y >= visibleBounds.top);
  assert.ok(card.x + card.width <= visibleBounds.right);
  assert.ok(card.y + card.height <= visibleBounds.bottom);
  obstacles.forEach((obstacle) => {
    assert.equal(rectanglesOverlap(card, obstacle, geometry.gap), false);
  });
});

test('does not jump behind a distant globally rightmost Board card', () => {
  const source = { id: 'source', x: 0, y: 0, width: 280, height: 96 };
  const [placement] = planBoardConnectionExpansion({
    source,
    missingIds: ['target'],
    obstacles: [
      source,
      { id: 'distant', x: 100000, y: 0, width: 280, height: 96 },
    ],
    geometry,
    visibleBounds: { left: -700, top: -500, right: 700, bottom: 500 },
  });

  assert.ok(placement);
  assert.ok(Math.abs(placement.x) < 1000);
  assert.ok(Math.abs(placement.y) < 1000);
});

test('uses the nearest local ring when every visible slot is occupied', () => {
  const source = { id: 'source', x: 0, y: 0, width: 280, height: 96 };
  const obstacles = [source];
  for (let column = -1; column <= 1; column += 1) {
    for (let row = -1; row <= 1; row += 1) {
      if (column === 0 && row === 0) continue;
      obstacles.push({
        id: `${column}:${row}`,
        x: column * (geometry.cardWidth + geometry.gap),
        y: row * (geometry.cardHeight + geometry.gap),
        width: geometry.cardWidth,
        height: geometry.cardHeight,
      });
    }
  }
  const [placement] = planBoardConnectionExpansion({
    source,
    missingIds: ['target'],
    obstacles,
    geometry,
    visibleBounds: { left: -304, top: -120, right: 584, bottom: 216 },
  });

  assert.ok(placement);
  assert.ok(Math.max(
    Math.abs(placement.x / (geometry.cardWidth + geometry.gap)),
    Math.abs(placement.y / (geometry.cardHeight + geometry.gap)),
  ) <= 2);
  obstacles.forEach((obstacle) => {
    assert.equal(
      rectanglesOverlap(
        { ...placement, width: geometry.cardWidth, height: geometry.cardHeight },
        obstacle,
        geometry.gap,
      ),
      false,
    );
  });
});
