import assert from 'node:assert/strict';
import test from 'node:test';

import {
  BOARD_CATALOG_RANK_STEP,
  createLegacyBoardRankMap,
  effectiveBoardRank,
  getBoardCatalogRank,
  nextBoardRank,
  rankBetween,
  sortBoardsByCatalogRank,
  withBoardCatalogRank,
} from './board-catalog-order.js';

test('reads only valid decimal string ranks', () => {
  assert.equal(getBoardCatalogRank({ meta: { catalog: { rank: '42' } } }), 42n);
  assert.equal(getBoardCatalogRank({ meta: { catalog: { rank: '-7' } } }), -7n);
  assert.equal(getBoardCatalogRank({ meta: { catalog: { rank: 42 } } }), null);
  assert.equal(getBoardCatalogRank({ meta: { catalog: { rank: '4.2' } } }), null);
  assert.equal(getBoardCatalogRank({ meta: {} }), null);
});

test('writes a rank without replacing sibling metadata', () => {
  assert.deepEqual(withBoardCatalogRank({
    existing: true,
    catalog: { color: 'violet' },
  }, 42n), {
    existing: true,
    catalog: {
      color: 'violet',
      version: 1,
      rank: '42',
    },
  });
});

test('creates stable legacy ranks from creation order', () => {
  const ranks = createLegacyBoardRankMap([
    { id: 'later', created_at: '2026-01-02T00:00:00Z' },
    { id: 'earlier', created_at: '2026-01-01T00:00:00Z' },
  ]);

  assert.equal(ranks.get('earlier'), BOARD_CATALOG_RANK_STEP);
  assert.equal(ranks.get('later'), BOARD_CATALOG_RANK_STEP * 2n);
});

test('calculates ranks between, before, and after neighbours', () => {
  assert.equal(rankBetween(100n, 200n), 150n);
  assert.equal(rankBetween(null, 200n), 200n - BOARD_CATALOG_RANK_STEP);
  assert.equal(rankBetween(200n, null), 200n + BOARD_CATALOG_RANK_STEP);
  assert.equal(rankBetween(null, null), BOARD_CATALOG_RANK_STEP);
  assert.equal(rankBetween(100n, 101n), null);
});

test('sorts persisted and legacy boards without mutating input', () => {
  const boards = [
    { id: 'one', created_at: '2026-01-01T00:00:00Z' },
    { id: 'two', created_at: '2026-01-02T00:00:00Z' },
    {
      id: 'moved',
      created_at: '2026-01-03T00:00:00Z',
      meta: { catalog: { rank: (BOARD_CATALOG_RANK_STEP / 2n).toString() } },
    },
  ];
  const ranks = createLegacyBoardRankMap(boards);

  assert.deepEqual(
    sortBoardsByCatalogRank(boards, ranks).map(({ id }) => id),
    ['moved', 'one', 'two'],
  );
  assert.deepEqual(boards.map(({ id }) => id), ['one', 'two', 'moved']);
  assert.equal(effectiveBoardRank(boards[0], ranks), BOARD_CATALOG_RANK_STEP);
});

test('places new and transferred boards after the destination workspace', () => {
  const boards = [
    { id: 'one', workspace_id: 'work', created_at: '2026-01-01T00:00:00Z' },
    { id: 'two', workspace_id: 'work', created_at: '2026-01-02T00:00:00Z' },
    { id: 'elsewhere', workspace_id: 'other', created_at: '2026-01-03T00:00:00Z' },
  ];
  const ranks = createLegacyBoardRankMap(boards);

  assert.equal(
    nextBoardRank(boards, 'work', ranks),
    BOARD_CATALOG_RANK_STEP * 3n,
  );
  assert.equal(
    nextBoardRank(boards, 'other', ranks, { excludeBoardId: 'elsewhere' }),
    BOARD_CATALOG_RANK_STEP,
  );
});
