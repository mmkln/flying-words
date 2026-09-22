import {
  MAX_CONNECTIONS_PER_THOUGHT,
  getOutgoingConnections,
} from './connections.js';
import {
  buildUndirectedAdjacency,
  collectHiddenNeighbourIds,
  collectNeighbourhoodIds,
} from './graph-neighbourhood.js';

export const ConnectionRelation = Object.freeze({
  NONE: 'none',
  INCOMING: 'incoming',
  OUTGOING: 'outgoing',
  BOTH: 'both',
});

const allowedRelations = new Set(Object.values(ConnectionRelation));

function createOutgoingMap(thoughts) {
  return new Map(thoughts.map((thought) => [
    thought.id,
    new Set(getOutgoingConnections(thought).map(({ targetId }) => targetId)),
  ]));
}

function setsEqual(first, second) {
  return (
    first.size === second.size
    && [...first].every((value) => second.has(value))
  );
}

export function createConnectionMapDraft(thoughts, rootId) {
  const orderedIds = thoughts.map(({ id }) => id);
  const knownIds = new Set(orderedIds);
  if (!knownIds.has(rootId)) {
    throw new Error('Connection map root must be an existing thought.');
  }

  const original = createOutgoingMap(thoughts);
  const working = new Map(
    [...original].map(([id, targets]) => [id, new Set(targets)]),
  );

  function registerThought(thoughtId) {
    if (!thoughtId || knownIds.has(thoughtId)) return false;

    knownIds.add(thoughtId);
    orderedIds.push(thoughtId);
    original.set(thoughtId, new Set());
    working.set(thoughtId, new Set());
    return true;
  }

  function hasEdge(sourceId, targetId) {
    return working.get(sourceId)?.has(targetId) === true;
  }

  function setEdge(sourceId, targetId, enabled) {
    const targets = working.get(sourceId);
    if (!targets || !knownIds.has(targetId) || sourceId === targetId) return false;

    if (!enabled) {
      targets.delete(targetId);
      return true;
    }

    if (targets.has(targetId)) return true;
    if (targets.size >= MAX_CONNECTIONS_PER_THOUGHT) return false;
    targets.add(targetId);
    return true;
  }

  function getRelation(neighbourId) {
    const outgoing = hasEdge(rootId, neighbourId);
    const incoming = hasEdge(neighbourId, rootId);

    if (outgoing && incoming) return ConnectionRelation.BOTH;
    if (outgoing) return ConnectionRelation.OUTGOING;
    if (incoming) return ConnectionRelation.INCOMING;
    return ConnectionRelation.NONE;
  }

  function setRelation(neighbourId, relation) {
    if (
      !knownIds.has(neighbourId)
      || neighbourId === rootId
      || !allowedRelations.has(relation)
    ) {
      return false;
    }

    const wantsOutgoing = (
      relation === ConnectionRelation.OUTGOING
      || relation === ConnectionRelation.BOTH
    );
    const wantsIncoming = (
      relation === ConnectionRelation.INCOMING
      || relation === ConnectionRelation.BOTH
    );
    const currentOutgoing = hasEdge(rootId, neighbourId);
    const currentIncoming = hasEdge(neighbourId, rootId);

    if (
      wantsOutgoing
      && !currentOutgoing
      && (working.get(rootId)?.size || 0) >= MAX_CONNECTIONS_PER_THOUGHT
    ) {
      return false;
    }
    if (
      wantsIncoming
      && !currentIncoming
      && (working.get(neighbourId)?.size || 0) >= MAX_CONNECTIONS_PER_THOUGHT
    ) {
      return false;
    }

    setEdge(rootId, neighbourId, wantsOutgoing);
    setEdge(neighbourId, rootId, wantsIncoming);
    return true;
  }

  function getConnectedIds() {
    return orderedIds
      .filter((id) => id !== rootId)
      .filter((id) => getRelation(id) !== ConnectionRelation.NONE);
  }

  function buildNeighbourMap() {
    const links = [];
    working.forEach((targetIds, sourceId) => {
      targetIds.forEach((targetId) => {
        links.push({ sourceId, targetId });
      });
    });

    return buildUndirectedAdjacency([...knownIds], links);
  }

  function getNeighbourhoodIds(startId = rootId, maxDepth = 2) {
    if (!knownIds.has(startId)) return [];

    const visibleIds = collectNeighbourhoodIds(
      buildNeighbourMap(),
      startId,
      maxDepth,
    );

    return orderedIds.filter((id) => visibleIds.has(id));
  }

  function getHiddenNeighbourIds(thoughtId, visibleIds) {
    if (!knownIds.has(thoughtId)) return [];

    const hiddenIds = collectHiddenNeighbourIds(
      buildNeighbourMap(),
      thoughtId,
      visibleIds,
    );

    return orderedIds
      .filter((id) => hiddenIds.has(id));
  }

  function getOutgoingTargetIds(sourceId) {
    return [...(working.get(sourceId) || [])];
  }

  function setOutgoingTargetIds(sourceId, targetIds) {
    if (!knownIds.has(sourceId)) return false;

    const normalized = [...new Set(targetIds)].filter((targetId) => (
      knownIds.has(targetId) && targetId !== sourceId
    ));
    if (normalized.length > MAX_CONNECTIONS_PER_THOUGHT) return false;

    working.set(sourceId, new Set(normalized));
    return true;
  }

  function getEdges(visibleIds = knownIds) {
    const visible = visibleIds instanceof Set ? visibleIds : new Set(visibleIds);
    const emittedPairs = new Set();
    const edges = [];

    working.forEach((targetIds, sourceId) => {
      if (!visible.has(sourceId)) return;

      targetIds.forEach((targetId) => {
        if (!visible.has(targetId)) return;
        const pair = sourceId < targetId
          ? `${sourceId}\u0000${targetId}`
          : `${targetId}\u0000${sourceId}`;
        if (emittedPairs.has(pair)) return;

        const bidirectional = working.get(targetId)?.has(sourceId) === true;
        if (bidirectional) emittedPairs.add(pair);
        edges.push({ sourceId, targetId, bidirectional });
      });
    });

    return edges;
  }

  function getChanges() {
    return [...working]
      .filter(([sourceId, targets]) => (
        !setsEqual(targets, original.get(sourceId) || new Set())
      ))
      .map(([sourceId, targetIds]) => ({
        sourceId,
        targetIds: [...targetIds],
      }));
  }

  return {
    rootId,
    registerThought,
    getRelation,
    setRelation,
    getConnectedIds,
    getNeighbourhoodIds,
    getHiddenNeighbourIds,
    getOutgoingTargetIds,
    setOutgoingTargetIds,
    getEdges,
    getChanges,
  };
}
