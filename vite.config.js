import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,        // listen on 0.0.0.0, not just localhost — exposes it to your LAN
    port: 3000,         // fixed port so the URL doesn't change between runs
    strictPort: true,   // fail loudly instead of silently picking a different port
  },
  preview: {
    host: true,         // same for `vite preview` (testing the production build)
    port: 4173,
    strictPort: true,
  },
})