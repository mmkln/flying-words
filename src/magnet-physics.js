import { getMagnetSlotPreference } from './magnet-layout.js';
import {
  ConnectionSpacing,
  normalizeConnectionSpacing,
} from './connections.js';

const DEFAULT_OPTIONS = {
  fixedStep: 1 / 120,
  maxSubsteps: 6,
  springStiffness: 10,
  springDamping: 5,
  angularStiffness: 0.7,
  localDamping: 0.45,
  internalCollisionStiffness: 18,
  internalCollisionGap: 8,
  internalCollisionPasses: 2,
  maxLocalSpeed: 90,
  maxComponentSpeed: 55,
  maxPointerSpeed: 220,
  relationRampDuration: 0.6,
  hoverTimeScale: 0.2,
  hoverResponse: 0.18,
  collisionRestitution: 0.12,
  connectionStiffness: 0.85,
  connectionDamping: 2.1,
  connectionRampDuration: 0.4,
  maxConnectionForce: 36,
  connectionDeadZone: 8,
  connectionTightGap: 24,
  connectionNormalGap: 64,
  connectionLooseGap: 160,
  maxConnectionDistance: 360,
};

function clamp(value, minimum, maximum) {
  return Math.min(maximum, Math.max(minimum, value));
}

function clampVector(vector, maximum) {
  const length = Math.hypot(vector.x, vector.y);
  if (!length || length <= maximum) return vector;
  const scale = maximum / length;
  vector.x *= scale;
  vector.y *= scale;
  return vector;
}

function wrapAngle(angle) {
  let wrapped = angle;
  while (wrapped > Math.PI) wrapped -= Math.PI * 2;
  while (wrapped < -Math.PI) wrapped += Math.PI * 2;
  return wrapped;
}

function finite(value, fallback = 0) {
  return Number.isFinite(value) ? value : fallback;
}

function relationKey(relation) {
  return `${relation.parentId}->${relation.childId}`;
}

function componentSignature(memberIds) {
  return [...memberIds].sort().join('|');
}

function thoughtMass(thought, parentCount) {
  const areaMass = clamp(Math.sqrt(
    Math.max(1, thought.width) * Math.max(1, thought.height),
  ) / 105, 0.8, 1.8);
  return areaMass * (1 + Math.min(1.2, parentCount * 0.16));
}

function nodeWorldPosition(component, node) {
  return {
    x: component.x + node.localX,
    y: component.y + node.localY,
  };
}

function componentWorldBounds(component, nodes, thoughtsById) {
  const members = [...component.memberIds]
    .map((thoughtId) => ({
      node: nodes.get(thoughtId),
      thought: thoughtsById.get(thoughtId),
    }))
    .filter(({ node, thought }) => node && thought);

  if (!members.length) return null;

  return members.reduce((bounds, { node, thought }) => {
    const position = nodeWorldPosition(component, node);
    return {
      minX: Math.min(bounds.minX, position.x),
      minY: Math.min(bounds.minY, position.y),
      maxX: Math.max(bounds.maxX, position.x + thought.width),
      maxY: Math.max(bounds.maxY, position.y + thought.height),
    };
  }, {
    minX: Infinity,
    minY: Infinity,
    maxX: -Infinity,
    maxY: -Infinity,
  });
}

export function createMagnetPhysics(customOptions = {}) {
  const options = { ...DEFAULT_OPTIONS, ...customOptions };
  let accumulator = 0;
  let thoughtsById = new Map();
  let components = new Map();
  let componentByThoughtId = new Map();
  let nodes = new Map();
  let constraints = new Map();
  let connectionConstraints = new Map();
  let dragged = null;

  function exportThought(thoughtId) {
    const thought = thoughtsById.get(thoughtId);
    const node = nodes.get(thoughtId);
    const component = node ? components.get(node.componentId) : null;
    if (!thought || !node || !component) return;

    thought.x = component.x + node.localX;
    thought.y = component.y + node.localY;
    thought.vx = component.vx + node.localVx;
    thought.vy = component.vy + node.localVy;
  }

  function exportComponent(component) {
    component?.memberIds.forEach(exportThought);
  }

  function exportWorldState() {
    nodes.forEach((node) => exportThought(node.thoughtId));
  }

  function syncTopology({ thoughts, relations, hierarchyComponents }) {
    const previousComponentsBySignature = new Map(
      [...components.values()].map((component) => [component.signature, component]),
    );
    const previousConstraints = constraints;
    const nextThoughtsById = new Map(thoughts.map((thought) => [thought.id, thought]));
    const parentCountById = new Map();
    const degreeById = new Map();

    relations.forEach((relation) => {
      parentCountById.set(
        relation.parentId,
        (parentCountById.get(relation.parentId) || 0) + 1,
      );
      degreeById.set(relation.parentId, (degreeById.get(relation.parentId) || 0) + 1);
      degreeById.set(relation.childId, (degreeById.get(relation.childId) || 0) + 1);
    });

    const nextComponents = new Map();
    const nextComponentByThoughtId = new Map();
    const nextNodes = new Map();

    hierarchyComponents.forEach((hierarchyComponent) => {
      const memberThoughts = hierarchyComponent.memberIds
        .map((thoughtId) => nextThoughtsById.get(thoughtId))
        .filter(Boolean);
      if (!memberThoughts.length) return;

      const masses = new Map(memberThoughts.map((thought) => [
        thought.id,
        thoughtMass(thought, parentCountById.get(thought.id) || 0),
      ]));
      const totalMass = memberThoughts.reduce(
        (total, thought) => total + masses.get(thought.id),
        0,
      );
      const weightedAverage = (property) => memberThoughts.reduce(
        (total, thought) => total + finite(thought[property]) * masses.get(thought.id),
        0,
      ) / totalMass;
      const signature = componentSignature(hierarchyComponent.memberIds);
      const previousComponent = previousComponentsBySignature.get(signature);
      const component = {
        id: hierarchyComponent.id,
        signature,
        memberIds: new Set(memberThoughts.map((thought) => thought.id)),
        x: weightedAverage('x'),
        y: weightedAverage('y'),
        vx: weightedAverage('vx'),
        vy: weightedAverage('vy'),
        mass: totalMass,
        timeScale: previousComponent?.timeScale ?? 1,
        targetTimeScale: previousComponent?.targetTimeScale ?? 1,
      };
      nextComponents.set(component.id, component);

      memberThoughts.forEach((thought) => {
        const node = {
          thoughtId: thought.id,
          componentId: component.id,
          localX: finite(thought.x) - component.x,
          localY: finite(thought.y) - component.y,
          localVx: finite(thought.vx) - component.vx,
          localVy: finite(thought.vy) - component.vy,
          mass: masses.get(thought.id),
          degree: Math.max(1, degreeById.get(thought.id) || 1),
        };
        nextNodes.set(thought.id, node);
        nextComponentByThoughtId.set(thought.id, component);
      });
    });

    const nextConstraints = new Map();
    relations.forEach((relation) => {
      const parent = nextThoughtsById.get(relation.parentId);
      const child = nextThoughtsById.get(relation.childId);
      const parentNode = nextNodes.get(relation.parentId);
      const childNode = nextNodes.get(relation.childId);
      if (!parent || !child || !parentNode || !childNode) return;
      if (parentNode.componentId !== childNode.componentId) return;

      const key = relationKey(relation);
      const preference = getMagnetSlotPreference(parent, child, relation.slot);
      nextConstraints.set(key, {
        key,
        parentId: relation.parentId,
        childId: relation.childId,
        slot: relation.slot,
        restLength: preference.restLength,
        preferredAngle: preference.angle,
        strength: previousConstraints.get(key)?.strength ?? 0,
      });
    });

    thoughtsById = nextThoughtsById;
    components = nextComponents;
    componentByThoughtId = nextComponentByThoughtId;
    nodes = nextNodes;
    constraints = nextConstraints;
    accumulator = 0;

    if (dragged && !nodes.has(dragged.thoughtId)) dragged = null;
    exportWorldState();
  }

  function syncConnections(connections = []) {
    const previousConstraints = connectionConstraints;
    const degreeByThoughtId = new Map();

    connections.forEach((connection) => {
      if (
        typeof connection?.sourceId !== 'string'
        || typeof connection?.targetId !== 'string'
      ) return;

      degreeByThoughtId.set(
        connection.sourceId,
        (degreeByThoughtId.get(connection.sourceId) || 0) + 1,
      );
      degreeByThoughtId.set(
        connection.targetId,
        (degreeByThoughtId.get(connection.targetId) || 0) + 1,
      );
    });

    const nextConstraints = new Map();
    connections.forEach((connection) => {
      if (
        typeof connection?.id !== 'string'
        || typeof connection?.sourceId !== 'string'
        || typeof connection?.targetId !== 'string'
        || !nodes.has(connection.sourceId)
        || !nodes.has(connection.targetId)
      ) return;

      const sourceDegree = degreeByThoughtId.get(connection.sourceId) || 1;
      const targetDegree = degreeByThoughtId.get(connection.targetId) || 1;
      nextConstraints.set(connection.id, {
        id: connection.id,
        sourceId: connection.sourceId,
        targetId: connection.targetId,
        spacing: normalizeConnectionSpacing(connection.spacing),
        degreeScale: 1 / Math.sqrt(sourceDegree * targetDegree),
        strength: previousConstraints.get(connection.id)?.strength ?? 0,
      });
    });

    connectionConstraints = nextConstraints;
  }

  function addConstraintForces(forces, activeComponentIds, delta) {
    constraints.forEach((constraint) => {
      const parentNode = nodes.get(constraint.parentId);
      const childNode = nodes.get(constraint.childId);
      if (!parentNode || !childNode) return;
      if (parentNode.componentId !== childNode.componentId) return;
      if (!activeComponentIds.has(parentNode.componentId)) return;

      const component = components.get(parentNode.componentId);
      const parent = thoughtsById.get(parentNode.thoughtId);
      const child = thoughtsById.get(childNode.thoughtId);
      if (!component || !parent || !child) return;

      constraint.strength = Math.min(
        1,
        constraint.strength + delta / options.relationRampDuration,
      );

      const parentPosition = nodeWorldPosition(component, parentNode);
      const childPosition = nodeWorldPosition(component, childNode);
      const parentCenterX = parentPosition.x + parent.width / 2;
      const parentCenterY = parentPosition.y + parent.height / 2;
      const childCenterX = childPosition.x + child.width / 2;
      const childCenterY = childPosition.y + child.height / 2;
      let dx = childCenterX - parentCenterX;
      let dy = childCenterY - parentCenterY;
      let distance = Math.hypot(dx, dy);
      if (distance < 0.001) {
        dx = Math.cos(constraint.preferredAngle);
        dy = Math.sin(constraint.preferredAngle);
        distance = 1;
      }

      const normalX = dx / distance;
      const normalY = dy / distance;
      const tangentX = -normalY;
      const tangentY = normalX;
      const relativeVelocityX = childNode.localVx - parentNode.localVx;
      const relativeVelocityY = childNode.localVy - parentNode.localVy;
      const velocityAlongSpring = (
        relativeVelocityX * normalX + relativeVelocityY * normalY
      );
      const degreeScale = 1 / Math.sqrt(parentNode.degree * childNode.degree);
      const springForce = (
        (distance - constraint.restLength) * options.springStiffness
        + velocityAlongSpring * options.springDamping
      ) * degreeScale * constraint.strength;
      const angleError = wrapAngle(
        Math.atan2(dy, dx) - constraint.preferredAngle,
      );
      const angularForce = -angleError
        * constraint.restLength
        * options.angularStiffness
        * degreeScale
        * constraint.strength;
      const childForceX = -normalX * springForce + tangentX * angularForce;
      const childForceY = -normalY * springForce + tangentY * angularForce;

      forces.get(childNode.thoughtId).x += childForceX;
      forces.get(childNode.thoughtId).y += childForceY;
      forces.get(parentNode.thoughtId).x -= childForceX;
      forces.get(parentNode.thoughtId).y -= childForceY;
    });
  }

  function addInternalCollisionForces(forces, activeComponentIds) {
    activeComponentIds.forEach((componentId) => {
      const component = components.get(componentId);
      if (!component || component.memberIds.size < 2) return;
      const memberIds = [...component.memberIds];

      for (let firstIndex = 0; firstIndex < memberIds.length; firstIndex += 1) {
        for (let secondIndex = firstIndex + 1; secondIndex < memberIds.length; secondIndex += 1) {
          const firstId = memberIds[firstIndex];
          const secondId = memberIds[secondIndex];
          const firstNode = nodes.get(firstId);
          const secondNode = nodes.get(secondId);
          const firstThought = thoughtsById.get(firstId);
          const secondThought = thoughtsById.get(secondId);
          if (!firstNode || !secondNode || !firstThought || !secondThought) continue;

          const first = nodeWorldPosition(component, firstNode);
          const second = nodeWorldPosition(component, secondNode);
          const overlapX = Math.min(
            first.x + firstThought.width,
            second.x + secondThought.width,
          ) - Math.max(first.x, second.x);
          const overlapY = Math.min(
            first.y + firstThought.height,
            second.y + secondThought.height,
          ) - Math.max(first.y, second.y);
          if (overlapX <= 0 || overlapY <= 0) continue;

          const horizontal = overlapX < overlapY;
          const firstCenterX = first.x + firstThought.width / 2;
          const firstCenterY = first.y + firstThought.height / 2;
          const secondCenterX = second.x + secondThought.width / 2;
          const secondCenterY = second.y + secondThought.height / 2;
          const normalX = horizontal ? (firstCenterX < secondCenterX ? -1 : 1) : 0;
          const normalY = horizontal ? 0 : (firstCenterY < secondCenterY ? -1 : 1);
          const force = Math.min(80, (
            horizontal ? overlapX : overlapY
          ) * options.internalCollisionStiffness);

          forces.get(firstId).x += normalX * force;
          forces.get(firstId).y += normalY * force;
          forces.get(secondId).x -= normalX * force;
          forces.get(secondId).y -= normalY * force;
        }
      }
    });
  }

  function normalizeComponentFrame(component, { preserveWorld = false } = {}) {
    const componentNodes = [...component.memberIds]
      .map((thoughtId) => nodes.get(thoughtId))
      .filter(Boolean);
    if (!componentNodes.length || !component.mass) return;

    const weightedMean = (property) => componentNodes.reduce(
      (total, node) => total + node[property] * node.mass,
      0,
    ) / component.mass;
    const meanX = weightedMean('localX');
    const meanY = weightedMean('localY');
    const meanVx = weightedMean('localVx');
    const meanVy = weightedMean('localVy');

    if (preserveWorld) {
      component.x += meanX;
      component.y += meanY;
      component.vx += meanVx;
      component.vy += meanVy;
    }
    componentNodes.forEach((node) => {
      node.localX -= meanX;
      node.localY -= meanY;
      node.localVx -= meanVx;
      node.localVy -= meanVy;
    });
  }

  function resolveInternalCollisions(activeComponentIds) {
    activeComponentIds.forEach((componentId) => {
      const component = components.get(componentId);
      if (!component || component.memberIds.size < 2) return;
      const memberIds = [...component.memberIds];

      for (let pass = 0; pass < options.internalCollisionPasses; pass += 1) {
        for (let firstIndex = 0; firstIndex < memberIds.length; firstIndex += 1) {
          for (let secondIndex = firstIndex + 1; secondIndex < memberIds.length; secondIndex += 1) {
            const firstId = memberIds[firstIndex];
            const secondId = memberIds[secondIndex];
            const firstNode = nodes.get(firstId);
            const secondNode = nodes.get(secondId);
            const firstThought = thoughtsById.get(firstId);
            const secondThought = thoughtsById.get(secondId);
            if (!firstNode || !secondNode || !firstThought || !secondThought) continue;

            const first = nodeWorldPosition(component, firstNode);
            const second = nodeWorldPosition(component, secondNode);
            const overlapX = Math.min(
              first.x + firstThought.width,
              second.x + secondThought.width,
            ) - Math.max(first.x, second.x) + options.internalCollisionGap;
            const overlapY = Math.min(
              first.y + firstThought.height,
              second.y + secondThought.height,
            ) - Math.max(first.y, second.y) + options.internalCollisionGap;
            if (overlapX <= 0 || overlapY <= 0) continue;

            const horizontal = overlapX < overlapY;
            const firstCenterX = first.x + firstThought.width / 2;
            const firstCenterY = first.y + firstThought.height / 2;
            const secondCenterX = second.x + secondThought.width / 2;
            const secondCenterY = second.y + secondThought.height / 2;
            const normalX = horizontal ? (firstCenterX < secondCenterX ? -1 : 1) : 0;
            const normalY = horizontal ? 0 : (firstCenterY < secondCenterY ? -1 : 1);
            const firstCanMove = firstId !== dragged?.thoughtId && !firstThought.pinned;
            const secondCanMove = secondId !== dragged?.thoughtId && !secondThought.pinned;
            const inverseMassFirst = firstCanMove ? 1 / firstNode.mass : 0;
            const inverseMassSecond = secondCanMove ? 1 / secondNode.mass : 0;
            const inverseMassTotal = inverseMassFirst + inverseMassSecond;
            if (!inverseMassTotal) continue;

            const penetration = horizontal ? overlapX : overlapY;
            const correction = Math.max(0, penetration - 0.1) * 0.72 / inverseMassTotal;
            firstNode.localX += normalX * correction * inverseMassFirst;
            firstNode.localY += normalY * correction * inverseMassFirst;
            secondNode.localX -= normalX * correction * inverseMassSecond;
            secondNode.localY -= normalY * correction * inverseMassSecond;

            const relativeSpeed = (
              (firstNode.localVx - secondNode.localVx) * normalX
              + (firstNode.localVy - secondNode.localVy) * normalY
            );
            if (relativeSpeed >= 0) continue;
            const impulse = -relativeSpeed / inverseMassTotal;
            firstNode.localVx += normalX * impulse * inverseMassFirst;
            firstNode.localVy += normalY * impulse * inverseMassFirst;
            secondNode.localVx -= normalX * impulse * inverseMassSecond;
            secondNode.localVy -= normalY * impulse * inverseMassSecond;
          }
        }
      }
    });
  }

  function clampComponentSpeed(component) {
    const velocity = clampVector(
      { x: component.vx, y: component.vy },
      options.maxComponentSpeed,
    );
    component.vx = velocity.x;
    component.vy = velocity.y;
  }

  function isComponentPinned(component) {
    return [...component.memberIds].some(
      (thoughtId) => thoughtsById.get(thoughtId)?.pinned,
    );
  }

  function isComponentDragged(component) {
    return Boolean(dragged && component.memberIds.has(dragged.thoughtId));
  }

  function connectionRestLength(connection, sourceThought, targetThought) {
    const gaps = {
      [ConnectionSpacing.TIGHT]: options.connectionTightGap,
      [ConnectionSpacing.NORMAL]: options.connectionNormalGap,
      [ConnectionSpacing.LOOSE]: options.connectionLooseGap,
    };
    const gap = gaps[connection.spacing] ?? options.connectionNormalGap;

    return Math.min(
      options.maxConnectionDistance,
      sourceThought.width / 2 + targetThought.width / 2 + gap,
    );
  }

  function addConnectionForces(activeComponentIds, delta) {
    connectionConstraints.forEach((connection) => {
      const sourceNode = nodes.get(connection.sourceId);
      const targetNode = nodes.get(connection.targetId);
      if (!sourceNode || !targetNode) return;

      const sourceComponent = components.get(sourceNode.componentId);
      const targetComponent = components.get(targetNode.componentId);
      if (!sourceComponent || !targetComponent) return;
      if (sourceComponent.id === targetComponent.id) return;
      if (
        !activeComponentIds.has(sourceComponent.id)
        || !activeComponentIds.has(targetComponent.id)
      ) return;

      const sourceThought = thoughtsById.get(connection.sourceId);
      const targetThought = thoughtsById.get(connection.targetId);
      if (!sourceThought || !targetThought) return;

      connection.strength = Math.min(
        1,
        connection.strength + delta / options.connectionRampDuration,
      );

      const sourcePosition = nodeWorldPosition(sourceComponent, sourceNode);
      const targetPosition = nodeWorldPosition(targetComponent, targetNode);
      const sourceCenterX = sourcePosition.x + sourceThought.width / 2;
      const sourceCenterY = sourcePosition.y + sourceThought.height / 2;
      const targetCenterX = targetPosition.x + targetThought.width / 2;
      const targetCenterY = targetPosition.y + targetThought.height / 2;
      let dx = targetCenterX - sourceCenterX;
      let dy = targetCenterY - sourceCenterY;
      let distance = Math.hypot(dx, dy);

      if (distance < 0.001) {
        dx = 1;
        dy = 0;
        distance = 1;
      }

      const normalX = dx / distance;
      const normalY = dy / distance;
      const restLength = connectionRestLength(
        connection,
        sourceThought,
        targetThought,
      );
      const distanceError = distance - restLength;
      const effectiveError = Math.abs(distanceError) <= options.connectionDeadZone
        ? 0
        : distanceError;
      const relativeVelocityX = targetComponent.vx - sourceComponent.vx;
      const relativeVelocityY = targetComponent.vy - sourceComponent.vy;
      const velocityAlongSpring = (
        relativeVelocityX * normalX + relativeVelocityY * normalY
      );
      const force = clamp(
        (
          effectiveError * options.connectionStiffness
          + velocityAlongSpring * options.connectionDamping
        ) * connection.degreeScale * connection.strength,
        -options.maxConnectionForce,
        options.maxConnectionForce,
      );
      const sourceFixed = (
        isComponentPinned(sourceComponent) || isComponentDragged(sourceComponent)
      );
      const targetFixed = (
        isComponentPinned(targetComponent) || isComponentDragged(targetComponent)
      );
      const inverseSourceMass = sourceFixed ? 0 : 1 / sourceComponent.mass;
      const inverseTargetMass = targetFixed ? 0 : 1 / targetComponent.mass;
      if (!inverseSourceMass && !inverseTargetMass) return;

      const pairTimeScale = Math.min(
        sourceComponent.timeScale,
        targetComponent.timeScale,
      );
      const scaledDelta = delta * pairTimeScale;

      sourceComponent.vx += normalX * force * inverseSourceMass * scaledDelta;
      sourceComponent.vy += normalY * force * inverseSourceMass * scaledDelta;
      targetComponent.vx -= normalX * force * inverseTargetMass * scaledDelta;
      targetComponent.vy -= normalY * force * inverseTargetMass * scaledDelta;
    });
  }

  function resolveComponentCollisions(activeComponentIds) {
    const activeComponents = [...activeComponentIds]
      .map((componentId) => components.get(componentId))
      .filter(Boolean);

    for (let firstIndex = 0; firstIndex < activeComponents.length; firstIndex += 1) {
      for (let secondIndex = firstIndex + 1; secondIndex < activeComponents.length; secondIndex += 1) {
        const first = activeComponents[firstIndex];
        const second = activeComponents[secondIndex];
        const firstBounds = componentWorldBounds(first, nodes, thoughtsById);
        const secondBounds = componentWorldBounds(second, nodes, thoughtsById);
        if (!firstBounds || !secondBounds) continue;

        const overlapX = Math.min(firstBounds.maxX, secondBounds.maxX)
          - Math.max(firstBounds.minX, secondBounds.minX);
        const overlapY = Math.min(firstBounds.maxY, secondBounds.maxY)
          - Math.max(firstBounds.minY, secondBounds.minY);
        if (overlapX <= 0 || overlapY <= 0) continue;

        const firstPinned = [...first.memberIds].some(
          (thoughtId) => thoughtsById.get(thoughtId)?.pinned,
        ) || first.memberIds.has(dragged?.thoughtId);
        const secondPinned = [...second.memberIds].some(
          (thoughtId) => thoughtsById.get(thoughtId)?.pinned,
        ) || second.memberIds.has(dragged?.thoughtId);
        const inverseMassFirst = firstPinned ? 0 : 1 / first.mass;
        const inverseMassSecond = secondPinned ? 0 : 1 / second.mass;
        const inverseMassTotal = inverseMassFirst + inverseMassSecond;
        if (!inverseMassTotal) continue;

        const horizontal = overlapX < overlapY;
        const firstCenterX = (firstBounds.minX + firstBounds.maxX) / 2;
        const firstCenterY = (firstBounds.minY + firstBounds.maxY) / 2;
        const secondCenterX = (secondBounds.minX + secondBounds.maxX) / 2;
        const secondCenterY = (secondBounds.minY + secondBounds.maxY) / 2;
        const normalX = horizontal ? (firstCenterX < secondCenterX ? 1 : -1) : 0;
        const normalY = horizontal ? 0 : (firstCenterY < secondCenterY ? 1 : -1);
        const penetration = horizontal ? overlapX : overlapY;
        const correction = Math.max(0, penetration - 0.25) * 0.72 / inverseMassTotal;

        first.x -= normalX * correction * inverseMassFirst;
        first.y -= normalY * correction * inverseMassFirst;
        second.x += normalX * correction * inverseMassSecond;
        second.y += normalY * correction * inverseMassSecond;

        const relativeSpeed = (
          (second.vx - first.vx) * normalX
          + (second.vy - first.vy) * normalY
        );
        if (relativeSpeed >= 0) continue;

        const impulse = -(
          (1 + options.collisionRestitution) * relativeSpeed
        ) / inverseMassTotal;
        first.vx -= normalX * impulse * inverseMassFirst;
        first.vy -= normalY * impulse * inverseMassFirst;
        second.vx += normalX * impulse * inverseMassSecond;
        second.vy += normalY * impulse * inverseMassSecond;
        clampComponentSpeed(first);
        clampComponentSpeed(second);
      }
    }
  }

  function fixedStep(delta, context) {
    const activeComponentIds = new Set();
    context.activeThoughtIds.forEach((thoughtId) => {
      const component = componentByThoughtId.get(thoughtId);
      if (component) activeComponentIds.add(component.id);
    });

    activeComponentIds.forEach((componentId) => {
      const component = components.get(componentId);
      if (!component) return;
      component.targetTimeScale = context.hoveredComponentIds.has(componentId)
        ? options.hoverTimeScale
        : 1;
      component.timeScale += (
        component.targetTimeScale - component.timeScale
      ) * (1 - Math.exp(-delta / options.hoverResponse));
      const scaledDelta = delta * component.timeScale;
      const pinned = [...component.memberIds].some(
        (thoughtId) => thoughtsById.get(thoughtId)?.pinned,
      );
      if (!pinned) {
        component.x += component.vx * scaledDelta;
        component.y += component.vy * scaledDelta;
      }
    });

    if (dragged) {
      const draggedNode = nodes.get(dragged.thoughtId);
      const draggedComponent = draggedNode ? components.get(draggedNode.componentId) : null;
      if (draggedNode && draggedComponent) {
        draggedNode.localX = dragged.targetX - draggedComponent.x;
        draggedNode.localY = dragged.targetY - draggedComponent.y;
        draggedNode.localVx = dragged.vx - draggedComponent.vx;
        draggedNode.localVy = dragged.vy - draggedComponent.vy;
      }
    }

    const forces = new Map(
      [...nodes.keys()].map((thoughtId) => [thoughtId, { x: 0, y: 0 }]),
    );
    addConstraintForces(forces, activeComponentIds, delta);
    addInternalCollisionForces(forces, activeComponentIds);
    addConnectionForces(activeComponentIds, delta);

    activeComponentIds.forEach((componentId) => {
      const component = components.get(componentId);
      if (!component) return;
      const scaledDelta = delta * component.timeScale;
      component.memberIds.forEach((thoughtId) => {
        const node = nodes.get(thoughtId);
        const thought = thoughtsById.get(thoughtId);
        if (!node || !thought || thought.pinned || thoughtId === dragged?.thoughtId) return;

        const force = forces.get(thoughtId);
        node.localVx += force.x / node.mass * scaledDelta;
        node.localVy += force.y / node.mass * scaledDelta;
        const damping = Math.exp(-options.localDamping * scaledDelta);
        node.localVx *= damping;
        node.localVy *= damping;
        const localVelocity = clampVector(
          { x: node.localVx, y: node.localVy },
          options.maxLocalSpeed,
        );
        node.localVx = localVelocity.x;
        node.localVy = localVelocity.y;
        node.localX += node.localVx * scaledDelta;
        node.localY += node.localVy * scaledDelta;
      });

      normalizeComponentFrame(component, {
        preserveWorld: component.memberIds.has(dragged?.thoughtId),
      });
      clampComponentSpeed(component);
    });

    resolveInternalCollisions(activeComponentIds);
    resolveComponentCollisions(activeComponentIds);
  }

  function advance(frameDelta, context = {}) {
    const activeThoughtIds = context.activeThoughtIds || new Set(thoughtsById.keys());
    const hoveredComponentIds = context.hoveredComponentIds || new Set();
    const motionScale = clamp(finite(context.motionScale, 1), 0.1, 1);

    accumulator += Math.min(Math.max(0, finite(frameDelta)), 0.05) * motionScale;
    let substeps = 0;
    while (accumulator >= options.fixedStep && substeps < options.maxSubsteps) {
      fixedStep(options.fixedStep, { activeThoughtIds, hoveredComponentIds });
      accumulator -= options.fixedStep;
      substeps += 1;
    }
    if (substeps === options.maxSubsteps) accumulator = 0;
    exportWorldState();
  }

  function translateComponent(componentId, shiftX, shiftY) {
    const component = components.get(componentId);
    if (!component) return false;
    component.x += finite(shiftX);
    component.y += finite(shiftY);
    exportComponent(component);
    return true;
  }

  function setComponentVelocity(componentId, vx, vy) {
    const component = components.get(componentId);
    if (!component) return false;
    const velocity = clampVector(
      { x: finite(vx), y: finite(vy) },
      options.maxComponentSpeed,
    );
    component.vx = velocity.x;
    component.vy = velocity.y;
    component.memberIds.forEach((thoughtId) => {
      const node = nodes.get(thoughtId);
      if (!node) return;
      node.localVx = 0;
      node.localVy = 0;
    });
    exportComponent(component);
    return true;
  }

  function beginDrag(thoughtId) {
    const thought = thoughtsById.get(thoughtId);
    if (!thought || !nodes.has(thoughtId)) return false;
    dragged = {
      thoughtId,
      targetX: thought.x,
      targetY: thought.y,
      lastX: thought.x,
      lastY: thought.y,
      lastTimestamp: null,
      vx: finite(thought.vx),
      vy: finite(thought.vy),
    };
    return true;
  }

  function moveDraggedThought(thoughtId, x, y, timestamp) {
    if (!dragged || dragged.thoughtId !== thoughtId) return false;
    const nextX = finite(x, dragged.targetX);
    const nextY = finite(y, dragged.targetY);
    if (Number.isFinite(timestamp) && Number.isFinite(dragged.lastTimestamp)) {
      const delta = (timestamp - dragged.lastTimestamp) / 1000;
      if (delta > 0 && delta < 0.25) {
        const rawVelocity = clampVector({
          x: (nextX - dragged.lastX) / delta,
          y: (nextY - dragged.lastY) / delta,
        }, options.maxPointerSpeed);
        dragged.vx += (rawVelocity.x - dragged.vx) * 0.35;
        dragged.vy += (rawVelocity.y - dragged.vy) * 0.35;
      }
    }
    dragged.targetX = nextX;
    dragged.targetY = nextY;
    dragged.lastX = nextX;
    dragged.lastY = nextY;
    dragged.lastTimestamp = finite(timestamp, dragged.lastTimestamp);

    const node = nodes.get(thoughtId);
    const component = node ? components.get(node.componentId) : null;
    if (!node || !component) return false;
    node.localX = nextX - component.x;
    node.localY = nextY - component.y;
    node.localVx = dragged.vx - component.vx;
    node.localVy = dragged.vy - component.vy;
    normalizeComponentFrame(component, { preserveWorld: true });
    exportComponent(component);
    return true;
  }

  function endDrag(thoughtId) {
    if (!dragged || dragged.thoughtId !== thoughtId) return false;
    const node = nodes.get(thoughtId);
    const component = node ? components.get(node.componentId) : null;
    if (node && component) {
      const releaseVelocity = clampVector(
        { x: dragged.vx, y: dragged.vy },
        options.maxPointerSpeed,
      );
      node.localVx = releaseVelocity.x - component.vx;
      node.localVy = releaseVelocity.y - component.vy;
      normalizeComponentFrame(component, { preserveWorld: true });
      exportComponent(component);
    }
    dragged = null;
    return true;
  }

  function debugSnapshot() {
    return {
      components: [...components.values()].map((component) => ({
        id: component.id,
        memberIds: [...component.memberIds],
        x: component.x,
        y: component.y,
        vx: component.vx,
        vy: component.vy,
        mass: component.mass,
        timeScale: component.timeScale,
      })),
      constraints: [...constraints.values()].map((constraint) => ({ ...constraint })),
      connectionConstraints: [...connectionConstraints.values()].map(
        (connection) => ({ ...connection }),
      ),
    };
  }

  return {
    syncTopology,
    syncConnections,
    advance,
    translateComponent,
    setComponentVelocity,
    beginDrag,
    moveDraggedThought,
    endDrag,
    debugSnapshot,
  };
}
