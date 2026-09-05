import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import { createSpatialGraphLayout } from './spatial-graph-layout.js';
import {
  SpatialLayoutMode,
  normalizeSpatialLayoutMode,
} from './spatial-layout-mode.js';
import {
  SpatialGraphTransitionKind,
  normalizeSpatialGraphTransition,
} from './spatial-graph-transition.js';
import { readSpatialGamepad } from './gamepad-input.js';
import { MAX_THOUGHTS } from './app-limits.js';

const MAX_VISIBLE_LABELS = 60;
const MAX_VISIBLE_CONNECTIONS = 8000;
const NODE_HIT_PADDING = 8;
const DRAG_THRESHOLD = 5;
const CAMERA_TWEEN_DURATION = 280;
const MAX_KEYBOARD_PAN_DELTA_SECONDS = 0.05;
const CAMERA_TRANSLATION_SPEED_FACTOR = 1.15;
const MIN_CAMERA_TRANSLATION_SPEED = 90;
const MAX_CAMERA_TRANSLATION_SPEED = 1600;
const MAX_GAMEPAD_DELTA_SECONDS = 0.05;
const GAMEPAD_LOOK_SPEED = 1.8;
const GAMEPAD_ROLL_SPEED = 1.6;
const GAMEPAD_UI_TIMEOUT = 2200;
const CONNECTION_SOURCE_COLOR = 0x7055c5;
const CONNECTION_TARGET_COLOR = 0x248af0;

const KEYBOARD_PAN_CODES = new Set([
  'KeyW',
  'KeyA',
  'KeyS',
  'KeyD',
  'ArrowUp',
  'ArrowLeft',
  'ArrowDown',
  'ArrowRight',
]);

const KIND_COLORS = Object.freeze({
  thought: 0x7055c5,
  observation: 0x2477aa,
  excerpt: 0x596d9c,
  question: 0xa06a0a,
  hypothesis: 0x7a4bc0,
  quote: 0xa34f6c,
  link: 0x267d76,
  research_result: 0x36785a,
});

const KIND_CSS_COLORS = Object.freeze({
  thought: '#7055c5',
  observation: '#2477aa',
  excerpt: '#596d9c',
  question: '#a06a0a',
  hypothesis: '#7a4bc0',
  quote: '#a34f6c',
  link: '#267d76',
  research_result: '#36785a',
});

function finitePosition(value) {
  return Boolean(
    value
    && Number.isFinite(value.x)
    && Number.isFinite(value.y)
    && Number.isFinite(value.z),
  );
}

function normalizeCameraRoll(value) {
  if (!Number.isFinite(value)) return 0;
  return Math.atan2(Math.sin(value), Math.cos(value));
}

function loadJson(storageKey) {
  try {
    return JSON.parse(localStorage.getItem(storageKey));
  } catch {
    return null;
  }
}

function loadCameraState(storageKey) {
  const stored = loadJson(storageKey);
  if (!finitePosition(stored?.position) || !finitePosition(stored?.target)) return null;
  return {
    ...stored,
    roll: normalizeCameraRoll(stored.roll),
  };
}

function loadLayoutState(storageKey) {
  const stored = loadJson(storageKey);
  if (stored?.version !== 1 || typeof stored.positions !== 'object') return {};

  return Object.fromEntries(
    Object.entries(stored.positions)
      .filter(([, position]) => finitePosition(position))
      .slice(0, MAX_THOUGHTS),
  );
}

function createLabelPool(layer) {
  return Array.from({ length: MAX_VISIBLE_LABELS }, () => {
    const label = document.createElement('span');
    label.className = 'spatial-label';
    label.hidden = true;
    layer.append(label);
    return label;
  });
}

function linkEndpointId(endpoint, fallbackId) {
  return typeof endpoint === 'object' && endpoint ? endpoint.id : fallbackId;
}

export function createSpatialView({
  container,
  theme = 'light',
  storageKey,
  layoutStorageKey,
  layoutMode = SpatialLayoutMode.CONSTELLATIONS,
  onThoughtSelect = () => {},
  onConnectionTargetToggle = () => {},
  onThoughtActivate = () => {},
  onThoughtMove = () => {},
  onDismissRequest = () => {},
  onError = () => {},
}) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(48, 1, 1, 10000);
  camera.up.set(0, 1, 0);
  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance',
  });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  renderer.domElement.className = 'spatial-canvas';
  renderer.domElement.setAttribute('aria-hidden', 'true');

  const labelLayer = document.createElement('div');
  labelLayer.className = 'spatial-label-layer';
  const labels = createLabelPool(labelLayer);
  const gamepadReticle = document.createElement('span');
  gamepadReticle.className = 'spatial-gamepad-reticle';
  gamepadReticle.setAttribute('aria-hidden', 'true');
  container.prepend(renderer.domElement, labelLayer, gamepadReticle);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.075;
  controls.minDistance = 90;
  controls.maxDistance = 5000;
  controls.minPolarAngle = THREE.MathUtils.degToRad(10);
  controls.maxPolarAngle = THREE.MathUtils.degToRad(170);
  controls.screenSpacePanning = true;

  const storedCamera = loadCameraState(storageKey);
  if (storedCamera) {
    camera.position.set(
      storedCamera.position.x,
      storedCamera.position.y,
      storedCamera.position.z,
    );
    controls.target.set(
      storedCamera.target.x,
      storedCamera.target.y,
      storedCamera.target.z,
    );
  } else {
    camera.position.set(0, 160, 720);
    controls.target.set(0, 0, 0);
  }
  controls.update();

  const nodeGeometry = new THREE.IcosahedronGeometry(1, 2);
  const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const nodeMesh = new THREE.InstancedMesh(
    nodeGeometry,
    nodeMaterial,
    MAX_THOUGHTS,
  );
  nodeMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  nodeMesh.frustumCulled = false;
  nodeMesh.count = 0;
  scene.add(nodeMesh);

  const hitMaterial = new THREE.MeshBasicMaterial({
    colorWrite: false,
    depthWrite: false,
    transparent: true,
    opacity: 0,
  });
  const hitMesh = new THREE.InstancedMesh(
    nodeGeometry,
    hitMaterial,
    MAX_THOUGHTS,
  );
  hitMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  hitMesh.frustumCulled = false;
  hitMesh.count = 0;
  scene.add(hitMesh);

  const edgeGeometry = new THREE.BufferGeometry();
  const edgeMaterial = new THREE.LineBasicMaterial({
    color: theme === 'dark' ? 0xaaa4bd : 0x8d91aa,
    transparent: true,
    opacity: theme === 'dark' ? 0.5 : 0.42,
  });
  const edgeLines = new THREE.LineSegments(edgeGeometry, edgeMaterial);
  edgeLines.frustumCulled = false;
  scene.add(edgeLines);

  const activeEdgeGeometry = new THREE.BufferGeometry();
  const activeEdgeMaterial = new THREE.LineBasicMaterial({
    color: theme === 'dark' ? 0x9d84ef : 0x7055c5,
    transparent: true,
    opacity: 0.9,
  });
  const activeEdgeLines = new THREE.LineSegments(
    activeEdgeGeometry,
    activeEdgeMaterial,
  );
  activeEdgeLines.frustumCulled = false;
  scene.add(activeEdgeLines);

  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  const matrix = new THREE.Matrix4();
  const position = new THREE.Vector3();
  const scale = new THREE.Vector3(1, 1, 1);
  const identityQuaternion = new THREE.Quaternion();
  const color = new THREE.Color();
  const backgroundColor = new THREE.Color(
    theme === 'dark' ? 0x17151f : 0xdedbea,
  );
  const white = new THREE.Color(0xffffff);
  const projection = new THREE.Matrix4();
  const frustum = new THREE.Frustum();
  const projected = new THREE.Vector3();
  const dragPlane = new THREE.Plane();
  const dragPoint = new THREE.Vector3();
  const dragOffset = new THREE.Vector3();
  const cameraDirection = new THREE.Vector3();
  const cameraRight = new THREE.Vector3();
  const cameraUp = new THREE.Vector3();
  const cameraTranslation = new THREE.Vector3();
  const gamepadSpherical = new THREE.Spherical();

  let nodes = [];
  let links = [];
  let nodesById = new Map();
  let thoughtIdByInstance = [];
  let instanceByThoughtId = new Map();
  let selectedThoughtId = null;
  let hoveredThoughtId = null;
  let neighbourIds = new Set();
  let connectionSelection = null;
  let active = false;
  let renderFrame = null;
  let drag = null;
  let cameraTween = null;
  let viewportTransition = null;
  let keyboardPanLastTimestamp = null;
  let keyboardPanMoved = false;
  let gamepadPollFrame = null;
  let gamepadButtons = [];
  let gamepadLastTimestamp = null;
  let gamepadMoved = false;
  let gamepadLastActivityAt = 0;
  let gamepadAimedThoughtId = null;
  let cameraRoll = storedCamera?.roll ?? 0;
  let controlsInteracting = false;
  let activeLayoutMode = normalizeSpatialLayoutMode(layoutMode);
  let layoutCache = loadLayoutState(`${layoutStorageKey}${activeLayoutMode}`);
  let initialFitPending = !storedCamera;
  let fitAfterLayout = false;
  let nodeInstancesDirty = true;
  let edgeGeometryDirty = true;

  const pressedKeyboardPanCodes = new Set();

  function getCameraState({ settled = false } = {}) {
    // A quick next/Back action should remember the intended destination,
    // rather than an arbitrary frame halfway through a focus transition.
    const position = settled && cameraTween ? cameraTween.toPosition : camera.position;
    const target = settled && cameraTween ? cameraTween.toTarget : controls.target;
    return {
      position: { x: position.x, y: position.y, z: position.z },
      target: { x: target.x, y: target.y, z: target.z },
      roll: cameraRoll,
    };
  }

  function saveCamera() {
    try {
      localStorage.setItem(storageKey, JSON.stringify(getCameraState()));
    } catch {
      // Camera persistence is optional; rendering should continue without it.
    }
  }

  function saveLayout(nextNodes = nodes) {
    layoutCache = Object.fromEntries(
      nextNodes.slice(0, MAX_THOUGHTS).map((node) => [node.id, {
        x: Math.round(node.x * 100) / 100,
        y: Math.round(node.y * 100) / 100,
        z: Math.round(node.z * 100) / 100,
      }]),
    );

    try {
      localStorage.setItem(`${layoutStorageKey}${activeLayoutMode}`, JSON.stringify({
        version: 1,
        positions: layoutCache,
      }));
    } catch {
      // The graph can be recalculated if storage is unavailable.
    }
  }

  function updateNeighbourIds() {
    neighbourIds = new Set();
    if (!selectedThoughtId) return;

    links.forEach((link) => {
      const sourceId = linkEndpointId(link.source, link.sourceId);
      const targetId = linkEndpointId(link.target, link.targetId);
      if (sourceId === selectedThoughtId) neighbourIds.add(targetId);
      if (targetId === selectedThoughtId) neighbourIds.add(sourceId);
    });
  }

  function requestRender() {
    if (!active || renderFrame !== null) return;
    renderFrame = requestAnimationFrame(renderNow);
  }

  function setTheme(nextTheme) {
    theme = nextTheme === 'dark' ? 'dark' : 'light';
    const dark = theme === 'dark';
    backgroundColor.set(dark ? 0x17151f : 0xdedbea);
    edgeMaterial.color.set(dark ? 0xaaa4bd : 0x8d91aa);
    edgeMaterial.opacity = dark ? 0.5 : 0.42;
    activeEdgeMaterial.color.set(dark ? 0x9d84ef : 0x7055c5);
    edgeMaterial.needsUpdate = true;
    activeEdgeMaterial.needsUpdate = true;
    nodeInstancesDirty = true;
    edgeGeometryDirty = true;
    requestRender();
  }

  function preserveViewportAnchor() {
    if (
      viewportTransition?.kind
        !== SpatialGraphTransitionKind.INSERT_LINKED_NODE
    ) return;

    const anchor = nodesById.get(viewportTransition.anchorId);
    if (!anchor) return;
    const currentPosition = new THREE.Vector3(anchor.x, anchor.y, anchor.z);
    const delta = currentPosition.clone().sub(viewportTransition.previousPosition);
    if (delta.lengthSq() > 0.000001) {
      camera.position.add(delta);
      controls.target.add(delta);
    }
    viewportTransition.previousPosition.copy(currentPosition);
  }

  const layout = createSpatialGraphLayout({
    onTick(nextNodes, nextLinks) {
      nodes = nextNodes;
      links = nextLinks;
      nodesById = new Map(nodes.map((node) => [node.id, node]));
      preserveViewportAnchor();
      updateNeighbourIds();
      nodeInstancesDirty = true;
      edgeGeometryDirty = true;
      requestRender();
    },
    onStable(nextNodes, { transition } = {}) {
      saveLayout(nextNodes);
      if ((initialFitPending || fitAfterLayout) && nextNodes.length) {
        initialFitPending = false;
        fitAfterLayout = false;
        fitAll();
      }
      if (viewportTransition) {
        const preservedViewport = transition?.nodeId === viewportTransition.nodeId;
        viewportTransition = null;
        if (preservedViewport) saveCamera();
      }
      requestRender();
    },
  });

  function updateRaycaster(x, y) {
    pointer.set(x, y);
    camera.updateMatrixWorld();
    raycaster.setFromCamera(pointer, camera);
  }

  function pickThoughtAtNdc(x, y) {
    updateRaycaster(x, y);
    const [hit] = raycaster.intersectObject(hitMesh);
    if (hit?.instanceId === undefined) return null;
    return thoughtIdByInstance[hit.instanceId] || null;
  }

  function updatePointer(event) {
    const bounds = renderer.domElement.getBoundingClientRect();
    updateRaycaster(
      ((event.clientX - bounds.left) / Math.max(1, bounds.width)) * 2 - 1,
      -((event.clientY - bounds.top) / Math.max(1, bounds.height)) * 2 + 1,
    );
  }

  function pickThought(event) {
    updatePointer(event);
    const [hit] = raycaster.intersectObject(hitMesh);
    if (hit?.instanceId === undefined) return null;
    return thoughtIdByInstance[hit.instanceId] || null;
  }

  function updateNodeInstances() {
    if (!nodeInstancesDirty) return;
    nodes.forEach((node) => {
      const instanceId = instanceByThoughtId.get(node.id);
      if (instanceId === undefined) return;

      const selected = node.id === selectedThoughtId;
      const hovered = node.id === hoveredThoughtId;
      const connectionSource = node.id === connectionSelection?.sourceId;
      const connectionTarget = connectionSelection?.targetIds.has(node.id) === true;
      const dimmedByConnectionSelection = Boolean(
        connectionSelection && !connectionSource && !connectionTarget,
      );
      const dimmedByThoughtSelection = Boolean(
        selectedThoughtId
        && !selected
        && !neighbourIds.has(node.id),
      );
      const dimmed = dimmedByConnectionSelection || (
        !connectionSelection && dimmedByThoughtSelection
      );
      const visualScale = connectionSource
        ? 1.38
        : connectionTarget
          ? 1.23
          : selected
            ? 1.34
            : hovered
              ? 1.17
              : dimmed
                ? 0.76
                : 1;
      const radius = Math.max(5, node.radius || 7);

      position.set(node.x, node.y, node.z);
      scale.setScalar(radius * visualScale);
      matrix.compose(position, identityQuaternion, scale);
      nodeMesh.setMatrixAt(instanceId, matrix);

      scale.setScalar(radius * visualScale + NODE_HIT_PADDING);
      matrix.compose(position, identityQuaternion, scale);
      hitMesh.setMatrixAt(instanceId, matrix);

      color.setHex(
        connectionSource
          ? CONNECTION_SOURCE_COLOR
          : connectionTarget
            ? CONNECTION_TARGET_COLOR
            : KIND_COLORS[node.kind] || KIND_COLORS.thought,
      );
      if (dimmed) color.lerp(backgroundColor, 0.68);
      else if (selected) color.lerp(white, 0.2);
      else if (hovered) color.lerp(white, 0.1);
      nodeMesh.setColorAt(instanceId, color);
    });

    nodeMesh.instanceMatrix.needsUpdate = true;
    hitMesh.instanceMatrix.needsUpdate = true;
    hitMesh.computeBoundingSphere();
    if (nodeMesh.instanceColor) nodeMesh.instanceColor.needsUpdate = true;
    nodeInstancesDirty = false;
  }

  function updateEdgeGeometry() {
    if (!edgeGeometryDirty) return;
    const basePositions = [];
    const activePositions = [];

    links.slice(0, MAX_VISIBLE_CONNECTIONS).forEach((link) => {
      const source = typeof link.source === 'object'
        ? link.source
        : nodesById.get(link.sourceId);
      const target = typeof link.target === 'object'
        ? link.target
        : nodesById.get(link.targetId);
      if (!source || !target) return;

      const sourceIsEditing = source.id === connectionSelection?.sourceId;
      const targetIsSelected = connectionSelection?.targetIds.has(target.id) === true;
      if (sourceIsEditing && !targetIsSelected) return;

      const highlighted = Boolean(
        sourceIsEditing && targetIsSelected,
      ) || Boolean(
        selectedThoughtId
        && (source.id === selectedThoughtId || target.id === selectedThoughtId),
      );
      const positions = highlighted ? activePositions : basePositions;
      positions.push(source.x, source.y, source.z, target.x, target.y, target.z);
    });

    if (connectionSelection) {
      const source = nodesById.get(connectionSelection.sourceId);
      const existingTargetIds = new Set(
        links
          .filter((link) => (
            linkEndpointId(link.source, link.sourceId) === connectionSelection.sourceId
          ))
          .map((link) => linkEndpointId(link.target, link.targetId)),
      );
      if (source) {
        connectionSelection.targetIds.forEach((targetId) => {
          if (existingTargetIds.has(targetId)) return;
          const target = nodesById.get(targetId);
          if (target) {
            activePositions.push(
              source.x, source.y, source.z,
              target.x, target.y, target.z,
            );
          }
        });
      }
    }

    edgeGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(basePositions, 3),
    );
    activeEdgeGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(activePositions, 3),
    );
    edgeMaterial.opacity = selectedThoughtId || connectionSelection ? 0.1 : 0.42;
    edgeGeometryDirty = false;
  }

  function updateLabels() {
    projection.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
    frustum.setFromProjectionMatrix(projection);

    const width = Math.max(1, container.clientWidth);
    const height = Math.max(1, container.clientHeight);
    const candidates = nodes
      .filter((node) => {
        position.set(node.x, node.y, node.z);
        return frustum.containsPoint(position);
      })
      .sort((first, second) => {
        const priority = (node) => {
          if (node.id === connectionSelection?.sourceId) return 0;
          if (connectionSelection?.targetIds.has(node.id)) return 1;
          if (node.id === selectedThoughtId) return 0;
          if (neighbourIds.has(node.id)) return 2;
          if (node.id === hoveredThoughtId) return 3;
          return 4;
        };
        const priorityDifference = priority(first) - priority(second);
        if (priorityDifference) return priorityDifference;
        const connectionDifference = (second.connectionCount || 0) - (first.connectionCount || 0);
        if (connectionDifference) return connectionDifference;
        return camera.position.distanceToSquared(first) - camera.position.distanceToSquared(second);
      })
      .filter((node) => (
        connectionSelection
        || !selectedThoughtId
        || node.id === selectedThoughtId
        || neighbourIds.has(node.id)
        || node.id === hoveredThoughtId
      ))
      .map((node) => {
        projected.set(node.x, node.y, node.z).project(camera);
        const distance = camera.position.distanceTo(node);
        const labelScale = THREE.MathUtils.clamp(760 / Math.max(520, distance), 0.72, 1);
        return {
          node,
          x: (projected.x * 0.5 + 0.5) * width,
          y: (-projected.y * 0.5 + 0.5) * height,
          labelScale,
        };
      });

    const occupied = [];
    const visible = [];
    candidates.some((candidate) => {
      if (visible.length >= MAX_VISIBLE_LABELS) return true;
      const { node, x, y, labelScale } = candidate;
      const estimatedWidth = THREE.MathUtils.clamp(node.text.length * 6.4, 42, 220)
        * labelScale;
      const box = {
        left: x - (estimatedWidth / 2) - 7,
        right: x + (estimatedWidth / 2) + 7,
        top: y - (34 * labelScale),
        bottom: y - (8 * labelScale),
      };
      const overlaps = occupied.some((other) => !(
        box.right < other.left
        || box.left > other.right
        || box.bottom < other.top
        || box.top > other.bottom
      ));
      const isPriority = (
        node.id === connectionSelection?.sourceId
        || connectionSelection?.targetIds.has(node.id)
        || node.id === selectedThoughtId
        || node.id === hoveredThoughtId
      );
      if (!overlaps || isPriority) {
        visible.push(candidate);
        occupied.push(box);
      }
      return false;
    });

    labels.forEach((label, index) => {
      const candidate = visible[index];
      if (!candidate) {
        label.hidden = true;
        return;
      }

      const {
        node, x, y, labelScale,
      } = candidate;

      label.hidden = false;
      label.textContent = node.text;
      label.dataset.thoughtId = node.id;
      label.classList.toggle('is-selected', node.id === selectedThoughtId);
      label.classList.toggle('is-neighbour', neighbourIds.has(node.id));
      label.classList.toggle('is-connection-source', node.id === connectionSelection?.sourceId);
      label.classList.toggle(
        'is-connection-target',
        connectionSelection?.targetIds.has(node.id) === true,
      );
      label.style.setProperty(
        '--spatial-kind-color',
        KIND_CSS_COLORS[node.kind] || KIND_CSS_COLORS.thought,
      );
      label.style.transform = `translate(-50%, calc(-100% - 12px)) translate3d(${x}px, ${y}px, 0) scale(${labelScale})`;
    });
  }

  function updateCameraTween(timestamp) {
    if (!cameraTween) return false;
    const progress = Math.min(1, (timestamp - cameraTween.startedAt) / cameraTween.duration);
    const eased = 1 - ((1 - progress) ** 3);

    camera.position.lerpVectors(cameraTween.fromPosition, cameraTween.toPosition, eased);
    controls.target.lerpVectors(cameraTween.fromTarget, cameraTween.toTarget, eased);
    if (progress < 1) return true;

    cameraTween = null;
    controls.enabled = active && !drag;
    controls.update();
    saveCamera();
    return false;
  }

  function clearKeyboardPan({ persist = true } = {}) {
    const shouldPersist = persist && keyboardPanMoved;
    pressedKeyboardPanCodes.clear();
    keyboardPanLastTimestamp = null;
    keyboardPanMoved = false;
    if (shouldPersist) saveCamera();
  }

  function keyboardPanAxis() {
    const horizontal = (
      Number(
        pressedKeyboardPanCodes.has('KeyD')
        || pressedKeyboardPanCodes.has('ArrowRight'),
      )
      - Number(
        pressedKeyboardPanCodes.has('KeyA')
        || pressedKeyboardPanCodes.has('ArrowLeft'),
      )
    );
    const vertical = (
      Number(
        pressedKeyboardPanCodes.has('KeyW')
        || pressedKeyboardPanCodes.has('ArrowUp'),
      )
      - Number(
        pressedKeyboardPanCodes.has('KeyS')
        || pressedKeyboardPanCodes.has('ArrowDown'),
      )
    );

    return { horizontal, vertical };
  }

  function translateCamera(horizontal, vertical, forward, deltaSeconds) {
    if (!horizontal && !vertical && !forward) return false;

    camera.getWorldDirection(cameraDirection).normalize();
    cameraRight
      .set(1, 0, 0)
      .applyQuaternion(camera.quaternion)
      .normalize();
    cameraUp
      .set(0, 1, 0)
      .applyQuaternion(camera.quaternion)
      .normalize();
    cameraTranslation
      .copy(cameraRight)
      .multiplyScalar(horizontal)
      .addScaledVector(cameraUp, vertical)
      .addScaledVector(cameraDirection, forward);

    const magnitude = cameraTranslation.length();
    if (magnitude < 0.0001) return false;
    if (magnitude > 1) cameraTranslation.divideScalar(magnitude);

    const speed = THREE.MathUtils.clamp(
      camera.position.distanceTo(controls.target) * CAMERA_TRANSLATION_SPEED_FACTOR,
      MIN_CAMERA_TRANSLATION_SPEED,
      MAX_CAMERA_TRANSLATION_SPEED,
    );
    cameraTranslation.multiplyScalar(speed * deltaSeconds);

    camera.position.add(cameraTranslation);
    controls.target.add(cameraTranslation);
    return true;
  }

  function updateKeyboardPan(timestamp) {
    if (
      !active
      || drag
      || cameraTween
      || !pressedKeyboardPanCodes.size
    ) {
      keyboardPanLastTimestamp = timestamp;
      return false;
    }

    const previousTimestamp = keyboardPanLastTimestamp ?? timestamp;
    keyboardPanLastTimestamp = timestamp;
    const deltaSeconds = Math.min(
      MAX_KEYBOARD_PAN_DELTA_SECONDS,
      Math.max(0, (timestamp - previousTimestamp) / 1000),
    );
    if (!deltaSeconds) return true;

    const { horizontal, vertical } = keyboardPanAxis();
    const moved = translateCamera(horizontal, vertical, 0, deltaSeconds);
    if (moved) keyboardPanMoved = true;
    return moved;
  }

  function lookCamera(horizontal, vertical, deltaSeconds) {
    if (!horizontal && !vertical) return false;

    const lookDistance = camera.position.distanceTo(controls.target);
    if (lookDistance < 0.001) return false;

    const cosRoll = Math.cos(cameraRoll);
    const sinRoll = Math.sin(cameraRoll);
    const localHorizontal = horizontal * cosRoll + vertical * sinRoll;
    const localVertical = vertical * cosRoll - horizontal * sinRoll;

    camera.getWorldDirection(cameraDirection).normalize();
    gamepadSpherical.setFromVector3(cameraDirection);
    gamepadSpherical.theta -= localHorizontal * GAMEPAD_LOOK_SPEED * deltaSeconds;
    gamepadSpherical.phi += localVertical * GAMEPAD_LOOK_SPEED * deltaSeconds;
    gamepadSpherical.phi = THREE.MathUtils.clamp(
      gamepadSpherical.phi,
      controls.minPolarAngle,
      controls.maxPolarAngle,
    );

    cameraDirection.setFromSpherical(gamepadSpherical);
    controls.target
      .copy(camera.position)
      .addScaledVector(cameraDirection, lookDistance);
    return true;
  }

  function rollCamera(direction, deltaSeconds) {
    if (!direction) return false;
    cameraRoll = normalizeCameraRoll(
      cameraRoll + direction * GAMEPAD_ROLL_SPEED * deltaSeconds,
    );
    return true;
  }

  function applyCameraRoll() {
    camera.lookAt(controls.target);
    camera.rotateZ(cameraRoll);
  }

  function setGamepadAim(thoughtId) {
    if (thoughtId === gamepadAimedThoughtId) return;
    if (hoveredThoughtId === gamepadAimedThoughtId) hoveredThoughtId = null;
    gamepadAimedThoughtId = thoughtId;
    if (thoughtId) hoveredThoughtId = thoughtId;
    nodeInstancesDirty = true;
    requestRender();
  }

  function hideGamepadUi() {
    container.classList.remove('is-gamepad-active');
    gamepadLastActivityAt = 0;
    setGamepadAim(null);
  }

  function markGamepadActivity(timestamp) {
    gamepadLastActivityAt = timestamp;
    container.classList.add('is-gamepad-active');
  }

  function updateGamepadAim() {
    setGamepadAim(pickThoughtAtNdc(0, 0));
  }

  function selectThoughtAtGamepadAim() {
    const thoughtId = pickThoughtAtNdc(0, 0);
    setGamepadAim(thoughtId);
    if (!thoughtId) return false;

    if (connectionSelection) {
      if (thoughtId !== connectionSelection.sourceId) {
        onConnectionTargetToggle(thoughtId);
      }
      return true;
    }

    return selectThoughtAndNotify(thoughtId);
  }

  function stopGamepadPolling({ persist = true } = {}) {
    if (gamepadPollFrame !== null) cancelAnimationFrame(gamepadPollFrame);
    gamepadPollFrame = null;
    gamepadButtons = [];
    gamepadLastTimestamp = null;
    if (persist && gamepadMoved) saveCamera();
    gamepadMoved = false;
    hideGamepadUi();
  }

  function readBrowserGamepad(previousButtons = []) {
    try {
      return readSpatialGamepad(
        navigator.getGamepads?.() || [],
        previousButtons,
      );
    } catch {
      return null;
    }
  }

  function pollGamepad(timestamp) {
    gamepadPollFrame = null;
    if (!active || document.hidden) return;

    const state = readBrowserGamepad(gamepadButtons);
    if (!state) {
      stopGamepadPolling();
      return;
    }

    gamepadButtons = state.buttons;
    const previousTimestamp = gamepadLastTimestamp ?? timestamp;
    gamepadLastTimestamp = timestamp;
    const deltaSeconds = Math.min(
      MAX_GAMEPAD_DELTA_SECONDS,
      Math.max(0, (timestamp - previousTimestamp) / 1000),
    );
    const hasCameraInput = Boolean(
      state.leftStick.x
      || state.leftStick.y
      || state.rightStick.x
      || state.rightStick.y
      || state.thrust
      || state.roll,
    );
    const hasButtonInput = Boolean(
      state.selectPressed
      || state.backPressed
      || state.focusPressed
      || state.fitAllPressed,
    );
    const hasInput = hasCameraInput || hasButtonInput;

    if (hasInput) markGamepadActivity(timestamp);
    if (
      gamepadLastActivityAt
      && timestamp - gamepadLastActivityAt > GAMEPAD_UI_TIMEOUT
    ) hideGamepadUi();

    if (hasCameraInput && cameraTween) {
      cameraTween = null;
      controls.enabled = active && !drag;
    }

    let moved = false;
    if (
      !drag
      && !controlsInteracting
      && !pressedKeyboardPanCodes.size
      && deltaSeconds
    ) {
      const translated = translateCamera(
        state.leftStick.x,
        -state.leftStick.y,
        state.thrust,
        deltaSeconds,
      );
      const looked = lookCamera(
        state.rightStick.x,
        state.rightStick.y,
        deltaSeconds,
      );
      const rolled = rollCamera(state.roll, deltaSeconds);
      moved = translated || looked || rolled;
    }

    if (!drag && !controlsInteracting) {
      if (state.fitAllPressed) fitAll();
      if (state.focusPressed && selectedThoughtId) focusThought(selectedThoughtId);
      if (state.selectPressed) selectThoughtAtGamepadAim();
      if (state.backPressed) onDismissRequest();
    }

    if (moved) {
      gamepadMoved = true;
      updateGamepadAim();
      requestRender();
    } else if (gamepadMoved) {
      gamepadMoved = false;
      saveCamera();
    } else if (container.classList.contains('is-gamepad-active')) {
      updateGamepadAim();
    }

    gamepadPollFrame = requestAnimationFrame(pollGamepad);
  }

  function startGamepadPolling() {
    if (
      !active
      || document.hidden
      || gamepadPollFrame !== null
      || typeof navigator.getGamepads !== 'function'
    ) return;

    const state = readBrowserGamepad();
    if (!state) return;
    gamepadButtons = state.buttons;
    gamepadLastTimestamp = null;
    gamepadPollFrame = requestAnimationFrame(pollGamepad);
  }

  function handleGamepadConnected(event) {
    if (event.gamepad?.mapping !== 'standard') return;
    startGamepadPolling();
  }

  function handleGamepadDisconnected() {
    stopGamepadPolling();
    startGamepadPolling();
  }

  function focusSpatialViewport() {
    hideGamepadUi();
    container.focus({ preventScroll: true });
  }

  function handleKeyboardPanKeyDown(event) {
    if (
      !active
      || drag
      || connectionSelection
      || event.target !== container
      || !KEYBOARD_PAN_CODES.has(event.code)
    ) return;

    event.preventDefault();
    event.stopPropagation();
    hideGamepadUi();

    if (cameraTween) {
      cameraTween = null;
      controls.enabled = active && !drag;
    }

    pressedKeyboardPanCodes.add(event.code);
    keyboardPanLastTimestamp = null;
    requestRender();
  }

  function handleKeyboardPanKeyUp(event) {
    if (!pressedKeyboardPanCodes.delete(event.code)) return;
    if (!pressedKeyboardPanCodes.size && keyboardPanMoved) {
      keyboardPanMoved = false;
      saveCamera();
    }
  }

  function renderNow(timestamp) {
    renderFrame = null;
    if (!active || document.hidden) return;

    const tweening = updateCameraTween(timestamp);
    const keyboardPanning = updateKeyboardPan(timestamp);
    const controlsChanged = controls.update();
    applyCameraRoll();
    camera.updateMatrixWorld();
    updateNodeInstances();
    updateEdgeGeometry();
    updateLabels();
    renderer.render(scene, camera);

    if (tweening || keyboardPanning || controlsChanged) requestRender();
  }

  function setGraph(
    {
      nodes: sourceNodes = [],
      links: sourceLinks = [],
      layoutMode: nextLayoutMode = activeLayoutMode,
      fitAfterLayout: shouldFitAfterLayout = false,
    },
    { transition: requestedTransition = null } = {},
  ) {
    const transition = normalizeSpatialGraphTransition(requestedTransition);
    const anchor = transition.kind === SpatialGraphTransitionKind.INSERT_LINKED_NODE
      ? nodesById.get(transition.anchorId)
      : null;
    viewportTransition = anchor
      ? {
          ...transition,
          previousPosition: new THREE.Vector3(anchor.x, anchor.y, anchor.z),
        }
      : null;
    const normalizedLayoutMode = normalizeSpatialLayoutMode(nextLayoutMode);
    if (normalizedLayoutMode !== activeLayoutMode) {
      activeLayoutMode = normalizedLayoutMode;
      layoutCache = loadLayoutState(`${layoutStorageKey}${activeLayoutMode}`);
    }
    fitAfterLayout ||= shouldFitAfterLayout;
    const preparedNodes = sourceNodes
      .slice(0, MAX_THOUGHTS)
      .map((node) => {
        const cached = layoutCache[node.id];
        return {
          ...node,
          ...(!finitePosition(node.pinnedPosition) && finitePosition(cached) ? cached : {}),
          radius: Math.max(5, Number.isFinite(node.radius) ? node.radius : 7),
        };
      });
    const availableIds = new Set(preparedNodes.map((node) => node.id));
    const preparedLinks = sourceLinks.filter((link) => (
      availableIds.has(link.sourceId)
      && availableIds.has(link.targetId)
    ));

    thoughtIdByInstance = preparedNodes.map((node) => node.id);
    instanceByThoughtId = new Map(
      thoughtIdByInstance.map((thoughtId, instanceId) => [thoughtId, instanceId]),
    );
    nodeMesh.count = preparedNodes.length;
    hitMesh.count = preparedNodes.length;

    layout.setGraph(
      {
        nodes: preparedNodes,
        links: preparedLinks,
        layoutMode: activeLayoutMode,
      },
      { transition },
    );
    nodes = layout.getNodes();
    links = layout.getLinks();
    nodesById = new Map(nodes.map((node) => [node.id, node]));
    if (!nodesById.has(selectedThoughtId)) selectedThoughtId = null;
    updateNeighbourIds();
    nodeInstancesDirty = true;
    edgeGeometryDirty = true;
    if (initialFitPending && nodes.length) fitAll();
    requestRender();
  }

  function setSelectedThought(thoughtId) {
    selectedThoughtId = nodesById.has(thoughtId) ? thoughtId : null;
    updateNeighbourIds();
    nodeInstancesDirty = true;
    edgeGeometryDirty = true;
    requestRender();
  }

  function selectThoughtAndNotify(thoughtId) {
    if (!nodesById.has(thoughtId)) return false;
    // The app owns selection and navigation history; it calls setSelectedThought.
    onThoughtSelect(thoughtId);
    return true;
  }

  function setConnectionSelection(selection) {
    connectionSelection = selection && typeof selection.sourceId === 'string'
      ? {
          sourceId: selection.sourceId,
          targetIds: new Set(selection.targetIds || []),
        }
      : null;
    renderer.domElement.classList.toggle(
      'is-connection-selecting',
      Boolean(connectionSelection),
    );
    nodeInstancesDirty = true;
    edgeGeometryDirty = true;
    requestRender();
  }

  function clearCameraMotion() {
    const position = camera.position.clone();
    const target = controls.target.clone();
    const damping = controls.enableDamping;
    cameraTween = null;
    viewportTransition = null;
    initialFitPending = false;
    fitAfterLayout = false;
    clearKeyboardPan({ persist: false });

    // Flush OrbitControls inertia through its public API without changing
    // the visible camera position or depending on private control fields.
    controls.enableDamping = false;
    controls.update();
    camera.position.copy(position);
    controls.target.copy(target);
    controls.update();
    controls.enableDamping = damping;
  }

  function startCameraTween(toPosition, toTarget, duration = CAMERA_TWEEN_DURATION) {
    clearCameraMotion();
    cameraTween = {
      fromPosition: camera.position.clone(),
      fromTarget: controls.target.clone(),
      toPosition: toPosition.clone(),
      toTarget: toTarget.clone(),
      duration,
      startedAt: performance.now(),
    };
    controls.enabled = false;
    requestRender();
  }

  function restoreCameraState(state) {
    if (drag || !finitePosition(state?.position) || !finitePosition(state?.target)) {
      return false;
    }
    const position = new THREE.Vector3().copy(state.position);
    const target = new THREE.Vector3().copy(state.target);
    if (position.distanceToSquared(target) < 0.000001) return false;
    cameraRoll = normalizeCameraRoll(state.roll);
    startCameraTween(position, target);
    return true;
  }

  function focusThought(thoughtId) {
    const node = nodesById.get(thoughtId);
    if (!node) return false;

    cameraDirection.copy(camera.position).sub(controls.target);
    if (cameraDirection.lengthSq() < 0.001) cameraDirection.set(0, 0, 1);
    cameraDirection.normalize();
    const target = new THREE.Vector3(node.x, node.y, node.z);
    const distance = THREE.MathUtils.clamp(
      camera.position.distanceTo(controls.target),
      240,
      520,
    );
    const destination = target.clone().addScaledVector(cameraDirection, distance);
    startCameraTween(destination, target);
    return true;
  }

  function fitAll() {
    if (!nodes.length) return false;
    const box = new THREE.Box3();
    nodes.forEach((node) => {
      const radius = Math.max(5, node.radius || 7);
      box.expandByPoint(new THREE.Vector3(node.x - radius, node.y - radius, node.z - radius));
      box.expandByPoint(new THREE.Vector3(node.x + radius, node.y + radius, node.z + radius));
    });
    const sphere = box.getBoundingSphere(new THREE.Sphere());
    cameraDirection.copy(camera.position).sub(controls.target);
    if (cameraDirection.lengthSq() < 0.001) cameraDirection.set(0, 0, 1);
    cameraDirection.normalize();
    const halfFov = THREE.MathUtils.degToRad(camera.fov * 0.5);
    const distance = THREE.MathUtils.clamp(
      (sphere.radius / Math.max(0.2, Math.sin(halfFov))) * 1.18,
      220,
      4200,
    );
    const destination = sphere.center.clone().addScaledVector(cameraDirection, distance);
    startCameraTween(destination, sphere.center);
    return true;
  }

  function resetView() {
    cameraRoll = 0;
    startCameraTween(
      new THREE.Vector3(0, 160, 720),
      new THREE.Vector3(0, 0, 0),
    );
  }

  function getThoughtPosition(thoughtId) {
    const node = nodesById.get(thoughtId);
    if (!node) return null;
    return { x: node.x, y: node.y, z: node.z };
  }

  function setThoughtPinned(thoughtId, pinned) {
    const node = layout.setPinned(thoughtId, pinned);
    if (!node) return null;
    requestRender();
    return { x: node.x, y: node.y, z: node.z, pinned: node.pinned };
  }

  function resize() {
    const width = Math.max(1, container.clientWidth);
    const height = Math.max(1, container.clientHeight);
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    requestRender();
  }

  function activate() {
    active = true;
    controls.enabled = !drag && !cameraTween;
    resize();
    layout.reheat(0.22);
    startGamepadPolling();
  }

  function deactivate() {
    stopGamepadPolling();
    clearKeyboardPan();
    active = false;
    controls.enabled = false;
    layout.stop();
    drag = null;
    renderer.domElement.classList.remove('is-node-dragging');
    if (renderFrame !== null) cancelAnimationFrame(renderFrame);
    renderFrame = null;
  }

  function finishDrag(event, { cancelled = false } = {}) {
    if (!drag || event.pointerId !== drag.pointerId) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    const completed = drag;
    drag = null;
    renderer.domElement.classList.remove('is-node-dragging');
    if (renderer.domElement.hasPointerCapture(event.pointerId)) {
      renderer.domElement.releasePointerCapture(event.pointerId);
    }

    let node = layout.getNode(completed.thoughtId);
    if (completed.started) {
      if (cancelled) layout.dragNode(completed.thoughtId, completed.origin);
      node = layout.endDrag(completed.thoughtId, {
        pinned: cancelled ? completed.wasPinned : undefined,
      });
    }
    controls.enabled = active && !cameraTween;
    if (!cancelled && completed.moved && node?.pinned) {
      onThoughtMove(node.id, {
        x: node.x,
        y: node.y,
        z: node.z,
        pinned: true,
      });
    }
    requestRender();
  }

  function handlePointerDown(event) {
    if (!active || event.button !== 0) return;
    const thoughtId = pickThought(event);
    if (!thoughtId) return;

    if (connectionSelection) {
      event.preventDefault();
      event.stopImmediatePropagation();
      if (thoughtId !== connectionSelection.sourceId) {
        onConnectionTargetToggle(thoughtId);
      }
      return;
    }

    const node = layout.getNode(thoughtId);
    if (!node) return;

    event.preventDefault();
    event.stopImmediatePropagation();
    selectThoughtAndNotify(thoughtId);
    controls.enabled = false;
    renderer.domElement.setPointerCapture(event.pointerId);
    renderer.domElement.classList.add('is-node-dragging');

    position.set(node.x, node.y, node.z);
    camera.getWorldDirection(cameraDirection).normalize();
    dragPlane.setFromNormalAndCoplanarPoint(cameraDirection, position);
    if (raycaster.ray.intersectPlane(dragPlane, dragPoint)) {
      dragOffset.copy(dragPoint).sub(position);
    } else {
      dragOffset.set(0, 0, 0);
    }

    drag = {
      pointerId: event.pointerId,
      thoughtId,
      startX: event.clientX,
      startY: event.clientY,
      moved: false,
      started: false,
      wasPinned: node.pinned,
      origin: { x: node.x, y: node.y, z: node.z },
    };
    requestRender();
  }

  function handlePointerMove(event) {
    hideGamepadUi();
    if (!drag) {
      const nextHoveredThoughtId = active ? pickThought(event) : null;
      if (nextHoveredThoughtId !== hoveredThoughtId) {
        hoveredThoughtId = nextHoveredThoughtId;
        nodeInstancesDirty = true;
        renderer.domElement.classList.toggle('is-node-hovered', Boolean(hoveredThoughtId));
        requestRender();
      }
      return;
    }
    if (event.pointerId !== drag.pointerId) return;

    event.preventDefault();
    event.stopImmediatePropagation();
    updatePointer(event);
    if (!raycaster.ray.intersectPlane(dragPlane, dragPoint)) return;

    const pointerDistance = Math.hypot(
      event.clientX - drag.startX,
      event.clientY - drag.startY,
    );
    if (!drag.started && pointerDistance < DRAG_THRESHOLD) return;
    if (!drag.started) {
      layout.beginDrag(drag.thoughtId);
      drag.started = true;
    }

    const next = dragPoint.sub(dragOffset);
    layout.dragNode(drag.thoughtId, { x: next.x, y: next.y, z: next.z });
    drag.moved = true;
  }

  function handleDoubleClick(event) {
    if (connectionSelection) return;
    const thoughtId = pickThought(event);
    if (!thoughtId) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    onThoughtActivate(thoughtId);
  }

  function handlePointerLeave() {
    if (drag || !hoveredThoughtId) return;
    hoveredThoughtId = null;
    nodeInstancesDirty = true;
    renderer.domElement.classList.remove('is-node-hovered');
    requestRender();
  }

  function handlePointerCancel(event) {
    finishDrag(event, { cancelled: true });
  }

  function handleControlsStart() {
    controlsInteracting = true;
    hideGamepadUi();
  }

  function handleControlsEnd() {
    controlsInteracting = false;
    saveCamera();
  }

  function handleWindowBlur() {
    clearKeyboardPan();
    stopGamepadPolling();
  }

  function handleVisibilityChange() {
    if (document.hidden) {
      clearKeyboardPan();
      stopGamepadPolling();
      return;
    }
    startGamepadPolling();
    requestRender();
  }

  function handleContextLost(event) {
    event.preventDefault();
    onError('3D rendering is unavailable. Reload the page to try again.');
  }

  function dispose() {
    deactivate();
    clearKeyboardPan({ persist: false });
    layout.dispose();
    controls.removeEventListener('change', requestRender);
    controls.removeEventListener('start', handleControlsStart);
    controls.removeEventListener('end', handleControlsEnd);
    controls.dispose();
    nodeGeometry.dispose();
    nodeMaterial.dispose();
    hitMaterial.dispose();
    edgeGeometry.dispose();
    edgeMaterial.dispose();
    activeEdgeGeometry.dispose();
    activeEdgeMaterial.dispose();
    renderer.dispose();
    renderer.domElement.removeEventListener('pointerdown', focusSpatialViewport, true);
    renderer.domElement.removeEventListener('pointerdown', handlePointerDown, true);
    renderer.domElement.removeEventListener('pointermove', handlePointerMove, true);
    renderer.domElement.removeEventListener('pointerup', finishDrag, true);
    renderer.domElement.removeEventListener('pointercancel', handlePointerCancel, true);
    renderer.domElement.removeEventListener('pointerleave', handlePointerLeave);
    renderer.domElement.removeEventListener('dblclick', handleDoubleClick, true);
    renderer.domElement.removeEventListener('webglcontextlost', handleContextLost);
    document.removeEventListener('visibilitychange', handleVisibilityChange);
    container.removeEventListener('keydown', handleKeyboardPanKeyDown);
    window.removeEventListener('keyup', handleKeyboardPanKeyUp);
    window.removeEventListener('blur', handleWindowBlur);
    window.removeEventListener('focus', startGamepadPolling);
    window.removeEventListener('gamepadconnected', handleGamepadConnected);
    window.removeEventListener('gamepaddisconnected', handleGamepadDisconnected);
    renderer.domElement.remove();
    labelLayer.remove();
    gamepadReticle.remove();
  }

  controls.addEventListener('change', requestRender);
  controls.addEventListener('start', handleControlsStart);
  controls.addEventListener('end', handleControlsEnd);
  renderer.domElement.addEventListener('pointerdown', focusSpatialViewport, true);
  renderer.domElement.addEventListener('pointerdown', handlePointerDown, true);
  renderer.domElement.addEventListener('pointermove', handlePointerMove, true);
  renderer.domElement.addEventListener('pointerup', finishDrag, true);
  renderer.domElement.addEventListener('pointercancel', handlePointerCancel, true);
  renderer.domElement.addEventListener('pointerleave', handlePointerLeave);
  renderer.domElement.addEventListener('dblclick', handleDoubleClick, true);
  renderer.domElement.addEventListener('webglcontextlost', handleContextLost);
  document.addEventListener('visibilitychange', handleVisibilityChange);
  container.addEventListener('keydown', handleKeyboardPanKeyDown);
  window.addEventListener('keyup', handleKeyboardPanKeyUp);
  window.addEventListener('blur', handleWindowBlur);
  window.addEventListener('focus', startGamepadPolling);
  window.addEventListener('gamepadconnected', handleGamepadConnected);
  window.addEventListener('gamepaddisconnected', handleGamepadDisconnected);

  return {
    activate,
    deactivate,
    dispose,
    fitAll,
    focusThought,
    getCameraState,
    getThoughtPosition,
    resetView,
    restoreCameraState,
    resize,
    setGraph,
    setConnectionSelection,
    setSelectedThought,
    setTheme,
    setThoughtPinned,
  };
}
