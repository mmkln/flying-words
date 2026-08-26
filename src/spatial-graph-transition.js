export const SpatialGraphTransitionKind = Object.freeze({
  RECONCILE: 'reconcile',
  INSERT_LINKED_NODE: 'insert-linked-node',
  REBUILD: 'rebuild',
});

export function normalizeSpatialGraphTransition(value) {
  if (
    value?.kind === SpatialGraphTransitionKind.INSERT_LINKED_NODE
    && typeof value.nodeId === 'string'
    && typeof value.anchorId === 'string'
    && value.nodeId
    && value.anchorId
    && value.nodeId !== value.anchorId
  ) {
    return {
      kind: value.kind,
      nodeId: value.nodeId,
      anchorId: value.anchorId,
    };
  }

  if (value?.kind === SpatialGraphTransitionKind.REBUILD) {
    return { kind: SpatialGraphTransitionKind.REBUILD };
  }

  return { kind: SpatialGraphTransitionKind.RECONCILE };
}
