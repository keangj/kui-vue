import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { vitePluginMd } from "./plugins/vite-plugin-md";

// https://vitejs.dev/config/
export default defineConfig({
  alias: {
    "@": path.resolve(__dirname, "src"),
    "src": path.resolve(__dirname, "src"),
  },
  plugins: [vue(), vitePluginMd()]
})
