# Flying Thoughts

Local app for short thoughts that move freely in space.

## Run locally

```powershell
npm install
npm run dev -- --host 127.0.0.1
```

Open `http://127.0.0.1:5173`. Keeping the frontend and API on the same
hostname lets the browser send the local session cookie reliably.

If the local API uses a different port, override it for the current shell:

```powershell
$env:VITE_API_URL = 'http://127.0.0.1:8001/api/v1'
npm run dev -- --host 127.0.0.1
```

## GitHub Pages

The repository is configured to deploy from `main` to GitHub Pages through GitHub Actions. After pushing, set **Settings → Pages → Source** to **GitHub Actions**. The site will be available at `https://mmkln.github.io/flying-words/` after the workflow finishes.

## Features

- create, drag, pin, and delete thoughts;
- physics-based motion and card collisions;
- Board and an on-demand force-directed WebGL Spatial graph with shared semantic links;
- responsive layouts for phones and desktops;
- automatic local persistence with `localStorage`;
- revision-checked cloud synchronization that patches only changed metadata
  namespaces and pauses stale writes instead of overwriting server data;
- support for the system **Reduce motion** preference.

## Central sign-in

Flying Thoughts uses the private OpenID Connect service through its Django
backend. **Sign in** redirects to the shared identity page, which returns a
short-lived one-time code to the browser. The backend exchanges that code for
application-specific JWTs; API requests use a short-lived access token while a
rotating refresh token keeps the browser signed in across reloads.

For local development, run `flying-words-backend` on port `8001` and set
`VITE_API_URL=http://127.0.0.1:8001/api/v1`. Register this backend callback in
the identity service:

```text
http://127.0.0.1:8001/api/v1/auth/sso/callback/
```

In Spatial, drag the background to orbit, scroll or pinch to zoom, and drag a
node to reshape the graph. Click a node to inspect it, use **Focus** to move the
camera to it, or pin its position when it should stop participating in the
layout. With a standard gamepad, use the left stick to strafe, the right stick
to look around, and the right/left triggers to fly forward/backward. Movement
stops as soon as the controls are released. The Three.js renderer and graph
simulation are loaded only when Spatial is opened.

## Do you need a backend?

For a personal local version, no: data stays in the browser. The included Django
backend adds the shared account, cross-device sync, and revision-checked storage.

## Electron

Electron makes sense when the product needs to be a standalone desktop app with offline support, a system tray, auto-updates, or file access. For validating the idea, the web version is simpler, faster to develop, and needs no installation. It can later be packaged with Electron or Tauri without rewriting the interface.
