import assert from 'node:assert/strict';
import test from 'node:test';

import {
  WorkspaceFilter,
  boardsForWorkspace,
  isWorkspaceFilterAvailable,
  normalizeWorkspaceRecords,
  workspaceBoardCount,
  workspaceFilterForBoard,
  workspaceFilterLabel,
  workspaceForBoard,
} from './workspace-catalog.js';

const workspaces = [
  { id: 'automation', name: 'Automation' },
  { id: 'learning', name: 'Learning' },
];

const boards = [
  { id: 'one', workspace_id: 'automation' },
  { id: 'two', workspace_id: 'automation' },
  { id: 'three', workspace_id: 'learning' },
  { id: 'four', workspace_id: null },
];

test('normalizes valid unique workspace records', () => {
  assert.deepEqual(normalizeWorkspaceRecords([
    { id: 'automation', name: '  Automation  ' },
    { id: 'automation', name: 'Duplicate' },
    { id: '', name: 'Missing id' },
    { id: 'empty', name: '   ' },
  ]), [{
    id: 'automation',
    name: 'Automation',
    created_at: null,
    updated_at: null,
  }]);
});

test('filters all, workspace, and unsorted boards without mutating input', () => {
  assert.deepEqual(
    boardsForWorkspace(boards, WorkspaceFilter.ALL).map(({ id }) => id),
    ['one', 'two', 'three', 'four'],
  );
  assert.deepEqual(
    boardsForWorkspace(boards, 'automation').map(({ id }) => id),
    ['one', 'two'],
  );
  assert.deepEqual(
    boardsForWorkspace(boards, WorkspaceFilter.UNSORTED).map(({ id }) => id),
    ['four'],
  );
  assert.notEqual(boardsForWorkspace(boards), boards);
});

test('derives workspace counts and board context', () => {
  assert.equal(workspaceBoardCount(boards, 'automation'), 2);
  assert.deepEqual(workspaceForBoard(boards[0], workspaces), workspaces[0]);
  assert.equal(workspaceForBoard(boards[3], workspaces), null);
  assert.equal(workspaceFilterForBoard(boards[0], workspaces), 'automation');
  assert.equal(
    workspaceFilterForBoard(boards[3], workspaces),
    WorkspaceFilter.UNSORTED,
  );
});

test('validates and labels synthetic and persisted filters', () => {
  assert.equal(isWorkspaceFilterAvailable(WorkspaceFilter.ALL, workspaces), true);
  assert.equal(isWorkspaceFilterAvailable('automation', workspaces), true);
  assert.equal(isWorkspaceFilterAvailable('missing', workspaces), false);
  assert.equal(workspaceFilterLabel(WorkspaceFilter.ALL, workspaces), 'All Boards');
  assert.equal(workspaceFilterLabel('automation', workspaces), 'Automation');
  assert.equal(workspaceFilterLabel('missing', workspaces), 'Unsorted');
});
