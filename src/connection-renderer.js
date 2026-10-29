import { getConnectionPathData } from './connection-map-edge-geometry.js';

const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
let rendererSequence = 0;

export function createConnectionRenderer({ layer, getThoughtById }) {
  rendererSequence += 1;
  const markerId = `connection-arrow-${rendererSequence}`;
  const paths = new Map();
  let connections = [];

  const definitions = document.createElementNS(SVG_NAMESPACE, 'defs');
  const marker = document.createElementNS(SVG_NAMESPACE, 'marker');
  const markerPath = document.createElementNS(SVG_NAMESPACE, 'path');
  marker.id = markerId;
  marker.setAttribute('viewBox', '0 0 10 10');
  marker.setAttribute('refX', '8');
  marker.setAttribute('refY', '5');
  marker.setAttribute('markerWidth', '7');
  marker.setAttribute('markerHeight', '7');
  marker.setAttribute('orient', 'auto');
  markerPath.setAttribute('d', 'M 0 0 L 10 5 L 0 10 z');
  markerPath.classList.add('connection-edge-arrow');
  marker.append(markerPath);
  definitions.append(marker);
  layer.append(definitions);

  function setConnections(nextConnections) {
    connections = nextConnections;
    const activeIds = new Set(connections.map((connection) => connection.id));

    paths.forEach((path, connectionId) => {
      if (activeIds.has(connectionId)) return;
      path.remove();
      paths.delete(connectionId);
    });

    connections.forEach((connection) => {
      let path = paths.get(connection.id);
      if (!path) {
        path = document.createElementNS(SVG_NAMESPACE, 'path');
        path.classList.add('connection-edge');
        path.dataset.connectionId = connection.id;
        path.setAttribute('marker-end', `url(#${markerId})`);
        layer.append(path);
        paths.set(connection.id, path);
      }

      path.dataset.connectionKind = connection.kind;
      path.classList.toggle('is-draft', connection.draft === true);
    });
  }

  function update() {
    connections.forEach((connection) => {
      const path = paths.get(connection.id);
      const source = getThoughtById(connection.sourceId);
      const target = getThoughtById(connection.targetId);
      const endpointsVisible = (
        source
        && target
        && !source.element.hidden
        && !target.element.hidden
      );

      if (!path || !endpointsVisible) {
        if (path) path.hidden = true;
        return;
      }

      path.hidden = false;

      path.setAttribute('d', getConnectionPathData(
        {
          x: source.x + source.width / 2,
          y: source.y + source.height / 2,
          width: source.width,
          height: source.height,
        },
        {
          x: target.x + target.width / 2,
          y: target.y + target.height / 2,
          width: target.width,
          height: target.height,
        },
      ));
    });
  }

  return { setConnections, update };
}
