function positiveScale(value) {
  return Number.isFinite(value) && value > 0 ? value : 1;
}

/**
 * Convert a pointer position from the browser viewport into stable Board
 * coordinates. Board coordinates deliberately do not change with zoom.
 */
export function clientPointToBoardWorld(point, bounds, camera) {
  const scale = positiveScale(camera?.scale);
  return {
    x: (point.x - bounds.left - (camera?.x || 0)) / scale,
    y: (point.y - bounds.top - (camera?.y || 0)) / scale,
  };
}

/**
 * Project a stable Board position into browser viewport coordinates.
 */
export function boardWorldToClientPoint(point, bounds, camera) {
  const scale = positiveScale(camera?.scale);
  return {
    x: bounds.left + (camera?.x || 0) + point.x * scale,
    y: bounds.top + (camera?.y || 0) + point.y * scale,
  };
}

/**
 * Change zoom without moving the Board position below the user's pointer.
 */
export function zoomBoardCameraAtClientPoint(camera, nextScale, point, bounds) {
  const scale = positiveScale(nextScale);
  const worldPoint = clientPointToBoardWorld(point, bounds, camera);

  return {
    x: point.x - bounds.left - worldPoint.x * scale,
    y: point.y - bounds.top - worldPoint.y * scale,
    scale,
  };
}

/**
 * Automatic placement uses the same logical gap as collision resolution.
 * It must never be divided by the camera scale.
 */
export function getBoardSpawnGap(geometry) {
  return geometry.gap;
}
