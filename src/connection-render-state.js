import {
  ConnectionKind,
  ConnectionSpacing,
} from './connections.js';

/**
 * Project canonical connections plus an optional editor draft into renderer data.
 * Draft state never leaks into persisted connection metadata.
 */
export function buildRenderableConnections(persistedConnections, editor) {
  if (!editor) {
    return persistedConnections.map((connection) => ({
      ...connection,
      draft: false,
    }));
  }

  const existingByTargetId = new Map(
    persistedConnections
      .filter(({ sourceId }) => sourceId === editor.sourceId)
      .map((connection) => [connection.targetId, connection]),
  );
  const unchangedConnections = persistedConnections
    .filter(({ sourceId }) => sourceId !== editor.sourceId)
    .map((connection) => ({
      ...connection,
      draft: false,
    }));
  const draftConnections = [...editor.selectedTargetIds].map((targetId) => {
    const existing = existingByTargetId.get(targetId);
    return {
      id: existing?.id ?? `draft:${editor.sourceId}:${targetId}`,
      sourceId: editor.sourceId,
      targetId,
      kind: existing?.kind ?? ConnectionKind.RELATED,
      spacing: existing?.spacing ?? ConnectionSpacing.NORMAL,
      draft: true,
    };
  });

  return [...unchangedConnections, ...draftConnections];
}
