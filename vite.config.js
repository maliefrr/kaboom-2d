import { defineConfig } from "vite";

export default defineConfig({
    base: '/kaboom-2d/',
    build: {
        minify: 'terser'
    }
})
