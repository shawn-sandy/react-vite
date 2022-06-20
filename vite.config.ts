/** @format */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  if (mode !== 'package') {
    return {
      plugins: [react()],
    }

  } else {
    return {
      plugins: [react(), dts()],
      esbuild: {
        logOverride: { 'this-is-undefined-in-esm': 'silent' }
      },
      build: {
        sourcemap: true,
        lib: {
          entry: resolve(__dirname, 'src/component/Link.tsx'),
          name: 'Link',
          formats: ['es', 'umd'],
          fileName: (format) => `index.${format}.js`,
        },
        rollupOptions: {
          external: ['react', 'react-dom', 'styled-components'],
          output: {
            dir: resolve(__dirname, 'build'),
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM',
            },
          },
        },
      },
    }
  }
})
