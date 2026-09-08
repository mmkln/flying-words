import { getCanvasPlacement } from './canvas-placements.js';

export const SpaceId = Object.freeze({
  ONE: 'space-1',
  TWO: 'space-2',
  THREE: 'space-3',
  CANVAS: 'canvas-1',
  LOCAL_CANVAS: 'canvas-1',
  SPATIAL: 'spatial-1',
});

const LEGACY_SPACE_FOUR_ID = 'space-4';

export const SpaceKind = Object.freeze({
  FLOW: 'flow',
  CANVAS: 'canvas',
  SPATIAL: 'spatial',
});

const SPACE_CAPABILITIES = Object.freeze({
  [SpaceKind.FLOW]: Object.freeze({
    magnets: true,
    connections: false,
    camera: false,
  }),
  [SpaceKind.CANVAS]: Object.freeze({
    magnets: false,
    connections: true,
    camera: true,
  }),
  [SpaceKind.SPATIAL]: Object.freeze({
    magnets: false,
    connections: true,
    camera: true,
  }),
});

const FLOW_SPACES = Object.freeze([
  Object.freeze({ id: SpaceId.ONE, label: 'Space 1', kind: SpaceKind.FLOW }),
  Object.freeze({ id: SpaceId.TWO, label: 'Space 2', kind: SpaceKind.FLOW }),
  Object.freeze({ id: SpaceId.THREE, label: 'Space 3', kind: SpaceKind.FLOW }),
]);

const LOCAL_BOARD_SPACE = Object.freeze({
  id: SpaceId.LOCAL_CANVAS,
  label: 'Board',
  kind: SpaceKind.CANVAS,
});

const SPATIAL_SPACE = Object.freeze({
  id: SpaceId.SPATIAL,
  label: 'Spatial',
  kind: SpaceKind.SPATIAL,
});

let boardSpaces = [LOCAL_BOARD_SPACE];

export const DEFAULT_SPACE_ID = SpaceId.ONE;

export function normalizeBoardSpaces(boards = []) {
  const seen = new Set();
  return boards
    .map((board) => ({
      id: typeof board?.id === 'string' ? board.id : '',
      label: typeof board?.title === 'string' && board.title.trim()
        ? board.title.trim()
        : 'Board',
      kind: SpaceKind.CANVAS,
    }))
    .filter((space) => {
      if (!space.id || seen.has(space.id)) return false;
      seen.add(space.id);
      return true;
    });
}

export function setBoardSpaces(boards = []) {
  const normalized = normalizeBoardSpaces(boards);
  boardSpaces = normalized.length ? normalized : [LOCAL_BOARD_SPACE];
}

export function getBoardSpaces() {
  return boardSpaces.slice();
}

export function getSpaces() {
  return [
    ...FLOW_SPACES,
    ...boardSpaces,
    SPATIAL_SPACE,
  ];
}

export function isSpaceId(value) {
  return getSpaces().some(({ id }) => id === value);
}

export function normalizeSpaceId(value) {
  if (value === LEGACY_SPACE_FOUR_ID) return SpaceId.THREE;
  return isSpaceId(value) ? value : DEFAULT_SPACE_ID;
}

export function getSpace(spaceId) {
  const spaces = getSpaces();
  return spaces.find(({ id }) => id === normalizeSpaceId(spaceId)) || spaces[0];
}

export function getSpaceCapabilities(spaceId) {
  return SPACE_CAPABILITIES[getSpace(spaceId).kind];
}

export function isCanvasSpace(spaceId) {
  return getSpace(spaceId).kind === SpaceKind.CANVAS;
}

export function isFlowSpace(spaceId) {
  return getSpace(spaceId).kind === SpaceKind.FLOW;
}

export function isSpatialSpace(spaceId) {
  return getSpace(spaceId).kind === SpaceKind.SPATIAL;
}

export function getThoughtSpaceId(thought) {
  return normalizeSpaceId(thought?.meta?.layout?.spaceId);
}

export function isThoughtAvailableInSpace(thought, spaceId) {
  const normalizedSpaceId = normalizeSpaceId(spaceId);

  if (isCanvasSpace(normalizedSpaceId)) {
    return Boolean(getCanvasPlacement(thought, normalizedSpaceId));
  }

  if (isSpatialSpace(normalizedSpaceId)) {
    return true;
  }

  return !thought?.pinned || getThoughtSpaceId(thought) === normalizedSpaceId;
}
