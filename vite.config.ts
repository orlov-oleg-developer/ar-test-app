import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repository =
  process.env.GITHUB_REPOSITORY?.split('/')[1] ||
  process.env.npm_package_config_repositoryName;

export default defineConfig({
  plugins: [react()],
  base: repository ? `/${repository}/` : '/',
});
