import assert from 'node:assert/strict';
import test from 'node:test';

import { createSidePanelGroup } from './side-panel.js';

class FakeElement extends EventTarget {
  constructor() {
    super();
    this.attributes = new Map();
    this.focusCount = 0;
  }

  setAttribute(name, value) {
    this.attributes.set(name, value);
  }

  getAttribute(name) {
    return this.attributes.get(name) ?? null;
  }

  focus() {
    this.focusCount += 1;
  }
}

class FakeDialog extends FakeElement {
  constructor() {
    super();
    this.dataset = {};
    this.open = false;
    this.presentationMethod = null;
  }

  show() {
    this.open = true;
    this.presentationMethod = 'show';
  }

  showModal() {
    this.open = true;
    this.presentationMethod = 'showModal';
  }

  close() {
    if (!this.open) return;
    this.open = false;
    this.dispatchEvent(new Event('close'));
  }
}

function createRoot() {
  const classes = new Set();
  return {
    classList: {
      add: (...names) => names.forEach((name) => classes.add(name)),
      remove: (...names) => names.forEach((name) => classes.delete(name)),
      contains: (name) => classes.has(name),
      toggle(name, force) {
        if (force) classes.add(name);
        else classes.delete(name);
      },
    },
  };
}

function createFixture({ palette = true } = {}) {
  const root = createRoot();
  const frames = [];
  const group = createSidePanelGroup({
    root,
    paletteQuery: { matches: palette },
    requestFrame: (callback) => frames.push(callback),
  });
  const dialog = new FakeDialog();
  const trigger = new FakeElement();
  const closeButton = new FakeElement();
  const collapseRail = new FakeElement();
  let closeCount = 0;
  const panel = group.create({
    dialog,
    trigger,
    closeButton,
    collapseRail,
    onClose: () => { closeCount += 1; },
  });

  return {
    root,
    frames,
    group,
    dialog,
    trigger,
    closeButton,
    collapseRail,
    panel,
    get closeCount() { return closeCount; },
  };
}

test('opens a desktop side panel as a palette and restores focus from its rail', () => {
  const fixture = createFixture();

  assert.equal(fixture.panel.open(), 'palette');
  assert.equal(fixture.dialog.presentationMethod, 'show');
  assert.equal(fixture.trigger.getAttribute('aria-expanded'), 'true');
  assert.equal(fixture.root.classList.contains('is-side-panel-open'), true);

  fixture.collapseRail.dispatchEvent(new Event('click'));
  fixture.frames.shift()();

  assert.equal(fixture.dialog.open, false);
  assert.equal(fixture.trigger.getAttribute('aria-expanded'), 'false');
  assert.equal(fixture.trigger.focusCount, 1);
  assert.equal(fixture.closeCount, 1);
});

test('opens a compact side panel as a modal and closes from its backdrop', () => {
  const fixture = createFixture({ palette: false });

  assert.equal(fixture.panel.open(), 'modal');
  assert.equal(fixture.dialog.presentationMethod, 'showModal');
  assert.equal(fixture.root.classList.contains('is-side-panel-open'), false);

  fixture.dialog.dispatchEvent(new Event('click'));

  assert.equal(fixture.dialog.open, false);
  assert.equal(fixture.frames.length, 1);
});

test('opening another side panel closes the previous one without losing group state', () => {
  const fixture = createFixture();
  const secondDialog = new FakeDialog();
  const secondTrigger = new FakeElement();
  const secondPanel = fixture.group.create({
    dialog: secondDialog,
    trigger: secondTrigger,
  });

  fixture.panel.open();
  secondPanel.open();

  assert.equal(fixture.dialog.open, false);
  assert.equal(secondDialog.open, true);
  assert.equal(fixture.trigger.getAttribute('aria-expanded'), 'false');
  assert.equal(secondTrigger.getAttribute('aria-expanded'), 'true');
  assert.equal(fixture.group.getActiveDialog(), secondDialog);
  assert.equal(fixture.root.classList.contains('is-side-panel-open'), true);
});
