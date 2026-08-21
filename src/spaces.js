import { getCanvasPlacement } from './canvas-placements.js';

export const SpaceId = Object.freeze({
  ONE: 'space-1',
  TWO: 'space-2',
  THREE: 'space-3',
  CANVAS: 'canvas-1',
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

export const SPACES = Object.freeze([
  Object.freeze({ id: SpaceId.ONE, label: 'Space 1', kind: SpaceKind.FLOW }),
  Object.freeze({ id: SpaceId.TWO, label: 'Space 2', kind: SpaceKind.FLOW }),
  Object.freeze({ id: SpaceId.THREE, label: 'Space 3', kind: SpaceKind.FLOW }),
  Object.freeze({ id: SpaceId.CANVAS, label: 'Board', kind: SpaceKind.CANVAS }),
  Object.freeze({ id: SpaceId.SPATIAL, label: 'Spatial', kind: SpaceKind.SPATIAL }),
]);

export const DEFAULT_SPACE_ID = SpaceId.ONE;

const SPACE_IDS = new Set(SPACES.map(({ id }) => id));

export function isSpaceId(value) {
  return SPACE_IDS.has(value);
}

export function normalizeSpaceId(value) {
  if (value === LEGACY_SPACE_FOUR_ID) return SpaceId.THREE;
  return isSpaceId(value) ? value : DEFAULT_SPACE_ID;
}

export function getSpace(spaceId) {
  return SPACES.find(({ id }) => id === normalizeSpaceId(spaceId)) || SPACES[0];
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
