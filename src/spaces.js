export const SpaceId = Object.freeze({
  ONE: 'space-1',
  TWO: 'space-2',
  THREE: 'space-3',
  FOUR: 'space-4',
});

export const SPACES = Object.freeze([
  Object.freeze({ id: SpaceId.ONE, label: 'Space 1' }),
  Object.freeze({ id: SpaceId.TWO, label: 'Space 2' }),
  Object.freeze({ id: SpaceId.THREE, label: 'Space 3' }),
  Object.freeze({ id: SpaceId.FOUR, label: 'Space 4' }),
]);

export const DEFAULT_SPACE_ID = SpaceId.ONE;

const SPACE_IDS = new Set(SPACES.map(({ id }) => id));

export function isSpaceId(value) {
  return SPACE_IDS.has(value);
}

export function normalizeSpaceId(value) {
  return isSpaceId(value) ? value : DEFAULT_SPACE_ID;
}

export function getThoughtSpaceId(thought) {
  return normalizeSpaceId(thought?.meta?.layout?.spaceId);
}

export function isThoughtAvailableInSpace(thought, spaceId) {
  return !thought?.pinned || getThoughtSpaceId(thought) === normalizeSpaceId(spaceId);
}
