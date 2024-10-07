import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/react-crash-2024/dist/',
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'https://loen10.github.io/react-crash-2024/dist',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
