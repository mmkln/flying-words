const MINIMAP_PADDING = 10;
const MIN_CARD_WIDTH = 3;
const MIN_CARD_HEIGHT = 2;

export function getBoardViewport(camera, viewport) {
  const scale = Number.isFinite(camera?.scale) && camera.scale > 0
    ? camera.scale
    : 1;

  return {
    x: -(Number.isFinite(camera?.x) ? camera.x : 0) / scale,
    y: -(Number.isFinite(camera?.y) ? camera.y : 0) / scale,
    width: Math.max(1, viewport?.width || 1) / scale,
    height: Math.max(1, viewport?.height || 1) / scale,
  };
}

export function getMinimapProjection(
  cards,
  camera,
  viewport,
  minimapWidth,
  minimapHeight,
) {
  const visibleWorld = getBoardViewport(camera, viewport);
  const safeCards = cards.filter((card) => (
    Number.isFinite(card.x)
    && Number.isFinite(card.y)
    && Number.isFinite(card.width)
    && Number.isFinite(card.height)
  ));

  const minX = Math.min(visibleWorld.x, ...safeCards.map((card) => card.x));
  const minY = Math.min(visibleWorld.y, ...safeCards.map((card) => card.y));
  const maxX = Math.max(
    visibleWorld.x + visibleWorld.width,
    ...safeCards.map((card) => card.x + card.width),
  );
  const maxY = Math.max(
    visibleWorld.y + visibleWorld.height,
    ...safeCards.map((card) => card.y + card.height),
  );

  const worldWidth = Math.max(1, maxX - minX);
  const worldHeight = Math.max(1, maxY - minY);
  const availableWidth = Math.max(1, minimapWidth - MINIMAP_PADDING * 2);
  const availableHeight = Math.max(1, minimapHeight - MINIMAP_PADDING * 2);
  const scale = Math.min(
    availableWidth / worldWidth,
    availableHeight / worldHeight,
  );
  const offsetX = (minimapWidth - worldWidth * scale) / 2 - minX * scale;
  const offsetY = (minimapHeight - worldHeight * scale) / 2 - minY * scale;

  return {
    scale,
    offsetX,
    offsetY,
    worldToMap(x, y) {
      return {
        x: offsetX + x * scale,
        y: offsetY + y * scale,
      };
    },
    mapToWorld(x, y) {
      return {
        x: (x - offsetX) / scale,
        y: (y - offsetY) / scale,
      };
    },
  };
}

function cssColor(name, fallback) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback;
}

export function createCanvasMinimap({ canvas, onNavigate }) {
  const context = canvas.getContext('2d');
  let snapshot = null;
  let projection = null;
  let dragProjection = null;
  let dragWorldOffset = { x: 0, y: 0 };
  let pointerId = null;

  function resizeCanvas() {
    const bounds = canvas.getBoundingClientRect();
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    const pixelWidth = Math.max(1, Math.round(bounds.width * ratio));
    const pixelHeight = Math.max(1, Math.round(bounds.height * ratio));

    if (canvas.width !== pixelWidth || canvas.height !== pixelHeight) {
      canvas.width = pixelWidth;
      canvas.height = pixelHeight;
    }

    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    return { width: bounds.width, height: bounds.height };
  }

  function drawConnections(activeProjection, cardsById) {
    context.beginPath();
    context.strokeStyle = cssColor('--minimap-connection', 'rgba(98, 92, 125, .28)');
    context.lineWidth = 1;

    snapshot.connections.forEach(({ sourceId, targetId }) => {
      const source = cardsById.get(sourceId);
      const target = cardsById.get(targetId);
      if (!source || !target) return;

      const from = activeProjection.worldToMap(
        source.x + source.width / 2,
        source.y + source.height / 2,
      );
      const to = activeProjection.worldToMap(
        target.x + target.width / 2,
        target.y + target.height / 2,
      );
      context.moveTo(from.x, from.y);
      context.lineTo(to.x, to.y);
    });

    context.stroke();
  }

  function drawCards(activeProjection) {
    const cardColor = cssColor('--minimap-card', 'rgba(112, 85, 197, .46)');
    const selectedColor = cssColor('--minimap-selected', '#7055c5');

    snapshot.cards.forEach((card) => {
      const point = activeProjection.worldToMap(card.x, card.y);
      context.fillStyle = card.selected ? selectedColor : cardColor;
      context.fillRect(
        point.x,
        point.y,
        Math.max(MIN_CARD_WIDTH, card.width * activeProjection.scale),
        Math.max(MIN_CARD_HEIGHT, card.height * activeProjection.scale),
      );
    });
  }

  function drawViewport(activeProjection) {
    const viewport = getBoardViewport(snapshot.camera, snapshot.viewport);
    const point = activeProjection.worldToMap(viewport.x, viewport.y);
    const width = viewport.width * activeProjection.scale;
    const height = viewport.height * activeProjection.scale;

    context.fillStyle = cssColor('--minimap-viewport-fill', 'rgba(112, 85, 197, .08)');
    context.strokeStyle = cssColor('--minimap-viewport', 'rgba(76, 59, 134, .8)');
    context.lineWidth = 1.5;
    context.fillRect(point.x, point.y, width, height);
    context.strokeRect(point.x, point.y, width, height);
  }

  function draw() {
    if (!snapshot || !context) return;

    const size = resizeCanvas();
    const activeProjection = dragProjection || getMinimapProjection(
      snapshot.cards,
      snapshot.camera,
      snapshot.viewport,
      size.width,
      size.height,
    );
    projection = activeProjection;

    context.clearRect(0, 0, size.width, size.height);
    const cardsById = new Map(snapshot.cards.map((card) => [card.id, card]));
    drawConnections(activeProjection, cardsById);
    drawCards(activeProjection);
    drawViewport(activeProjection);
  }

  function eventToWorldPoint(event) {
    const activeProjection = dragProjection || projection;
    if (!activeProjection) return null;

    const bounds = canvas.getBoundingClientRect();
    return activeProjection.mapToWorld(
      event.clientX - bounds.left,
      event.clientY - bounds.top,
    );
  }

  function navigate(event) {
    const point = eventToWorldPoint(event);
    if (!point) return;
    onNavigate({
      x: point.x + dragWorldOffset.x,
      y: point.y + dragWorldOffset.y,
    });
  }

  function handlePointerDown(event) {
    if (event.button !== 0 || !projection) return;
    event.preventDefault();
    event.stopPropagation();
    pointerId = event.pointerId;
    dragProjection = projection;
    const point = eventToWorldPoint(event);
    const viewport = getBoardViewport(snapshot.camera, snapshot.viewport);
    const insideViewport = point && (
      point.x >= viewport.x
      && point.x <= viewport.x + viewport.width
      && point.y >= viewport.y
      && point.y <= viewport.y + viewport.height
    );
    dragWorldOffset = insideViewport
      ? {
        x: viewport.x + viewport.width / 2 - point.x,
        y: viewport.y + viewport.height / 2 - point.y,
      }
      : { x: 0, y: 0 };
    canvas.setPointerCapture(pointerId);
    canvas.classList.add('is-navigating');
    navigate(event);
  }

  function handlePointerMove(event) {
    if (event.pointerId !== pointerId) return;
    navigate(event);
  }

  function stopNavigation(event) {
    if (event.pointerId !== pointerId) return;
    pointerId = null;
    dragProjection = null;
    dragWorldOffset = { x: 0, y: 0 };
    canvas.classList.remove('is-navigating');
    draw();
  }

  function handleKeyDown(event) {
    if (!snapshot || !['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
      return;
    }

    event.preventDefault();
    const viewport = getBoardViewport(snapshot.camera, snapshot.viewport);
    const stepX = viewport.width * 0.18;
    const stepY = viewport.height * 0.18;
    const point = {
      x: viewport.x + viewport.width / 2,
      y: viewport.y + viewport.height / 2,
    };

    if (event.key === 'ArrowLeft') point.x -= stepX;
    if (event.key === 'ArrowRight') point.x += stepX;
    if (event.key === 'ArrowUp') point.y -= stepY;
    if (event.key === 'ArrowDown') point.y += stepY;
    onNavigate(point);
  }

  canvas.addEventListener('pointerdown', handlePointerDown);
  canvas.addEventListener('pointermove', handlePointerMove);
  canvas.addEventListener('pointerup', stopNavigation);
  canvas.addEventListener('pointercancel', stopNavigation);
  canvas.addEventListener('keydown', handleKeyDown);

  return {
    render(nextSnapshot) {
      snapshot = nextSnapshot;
      draw();
    },
    destroy() {
      canvas.removeEventListener('pointerdown', handlePointerDown);
      canvas.removeEventListener('pointermove', handlePointerMove);
      canvas.removeEventListener('pointerup', stopNavigation);
      canvas.removeEventListener('pointercancel', stopNavigation);
      canvas.removeEventListener('keydown', handleKeyDown);
    },
  };
}
