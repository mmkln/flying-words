import {
  matchesThoughtSearch,
  normalizeSearchText,
} from './thought-search.js';
import { getThoughtSearchText } from './thought-content.js';

function createdAtTimestamp(thought) {
  const timestamp = new Date(thought.createdAt).getTime();
  return Number.isFinite(timestamp) ? timestamp : 0;
}

/**
 * Find possible connection targets without coupling search to a particular
 * renderer. The source cannot be linked to itself; direct prefix matches are
 * promoted above looser text matches.
 */
export function findConnectionSearchResults(
  thoughts,
  { sourceId, query = '', limit = 60 } = {},
) {
  const normalizedQuery = normalizeSearchText(query);

  return thoughts
    .filter((thought) => thought.id !== sourceId)
    .filter((thought) => matchesThoughtSearch(getThoughtSearchText(thought), query))
    .sort((first, second) => {
      const firstStartsWithQuery = normalizeSearchText(
        getThoughtSearchText(first),
      ).startsWith(normalizedQuery);
      const secondStartsWithQuery = normalizeSearchText(
        getThoughtSearchText(second),
      ).startsWith(normalizedQuery);

      if (firstStartsWithQuery !== secondStartsWithQuery) {
        return firstStartsWithQuery ? -1 : 1;
      }

      return createdAtTimestamp(second) - createdAtTimestamp(first);
    })
    .slice(0, limit);
}
