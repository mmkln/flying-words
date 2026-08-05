const FIRST_RING_SLOTS = 6;
const CARD_GAP = 28;
const RING_GAP = 24;

export function getMagnetSlotPreference(parent, child, slot) {
  let ring = 1;
  let ringStart = 0;
  let slotsInRing = FIRST_RING_SLOTS;

  while (slot >= ringStart + slotsInRing) {
    ringStart += slotsInRing;
    ring += 1;
    slotsInRing = ring * FIRST_RING_SLOTS;
  }

  const index = Math.max(0, slot - ringStart);
  const angle = -Math.PI / 2 + (index / slotsInRing) * Math.PI * 2;
  const combinedHalfWidth = Math.max(1, (parent.width + child.width) / 2);
  const combinedHalfHeight = Math.max(1, (parent.height + child.height) / 2);
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  const edgeDistance = 1 / Math.sqrt(
    (cos * cos) / (combinedHalfWidth * combinedHalfWidth)
    + (sin * sin) / (combinedHalfHeight * combinedHalfHeight),
  );

  return {
    angle,
    restLength: edgeDistance
      + CARD_GAP
      + (ring - 1) * (Math.max(child.width, child.height) + RING_GAP),
  };
}
