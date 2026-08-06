import assert from 'node:assert/strict';
import test from 'node:test';

import {
  KnowledgeKind,
  KnowledgeKindOptions,
  createKnowledgeMeta,
  getThoughtKnowledgeKind,
  normalizeKnowledgeKind,
  setThoughtKnowledgeKind,
} from './knowledge-kinds.js';

test('unknown and missing kinds fall back to thought', () => {
  assert.equal(normalizeKnowledgeKind('unknown'), KnowledgeKind.THOUGHT);
  assert.equal(getThoughtKnowledgeKind({ meta: {} }), KnowledgeKind.THOUGHT);
});

test('knowledge meta uses a versioned enum value', () => {
  assert.deepEqual(createKnowledgeMeta(KnowledgeKind.HYPOTHESIS), {
    version: 1,
    kind: 'hypothesis',
  });
});

test('updating a kind preserves unrelated metadata', () => {
  const thought = {
    meta: {
      layout: { version: 1, mode: 'normalized', x: 0.2, y: 0.4 },
      magnet: { version: 2, parents: [] },
    },
  };

  setThoughtKnowledgeKind(thought, KnowledgeKind.OBSERVATION);

  assert.equal(thought.meta.knowledge.kind, 'observation');
  assert.equal(thought.meta.layout.x, 0.2);
  assert.equal(thought.meta.magnet.version, 2);
});

test('every knowledge kind has one icon picker definition', () => {
  assert.equal(KnowledgeKindOptions.length, Object.keys(KnowledgeKind).length);
  assert.equal(
    new Set(KnowledgeKindOptions.map(({ value }) => value)).size,
    KnowledgeKindOptions.length,
  );
  KnowledgeKindOptions.forEach(({ icon, label }) => {
    assert.equal(typeof icon, 'string');
    assert.ok(icon.length > 0);
    assert.equal(typeof label, 'string');
    assert.ok(label.length > 0);
  });
});
