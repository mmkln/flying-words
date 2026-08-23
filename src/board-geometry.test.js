import assert from 'node:assert/strict';
import test from 'node:test';

import {
  DEFAULT_BOARD_GEOMETRY,
  MANUAL_BOARD_GAP,
  applyBoardGeometryCss,
  normalizeBoardGeometry,
} from './board-geometry.js';

test('keeps manual Board clearance independent from automatic geometry', () => {
  assert.equal(DEFAULT_BOARD_GEOMETRY.gap, 24);
  assert.equal(MANUAL_BOARD_GAP, 8);
});

test('accepts the complete versioned Board geometry from the API', () => {
  assert.deepEqual(
    normalizeBoardGeometry({
      version: 1,
      card_width: 280,
      card_height: 96,
      gap: 24,
    }),
    DEFAULT_BOARD_GEOMETRY,
  );
});

test('falls back atomically when the Board geometry is incomplete', () => {
  assert.equal(
    normalizeBoardGeometry({ version: 1, card_width: 280, gap: 24 }),
    DEFAULT_BOARD_GEOMETRY,
  );
});

test('applies the API geometry as CSS variables without DOM-specific logic', () => {
  const values = new Map();
  const root = {
    style: {
      setProperty(name, value) {
        values.set(name, value);
      },
    },
  };

  const geometry = applyBoardGeometryCss({
    version: 1,
    cardWidth: 300,
    cardHeight: 110,
    gap: 30,
  }, root);

  assert.equal(geometry.cardWidth, 300);
  assert.equal(values.get('--board-card-width'), '300px');
  assert.equal(values.get('--board-card-height'), '110px');
  assert.equal(values.get('--board-card-gap'), '30px');
});
