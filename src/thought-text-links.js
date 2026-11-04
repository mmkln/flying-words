import { normalizeHttpUrl } from './thought-content.js';

const WEB_URL_PATTERN = /\bhttps?:\/\/[^\s<>"']+/giu;

const TRAILING_PUNCTUATION = new Set([
  '.',
  ',',
  '!',
  '?',
  ';',
  ':',
]);

const CLOSING_BRACKETS = new Map([
  [')', '('],
  [']', '['],
  ['}', '{'],
]);

function countCharacter(value, target) {
  let count = 0;

  for (const character of value) {
    if (character === target) count += 1;
  }

  return count;
}

function splitTrailingPunctuation(value) {
  let url = value;
  let trailing = '';

  while (url) {
    const lastCharacter = url.at(-1);

    if (TRAILING_PUNCTUATION.has(lastCharacter)) {
      trailing = `${lastCharacter}${trailing}`;
      url = url.slice(0, -1);
      continue;
    }

    const openingBracket = CLOSING_BRACKETS.get(lastCharacter);

    if (
      openingBracket
      && countCharacter(url, lastCharacter)
        > countCharacter(url, openingBracket)
    ) {
      trailing = `${lastCharacter}${trailing}`;
      url = url.slice(0, -1);
      continue;
    }

    break;
  }

  return { url, trailing };
}

function appendTextToken(tokens, value) {
  if (!value) return;

  const previous = tokens.at(-1);

  if (previous?.type === 'text') {
    previous.value += value;
    return;
  }

  tokens.push({
    type: 'text',
    value,
  });
}

export function tokenizeThoughtTextLinks(value = '') {
  const text = typeof value === 'string' ? value : '';
  const tokens = [];
  let cursor = 0;

  for (const match of text.matchAll(WEB_URL_PATTERN)) {
    const start = match.index;
    const candidate = match[0];
    const { url, trailing } = splitTrailingPunctuation(candidate);

    appendTextToken(tokens, text.slice(cursor, start));

    const href = normalizeHttpUrl(url);

    if (href) {
      tokens.push({
        type: 'link',
        value: url,
        href,
      });
    } else {
      appendTextToken(tokens, url);
    }

    appendTextToken(tokens, trailing);
    cursor = start + candidate.length;
  }

  appendTextToken(tokens, text.slice(cursor));
  return tokens;
}

export function renderThoughtTextLinks(element, text) {
  const document = element.ownerDocument;
  const fragment = document.createDocumentFragment();
  const renderedHrefs = new Set();

  for (const token of tokenizeThoughtTextLinks(text)) {
    if (token.type === 'text') {
      fragment.append(document.createTextNode(token.value));
      continue;
    }

    const link = document.createElement('a');

    link.className = 'thought-inline-link';
    link.href = token.href;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = token.value;

    renderedHrefs.add(token.href);
    fragment.append(link);
  }

  element.replaceChildren(fragment);
  return renderedHrefs;
}
