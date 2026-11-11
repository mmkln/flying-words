const RANK_PATTERN = /^-?\d+$/;

export const BOARD_CATALOG_RANK_STEP = 1n << 128n;

function isRecord(value) {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}

function normalizeWorkspaceId(workspaceId) {
  return typeof workspaceId === 'string' && workspaceId ? workspaceId : null;
}

function compareLegacyBoards(left, right) {
  const leftCreatedAt = Date.parse(left.board?.created_at || '');
  const rightCreatedAt = Date.parse(right.board?.created_at || '');
  const leftHasDate = Number.isFinite(leftCreatedAt);
  const rightHasDate = Number.isFinite(rightCreatedAt);

  if (leftHasDate && rightHasDate && leftCreatedAt !== rightCreatedAt) {
    return leftCreatedAt - rightCreatedAt;
  }
  if (leftHasDate !== rightHasDate) return leftHasDate ? -1 : 1;

  const leftId = typeof left.board?.id === 'string' ? left.board.id : '';
  const rightId = typeof right.board?.id === 'string' ? right.board.id : '';
  if (leftId && rightId && leftId !== rightId) return leftId.localeCompare(rightId);
  return left.index - right.index;
}

export function getBoardCatalogRank(board) {
  const rank = board?.meta?.catalog?.rank;
  if (typeof rank !== 'string' || !RANK_PATTERN.test(rank)) return null;

  try {
    return BigInt(rank);
  } catch {
    return null;
  }
}

export function withBoardCatalogRank(meta, rank) {
  const safeMeta = isRecord(meta) ? meta : {};
  const catalog = isRecord(safeMeta.catalog) ? safeMeta.catalog : {};

  return {
    ...safeMeta,
    catalog: {
      ...catalog,
      version: 1,
      rank: BigInt(rank).toString(),
    },
  };
}

export function createLegacyBoardRankMap(boards = []) {
  const orderedBoards = boards
    .map((board, index) => ({ board, index }))
    .sort(compareLegacyBoards);

  return new Map(orderedBoards.map(({ board }, index) => [
    board?.id,
    BigInt(index + 1) * BOARD_CATALOG_RANK_STEP,
  ]));
}

export function effectiveBoardRank(board, legacyRanks = new Map()) {
  return getBoardCatalogRank(board)
    ?? legacyRanks.get(board?.id)
    ?? BOARD_CATALOG_RANK_STEP;
}

export function rankBetween(previousRank, nextRank) {
  if (previousRank !== null && nextRank !== null) {
    const gap = nextRank - previousRank;
    return gap > 1n ? previousRank + gap / 2n : null;
  }
  if (previousRank !== null) return previousRank + BOARD_CATALOG_RANK_STEP;
  if (nextRank !== null) return nextRank - BOARD_CATALOG_RANK_STEP;
  return BOARD_CATALOG_RANK_STEP;
}

export function sortBoardsByCatalogRank(boards = [], legacyRanks = new Map()) {
  return boards
    .map((board, index) => ({ board, index }))
    .sort((left, right) => {
      const leftRank = effectiveBoardRank(left.board, legacyRanks);
      const rightRank = effectiveBoardRank(right.board, legacyRanks);
      if (leftRank < rightRank) return -1;
      if (leftRank > rightRank) return 1;
      return left.index - right.index;
    })
    .map(({ board }) => board);
}

export function nextBoardRank(
  boards = [],
  workspaceId = null,
  legacyRanks = createLegacyBoardRankMap(boards),
  { excludeBoardId = null } = {},
) {
  const normalizedWorkspaceId = normalizeWorkspaceId(workspaceId);
  const destinationBoards = boards.filter((board) => (
    board?.id !== excludeBoardId
    && normalizeWorkspaceId(board?.workspace_id) === normalizedWorkspaceId
  ));

  if (!destinationBoards.length) return BOARD_CATALOG_RANK_STEP;

  const highestRank = destinationBoards.reduce((highest, board) => {
    const rank = effectiveBoardRank(board, legacyRanks);
    return rank > highest ? rank : highest;
  }, effectiveBoardRank(destinationBoards[0], legacyRanks));

  return highestRank + BOARD_CATALOG_RANK_STEP;
}
