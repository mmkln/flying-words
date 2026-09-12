import assert from 'node:assert/strict';
import test from 'node:test';

import {
  getCardEndpoint,
  getConnectionPathData,
  getConnectionPathGeometry,
} from './connection-map-edge-geometry.js';

const card = (x, y, width = 280, height = 96) => ({ x, y, width, height });

function cross(first, second) {
  return first.x * second.y - first.y * second.x;
}

test('attaches horizontal and vertical connections to the card border', () => {
  const source = card(0, 0);

  assert.deepEqual(getCardEndpoint(source, card(400, 0)), { x: 140, y: 0 });
  assert.deepEqual(getCardEndpoint(source, card(0, 300)), { x: 0, y: 48 });
});

test('keeps diagonal endpoints outside rounded card corners', () => {
  const endpoint = getCardEndpoint(card(0, 0), card(280, 96));

  assert.deepEqual(endpoint, { x: 140, y: 32 });
});

test('aligns both path endpoint tangents with the connection direction', () => {
  const geometry = getConnectionPathGeometry(card(0, 0), card(430, 260));
  const direction = {
    x: geometry.end.x - geometry.start.x,
    y: geometry.end.y - geometry.start.y,
  };
  const startTangent = {
    x: geometry.firstControl.x - geometry.start.x,
    y: geometry.firstControl.y - geometry.start.y,
  };
  const endTangent = {
    x: geometry.end.x - geometry.lastControl.x,
    y: geometry.end.y - geometry.lastControl.y,
  };

  assert.ok(Math.abs(cross(direction, startTangent)) < 1e-9);
  assert.ok(Math.abs(cross(direction, endTangent)) < 1e-9);
  assert.ok(direction.x * endTangent.x + direction.y * endTangent.y > 0);
});

test('creates a smooth two-segment path with stable endpoints', () => {
  const source = card(-100, 50);
  const target = card(420, -170);
  const forward = getConnectionPathGeometry(source, target);
  const reverse = getConnectionPathGeometry(target, source);
  const path = getConnectionPathData(source, target);

  assert.deepEqual(forward.start, reverse.end);
  assert.deepEqual(forward.end, reverse.start);
  assert.match(path, /^M .+ C .+ C .+$/);
});
