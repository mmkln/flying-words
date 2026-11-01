export function createFlowSceneCache(buildSnapshot) {
  if (typeof buildSnapshot !== 'function') {
    throw new TypeError('Flow scene cache requires a snapshot builder.');
  }

  let snapshot = null;
  const hoveredComponentIds = new Set();

  function invalidate() {
    snapshot = null;
  }

  function getSnapshot() {
    if (!snapshot) snapshot = { ...buildSnapshot(), hoveredComponentIds };
    return snapshot;
  }

  function setHovered(componentId, hovered) {
    if (!componentId) return;
    if (hovered) hoveredComponentIds.add(componentId);
    else hoveredComponentIds.delete(componentId);
  }

  function clearHovered() {
    hoveredComponentIds.clear();
  }

  return {
    invalidate,
    getSnapshot,
    setHovered,
    clearHovered,
  };
}
