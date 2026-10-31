import { zoomBoardCameraAtClientPoint } from './board-coordinate-space.js';

function clamp(value, minimum, maximum) {
  return Math.min(maximum, Math.max(minimum, value));
}

export function fitCanvasCameraToRects(
  rects,
  viewport,
  {
    padding = 72,
    minimumScale = 0.35,
    maximumScale = 1.25,
  } = {},
) {
  const valid = (rects || []).filter((rect) => (
    Number.isFinite(rect?.left)
    && Number.isFinite(rect?.top)
    && Number.isFinite(rect?.right)
    && Number.isFinite(rect?.bottom)
  ));
  if (!valid.length || !viewport?.width || !viewport?.height) return null;

  const minX = Math.min(...valid.map(({ left }) => left));
  const minY = Math.min(...valid.map(({ top }) => top));
  const maxX = Math.max(...valid.map(({ right }) => right));
  const maxY = Math.max(...valid.map(({ bottom }) => bottom));
  const contentWidth = Math.max(1, maxX - minX);
  const contentHeight = Math.max(1, maxY - minY);
  const scale = clamp(Math.min(
    Math.max(1, viewport.width - padding * 2) / contentWidth,
    Math.max(1, viewport.height - padding * 2) / contentHeight,
    1,
  ), minimumScale, maximumScale);

  return {
    x: viewport.width / 2 - (minX + maxX) / 2 * scale,
    y: viewport.height / 2 - (minY + maxY) / 2 * scale,
    scale,
  };
}

export function createCanvasViewportController({
  viewport,
  world,
  fitButton = null,
  zoomOutButton = null,
  zoomResetButton = null,
  zoomInButton = null,
  minimumScale = 0.35,
  maximumScale = 1.25,
  zoomStep = 0.15,
  shouldStartPan = (event) => event.button === 0,
  onRender = null,
}) {
  const camera = { x: 0, y: 0, scale: 1 };
  let pan = null;
  let lastFitRects = [];
  let lastFitPadding = 72;

  function render() {
    world.style.transform = `translate3d(${camera.x}px, ${camera.y}px, 0) scale(${camera.scale})`;
    if (zoomResetButton) zoomResetButton.textContent = `${Math.round(camera.scale * 100)}%`;
    if (zoomOutButton) zoomOutButton.disabled = camera.scale <= minimumScale;
    if (zoomInButton) zoomInButton.disabled = camera.scale >= maximumScale;
    onRender?.({ ...camera });
  }

  function reset(nextCamera = { x: 0, y: 0, scale: 1 }) {
    camera.x = Number.isFinite(nextCamera.x) ? nextCamera.x : 0;
    camera.y = Number.isFinite(nextCamera.y) ? nextCamera.y : 0;
    camera.scale = clamp(
      Number.isFinite(nextCamera.scale) ? nextCamera.scale : 1,
      minimumScale,
      maximumScale,
    );
    render();
  }

  function zoomAt(nextScale, point) {
    const bounds = viewport.getBoundingClientRect();
    const next = zoomBoardCameraAtClientPoint(
      camera,
      clamp(nextScale, minimumScale, maximumScale),
      point,
      bounds,
    );
    Object.assign(camera, next);
    render();
  }

  function zoomAtCenter(nextScale) {
    const bounds = viewport.getBoundingClientRect();
    zoomAt(nextScale, {
      x: bounds.left + bounds.width / 2,
      y: bounds.top + bounds.height / 2,
    });
  }

  function fit(rects = lastFitRects, { padding = lastFitPadding } = {}) {
    lastFitRects = rects;
    lastFitPadding = padding;
    const bounds = viewport.getBoundingClientRect();
    const next = fitCanvasCameraToRects(rects, bounds, {
      padding,
      minimumScale,
      maximumScale,
    });
    if (!next) return false;
    Object.assign(camera, next);
    render();
    return true;
  }

  function clientToWorld(point) {
    const bounds = viewport.getBoundingClientRect();
    return {
      x: (point.x - bounds.left - camera.x) / camera.scale,
      y: (point.y - bounds.top - camera.y) / camera.scale,
    };
  }

  function handlePointerDown(event) {
    if (!shouldStartPan(event)) return;
    pan = {
      pointerId: event.pointerId,
      clientX: event.clientX,
      clientY: event.clientY,
      cameraX: camera.x,
      cameraY: camera.y,
    };
    viewport.classList.add('is-panning');
    viewport.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event) {
    if (!pan || event.pointerId !== pan.pointerId) return;
    camera.x = pan.cameraX + event.clientX - pan.clientX;
    camera.y = pan.cameraY + event.clientY - pan.clientY;
    render();
  }

  function finishPan(event) {
    if (!pan || event.pointerId !== pan.pointerId) return;
    pan = null;
    viewport.classList.remove('is-panning');
  }

  function handleWheel(event) {
    event.preventDefault();
    zoomAt(camera.scale + (event.deltaY > 0 ? -zoomStep : zoomStep), {
      x: event.clientX,
      y: event.clientY,
    });
  }

  const handleFit = () => fit();
  const handleZoomOut = () => zoomAtCenter(camera.scale - zoomStep);
  const handleZoomReset = () => zoomAtCenter(1);
  const handleZoomIn = () => zoomAtCenter(camera.scale + zoomStep);

  viewport.addEventListener('pointerdown', handlePointerDown);
  viewport.addEventListener('pointermove', handlePointerMove);
  viewport.addEventListener('pointerup', finishPan);
  viewport.addEventListener('pointercancel', finishPan);
  viewport.addEventListener('wheel', handleWheel, { passive: false });
  fitButton?.addEventListener('click', handleFit);
  zoomOutButton?.addEventListener('click', handleZoomOut);
  zoomResetButton?.addEventListener('click', handleZoomReset);
  zoomInButton?.addEventListener('click', handleZoomIn);
  render();

  return {
    clientToWorld,
    fit,
    getCamera: () => camera,
    render,
    reset,
    zoomAt,
    zoomAtCenter,
    destroy() {
      viewport.removeEventListener('pointerdown', handlePointerDown);
      viewport.removeEventListener('pointermove', handlePointerMove);
      viewport.removeEventListener('pointerup', finishPan);
      viewport.removeEventListener('pointercancel', finishPan);
      viewport.removeEventListener('wheel', handleWheel);
      fitButton?.removeEventListener('click', handleFit);
      zoomOutButton?.removeEventListener('click', handleZoomOut);
      zoomResetButton?.removeEventListener('click', handleZoomReset);
      zoomInButton?.removeEventListener('click', handleZoomIn);
    },
  };
}

