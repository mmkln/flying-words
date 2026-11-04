import test from 'node:test';
import assert from 'node:assert/strict';

import {
  tokenizeThoughtTextLinks,
} from './thought-text-links.js';

test('finds an explicit URL inside thought text', () => {
  assert.deepEqual(
    tokenizeThoughtTextLinks(
      'Read https://example.com/docs today',
    ),
    [
      {
        type: 'text',
        value: 'Read ',
      },
      {
        type: 'link',
        value: 'https://example.com/docs',
        href: 'https://example.com/docs',
      },
      {
        type: 'text',
        value: ' today',
      },
    ],
  );
});

test('keeps sentence punctuation outside the link', () => {
  assert.deepEqual(
    tokenizeThoughtTextLinks(
      'Read https://example.com/docs.',
    ),
    [
      {
        type: 'text',
        value: 'Read ',
      },
      {
        type: 'link',
        value: 'https://example.com/docs',
        href: 'https://example.com/docs',
      },
      {
        type: 'text',
        value: '.',
      },
    ],
  );
});

test('keeps balanced URL parentheses', () => {
  const tokens = tokenizeThoughtTextLinks(
    'Open https://example.com/article_(draft).',
  );

  assert.equal(tokens[1].type, 'link');
  assert.equal(
    tokens[1].value,
    'https://example.com/article_(draft)',
  );
});

test('removes an unmatched closing bracket from the URL', () => {
  const tokens = tokenizeThoughtTextLinks(
    'Open (https://example.com/docs).',
  );

  assert.deepEqual(tokens.slice(1), [
    {
      type: 'link',
      value: 'https://example.com/docs',
      href: 'https://example.com/docs',
    },
    {
      type: 'text',
      value: ').',
    },
  ]);
});

test('rejects URLs containing credentials', () => {
  const tokens = tokenizeThoughtTextLinks(
    'Open https://user:secret@example.com',
  );

  assert.equal(
    tokens.some((token) => token.type === 'link'),
    false,
  );
});

test('does not convert bare domains automatically', () => {
  assert.deepEqual(
    tokenizeThoughtTextLinks('Open example.com'),
    [
      {
        type: 'text',
        value: 'Open example.com',
      },
    ],
  );
});

test('supports several URLs and line breaks', () => {
  const tokens = tokenizeThoughtTextLinks(
    'First: https://one.example\n'
      + 'Second: https://two.example/path',
  );

  assert.deepEqual(
    tokens
      .filter((token) => token.type === 'link')
      .map((token) => token.href),
    [
      'https://one.example/',
      'https://two.example/path',
    ],
  );
});
