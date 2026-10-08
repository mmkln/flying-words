import assert from 'node:assert/strict';
import test from 'node:test';

import {
  getTelegramMenuLabel,
  isTrustedTelegramConnectUrl,
  normalizeTelegramConnection,
  shouldRefreshTelegramConnection,
} from './telegram-settings.js';

test('Telegram menu label describes the available action', () => {
  assert.equal(getTelegramMenuLabel(null), 'Telegram Bot');
  assert.equal(getTelegramMenuLabel(false), 'Connect Telegram Bot');
  assert.equal(getTelegramMenuLabel(true), 'Telegram Bot');
});

test('Telegram connection response exposes only the supported state', () => {
  assert.deepEqual(normalizeTelegramConnection({ connected: true }), {
    connected: true,
    connectUrl: null,
  });
  assert.deepEqual(normalizeTelegramConnection({
    connected: false,
    connect_url: 'https://t.me/test_bot?start=abc_123',
  }), {
    connected: false,
    connectUrl: 'https://t.me/test_bot?start=abc_123',
  });
  assert.throws(() => normalizeTelegramConnection({}), /invalid Telegram status/);
});

test('only a valid Telegram bot start link can leave the app', () => {
  assert.equal(
    isTrustedTelegramConnectUrl('https://t.me/test_bot?start=abc_123'),
    true,
  );
  assert.equal(
    isTrustedTelegramConnectUrl('https://example.com/test_bot?start=abc_123'),
    false,
  );
  assert.equal(isTrustedTelegramConnectUrl('not-a-url'), false);
});

test('returning from Telegram refreshes only the pending open dialog', () => {
  assert.equal(shouldRefreshTelegramConnection({
    dialogOpen: true,
    awaitingConnection: true,
    visibilityState: 'visible',
  }), true);
  assert.equal(shouldRefreshTelegramConnection({
    dialogOpen: false,
    awaitingConnection: true,
    visibilityState: 'visible',
  }), false);
  assert.equal(shouldRefreshTelegramConnection({
    dialogOpen: true,
    awaitingConnection: false,
    visibilityState: 'visible',
  }), false);
});
