import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const COMPONENT_BUILD = {
  lib: {
    entry: './src/main.jsx',
    formats: ['es'],
    name: 'ChatWidget',
    fileName: 'digital-wisdom-chat',
  },
  rollupOptions: {
    output: {
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
    },
  },
}

const build = process.env.TEST ? {} : COMPONENT_BUILD
console.log('build', build)
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {},
  },
  build,
})
