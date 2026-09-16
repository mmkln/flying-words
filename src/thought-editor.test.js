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
  const counter = { hidden: true, textContent: '' };
  const linkFields = {
    getValue: () => ({ url: '', title: '' }),
    setValue: () => {},
  };

  return createThoughtEditor({
    dialog,
    form,
    textarea,
    linkFields,
    counter,
    discardButton,
    onSave,
    onClose,
  });
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
    editor.discard();

    assert.equal(saveCount, 0);
    assert.equal(closed.thoughtId, 'thought-2');
    assert.equal(closed.origin, 'connection-map');
  } finally {
    globalThis.requestAnimationFrame = previousAnimationFrame;
  }
});
