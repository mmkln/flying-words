export const HistoryPaginationState = Object.freeze({
  HIDDEN: 'hidden',
  READY: 'ready',
  LOADING: 'loading',
  ERROR: 'error',
});

export function getHistoryPaginationState({
  authenticated,
  hasMore,
  loading,
  hasLoadedResults,
  error,
}) {
  if (!authenticated) return HistoryPaginationState.HIDDEN;
  if (error) return HistoryPaginationState.ERROR;
  if (loading) {
    return hasLoadedResults
      ? HistoryPaginationState.LOADING
      : HistoryPaginationState.HIDDEN;
  }
  return hasMore
    ? HistoryPaginationState.READY
    : HistoryPaginationState.HIDDEN;
}

export function shouldObserveHistoryPagination({ dialogOpen, ...state }) {
  return dialogOpen
    && getHistoryPaginationState(state) === HistoryPaginationState.READY;
}
