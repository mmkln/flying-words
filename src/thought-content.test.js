import test from 'node:test';
import assert from 'node:assert/strict';

import { KnowledgeKind } from './knowledge-kinds.js';
import {
  createThoughtContentPatch,
  createThoughtDraft,
  getThoughtCardPreviewText,
  getThoughtPresentation,
  getThoughtSearchText,
  isThoughtResolved,
  normalizeHttpUrl,
  normalizeLinkInput,
  validateThoughtDraft,
} from './thought-content.js';

test('card preview stops at the first explicit line break', () => {
  assert.equal(
    getThoughtCardPreviewText('Title\nDescription'),
    'Title',
  );
  assert.equal(
    getThoughtCardPreviewText('Title\n\nDescription'),
    'Title',
  );
  assert.equal(
    getThoughtCardPreviewText('Title\r\nDescription'),
    'Title',
  );
  assert.equal(
    getThoughtCardPreviewText('\n\nTitle\nDescription'),
    'Title',
  );
  assert.equal(
    getThoughtCardPreviewText('A title without explicit line breaks'),
    'A title without explicit line breaks',
  );
});

test('link metadata stays separate from user-authored thought text', () => {
  const draft = {
    kind: KnowledgeKind.LINK,
    text: 'My note about the source',
    links: [{
      id: 'source-link',
      url: 'https://example.com/article',
      title: 'The source title',
    }],
  };

  assert.deepEqual(createThoughtContentPatch(draft), {
    text: 'My note about the source',
    meta_patch: {
      knowledge: { version: 1, kind: KnowledgeKind.LINK },
      resolved: null,
      links: {
        version: 1,
        items: [{
          id: 'source-link',
          url: 'https://example.com/article',
          title: 'The source title',
        }],
      },
      link: null,
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
    resolved: false,
    links: [{
      id: 'legacy-link',
      url: 'https://example.com/',
      title: 'Example title',
    }],
  });
});

test('link attachment validation works independently from the knowledge kind', () => {
  assert.equal(normalizeHttpUrl('https://example.com/page'), 'https://example.com/page');
  assert.equal(normalizeHttpUrl('https://user:secret@example.com'), null);
  assert.equal(normalizeHttpUrl('javascript:alert(1)'), null);

  assert.equal(validateThoughtDraft({
    kind: KnowledgeKind.OBSERVATION,
    text: 'A note',
    links: [{ id: 'one', url: 'https://example.com', title: '' }],
  }).valid, true);

  assert.equal(validateThoughtDraft({
    kind: KnowledgeKind.QUESTION,
    text: 'A note',
    links: [{ id: 'one', url: 'javascript:alert(1)', title: '' }],
  }).valid, false);

  assert.equal(validateThoughtDraft({
    kind: KnowledgeKind.LINK,
    text: 'A link-shaped thought without an attachment',
    links: [],
  }).valid, true);

  assert.equal(validateThoughtDraft({
    kind: KnowledgeKind.THOUGHT,
    text: 'A note',
    links: [{ id: 'one', url: '', title: 'Title without a URL' }],
  }).valid, false);

  assert.equal(validateThoughtDraft({
    kind: KnowledgeKind.THOUGHT,
    text: 'A note',
    links: [
      { id: 'one', url: 'https://example.com', title: '' },
      { id: 'two', url: 'https://example.com/', title: '' },
    ],
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
    resources: [{
      href: 'https://www.example.com/article',
      hostname: 'example.com',
      explicitTitle: 'Page title',
      displayTitle: 'Page title',
      displaySubtitle: 'example.com',
      cardLabel: 'example.com',
      accessibleLabel: 'Page title, example.com',
    }],
  });
});

test('an attachment is preserved when the knowledge kind changes', () => {
  assert.deepEqual(createThoughtContentPatch({
    kind: KnowledgeKind.QUESTION,
    text: 'What follows from this?',
    links: [{
      id: 'preserved-link',
      url: 'https://example.com',
      title: 'Preserved resource',
    }],
  }), {
    text: 'What follows from this?',
    meta_patch: {
      knowledge: { version: 1, kind: KnowledgeKind.QUESTION },
      resolved: null,
      links: {
        version: 1,
        items: [{
          id: 'preserved-link',
          url: 'https://example.com/',
          title: 'Preserved resource',
        }],
      },
      link: null,
    },
  });
});

test('clearing an attachment removes only its metadata namespace', () => {
  assert.deepEqual(createThoughtContentPatch({
    kind: KnowledgeKind.OBSERVATION,
    text: 'Keep this authored observation',
    links: [],
  }), {
    text: 'Keep this authored observation',
    meta_patch: {
      knowledge: { version: 1, kind: KnowledgeKind.OBSERVATION },
      resolved: null,
      links: null,
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
  assert.equal(presentation.resources[0].href, 'https://example.com/');
  assert.equal(presentation.resources[0].displayTitle, 'Source title');
});

test('canonical and legacy links are merged once and migrated on save', () => {
  const thought = {
    text: 'Sources',
    meta: {
      links: {
        version: 1,
        items: [
          { id: 'one', url: 'https://one.example/', title: 'One' },
          { id: 'two', url: 'https://two.example/', title: 'Two' },
        ],
      },
      link: { version: 1, url: 'https://one.example/', title: 'Duplicate' },
    },
  };

  const draft = createThoughtDraft(thought);
  assert.equal(draft.links.length, 2);
  assert.deepEqual(
    createThoughtContentPatch(draft).meta_patch.links.items,
    draft.links,
  );
  assert.equal(createThoughtContentPatch(draft).meta_patch.link, null);
});

test('normalization keeps link ids unique for reliable editing', () => {
  const draft = createThoughtDraft({
    text: 'Sources',
    meta: {
      links: {
        version: 1,
        items: [
          { id: 'same', url: 'https://one.example/', title: '' },
          { id: 'same', url: 'https://two.example/', title: '' },
        ],
      },
    },
  });

  assert.equal(draft.links[0].id, 'same');
  assert.equal(draft.links[1].id, 'same-2');
});

test('presentation and search include every attached resource', () => {
  const thought = {
    text: 'Reading list',
    meta: {
      links: {
        version: 1,
        items: [
          { id: 'one', url: 'https://one.example/', title: 'First source' },
          { id: 'two', url: 'https://two.example/', title: 'Second source' },
        ],
      },
    },
  };

  assert.equal(getThoughtPresentation(thought).resources.length, 2);
  assert.equal(
    getThoughtSearchText(thought),
    'Reading list First source https://one.example/ Second source https://two.example/',
  );
});

test('search corpus includes the note, page title, and URL', () => {
  assert.equal(getThoughtSearchText({
    text: 'Personal note',
    meta: {
      link: { version: 1, url: 'https://example.com/economy', title: 'Page title' },
    },
  }), 'Personal note Page title https://example.com/economy');
});

test('resolved is an optional kind-independent thought state', () => {
  assert.equal(isThoughtResolved({ meta: {} }), false);
  assert.equal(isThoughtResolved({ meta: { resolved: false } }), false);
  assert.equal(isThoughtResolved({ meta: { resolved: true } }), true);

  const thought = {
    text: 'A settled observation',
    meta: {
      knowledge: { version: 1, kind: KnowledgeKind.OBSERVATION },
      resolved: true,
    },
  };

  assert.equal(createThoughtDraft(thought).resolved, true);
  assert.equal(createThoughtContentPatch({
    ...createThoughtDraft(thought),
    resolved: true,
  }).meta_patch.resolved, true);
});
