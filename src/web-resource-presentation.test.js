import test from 'node:test';
import assert from 'node:assert/strict';

import {
  getWebResourcePresentation,
} from './web-resource-presentation.js';

test('shows hostname once when a web link has no title', () => {
  const result = getWebResourcePresentation({
    url: 'https://www.example.com/page',
  });

  assert.equal(result.displayTitle, 'example.com');
  assert.equal(result.displaySubtitle, '');
  assert.equal(result.cardLabel, 'example.com');
});

test('suppresses a title that duplicates the hostname', () => {
  const result = getWebResourcePresentation({
    url: 'https://example.com/page',
    title: 'WWW.EXAMPLE.COM',
  });

  assert.equal(result.displayTitle, 'example.com');
  assert.equal(result.displaySubtitle, '');
});

test('shows hostname below a distinct web link title', () => {
  const result = getWebResourcePresentation({
    url: 'https://developer.apple.com/design/',
    title: 'Human Interface Guidelines',
  });

  assert.equal(result.displayTitle, 'Human Interface Guidelines');
  assert.equal(result.displaySubtitle, 'developer.apple.com');
  assert.equal(
    result.accessibleLabel,
    'Human Interface Guidelines, developer.apple.com',
  );
});
