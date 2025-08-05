import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'public/manifest.json',
          dest: '.',
        },
        {
          src: 'public/icons',
          dest: '.',
        }
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': './src',
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        popup: './index.html',
        // Add more entry points as needed for content scripts, background scripts, etc.
        // background: './src/background.ts',
        // content: './src/content.ts',
      },
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    },
    // Ensure Chrome extension compatibility
    minify: true,
    sourcemap: false,
  },
})