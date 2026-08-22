/**
 * A small d3-force compatible collision force for fixed rectangular cards.
 * Board positions are card centres while the force runs; persisted positions
 * remain top-left coordinates.
 */
export function createRectangleCollisionForce({
  gap = 24,
  strength = 0.92,
  iterations = 2,
} = {}) {
  let nodes = [];

  function force(alpha) {
    for (let iteration = 0; iteration < iterations; iteration += 1) {
      for (let firstIndex = 0; firstIndex < nodes.length; firstIndex += 1) {
        const first = nodes[firstIndex];
        for (let secondIndex = firstIndex + 1; secondIndex < nodes.length; secondIndex += 1) {
          const second = nodes[secondIndex];
          const dx = (second.x + second.vx) - (first.x + first.vx);
          const dy = (second.y + second.vy) - (first.y + first.vy);
          const overlapX = (
            (first.width + second.width) / 2 + gap - Math.abs(dx)
          );
          const overlapY = (
            (first.height + second.height) / 2 + gap - Math.abs(dy)
          );

          if (overlapX <= 0 || overlapY <= 0) continue;

          if (overlapX < overlapY) {
            const direction = dx === 0
              ? (String(first.id) < String(second.id) ? 1 : -1)
              : Math.sign(dx);
            const impulse = overlapX * strength * alpha * 0.5;
            first.vx -= direction * impulse;
            second.vx += direction * impulse;
          } else {
            const direction = dy === 0
              ? (String(first.id) < String(second.id) ? 1 : -1)
              : Math.sign(dy);
            const impulse = overlapY * strength * alpha * 0.5;
            first.vy -= direction * impulse;
            second.vy += direction * impulse;
          }
        }
      }
    }
  }

  force.initialize = (nextNodes) => {
    nodes = nextNodes || [];
  };

  return force;
}

export function separateRectangles(nodes, gap = 24, maxPasses = 120) {
  for (let pass = 0; pass < maxPasses; pass += 1) {
    let moved = false;

    for (let firstIndex = 0; firstIndex < nodes.length; firstIndex += 1) {
      const first = nodes[firstIndex];
      for (let secondIndex = firstIndex + 1; secondIndex < nodes.length; secondIndex += 1) {
        const second = nodes[secondIndex];
        const dx = second.x - first.x;
        const dy = second.y - first.y;
        const overlapX = (first.width + second.width) / 2 + gap - Math.abs(dx);
        const overlapY = (first.height + second.height) / 2 + gap - Math.abs(dy);

        if (overlapX <= 0 || overlapY <= 0) continue;
        moved = true;

        if (overlapX < overlapY) {
          const direction = dx === 0
            ? (String(first.id) < String(second.id) ? 1 : -1)
            : Math.sign(dx);
          const shift = overlapX / 2 + 0.5;
          first.x -= direction * shift;
          second.x += direction * shift;
        } else {
          const direction = dy === 0
            ? (String(first.id) < String(second.id) ? 1 : -1)
            : Math.sign(dy);
          const shift = overlapY / 2 + 0.5;
          first.y -= direction * shift;
          second.y += direction * shift;
        }
      }
    }

    if (!moved) break;
  }

  return nodes;
}

export function rectanglesOverlap(first, second, gap = 24) {
  return !(
    first.x + first.width + gap <= second.x
    || second.x + second.width + gap <= first.x
    || first.y + first.height + gap <= second.y
    || second.y + second.height + gap <= first.y
  );
}
