export function createBoardRenderScheduler({
  requestFrame,
  cancelFrame,
  onFlush,
}) {
  let frameId = null;
  let renderAllCards = false;
  let connectionsDirty = false;
  let minimapDirty = false;
  let controlsDirty = false;
  const thoughtIds = new Set();

  function resetPendingUpdate() {
    renderAllCards = false;
    connectionsDirty = false;
    minimapDirty = false;
    controlsDirty = false;
    thoughtIds.clear();
  }

  function flush() {
    frameId = null;
    const update = {
      allCards: renderAllCards,
      thoughtIds: new Set(thoughtIds),
      connections: connectionsDirty,
      minimap: minimapDirty,
      controls: controlsDirty,
    };

    // Clear before invoking the consumer so invalidations raised while flushing
    // are scheduled for the next frame instead of being lost.
    resetPendingUpdate();
    onFlush(update);
  }

  function request({
    allCards = false,
    cards = [],
    connections = false,
    minimap = false,
    controls = false,
  } = {}) {
    renderAllCards ||= allCards;
    connectionsDirty ||= connections;
    minimapDirty ||= minimap;
    controlsDirty ||= controls;
    cards.forEach((thoughtId) => thoughtIds.add(thoughtId));

    if (frameId !== null) return;
    frameId = requestFrame(flush);
  }

  function cancel() {
    if (frameId !== null) cancelFrame(frameId);
    frameId = null;
    resetPendingUpdate();
  }

  return { request, cancel };
}
