import {defineConfig} from 'vite';
import {name, version} from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      name: 'cta.components',
      entry: 'src/index.ts',
      formats: ['es', 'umd', 'iife'],
      fileName: (format) => `${version}/${name.toLowerCase()}.${format}.${version}.js`,
    },
    rollupOptions: {
      external: [],
    },
  },
});
