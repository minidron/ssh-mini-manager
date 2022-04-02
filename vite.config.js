import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  root: path.resolve(__dirname, 'app/src/'),

  base: './',

  build: {
    emptyOutDir: true,
    outDir: path.resolve(__dirname, 'dist/vue/'),
  },

  plugins: [vue()],

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "/assets/scss/variables.scss";
        `
      }
    }
  }
})
