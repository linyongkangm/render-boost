import { defineConfig, AliasOptions } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import pageageJson from './package.json';
import tsconfig from './tsconfig.json';
import path from 'path';

const alias: AliasOptions = {};
const baseUrl = tsconfig.compilerOptions.baseUrl;
const paths = tsconfig.compilerOptions.paths;
Object.entries(paths).forEach(([_key, _value]) => {
  const val = _value[0];
  const key = _key.replace('/*', '');
  const value = path.resolve(__dirname, baseUrl, val?.replace('/*', ''));
  alias[key] = value;
});
export default defineConfig({
  base: `/${pageageJson.name}`,
  plugins: [solidPlugin()],
  server: {
    port: 3000,
  },
  resolve: {
    alias,
  },
  build: {
    target: 'es2015',
    outDir: 'docs',
  },
});
