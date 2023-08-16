import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const ESBACKEND = "http://cage-page-backend.eba-vnkpz5mk.ca-central-1.elasticbeanstalk.com"
const LOCALBACKEND = "http://localhost:3000"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target:
          ESBACKEND,
        changeOrigin: true,
      },
    },
    headers: {
      "Cross-Origin-Opener-Policy": "same-origin-allow-popups",
    },
  },
});
