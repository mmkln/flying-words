const DEFAULT_CORNER_RADIUS = 16;

function clamp(value, minimum, maximum) {
  return Math.min(maximum, Math.max(minimum, value));
}

export function getCardEndpoint(from, to, cornerRadius = DEFAULT_CORNER_RADIUS) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  if (!dx && !dy) return { x: from.x, y: from.y };

  const halfWidth = Math.max(1, from.width / 2);
  const halfHeight = Math.max(1, from.height / 2);
  const hitsVerticalSide = Math.abs(dx) / halfWidth >= Math.abs(dy) / halfHeight;
  const radius = Math.max(0, Math.min(cornerRadius, halfWidth, halfHeight));

  if (hitsVerticalSide) {
    const x = from.x + Math.sign(dx) * halfWidth;
    const y = from.y + dy * (halfWidth / Math.abs(dx));
    return {
      x,
      y: clamp(y, from.y - halfHeight + radius, from.y + halfHeight - radius),
    };
  }

  const y = from.y + Math.sign(dy) * halfHeight;
  const x = from.x + dx * (halfHeight / Math.abs(dy));
  return {
    x: clamp(x, from.x - halfWidth + radius, from.x + halfWidth - radius),
    y,
  };
}

export function getConnectionPathGeometry(source, target) {
  const start = getCardEndpoint(source, target);
  const end = getCardEndpoint(target, source);
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const distance = Math.hypot(dx, dy);

  if (!distance) {
    return {
      start,
      end,
      firstControl: start,
      firstMidControl: start,
      midpoint: start,
      secondMidControl: start,
      lastControl: start,
    };
  }

  const unitX = dx / distance;
  const unitY = dy / distance;
  const handle = Math.min(90, distance * 0.22);
  const bend = Math.min(52, distance * 0.1);
  const stableSide = (
    start.x < end.x
    || (start.x === end.x && start.y <= end.y)
  ) ? 1 : -1;
  const bendX = -unitY * bend * stableSide;
  const bendY = unitX * bend * stableSide;
  const midpoint = {
    x: (start.x + end.x) / 2 + bendX,
    y: (start.y + end.y) / 2 + bendY,
  };

  return {
    start,
    end,
    firstControl: {
      x: start.x + unitX * handle,
      y: start.y + unitY * handle,
    },
    firstMidControl: {
      x: midpoint.x - unitX * handle,
      y: midpoint.y - unitY * handle,
    },
    midpoint,
    secondMidControl: {
      x: midpoint.x + unitX * handle,
      y: midpoint.y + unitY * handle,
    },
    lastControl: {
      x: end.x - unitX * handle,
      y: end.y - unitY * handle,
    },
  };
}

export function getConnectionPathData(source, target) {
  const geometry = getConnectionPathGeometry(source, target);
  const {
    start,
    firstControl,
    firstMidControl,
    midpoint,
    secondMidControl,
    lastControl,
    end,
  } = geometry;

  return [
    `M ${start.x} ${start.y}`,
    `C ${firstControl.x} ${firstControl.y},`,
    `${firstMidControl.x} ${firstMidControl.y},`,
    `${midpoint.x} ${midpoint.y}`,
    `C ${secondMidControl.x} ${secondMidControl.y},`,
    `${lastControl.x} ${lastControl.y},`,
    `${end.x} ${end.y}`,
  ].join(' ');
}
