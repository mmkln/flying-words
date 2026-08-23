export const DEFAULT_BOARD_GEOMETRY = Object.freeze({
  version: 1,
  cardWidth: 280,
  cardHeight: 96,
  gap: 24,
});

// Automatic layout stays intentionally airy. Manual Board placement may get
// closer, while still keeping enough room to distinguish separate cards.
export const MANUAL_BOARD_GAP = 8;

function isPositiveInteger(value) {
  return Number.isInteger(value) && value > 0;
}

/**
 * Translate the API's stable snake_case contract into the renderer's values.
 * Invalid data falls back as a whole so the visible footprint and collision
 * rules can never drift into a partially-defined state.
 */
export function normalizeBoardGeometry(payload) {
  if (
    !payload
    || payload.version !== DEFAULT_BOARD_GEOMETRY.version
    || !isPositiveInteger(payload.card_width)
    || !isPositiveInteger(payload.card_height)
    || !isPositiveInteger(payload.gap)
  ) {
    return DEFAULT_BOARD_GEOMETRY;
  }

  return Object.freeze({
    version: payload.version,
    cardWidth: payload.card_width,
    cardHeight: payload.card_height,
    gap: payload.gap,
  });
}

export function applyBoardGeometryCss(geometry, root = document.documentElement) {
  const resolved = normalizeBoardGeometry({
    version: geometry?.version,
    card_width: geometry?.cardWidth,
    card_height: geometry?.cardHeight,
    gap: geometry?.gap,
  });

  root.style.setProperty('--board-card-width', `${resolved.cardWidth}px`);
  root.style.setProperty('--board-card-height', `${resolved.cardHeight}px`);
  root.style.setProperty('--board-card-gap', `${resolved.gap}px`);
  return resolved;
}
