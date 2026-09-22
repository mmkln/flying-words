export const SpatialLayoutMode = Object.freeze({
  CONSTELLATIONS: 'constellations',
  KNOWLEDGE_LAYERS: 'knowledge-layers',
  HIERARCHY: 'hierarchy',
  TIMELINE: 'timeline',
});

const SPATIAL_LAYOUT_LABELS = Object.freeze({
  [SpatialLayoutMode.CONSTELLATIONS]: 'Constellations',
  [SpatialLayoutMode.KNOWLEDGE_LAYERS]: 'Knowledge layers',
  [SpatialLayoutMode.HIERARCHY]: 'Hierarchy',
  [SpatialLayoutMode.TIMELINE]: 'Timeline',
});

export function normalizeSpatialLayoutMode(value) {
  return Object.values(SpatialLayoutMode).includes(value)
    ? value
    : SpatialLayoutMode.CONSTELLATIONS;
}

export function getSpatialLayoutLabel(value) {
  return SPATIAL_LAYOUT_LABELS[normalizeSpatialLayoutMode(value)];
}
