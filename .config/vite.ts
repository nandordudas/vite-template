import uiPro from '@nuxt/ui-pro/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    uiPro(),
  ],
})
