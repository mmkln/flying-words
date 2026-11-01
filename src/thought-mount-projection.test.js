import test from 'node:test';
import assert from 'node:assert/strict';
import { getThoughtMountDiff } from './thought-mount-projection.js';

test('mounts only desired thoughts that are not already mounted', () => {
  const thoughts = [{ id: 'a' }, { id: 'b' }, { id: 'c' }];
  const desiredIds = new Set(['a', 'b']);

  assert.deepEqual(getThoughtMountDiff({
    thoughts,
    mountedIds: new Set(['a']),
    shouldMount: ({ id }) => desiredIds.has(id),
  }), {
    mountIds: ['b'],
    unmountIds: [],
  });
});

test('unmounts mounted thoughts outside the active projection', () => {
  const thoughts = [{ id: 'a' }, { id: 'b' }, { id: 'c' }];

  assert.deepEqual(getThoughtMountDiff({
    thoughts,
    mountedIds: new Set(['a', 'c']),
    shouldMount: ({ id }) => id === 'a',
  }), {
    mountIds: [],
    unmountIds: ['c'],
  });
});

test('never schedules the same thought for mount and unmount', () => {
  const result = getThoughtMountDiff({
    thoughts: [{ id: 'a' }, { id: 'b' }],
    mountedIds: new Set(['a']),
    shouldMount: ({ id }) => id === 'b',
  });

  assert.deepEqual(result, {
    mountIds: ['b'],
    unmountIds: ['a'],
  });
  assert.deepEqual(
    result.mountIds.filter((id) => result.unmountIds.includes(id)),
    [],
  );
});
