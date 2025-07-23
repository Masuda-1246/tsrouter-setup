import { defineConfig } from 'vite'
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"

import { TanStackRouterVite } from '@tanstack/router-vite-plugin'
import { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({ autoCodeSplitting: true }),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
