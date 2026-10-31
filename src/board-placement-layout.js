function finitePosition(position) {
  return Boolean(position)
    && typeof position.id === 'string'
    && Number.isFinite(position.x)
    && Number.isFinite(position.y);
}

function overlaps(first, second, gap) {
  return !(
    first.x + first.width + gap <= second.x
    || second.x + second.width + gap <= first.x
    || first.y + first.height + gap <= second.y
    || second.y + second.height + gap <= first.y
  );
}

export function captureBoardPlacementGroup(
  placements,
  { cardWidth = 280, cardHeight = 96 } = {},
) {
  const valid = (placements || []).filter(finitePosition);
  if (!valid.length) return null;

  const minX = Math.min(...valid.map(({ x }) => x));
  const minY = Math.min(...valid.map(({ y }) => y));
  const maxX = Math.max(...valid.map(({ x }) => x + cardWidth));
  const maxY = Math.max(...valid.map(({ y }) => y + cardHeight));

  return {
    width: maxX - minX,
    height: maxY - minY,
    cardWidth,
    cardHeight,
    items: valid.map(({ id, x, y }) => ({
      id,
      offsetX: x - minX,
      offsetY: y - minY,
    })),
  };
}

export function placeBoardGroupAtAnchor(group, anchor) {
  if (!group || !Number.isFinite(anchor?.x) || !Number.isFinite(anchor?.y)) return [];
  return group.items.map(({ id, offsetX, offsetY }) => ({
    id,
    x: anchor.x + offsetX,
    y: anchor.y + offsetY,
  }));
}

export function translateBoardPlacementDraft(positions, delta) {
  if (!Number.isFinite(delta?.x) || !Number.isFinite(delta?.y)) return [];
  return (positions || []).filter(finitePosition).map(({ id, x, y }) => ({
    id,
    x: x + delta.x,
    y: y + delta.y,
  }));
}

export function suggestBoardPlacementDraft({
  sourcePlacements,
  occupiedCards = [],
  viewport,
  cardWidth = 280,
  cardHeight = 96,
  gap = 24,
}) {
  const group = captureBoardPlacementGroup(sourcePlacements, { cardWidth, cardHeight });
  if (!group) return [];

  const view = {
    x: Number.isFinite(viewport?.x) ? viewport.x : 0,
    y: Number.isFinite(viewport?.y) ? viewport.y : 0,
    width: Math.max(group.width, viewport?.width || group.width),
    height: Math.max(group.height, viewport?.height || group.height),
  };
  const occupied = occupiedCards
    .filter(finitePosition)
    .map((card) => ({
      x: card.x,
      y: card.y,
      width: Number.isFinite(card.width) ? card.width : cardWidth,
      height: Number.isFinite(card.height) ? card.height : cardHeight,
    }));
  const center = {
    x: view.x + (view.width - group.width) / 2,
    y: view.y + (view.height - group.height) / 2,
  };
  const stepX = Math.max(48, cardWidth * 0.36);
  const stepY = Math.max(40, cardHeight * 0.72);

  const candidateIsFree = (anchor) => placeBoardGroupAtAnchor(group, anchor).every(
    ({ x, y }) => occupied.every((card) => !overlaps(
      { x, y, width: cardWidth, height: cardHeight },
      card,
      gap,
    )),
  );

  if (candidateIsFree(center)) return placeBoardGroupAtAnchor(group, center);

  for (let ring = 1; ring <= 18; ring += 1) {
    for (let row = -ring; row <= ring; row += 1) {
      for (const column of [-ring, ring]) {
        const anchor = {
          x: center.x + column * stepX,
          y: center.y + row * stepY,
        };
        if (candidateIsFree(anchor)) return placeBoardGroupAtAnchor(group, anchor);
      }
    }
    for (let column = -ring + 1; column < ring; column += 1) {
      for (const row of [-ring, ring]) {
        const anchor = {
          x: center.x + column * stepX,
          y: center.y + row * stepY,
        };
        if (candidateIsFree(anchor)) return placeBoardGroupAtAnchor(group, anchor);
      }
    }
  }

  return placeBoardGroupAtAnchor(group, center);
}

