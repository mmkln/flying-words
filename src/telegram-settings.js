export function normalizeTelegramConnection(payload) {
  if (!payload || typeof payload.connected !== 'boolean') {
    throw new Error('The server returned an invalid Telegram status.');
  }

  return {
    connected: payload.connected,
    connectUrl: typeof payload.connect_url === 'string'
      ? payload.connect_url
      : null,
  };
}

export function isTrustedTelegramConnectUrl(value) {
  try {
    const url = new URL(value);
    return (
      url.protocol === 'https:'
      && url.hostname === 't.me'
      && /^\/[A-Za-z0-9_]{5,32}$/.test(url.pathname)
      && /^[A-Za-z0-9_-]{1,64}$/.test(url.searchParams.get('start') || '')
    );
  } catch {
    return false;
  }
}

export function shouldRefreshTelegramConnection({
  dialogOpen,
  awaitingConnection,
  visibilityState,
}) {
  return (
    dialogOpen === true
    && awaitingConnection === true
    && visibilityState === 'visible'
  );
}
