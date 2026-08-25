import assert from 'node:assert/strict';
import test from 'node:test';

import { getSpatialLinkSuggestions } from './spatial-link-suggestions.js';

function thought(id, meta = {}) {
  return { id, meta };
}

function relatedTo(targetId) {
  return {
    connections: {
      version: 2,
      outgoing: [{
        id: `connection-to-${targetId}`,
        targetId,
        kind: 'related',
        spacing: 'normal',
      }],
    },
  };
}

test('suggests a magnetic parent and recognizes a link in either stored direction', () => {
  const child = thought('child', {
    magnet: {
      version: 2,
      parents: [{ parentId: 'parent', slot: 0 }],
    },
  });
  const parent = thought('parent', relatedTo('child'));

  const suggestions = getSpatialLinkSuggestions([child, parent], child.id);

  assert.equal(suggestions.length, 1);
  assert.equal(suggestions[0].parent.id, 'parent');
  assert.equal(suggestions[0].linked, true);
});

test('omits a missing magnetic parent', () => {
  const child = thought('child', {
    magnet: {
      version: 2,
      parents: [{ parentId: 'missing', slot: 0 }],
    },
  });

  assert.deepEqual(getSpatialLinkSuggestions([child], child.id), []);
});
