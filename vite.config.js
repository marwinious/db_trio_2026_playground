// vite.config.js in your test project
import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    exclude: ['vertex_engine'], // Prevents Vite from caching/pre-bundling vertex_engine!
  },
});