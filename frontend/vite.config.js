import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ci-cd-react-flask-demo/', // <--- this must match your repo name
  server: {
    proxy: {
      '/api': 'http://127.0.0.1:5000' // only used during local dev
    }
  }
})
