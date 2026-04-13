import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/shubhexpress-website/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    port: 3000,
    strictPort: true,
    open: true,
  },
})
