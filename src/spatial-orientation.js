import * as THREE from 'three';

const AIM_TOLERANCE = Math.sin(THREE.MathUtils.degToRad(5));
const POLE_TOLERANCE = Math.sin(THREE.MathUtils.degToRad(18));
const EPSILON = 1e-6;

// Camera-space calculations are independent of the DOM and use the final
// quaternion, so mouse orbit, gamepad roll and restored views agree.
export function createSpatialOrientationReader() {
  const inverseRotation = new THREE.Quaternion();
  const up = new THREE.Vector3();
  const center = new THREE.Vector3();

  return function read(camera, graphCenter) {
    inverseRotation.copy(camera.quaternion).invert();
    up.set(0, 1, 0).applyQuaternion(inverseRotation);
    const pole = Math.hypot(up.x, up.y) < POLE_TOLERANCE
      ? (up.z < 0 ? 'up' : 'down')
      : null;

    let centerState = 'empty';
    let bearing = null;
    if (graphCenter) {
      center.copy(graphCenter).sub(camera.position);
      if (center.lengthSq() < EPSILON ** 2) {
        centerState = 'at-center';
      } else {
        center.applyQuaternion(inverseRotation).normalize();
        const lateral = Math.hypot(center.x, center.y);
        centerState = center.z >= 0
          ? 'behind'
          : (lateral < AIM_TOLERANCE ? 'ahead' : 'direction');
        if (lateral >= AIM_TOLERANCE) {
          bearing = THREE.MathUtils.radToDeg(Math.atan2(center.x, center.y));
        }
      }
    }

    return {
      upX: up.x,
      upY: up.y,
      pole,
      equatorScale: Math.abs(up.z),
      equatorRotation: THREE.MathUtils.radToDeg(Math.atan2(up.x, up.y)),
      centerState,
      bearing,
    };
  };
}

const CENTER_STATUS = Object.freeze({
  empty: 'No thoughts',
  'at-center': 'At center',
  ahead: 'Ahead',
  behind: 'Behind',
  direction: 'Turn to center',
});

export function createSpatialOrientation({ container, onLevel, onCenter }) {
  const read = createSpatialOrientationReader();
  const root = document.createElement('div');
  root.className = 'spatial-orientation';
  root.setAttribute('role', 'group');
  root.setAttribute('aria-label', 'Spatial orientation');
  // Static, application-owned SVG. No thought content is interpolated here.
  root.innerHTML = `
    <button class="spatial-orientation-level" type="button"
      aria-label="Level view" title="Level view without moving the camera">
      <svg viewBox="0 0 80 80" aria-hidden="true">
        <circle class="orientation-globe" cx="40" cy="40" r="28" />
        <ellipse class="orientation-equator" cx="40" cy="40" rx="28" ry="1" />
        <line class="orientation-axis" x1="40" y1="15" x2="40" y2="65" />
        <g class="orientation-pole orientation-up">
          <rect x="-15" y="-8" width="30" height="16" rx="8" />
          <text y="3.5">Up</text>
        </g>
        <g class="orientation-pole orientation-down">
          <rect x="-17" y="-8" width="34" height="16" rx="8" />
          <text y="3.5">Down</text>
        </g>
        <text class="orientation-pole-view" x="40" y="38" hidden>
          <tspan x="40">Looking</tspan><tspan x="40" dy="13"></tspan>
        </text>
      </svg>
    </button>
    <button class="spatial-orientation-center" type="button" disabled
      aria-label="Show entire graph" title="Show entire graph">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <g class="orientation-center-arrow" hidden>
          <path d="M12 20V4M6 10l6-6 6 6" />
        </g>
        <g class="orientation-center-target">
          <circle cx="12" cy="12" r="6" />
          <path d="M12 2v3m0 14v3M2 12h3m14 0h3" />
        </g>
        <path class="orientation-center-behind" d="M7 18V9a5 5 0 0 1 10 0v9m-4-4 4 4 4-4" hidden />
      </svg>
      <span class="orientation-center-copy">
        <span>Center</span><span class="orientation-center-status">No thoughts</span>
      </span>
    </button>
  `;

  const levelButton = root.querySelector('.spatial-orientation-level');
  const centerButton = root.querySelector('.spatial-orientation-center');
  const equator = root.querySelector('.orientation-equator');
  const axis = root.querySelector('.orientation-axis');
  const up = root.querySelector('.orientation-up');
  const down = root.querySelector('.orientation-down');
  const poleView = root.querySelector('.orientation-pole-view');
  const arrow = root.querySelector('.orientation-center-arrow');
  const target = root.querySelector('.orientation-center-target');
  const behind = root.querySelector('.orientation-center-behind');
  const status = root.querySelector('.orientation-center-status');

  // Keep native button activation without letting Enter also commit a
  // connection-selection editor elsewhere in the document.
  function handleKeyDown(event) {
    if (event.key === 'Enter' || event.key === ' ') event.stopPropagation();
  }

  levelButton.addEventListener('click', onLevel);
  centerButton.addEventListener('click', onCenter);
  root.addEventListener('keydown', handleKeyDown);
  container.append(root);

  return {
    update({ camera, graphCenter }) {
      const state = read(camera, graphCenter);
      const x = state.upX * 25;
      const y = -state.upY * 25;
      equator.setAttribute('ry', Math.max(0.1, state.equatorScale * 28));
      equator.setAttribute('transform', `rotate(${state.equatorRotation} 40 40)`);
      up.setAttribute('transform', `translate(${40 + x} ${40 + y})`);
      down.setAttribute('transform', `translate(${40 - x} ${40 - y})`);
      axis.setAttribute('x1', 40 + x);
      axis.setAttribute('y1', 40 + y);
      axis.setAttribute('x2', 40 - x);
      axis.setAttribute('y2', 40 - y);
      up.toggleAttribute('hidden', Boolean(state.pole));
      down.toggleAttribute('hidden', Boolean(state.pole));
      axis.toggleAttribute('hidden', Boolean(state.pole));
      poleView.toggleAttribute('hidden', !state.pole);
      if (state.pole) poleView.lastElementChild.textContent = state.pole;

      const hasBearing = state.bearing !== null;
      arrow.toggleAttribute('hidden', !hasBearing);
      if (hasBearing) arrow.setAttribute('transform', `rotate(${state.bearing} 12 12)`);
      behind.toggleAttribute('hidden', state.centerState !== 'behind' || hasBearing);
      target.toggleAttribute('hidden', hasBearing || state.centerState === 'behind');
      if (root.dataset.centerState !== state.centerState) {
        root.dataset.centerState = state.centerState;
        centerButton.disabled = state.centerState === 'empty';
        status.textContent = CENTER_STATUS[state.centerState];
        centerButton.setAttribute('aria-label',
          `Show entire graph. ${CENTER_STATUS[state.centerState]}.`);
      }
    },
    dispose() {
      levelButton.removeEventListener('click', onLevel);
      centerButton.removeEventListener('click', onCenter);
      root.removeEventListener('keydown', handleKeyDown);
      root.remove();
    },
  };
}
