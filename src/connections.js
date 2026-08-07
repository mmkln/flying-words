import { SpaceId } from './spaces.js';

export const ConnectionKind = Object.freeze({
  RELATED: 'related',
});

export const ConnectionSpacing = Object.freeze({
  TIGHT: 'tight',
  NORMAL: 'normal',
  LOOSE: 'loose',
});

export const MAX_CONNECTIONS_PER_THOUGHT = 32;

const CONNECTION_SPACE_ID = SpaceId.CANVAS;
const allowedKinds = new Set(Object.values(ConnectionKind));
const allowedSpacings = new Set(Object.values(ConnectionSpacing));

export function normalizeConnectionSpacing(value) {
  return allowedSpacings.has(value) ? value : ConnectionSpacing.NORMAL;
}

function writeCanvasConnections(thought, outgoing) {
  thought.meta = { ...(thought.meta || {}) };

  if (outgoing.length) {
    thought.meta.connections = {
      version: 1,
      outgoing,
    };
    return;
  }

  delete thought.meta.connections;
}

export function getOutgoingCanvasConnections(thought) {
  const connections = thought?.meta?.connections;
  if (connections?.version !== 1 || !Array.isArray(connections.outgoing)) return [];

  const seenIds = new Set();
  const seenTargets = new Set();

  return connections.outgoing.filter((connection) => {
    const valid = (
      typeof connection?.id === 'string'
      && typeof connection?.targetId === 'string'
      && connection.spaceId === CONNECTION_SPACE_ID
      && allowedKinds.has(connection.kind)
      && connection.targetId !== thought.id
      && !seenIds.has(connection.id)
      && !seenTargets.has(connection.targetId)
    );

    if (valid) {
      seenIds.add(connection.id);
      seenTargets.add(connection.targetId);
    }

    return valid;
  });
}

export function reconcileCanvasConnections(source, selectedTargetIds) {
  const existing = getOutgoingCanvasConnections(source);
  const existingByTargetId = new Map(
    existing.map((connection) => [connection.targetId, connection]),
  );
  const next = [...new Set(selectedTargetIds)]
    .filter((targetId) => typeof targetId === 'string' && targetId !== source.id)
    .slice(0, MAX_CONNECTIONS_PER_THOUGHT)
    .map((targetId) => existingByTargetId.get(targetId) || ({
      id: crypto.randomUUID(),
      targetId,
      kind: ConnectionKind.RELATED,
      spaceId: CONNECTION_SPACE_ID,
      spacing: ConnectionSpacing.NORMAL,
      label: '',
      createdAt: new Date().toISOString(),
    }));
  const changed = JSON.stringify(existing) !== JSON.stringify(next);

  if (changed) writeCanvasConnections(source, next);

  return {
    changed,
    count: next.length,
  };
}

export function detachIncomingCanvasConnections(thoughts, targetId) {
  const changedThoughts = [];

  thoughts.forEach((source) => {
    const outgoing = getOutgoingCanvasConnections(source);
    const next = outgoing.filter((connection) => connection.targetId !== targetId);
    if (next.length === outgoing.length) return;

    writeCanvasConnections(source, next);
    changedThoughts.push(source);
  });

  return changedThoughts;
}

export function repairCanvasConnections(thoughts) {
  const knownIds = new Set(thoughts.map((thought) => thought.id));
  const changedThoughts = [];

  thoughts.forEach((source) => {
    const stored = source.meta?.connections?.outgoing;
    if (!Array.isArray(stored)) return;

    const repaired = getOutgoingCanvasConnections(source).filter(
      (connection) => knownIds.has(connection.targetId),
    );

    if (JSON.stringify(stored) === JSON.stringify(repaired)) return;

    writeCanvasConnections(source, repaired);
    changedThoughts.push(source);
  });

  return changedThoughts;
}

export function flattenCanvasConnections(thoughts) {
  return thoughts.flatMap((source) => getOutgoingCanvasConnections(source).map(
    (connection) => ({ ...connection, sourceId: source.id }),
  ));
}
