import assert from 'node:assert/strict';
import test from 'node:test';

import {
  buildSessionHeaders,
  parseAccountHint,
  parseBrowserSession,
} from './browser-session.js';

test('legacy auth storage is reduced to a non-secret account hint', () => {
  assert.deepEqual(
    parseAccountHint(JSON.stringify({
      id: 'user-1',
      email: 'user@example.com',
      access: 'legacy-access-token',
      refresh: 'legacy-refresh-token',
    })),
    { id: 'user-1', email: 'user@example.com' },
  );
});

test('browser session contract validates identity and exposes the CSRF token', () => {
  assert.deepEqual(
    parseBrowserSession({
      authenticated: true,
      user: { id: 'user-1', email: 'user@example.com' },
      csrfToken: 'csrf-token',
    }),
    {
      account: { id: 'user-1', email: 'user@example.com' },
      csrfToken: 'csrf-token',
    },
  );
  assert.equal(parseBrowserSession({ authenticated: true, user: {} }), null);
});

test('mutations include CSRF while safe requests do not', () => {
  assert.deepEqual(
    buildSessionHeaders({ method: 'PATCH', hasBody: true, csrfToken: 'csrf-token' }),
    {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-CSRFToken': 'csrf-token',
    },
  );
  assert.deepEqual(buildSessionHeaders({ method: 'GET', csrfToken: 'csrf-token' }), {
    Accept: 'application/json',
  });
});
