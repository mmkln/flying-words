import test from 'node:test';
import assert from 'node:assert/strict';
import {
  HistoryPaginationState,
  getHistoryPaginationState,
  shouldObserveHistoryPagination,
} from './history-pagination.js';

const READY_STATE = {
  authenticated: true,
  hasMore: true,
  loading: false,
  hasLoadedResults: true,
  error: false,
};

test('history pagination stays hidden for guests and initial loading', () => {
  assert.equal(
    getHistoryPaginationState({ ...READY_STATE, authenticated: false }),
    HistoryPaginationState.HIDDEN,
  );
  assert.equal(
    getHistoryPaginationState({
      ...READY_STATE,
      loading: true,
      hasLoadedResults: false,
    }),
    HistoryPaginationState.HIDDEN,
  );
});

test('history pagination distinguishes loading, ready, and complete states', () => {
  assert.equal(
    getHistoryPaginationState({ ...READY_STATE, loading: true }),
    HistoryPaginationState.LOADING,
  );
  assert.equal(
    getHistoryPaginationState(READY_STATE),
    HistoryPaginationState.READY,
  );
  assert.equal(
    getHistoryPaginationState({ ...READY_STATE, hasMore: false }),
    HistoryPaginationState.HIDDEN,
  );
});

test('an error prevents automatic retries until the user retries', () => {
  const errorState = { ...READY_STATE, error: true };
  assert.equal(
    getHistoryPaginationState(errorState),
    HistoryPaginationState.ERROR,
  );
  assert.equal(
    shouldObserveHistoryPagination({ ...errorState, dialogOpen: true }),
    false,
  );
});

test('the sentinel is observed only while an open history can load more', () => {
  assert.equal(
    shouldObserveHistoryPagination({ ...READY_STATE, dialogOpen: true }),
    true,
  );
  assert.equal(
    shouldObserveHistoryPagination({ ...READY_STATE, dialogOpen: false }),
    false,
  );
});
