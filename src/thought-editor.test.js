import assert from 'node:assert/strict';
import test from 'node:test';

import { createThoughtEditor } from './thought-editor.js';

function createEditorHarness({ onSave = () => true, onClose = () => {} } = {}) {
  const dialog = new EventTarget();
  dialog.open = false;
  dialog.showModal = () => { dialog.open = true; };
  dialog.close = () => { dialog.open = false; };

  const form = new EventTarget();
  const textarea = new EventTarget();
  textarea.value = '';
  textarea.focus = () => {};
  textarea.setSelectionRange = () => {};

  const discardButton = new EventTarget();
  const resolveButton = new EventTarget();
  const activeClasses = new Set();
  resolveButton.textContent = '';
  resolveButton.attributes = new Map();
  resolveButton.setAttribute = (name, value) => {
    resolveButton.attributes.set(name, value);
  };
  resolveButton.classList = {
    contains: (name) => activeClasses.has(name),
    toggle: (name, force) => {
      if (force) activeClasses.add(name);
      else activeClasses.delete(name);
    },
  };
  const counter = { hidden: true, textContent: '' };
  const linkFields = {
    getValue: () => ({ url: '', title: '' }),
    setValue: () => {},
  };

  const editor = createThoughtEditor({
    dialog,
    form,
    textarea,
    linkFields,
    counter,
    discardButton,
    resolveButton,
    onSave,
    onClose,
  });
  editor.resolveButton = resolveButton;
  return editor;
}

test('one editor keeps its explicit thought and origin for Connections', () => {
  const previousAnimationFrame = globalThis.requestAnimationFrame;
  globalThis.requestAnimationFrame = (callback) => callback();
  try {
    let saved = null;
    let closed = null;
    const editor = createEditorHarness({
      onSave: (value) => { saved = value; return true; },
      onClose: (value) => { closed = value; },
    });

    editor.open({
      thoughtId: 'thought-1',
      origin: 'connection-map',
      draft: { kind: 'question', text: 'Why?', linkUrl: '', linkTitle: '' },
    });
    assert.equal(editor.getThoughtId(), 'thought-1');
    editor.setKind('observation');
    assert.equal(editor.save(), true);

    assert.equal(saved.thoughtId, 'thought-1');
    assert.equal(saved.draft.kind, 'observation');
    assert.equal(closed.origin, 'connection-map');
    assert.equal(closed.restoreFocus, true);
    assert.equal(editor.getThoughtId(), null);
  } finally {
    globalThis.requestAnimationFrame = previousAnimationFrame;
  }
});

test('resolved changes stay in the draft until the editor is saved', () => {
  const previousAnimationFrame = globalThis.requestAnimationFrame;
  globalThis.requestAnimationFrame = (callback) => callback();
  try {
    let saved = null;
    const editor = createEditorHarness({
      onSave: (value) => { saved = value; return true; },
    });

    editor.open({
      thoughtId: 'thought-resolved',
      draft: {
        kind: 'observation',
        text: 'Settled',
        resolved: false,
        linkUrl: '',
        linkTitle: '',
      },
    });
    editor.resolveButton.dispatchEvent(new Event('click'));

    assert.equal(editor.getResolved(), true);
    assert.equal(editor.resolveButton.textContent, 'Resolved');
    assert.equal(editor.resolveButton.attributes.get('aria-pressed'), 'true');
    assert.equal(saved, null);

    editor.save();
    assert.equal(saved.draft.resolved, true);
  } finally {
    globalThis.requestAnimationFrame = previousAnimationFrame;
  }
});

test('discarding a Connections edit closes without saving', () => {
  const previousAnimationFrame = globalThis.requestAnimationFrame;
  globalThis.requestAnimationFrame = (callback) => callback();
  try {
    let saveCount = 0;
    let closed = null;
    const editor = createEditorHarness({
      onSave: () => { saveCount += 1; return true; },
      onClose: (value) => { closed = value; },
    });

    editor.open({
      thoughtId: 'thought-2',
      origin: 'connection-map',
      draft: { kind: 'thought', text: 'Draft', linkUrl: '', linkTitle: '' },
    });
    editor.resolveButton.dispatchEvent(new Event('click'));
    assert.equal(editor.getResolved(), true);
    editor.discard();

    assert.equal(saveCount, 0);
    assert.equal(closed.thoughtId, 'thought-2');
    assert.equal(closed.origin, 'connection-map');
  } finally {
    globalThis.requestAnimationFrame = previousAnimationFrame;
  }
});
