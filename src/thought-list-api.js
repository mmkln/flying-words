export function buildThoughtListPath({
  limit,
  cursor = null,
  query = '',
  knowledgeKinds = [],
  anchored = null,
  resolved = null,
} = {}) {
  const params = new URLSearchParams();

  if (limit) params.set('limit', String(limit));
  if (cursor) params.set('cursor', cursor);
  if (query.trim()) params.set('q', query.trim());
  knowledgeKinds.forEach((kind) => params.append('knowledge_kind', kind));
  if (typeof anchored === 'boolean') params.set('anchored', String(anchored));
  if (typeof resolved === 'boolean') params.set('resolved', String(resolved));

  const queryString = params.toString();
  return queryString ? `/thoughts/?${queryString}` : '/thoughts/';
}

export function normalizeThoughtListResponse(payload) {
  if (Array.isArray(payload)) {
    return {
      results: payload,
      nextCursor: null,
      hasMore: false,
    };
  }

  return {
    results: Array.isArray(payload?.results) ? payload.results : [],
    nextCursor: payload?.next_cursor || null,
    hasMore: Boolean(payload?.has_more),
  };
}
