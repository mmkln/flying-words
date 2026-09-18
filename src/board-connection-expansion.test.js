import assert from 'node:assert/strict';
import test from 'node:test';

import {
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
