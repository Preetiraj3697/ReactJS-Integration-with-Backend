import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api': 'https://zany-ray-yoke.cyclic.app',
      }
  },
  build: {
    proxy: {
      "/api": {
        target: "https://fanciful-hamster-a2555c.netlify.app/", 
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace("/api", ""),
      }
    }
  },
  plugins: [react()],
})
