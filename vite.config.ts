/** @format */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  if (mode !== 'npm') {
    return {
      plugins: [react()],
    }
  } else {
    return {
      plugins: [react(), dts()],
      build: {
        sourcemap: true,
        lib: {
          entry: resolve(__dirname, 'src/component/index.tsx'),
          name: 'Link',
          formats: ['es', 'umd'],
          fileName: (format) => `index.${format}.js`,
        },
        rollupOptions: {
          external: ['react', 'react-dom', 'styled-components'],
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM',
              'styled-components': 'styled',
            },
          },
        },
      },
    }
  }
})
