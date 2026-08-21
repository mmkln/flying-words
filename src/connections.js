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

const CONNECTION_VERSION = 2;
const allowedKinds = new Set(Object.values(ConnectionKind));
const allowedSpacings = new Set(Object.values(ConnectionSpacing));

export function normalizeConnectionSpacing(value) {
  return allowedSpacings.has(value) ? value : ConnectionSpacing.NORMAL;
}

function normalizeStoredConnection(connection, sourceId, { legacy = false } = {}) {
  const valid = (
    typeof connection?.id === 'string'
    && typeof connection?.targetId === 'string'
    && allowedKinds.has(connection.kind)
    && connection.targetId !== sourceId
    && (!legacy || connection.spaceId === SpaceId.CANVAS)
  );
  if (!valid) return null;

  const normalized = {
    id: connection.id,
    targetId: connection.targetId,
    kind: connection.kind,
    spacing: normalizeConnectionSpacing(connection.spacing),
  };
  if (typeof connection.label === 'string') normalized.label = connection.label;
  if (typeof connection.createdAt === 'string') normalized.createdAt = connection.createdAt;
  return normalized;
}

function writeConnections(thought, outgoing) {
  thought.meta = { ...(thought.meta || {}) };

  if (outgoing.length) {
    thought.meta.connections = {
      version: CONNECTION_VERSION,
      outgoing,
    };
    return;
  }

  delete thought.meta.connections;
}

export function getOutgoingConnections(thought) {
  const connections = thought?.meta?.connections;
  if (
    ![1, CONNECTION_VERSION].includes(connections?.version)
    || !Array.isArray(connections.outgoing)
  ) {
    return [];
  }

  const legacy = connections.version === 1;
  const seenIds = new Set();
  const seenTargets = new Set();
  const outgoing = [];

  connections.outgoing.forEach((connection) => {
    const normalized = normalizeStoredConnection(connection, thought.id, { legacy });
    if (
      !normalized
      || seenIds.has(normalized.id)
      || seenTargets.has(normalized.targetId)
    ) {
      return;
    }

    seenIds.add(normalized.id);
    seenTargets.add(normalized.targetId);
    outgoing.push(normalized);
  });

  return outgoing;
}

export function reconcileConnections(source, selectedTargetIds) {
  const existing = getOutgoingConnections(source);
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
      spacing: ConnectionSpacing.NORMAL,
      label: '',
      createdAt: new Date().toISOString(),
    }));
  const changed = (
    source.meta?.connections?.version !== CONNECTION_VERSION
    || JSON.stringify(existing) !== JSON.stringify(next)
  );

  if (changed) writeConnections(source, next);

  return {
    changed,
    count: next.length,
  };
}

export function detachIncomingConnections(thoughts, targetId) {
  const changedThoughts = [];

  thoughts.forEach((source) => {
    const outgoing = getOutgoingConnections(source);
    const next = outgoing.filter((connection) => connection.targetId !== targetId);
    if (next.length === outgoing.length) return;

    writeConnections(source, next);
    changedThoughts.push(source);
  });

  return changedThoughts;
}

export function repairConnections(thoughts) {
  const knownIds = new Set(thoughts.map((thought) => thought.id));
  const changedThoughts = [];

  thoughts.forEach((source) => {
    const stored = source.meta?.connections?.outgoing;
    if (!Array.isArray(stored)) return;

    const repaired = getOutgoingConnections(source).filter(
      (connection) => knownIds.has(connection.targetId),
    );
    const unchanged = (
      source.meta?.connections?.version === CONNECTION_VERSION
      && JSON.stringify(stored) === JSON.stringify(repaired)
    );
    if (unchanged) return;

    writeConnections(source, repaired);
    changedThoughts.push(source);
  });

  return changedThoughts;
}

export function flattenConnections(thoughts) {
  return thoughts.flatMap((source) => getOutgoingConnections(source).map(
    (connection) => ({ ...connection, sourceId: source.id }),
  ));
}
