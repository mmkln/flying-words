export const ConnectionKind = Object.freeze({
  RELATED: 'related',
});

export const ConnectionSpacing = Object.freeze({
  TIGHT: 'tight',
  NORMAL: 'normal',
  LOOSE: 'loose',
});

export const MAX_CONNECTIONS_PER_THOUGHT = 32;

const allowedKinds = new Set(Object.values(ConnectionKind));
const allowedSpacings = new Set(Object.values(ConnectionSpacing));

export function normalizeConnectionSpacing(value) {
  return allowedSpacings.has(value) ? value : ConnectionSpacing.NORMAL;
}

function writeOutgoingConnections(thought, outgoing) {
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

export function getOutgoingConnections(thought) {
  const connections = thought?.meta?.connections;
  if (connections?.version !== 1 || !Array.isArray(connections.outgoing)) return [];

  const seenIds = new Set();
  const seenPairs = new Set();

  return connections.outgoing.filter((connection) => {
    const pairKey = `${connection?.kind}:${connection?.targetId}`;
    const valid = (
      typeof connection?.id === 'string'
      && typeof connection?.targetId === 'string'
      && allowedKinds.has(connection?.kind)
      && connection.targetId !== thought.id
      && !seenIds.has(connection.id)
      && !seenPairs.has(pairKey)
    );

    if (valid) {
      seenIds.add(connection.id);
      seenPairs.add(pairKey);
    }

    return valid;
  });
}

export function addConnection(source, targetId, kind = ConnectionKind.RELATED) {
  if (source.id === targetId) return { status: 'self' };

  const outgoing = getOutgoingConnections(source);
  const duplicate = outgoing.some((connection) => (
    connection.targetId === targetId && connection.kind === kind
  ));

  if (duplicate) return { status: 'duplicate' };
  if (outgoing.length >= MAX_CONNECTIONS_PER_THOUGHT) return { status: 'limit' };

  const connection = {
    id: crypto.randomUUID(),
    targetId,
    kind,
    spacing: ConnectionSpacing.NORMAL,
    label: '',
    createdAt: new Date().toISOString(),
  };

  writeOutgoingConnections(source, [...outgoing, connection]);
  return { status: 'created', connection };
}

export function detachIncomingConnections(thoughts, targetId) {
  const changedThoughts = [];

  thoughts.forEach((source) => {
    const outgoing = getOutgoingConnections(source);
    const next = outgoing.filter((connection) => connection.targetId !== targetId);
    if (next.length === outgoing.length) return;

    writeOutgoingConnections(source, next);
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

    if (JSON.stringify(stored) === JSON.stringify(repaired)) return;

    writeOutgoingConnections(source, repaired);
    changedThoughts.push(source);
  });

  return changedThoughts;
}

export function flattenConnections(thoughts) {
  return thoughts.flatMap((source) => getOutgoingConnections(source).map(
    (connection) => ({ ...connection, sourceId: source.id }),
  ));
}
