/// <reference types="vitest" />
import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'
export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTest.ts',
    plugins: [react()],
    coverage: {
      reporter: ['text', 'html'],
      exclude: [
        'node_modules/',
        'src/setupTests.ts',
      ],
    },
  },
});
