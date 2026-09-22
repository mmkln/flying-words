import {
  buildSpatialClusterPlan,
  extendSpatialClusterPlan,
  spatialClusterPlanKey,
} from './spatial-clusters.js';
import {
  buildHierarchyLayoutPlan,
  extendHierarchyLayoutPlan,
  hierarchyLayoutPlanKey,
} from './spatial-hierarchy-layout.js';
import {
  buildTimelineLayoutPlan,
  extendTimelineLayoutPlan,
  timelineLayoutPlanKey,
} from './spatial-timeline-layout.js';
import {
  SpatialLayoutMode,
  normalizeSpatialLayoutMode,
} from './spatial-layout-mode.js';

const CLUSTER_STRENGTH = Object.freeze({ x: 0.026, y: 0.026, z: 0.026 });
const CLUSTER_PHYSICS = Object.freeze({
  internalLinkStrength: 0.56,
  externalLinkStrength: 0.1,
  externalLinkDistance: 460,
});

function adaptClusterPlan(strategyPlan) {
  return {
    groups: strategyPlan.clusters,
    nodeLayoutById: new Map(
      [...strategyPlan.nodeLayoutById].map(([nodeId, layout]) => [nodeId, {
        groupId: layout.clusterId,
        layoutAnchor: {
          x: layout.clusterAnchor.x,
          y: layout.clusterAnchor.y,
          z: layout.clusterAnchor.z,
        },
        layoutStrength: { ...CLUSTER_STRENGTH },
      }]),
    ),
    physics: { ...CLUSTER_PHYSICS },
    strategyPlan,
  };
}

export function spatialLayoutPlanKey(sourceNodes = [], sourceLinks = [], mode) {
  const normalizedMode = normalizeSpatialLayoutMode(mode);
  if (normalizedMode === SpatialLayoutMode.HIERARCHY) {
    return hierarchyLayoutPlanKey(sourceNodes, sourceLinks);
  }
  if (normalizedMode === SpatialLayoutMode.TIMELINE) {
    return timelineLayoutPlanKey(sourceNodes, sourceLinks);
  }
  return spatialClusterPlanKey(sourceNodes, sourceLinks, normalizedMode);
}

export function buildSpatialLayoutPlan(sourceNodes = [], sourceLinks = [], mode) {
  const normalizedMode = normalizeSpatialLayoutMode(mode);
  if (normalizedMode === SpatialLayoutMode.HIERARCHY) {
    return buildHierarchyLayoutPlan(sourceNodes, sourceLinks);
  }
  if (normalizedMode === SpatialLayoutMode.TIMELINE) {
    return buildTimelineLayoutPlan(sourceNodes, sourceLinks);
  }
  return adaptClusterPlan(
    buildSpatialClusterPlan(sourceNodes, sourceLinks, normalizedMode),
  );
}

export function extendSpatialLayoutPlan(previousPlan, transition, mode) {
  const normalizedMode = normalizeSpatialLayoutMode(mode);
  if (normalizedMode === SpatialLayoutMode.HIERARCHY) {
    return extendHierarchyLayoutPlan(previousPlan, transition);
  }
  if (normalizedMode === SpatialLayoutMode.TIMELINE) {
    return extendTimelineLayoutPlan(previousPlan, transition);
  }

  const extended = extendSpatialClusterPlan(previousPlan?.strategyPlan, {
    ...transition,
    mode: normalizedMode,
  });
  return extended ? adaptClusterPlan(extended) : null;
}

export const DEFAULT_SPATIAL_LAYOUT_PHYSICS = CLUSTER_PHYSICS;
