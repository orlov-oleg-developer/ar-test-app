import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repository =
  process.env.GITHUB_REPOSITORY?.split('/')[1] ||
  process.env.npm_package_config_repositoryName;

export default defineConfig({
  plugins: [react()],
  base: repository ? `/${repository}/` : '/',
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return;
          if (id.includes('node_modules/three/examples')) return 'three-examples';
          if (id.includes('node_modules/three')) return 'three';
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) return 'react';
        },
      },
    },
  },
});
