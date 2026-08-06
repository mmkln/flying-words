const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';

export function createConnectionRenderer({ layer, getThoughtById }) {
  const paths = new Map();
  let connections = [];

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
        layer.append(path);
        paths.set(connection.id, path);
      }

      path.dataset.connectionKind = connection.kind;
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

      const startX = source.x + source.width / 2;
      const startY = source.y + source.height / 2;
      const endX = target.x + target.width / 2;
      const endY = target.y + target.height / 2;
      const distance = Math.hypot(endX - startX, endY - startY);
      const direction = endX >= startX ? 1 : -1;
      const curve = Math.min(110, Math.max(34, distance * 0.28));

      path.setAttribute('d', [
        `M ${startX} ${startY}`,
        `C ${startX + direction * curve} ${startY},`,
        `${endX - direction * curve} ${endY},`,
        `${endX} ${endY}`,
      ].join(' '));
    });
  }

  return { setConnections, update };
}
