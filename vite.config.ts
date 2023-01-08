import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import pageageJson from './package.json';

export default defineConfig({
  base: `/${pageageJson.name}`,
  plugins: [solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: 'es2015',
    outDir: 'docs',
  },
});
