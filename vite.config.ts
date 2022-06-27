import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path');

export default defineConfig({
    build: {
        lib: {
            name: "Test",
            entry: path.resolve(__dirname, `src/views/Test/Test.vue`),
            formats: ['iife'],
            fileName: (format) => "[name].js",
        },
        rollupOptions: {
            external: ['vue'],
            output: { globals: { 'vue': 'Vue', } }
        }
    },
    plugins: [
        vue()
    ]
})

