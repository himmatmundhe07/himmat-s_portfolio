import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Optimize chunk splitting for better caching and reduced unused JS
    rollupOptions: {
      output: {
        manualChunks: {
          // Core framework bundle
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          // Animation library (large, used everywhere)
          'vendor-motion': ['framer-motion'],
          // Helmet + Analytics (small, deferred)
          'vendor-utils': ['react-helmet-async', '@vercel/analytics'],
        },
      },
    },
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 600,
    // Minify with esbuild for faster builds
    minify: 'esbuild',
    // Target modern browsers for smaller output
    target: 'es2020',
  },
})
