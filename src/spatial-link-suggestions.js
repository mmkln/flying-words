import { buildConnectionIndex } from './connections.js';
import { normalizeMagnetParents } from './magnet-hierarchy.js';

/**
 * Derive safe, contextual link suggestions for a selected Spatial thought.
 * Magnetic hierarchy only suggests a relationship; it never creates one.
 */
export function getSpatialLinkSuggestions(
  thoughts,
  thoughtId,
  connectionIndex = buildConnectionIndex(thoughts),
) {
  const thoughtById = new Map(thoughts.map((thought) => [thought.id, thought]));
  const child = thoughtById.get(thoughtId);
  if (!child) return [];

  return normalizeMagnetParents(child.meta?.magnet, Math.max(1, thoughts.length))
    .map(({ parentId }) => thoughtById.get(parentId))
    .filter(Boolean)
    .map((parent) => ({
      parent,
      linked: connectionIndex.hasConnectionBetween(child.id, parent.id),
    }));
}
