import { defineConfig }    from 'vite';
import react               from '@vitejs/plugin-react';
import { plugin as markdownPlugin }   from 'vite-plugin-markdown';
import { Mode }           from 'vite-plugin-markdown';  

export default defineConfig(({ command }) => ({
  base: '/',
  plugins: [
    react(),
    markdownPlugin({
      mode: [Mode.MARKDOWN],
      include: 'src/content/**/*.md'
    })
  ],
  build: {
    outDir: 'docs',
    assetsDir: 'assets'
  }
}))
