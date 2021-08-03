import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { vitePluginMd } from "./plugins/vite-plugin-md";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vitePluginMd()]
})
