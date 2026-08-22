import assert from 'node:assert/strict';
import test from 'node:test';

import {
  ThemeMode,
  nextThemeMode,
  normalizeThemeMode,
  resolveTheme,
} from './theme.js';

test('unknown theme preferences fall back to the system', () => {
  assert.equal(normalizeThemeMode('sepia'), ThemeMode.SYSTEM);
  assert.equal(normalizeThemeMode(null), ThemeMode.SYSTEM);
});

test('system appearance follows the operating system preference', () => {
  assert.equal(resolveTheme(ThemeMode.SYSTEM, false), ThemeMode.LIGHT);
  assert.equal(resolveTheme(ThemeMode.SYSTEM, true), ThemeMode.DARK);
});

test('manual appearance overrides the operating system preference', () => {
  assert.equal(resolveTheme(ThemeMode.LIGHT, true), ThemeMode.LIGHT);
  assert.equal(resolveTheme(ThemeMode.DARK, false), ThemeMode.DARK);
});

test('appearance cycles through system, light, and dark', () => {
  assert.equal(nextThemeMode(ThemeMode.SYSTEM), ThemeMode.LIGHT);
  assert.equal(nextThemeMode(ThemeMode.LIGHT), ThemeMode.DARK);
  assert.equal(nextThemeMode(ThemeMode.DARK), ThemeMode.SYSTEM);
});
