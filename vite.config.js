import { defineConfig } from 'vite';

export default defineConfig(({ command }) => ({
  // GitHub Pages serves this repository at /flying-words/.
  // Keep the dev server at / for a convenient local URL.
  base: command === 'build' ? '/flying-words/' : '/',
}));
