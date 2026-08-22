import assert from 'node:assert/strict';
import test from 'node:test';

import {
  boardWorldToClientPoint,
  clientPointToBoardWorld,
  getBoardSpawnGap,
  zoomBoardCameraAtClientPoint,
} from './board-coordinate-space.js';

const bounds = { left: 36, top: 24 };
const geometry = { cardWidth: 280, cardHeight: 96, gap: 24 };

test('converts Board pointer coordinates correctly at every supported zoom', () => {
  const worldPoint = { x: 612.5, y: -184.25 };

  [1, 0.75, 0.5, 0.3].forEach((scale) => {
    const camera = { x: -217, y: 163, scale };
    const clientPoint = boardWorldToClientPoint(worldPoint, bounds, camera);

    const restored = clientPointToBoardWorld(clientPoint, bounds, camera);
    assert.ok(Math.abs(restored.x - worldPoint.x) < 0.000001);
    assert.ok(Math.abs(restored.y - worldPoint.y) < 0.000001);
  });
});

test('keeps the Board spawn gap in world coordinates at every zoom', () => {
  const firstCard = { x: 100, y: -40 };
  const secondCard = {
    x: firstCard.x + geometry.cardWidth + getBoardSpawnGap(geometry),
    y: firstCard.y,
  };

  [1, 0.75, 0.5, 0.3].forEach((scale) => {
    const camera = { x: -90, y: 140, scale };
    const first = boardWorldToClientPoint(firstCard, bounds, camera);
    const second = boardWorldToClientPoint(secondCard, bounds, camera);
    const visibleGap = second.x - first.x - geometry.cardWidth * scale;

    assert.equal(getBoardSpawnGap(geometry), geometry.gap);
    assert.ok(Math.abs(visibleGap - geometry.gap * scale) < 0.000001);
  });
});

test('keeps the world point below the pointer fixed while zooming', () => {
  const pointer = { x: 728, y: 419 };

  [
    { x: -320, y: 86, scale: 1 },
    { x: 148, y: -262, scale: 0.75 },
    { x: -911, y: 447, scale: 0.5 },
    { x: 63, y: -38, scale: 0.3 },
  ].forEach((camera) => {
    const before = clientPointToBoardWorld(pointer, bounds, camera);

    [1, 0.75, 0.5, 0.3].forEach((nextScale) => {
      const nextCamera = zoomBoardCameraAtClientPoint(
        camera,
        nextScale,
        pointer,
        bounds,
      );
      const after = clientPointToBoardWorld(pointer, bounds, nextCamera);

      assert.ok(Math.abs(after.x - before.x) < 0.000001);
      assert.ok(Math.abs(after.y - before.y) < 0.000001);
    });
  });
});
