function isFinitePosition(value) {
  return (
    value
    && Number.isFinite(value.x)
    && Number.isFinite(value.y)
    && Number.isFinite(value.z)
  );
}

function placementsFromMeta(meta) {
  const spatial = meta?.spatial;
  if (
    spatial?.version !== 1
    || !spatial.placements
    || typeof spatial.placements !== 'object'
  ) {
    return {};
  }

  return Object.fromEntries(
    Object.entries(spatial.placements)
      .filter(([, position]) => isFinitePosition(position))
      .map(([spaceId, position]) => [spaceId, {
        x: position.x,
        y: position.y,
        z: position.z,
        pinned: position.pinned === true,
      }]),
  );
}

export function getSpatialPlacement(thought, spatialId) {
  return placementsFromMeta(thought?.meta)[spatialId] ?? null;
}

export function hasSpatialPlacement(thought, spatialId) {
  return getSpatialPlacement(thought, spatialId) !== null;
}

export function withSpatialPlacement(meta, spatialId, position) {
  if (!isFinitePosition(position)) return meta || {};

  return {
    ...(meta || {}),
    spatial: {
      version: 1,
      placements: {
        ...placementsFromMeta(meta),
        [spatialId]: {
          x: Math.round(position.x),
          y: Math.round(position.y),
          z: Math.round(position.z),
          pinned: position.pinned === true,
        },
      },
    },
  };
}

export function withoutSpatialPlacement(meta, spatialId) {
  const placements = placementsFromMeta(meta);
  delete placements[spatialId];

  const nextMeta = { ...(meta || {}) };
  if (!Object.keys(placements).length) {
    delete nextMeta.spatial;
    return nextMeta;
  }

  nextMeta.spatial = { version: 1, placements };
  return nextMeta;
}
