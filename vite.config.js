import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { plugin as markdownPlugin, Mode } from 'vite-plugin-markdown'

export default defineConfig({
  base: '/<jessjessjohnsonson.github.io>/',
  plugins: [
    react(),
    markdownPlugin({ mode: [Mode.HTML] })
  ],
  assetsInclude: ['**/*.html'],
  build: {
    outDir: 'docs'
  }
});