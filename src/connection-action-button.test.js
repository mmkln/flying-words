import assert from 'node:assert/strict';
import test from 'node:test';

import {
  ConnectionActionState,
  getConnectionActionState,
} from './connection-action-button.js';

test('uses the idle connection action outside edit mode', () => {
  assert.equal(
    getConnectionActionState({ editing: false }),
    ConnectionActionState.IDLE,
  );
  assert.equal(
    getConnectionActionState({ editing: false, selected: true }),
    ConnectionActionState.IDLE,
  );
});

test('distinguishes source, available, and selected actions while editing', () => {
  assert.equal(
    getConnectionActionState({ editing: true, source: true }),
    ConnectionActionState.SOURCE,
  );
  assert.equal(
    getConnectionActionState({ editing: true }),
    ConnectionActionState.AVAILABLE,
  );
  assert.equal(
    getConnectionActionState({ editing: true, selected: true }),
    ConnectionActionState.SELECTED,
  );
});

test('source takes precedence over selected for a malformed mixed state', () => {
  assert.equal(
    getConnectionActionState({ editing: true, source: true, selected: true }),
    ConnectionActionState.SOURCE,
  );
});
