export function deriveAppChromeState({
  applicationReady,
  viewMode,
  canvasActive,
  boardThoughtCount,
}) {
  const boardContextVisible = Boolean(
    applicationReady
    && viewMode === 'canvas'
    && canvasActive
  );

  return {
    boardContextVisible,
    spacesButtonVisible: !boardContextVisible,
    navigationHudVisible: (
      boardContextVisible
      && boardThoughtCount > 0
    ),
  };
}
