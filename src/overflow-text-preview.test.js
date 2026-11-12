import assert from 'node:assert/strict';
import test from 'node:test';

import {
  calculateOverflowPreviewTop,
  isTextOverflowing,
} from './overflow-text-preview.js';

test('isTextOverflowing detects horizontal and vertical clipping', () => {
  assert.equal(isTextOverflowing({
    scrollWidth: 120,
    clientWidth: 100,
    scrollHeight: 20,
    clientHeight: 20,
  }), true);
  assert.equal(isTextOverflowing({
    scrollWidth: 100,
    clientWidth: 100,
    scrollHeight: 42,
    clientHeight: 20,
  }), true);
  assert.equal(isTextOverflowing({
    scrollWidth: 100,
    clientWidth: 100,
    scrollHeight: 20,
    clientHeight: 20,
  }), false);
});

test('calculateOverflowPreviewTop prefers available space below the item', () => {
  assert.equal(calculateOverflowPreviewTop({
    surfaceHeight: 400,
    itemTop: 80,
    itemBottom: 120,
    previewHeight: 100,
  }), 128);
});

test('calculateOverflowPreviewTop uses and clamps space above the item', () => {
  assert.equal(calculateOverflowPreviewTop({
    surfaceHeight: 220,
    itemTop: 170,
    itemBottom: 210,
    previewHeight: 100,
  }), 62);
  assert.equal(calculateOverflowPreviewTop({
    surfaceHeight: 100,
    itemTop: 20,
    itemBottom: 60,
    previewHeight: 120,
  }), 8);
});

test('calculateOverflowPreviewTop aligns with the item when neither side fits', () => {
  assert.equal(calculateOverflowPreviewTop({
    surfaceHeight: 160,
    itemTop: 50,
    itemBottom: 90,
    previewHeight: 80,
  }), 50);
});
