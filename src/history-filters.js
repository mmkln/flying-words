import { hasAnchor } from './anchors.js';
import {
  KnowledgeKind,
  getThoughtKnowledgeKind,
} from './knowledge-kinds.js';
import { isThoughtResolved } from './thought-content.js';

const validKinds = new Set(Object.values(KnowledgeKind));
const filterFlags = new Set(['anchored', 'resolved']);

export function createHistoryFilters({
  kinds = [],
  anchored = false,
  resolved = false,
} = {}) {
  return Object.freeze({
    kinds: Object.freeze([
      ...new Set(kinds.filter((kind) => validKinds.has(kind))),
    ]),
    anchored: anchored === true,
    resolved: resolved === true,
  });
}

export function toggleHistoryKind(filters, kind) {
  if (!validKinds.has(kind)) return filters;

  const kinds = new Set(filters.kinds);
  if (kinds.has(kind)) kinds.delete(kind);
  else kinds.add(kind);

  return createHistoryFilters({ ...filters, kinds: [...kinds] });
}

export function setHistoryFilterFlag(filters, flag, value) {
  if (!filterFlags.has(flag)) return filters;
  return createHistoryFilters({ ...filters, [flag]: value === true });
}

export function clearHistoryFilters() {
  return createHistoryFilters();
}

export function countHistoryFilters(filters) {
  return (
    filters.kinds.length
    + Number(filters.anchored)
    + Number(filters.resolved)
  );
}

export function matchesHistoryFilters(thought, filters) {
  if (
    filters.kinds.length
    && !filters.kinds.includes(getThoughtKnowledgeKind(thought))
  ) {
    return false;
  }

  if (filters.anchored && !hasAnchor(thought)) return false;
  if (filters.resolved && !isThoughtResolved(thought)) return false;
  return true;
}
