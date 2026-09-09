import assert from 'node:assert/strict';
import test from 'node:test';

import { matchesThoughtSearch } from './thought-search.js';

test('matches Unicode text without case sensitivity', () => {
  assert.equal(
    matchesThoughtSearch('Мислення як система', 'мислення'),
    true,
  );
});

test('matches every query term regardless of order', () => {
  assert.equal(
    matchesThoughtSearch('Економіка і фінанси', 'фінанси економіка'),
    true,
  );
});

test('requires every query term to be present', () => {
  assert.equal(
    matchesThoughtSearch('Тільки фінанси', 'фінанси економіка'),
    false,
  );
});

test('supports partial words while the user is typing', () => {
  assert.equal(
    matchesThoughtSearch('Мислення як система', 'мисл сист'),
    true,
  );
});
