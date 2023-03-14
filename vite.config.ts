/// <reference types="vitest" />
import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  test: {
      // globals: true,
      setupFiles: 'src/setupTests.ts',
  },
  resolve: {
    alias: {
      "@/*": "src/*",
      "@/types": "src/@types",
    },
  },
  plugins: [
    splitVendorChunkPlugin(),
    react({
      include: '**/*.tsx',
    })
  ],
})
