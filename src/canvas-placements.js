function isFinitePosition(value) {
  return (
    value
    && Number.isFinite(value.x)
    && Number.isFinite(value.y)
  );
}

function placementsFromMeta(meta) {
  const canvas = meta?.canvas;

  if (canvas?.version === 2 && canvas.placements && typeof canvas.placements === 'object') {
    return Object.fromEntries(
      Object.entries(canvas.placements).filter(([, position]) => isFinitePosition(position)),
    );
  }

  // Canvas v1 stored one placement directly on the canvas object. Keep reading it so
  // existing local and synced thoughts remain visible until their next metadata update.
  if (canvas?.version === 1 && typeof canvas.spaceId === 'string' && isFinitePosition(canvas)) {
    return {
      [canvas.spaceId]: { x: canvas.x, y: canvas.y },
    };
  }

  return {};
}

export function getCanvasPlacement(thought, canvasId) {
  return placementsFromMeta(thought?.meta)[canvasId] ?? null;
}

export function hasCanvasPlacement(thought, canvasId) {
  return getCanvasPlacement(thought, canvasId) !== null;
}

export function withCanvasPlacement(meta, canvasId, position) {
  return {
    ...(meta || {}),
    canvas: {
      version: 2,
      placements: {
        ...placementsFromMeta(meta),
        [canvasId]: {
          x: Math.round(position.x),
          y: Math.round(position.y),
        },
      },
    },
  };
}

export function withoutCanvasPlacement(meta, canvasId) {
  const placements = placementsFromMeta(meta);
  delete placements[canvasId];

  const nextMeta = { ...(meta || {}) };
  if (!Object.keys(placements).length) {
    delete nextMeta.canvas;
    return nextMeta;
  }

  nextMeta.canvas = { version: 2, placements };
  return nextMeta;
}

export function normalizeCanvasMeta(meta) {
  const canvas = meta?.canvas;
  if (canvas?.version !== 1) return meta || {};

  const placements = placementsFromMeta(meta);
  if (!Object.keys(placements).length) return meta || {};

  return {
    ...meta,
    canvas: { version: 2, placements },
  };
}
