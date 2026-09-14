import test from 'node:test';
import assert from 'node:assert/strict';

import { KnowledgeKind } from './knowledge-kinds.js';
import {
  createThoughtContentPatch,
  createThoughtDraft,
  getThoughtPresentation,
  getThoughtSearchText,
  normalizeHttpUrl,
  normalizeLinkInput,
  validateThoughtDraft,
} from './thought-content.js';

test('link metadata stays separate from user-authored thought text', () => {
  const draft = {
    kind: KnowledgeKind.LINK,
    text: 'My note about the source',
    linkUrl: 'https://example.com/article',
    linkTitle: 'The source title',
  };

  assert.deepEqual(createThoughtContentPatch(draft), {
    text: 'My note about the source',
    meta_patch: {
      knowledge: { version: 1, kind: KnowledgeKind.LINK },
      link: {
        version: 1,
        url: 'https://example.com/article',
        title: 'The source title',
      },
    },
  });
});

test('draft restores link metadata without using the thought text as its title', () => {
  const thought = {
    text: 'Personal note',
    meta: {
      knowledge: { version: 1, kind: KnowledgeKind.LINK },
      link: { version: 1, url: 'https://example.com/', title: 'Example title' },
    },
  };

  assert.deepEqual(createThoughtDraft(thought), {
    kind: KnowledgeKind.LINK,
    text: 'Personal note',
    linkUrl: 'https://example.com/',
    linkTitle: 'Example title',
  });
});

test('link attachment validation works independently from the knowledge kind', () => {
  assert.equal(normalizeHttpUrl('https://example.com/page'), 'https://example.com/page');
  assert.equal(normalizeHttpUrl('https://user:secret@example.com'), null);
  assert.equal(normalizeHttpUrl('javascript:alert(1)'), null);

  assert.equal(validateThoughtDraft({
    kind: KnowledgeKind.OBSERVATION,
    text: 'A note',
    linkUrl: 'https://example.com',
    linkTitle: '',
  }).valid, true);

  assert.equal(validateThoughtDraft({
    kind: KnowledgeKind.QUESTION,
    text: 'A note',
    linkUrl: 'javascript:alert(1)',
    linkTitle: '',
  }).valid, false);

  assert.equal(validateThoughtDraft({
    kind: KnowledgeKind.LINK,
    text: 'A link-shaped thought without an attachment',
    linkUrl: '',
    linkTitle: '',
  }).valid, true);

  assert.equal(validateThoughtDraft({
    kind: KnowledgeKind.THOUGHT,
    text: 'A note',
    linkUrl: '',
    linkTitle: 'Title without a URL',
  }).valid, false);
});

test('link input adds https to ordinary web addresses before strict validation', () => {
  assert.equal(normalizeLinkInput('google.com'), 'https://google.com/');
  assert.equal(
    normalizeLinkInput(' www.google.com/search?q=test#results '),
    'https://www.google.com/search?q=test#results',
  );
  assert.equal(
    normalizeLinkInput('localhost:5173/thoughts'),
    'https://localhost:5173/thoughts',
  );
  assert.equal(
    normalizeLinkInput('http://example.com/path'),
    'http://example.com/path',
  );
});

test('link input never converts unsupported schemes or credentials into web links', () => {
  assert.equal(normalizeLinkInput('javascript:alert(1)'), null);
  assert.equal(normalizeLinkInput('mailto:person@example.com'), null);
  assert.equal(normalizeLinkInput('ftp://example.com/file'), null);
  assert.equal(normalizeLinkInput('https://user:secret@example.com'), null);
  assert.equal(normalizeLinkInput('not a host'), null);
});

test('presentation keeps authored text primary for link thoughts', () => {
  assert.deepEqual(getThoughtPresentation({
    text: 'Personal note',
    meta: {
      knowledge: { version: 1, kind: KnowledgeKind.LINK },
      link: { version: 1, url: 'https://www.example.com/article', title: 'Page title' },
    },
  }), {
    kind: KnowledgeKind.LINK,
    primaryText: 'Personal note',
    secondaryText: '',
    hostname: 'example.com',
    href: 'https://www.example.com/article',
    resourceTitle: 'Page title',
  });
});

test('an attachment is preserved when the knowledge kind changes', () => {
  assert.deepEqual(createThoughtContentPatch({
    kind: KnowledgeKind.QUESTION,
    text: 'What follows from this?',
    linkUrl: 'https://example.com',
    linkTitle: 'Preserved resource',
  }), {
    text: 'What follows from this?',
    meta_patch: {
      knowledge: { version: 1, kind: KnowledgeKind.QUESTION },
      link: {
        version: 1,
        url: 'https://example.com/',
        title: 'Preserved resource',
      },
    },
  });
});

test('clearing an attachment removes only its metadata namespace', () => {
  assert.deepEqual(createThoughtContentPatch({
    kind: KnowledgeKind.OBSERVATION,
    text: 'Keep this authored observation',
    linkUrl: '',
    linkTitle: '',
  }), {
    text: 'Keep this authored observation',
    meta_patch: {
      knowledge: { version: 1, kind: KnowledgeKind.OBSERVATION },
      link: null,
    },
  });
});

test('an attached resource does not replace the authored text of another kind', () => {
  const presentation = getThoughtPresentation({
    text: 'Why does this happen?',
    meta: {
      knowledge: { version: 1, kind: KnowledgeKind.QUESTION },
      link: { version: 1, url: 'https://example.com/', title: 'Source title' },
    },
  });

  assert.equal(presentation.primaryText, 'Why does this happen?');
  assert.equal(presentation.secondaryText, '');
  assert.equal(presentation.href, 'https://example.com/');
  assert.equal(presentation.resourceTitle, 'Source title');
});

test('search corpus includes the note, page title, and URL', () => {
  assert.equal(getThoughtSearchText({
    text: 'Personal note',
    meta: {
      link: { version: 1, url: 'https://example.com/economy', title: 'Page title' },
    },
  }), 'Personal note Page title https://example.com/economy');
});
