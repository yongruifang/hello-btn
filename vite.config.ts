import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path"
import dts from 'vite-plugin-dts'
import VitePluginStyleInject from 'vite-plugin-style-inject'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VitePluginStyleInject(),
    vue(),
    dts()
  ],
  resolve: {
    alias: {
      "@p": resolve(__dirname, "./packages")
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, "packages/index.ts"),
      name: "HelloBtnLibrary",
      fileName: "hello-btn",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  }
})
