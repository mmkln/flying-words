export function buildThoughtListPath({
  limit,
  cursor = null,
  query = '',
  knowledgeKind = '',
} = {}) {
  const params = new URLSearchParams();

  if (limit) params.set('limit', String(limit));
  if (cursor) params.set('cursor', cursor);
  if (query.trim()) params.set('q', query.trim());
  if (knowledgeKind) params.set('knowledge_kind', knowledgeKind);

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
