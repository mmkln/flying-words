# Flying Thoughts

Local app for short thoughts that move freely in space.

## Run locally

```powershell
npm install
npm run dev
```

Open the address shown by Vite (usually `http://localhost:5173`).

## GitHub Pages

The repository is configured to deploy from `main` to GitHub Pages through GitHub Actions. After pushing, set **Settings → Pages → Source** to **GitHub Actions**. The site will be available at `https://mmkln.github.io/flying-words/` after the workflow finishes.

## Features

- create, drag, pin, and delete thoughts;
- physics-based motion and card collisions;
- Board and an on-demand force-directed WebGL Spatial graph with shared semantic links;
- responsive layouts for phones and desktops;
- automatic local persistence with `localStorage`;
- support for the system **Reduce motion** preference.

In Spatial, drag the background to orbit, scroll or pinch to zoom, and drag a
node to reshape the graph. Click a node to inspect it, use **Focus** to move the
camera to it, or pin its position when it should stop participating in the
layout. The Three.js renderer and graph simulation are loaded only when Spatial
is opened.

## Do you need a backend?

For a personal local version, no: data stays in the browser. Add a backend when you need accounts, cross-device sync, shared boards, search, or backups. A practical next step is Supabase (Auth + Postgres + Realtime) or a custom PostgreSQL API.

## Electron

Electron makes sense when the product needs to be a standalone desktop app with offline support, a system tray, auto-updates, or file access. For validating the idea, the web version is simpler, faster to develop, and needs no installation. It can later be packaged with Electron or Tauri without rewriting the interface.
