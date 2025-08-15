import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    cssCodeSplit: false, // Disable CSS code splitting to preserve theme variables
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router', 'pinia'],
          ui: ['primevue', '@primevue/themes'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    target: 'es2015', // Better mobile compatibility
  },
  server: {
    host: true,
    port: 3000,
  },
  preview: {
    host: true,
    port: 3000,
  },
})
