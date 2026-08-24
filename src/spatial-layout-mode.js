export const SpatialLayoutMode = Object.freeze({
  CONSTELLATIONS: 'constellations',
  KNOWLEDGE_LAYERS: 'knowledge-layers',
});

export function normalizeSpatialLayoutMode(value) {
  return Object.values(SpatialLayoutMode).includes(value)
    ? value
    : SpatialLayoutMode.CONSTELLATIONS;
}
