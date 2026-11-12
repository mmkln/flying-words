import assert from 'node:assert/strict';
import test from 'node:test';

import {
  shouldShowBoardConnectionsBulkAction,
} from './board-connections-popover.js';

test('shows the Connected Thoughts bulk action only for multiple items', () => {
  assert.equal(shouldShowBoardConnectionsBulkAction(0), false);
  assert.equal(shouldShowBoardConnectionsBulkAction(1), false);
  assert.equal(shouldShowBoardConnectionsBulkAction(2), true);
});
