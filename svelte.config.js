import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: 'src/routes/home/index.js',
        app: 'src/routes/apps/index.js',
        about: 'src/routes/about/index.js'
      }
    }
  }
});