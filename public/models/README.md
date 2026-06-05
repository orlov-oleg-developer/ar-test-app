# Test models

Put the WebAR test assets in this folder:

- `demo.glb` for Android, WebXR, Scene Viewer, and desktop preview.
- `demo.usdz` for iOS Quick Look.

The app references them through Vite's public assets path:

- `/models/demo.glb`
- `/models/demo.usdz`

For GitHub Pages project sites, the final URLs include the repository base path
automatically, for example `/your-repo/models/demo.glb`.
