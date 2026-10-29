function isVisibleRect(rect) {
  return Boolean(
    rect
    && Number.isFinite(rect.left)
    && Number.isFinite(rect.top)
    && Number.isFinite(rect.right)
    && Number.isFinite(rect.bottom)
    && rect.right > rect.left
    && rect.bottom > rect.top
  );
}

export function calculateBoardUsableRect({
  canvas,
  topToolbar = null,
  bottomDock = null,
  rightInspector = null,
  margin = 0,
}) {
  if (!isVisibleRect(canvas)) {
    throw new TypeError('A visible canvas rectangle is required.');
  }

  const safeMargin = Number.isFinite(margin) ? Math.max(0, margin) : 0;
  let left = canvas.left + safeMargin;
  let top = canvas.top + safeMargin;
  let right = canvas.right - safeMargin;
  let bottom = canvas.bottom - safeMargin;

  if (isVisibleRect(topToolbar)) {
    top = Math.max(top, topToolbar.bottom + safeMargin);
  }

  if (isVisibleRect(bottomDock)) {
    bottom = Math.min(bottom, bottomDock.top - safeMargin);
  }

  if (isVisibleRect(rightInspector)) {
    right = Math.min(right, rightInspector.left - safeMargin);
  }

  right = Math.max(left + 1, right);
  bottom = Math.max(top + 1, bottom);

  return {
    left,
    top,
    right,
    bottom,
    width: right - left,
    height: bottom - top,
  };
}
