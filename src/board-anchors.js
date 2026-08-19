function anchorsFromMeta(meta) {
  const anchors = meta?.navigation?.anchors;

  if (!anchors || typeof anchors !== 'object' || Array.isArray(anchors)) {
    return {};
  }

  return Object.fromEntries(
    Object.entries(anchors).filter(([, anchor]) => (
      anchor
      && typeof anchor === 'object'
      && !Array.isArray(anchor)
      && Number.isFinite(anchor.createdAt)
    )),
  );
}

export function getBoardAnchor(thought, boardId) {
  return anchorsFromMeta(thought?.meta)[boardId] ?? null;
}

export function hasBoardAnchor(thought, boardId) {
  return getBoardAnchor(thought, boardId) !== null;
}

export function withBoardAnchor(meta, boardId, createdAt = Date.now()) {
  return {
    ...(meta || {}),
    navigation: {
      ...(meta?.navigation || {}),
      version: 1,
      anchors: {
        ...anchorsFromMeta(meta),
        [boardId]: { createdAt },
      },
    },
  };
}

export function withoutBoardAnchor(meta, boardId) {
  const anchors = anchorsFromMeta(meta);
  delete anchors[boardId];

  const nextMeta = { ...(meta || {}) };
  const navigation = { ...(meta?.navigation || {}) };

  if (Object.keys(anchors).length) {
    nextMeta.navigation = {
      ...navigation,
      version: 1,
      anchors,
    };
    return nextMeta;
  }

  delete navigation.anchors;
  const remainingKeys = Object.keys(navigation).filter((key) => key !== 'version');

  if (remainingKeys.length) {
    nextMeta.navigation = {
      ...navigation,
      version: 1,
    };
  } else {
    delete nextMeta.navigation;
  }

  return nextMeta;
}
