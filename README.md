# AR Catapult

Vite + React + TypeScript demo for an Android-first WebXR AR catapult scene.

## What It Does

- Starts an `immersive-ar` WebXR session in Android Chrome.
- Lets you place targets on a detected real-world plane.
- Lets you place a catapult.
- Lets you pull on the screen and release to shoot.
- Uses pull distance as shot power.

## Local Run

```bash
npm install
npm run dev
```

Local URL:

```text
http://127.0.0.1:5173
```

Full AR mode should be tested on Android Chrome over HTTPS. GitHub Pages works because it serves the site over HTTPS.

## Build

```bash
npm run build
```

## Deploy To GitHub Pages

The repository name is configured as `ar-test-app` in `package.json`, so Vite builds with the base path `/ar-test-app/`.

```bash
npm run deploy
```

Then in GitHub:

1. Open `Settings` -> `Pages`.
2. Select `Deploy from a branch`.
3. Select branch `gh-pages`.
4. Select folder `/root`.

The deployed URL is:

```text
https://orlov-oleg-developer.github.io/ar-test-app/
```

## Assets

The Unity project assets used by the web scene are copied to:

- `public/catapult-assets/catapult.fbx`
- `public/catapult-assets/target.fbx`
- `public/catapult-assets/catapult.wav`
