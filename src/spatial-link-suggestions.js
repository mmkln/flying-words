import { flattenConnections } from './connections.js';
import { normalizeMagnetParents } from './magnet-hierarchy.js';

/**
 * Derive safe, contextual link suggestions for a selected Spatial thought.
 * Magnetic hierarchy only suggests a relationship; it never creates one.
 */
export function getSpatialLinkSuggestions(thoughts, thoughtId) {
  const thoughtById = new Map(thoughts.map((thought) => [thought.id, thought]));
  const child = thoughtById.get(thoughtId);
  if (!child) return [];

  // The current "related" connection has no user-facing direction in Spatial,
  // so either stored direction means the pair is already linked.
  const linkedPairs = new Set(
    flattenConnections(thoughts).flatMap(({ sourceId, targetId }) => ([
      `${sourceId}:${targetId}`,
      `${targetId}:${sourceId}`,
    ])),
  );

  return normalizeMagnetParents(child.meta?.magnet, Math.max(1, thoughts.length))
    .map(({ parentId }) => thoughtById.get(parentId))
    .filter(Boolean)
    .map((parent) => ({
      parent,
      linked: linkedPairs.has(`${child.id}:${parent.id}`),
    }));
}
