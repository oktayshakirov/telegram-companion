import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import mockDevServerPlugin from "vite-plugin-mock-dev-server";

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "#": path.resolve(__dirname, "./src"),
            "#assets": path.resolve(__dirname, "./src/assets"),
            "#components": path.resolve(__dirname, "./src/components"),
        },
    },
    plugins: [
        react(),
        mockDevServerPlugin({
            log: "debug",
            include: ["src/mock/**/*.mock.{js,ts,cjs,mjs,json,json5}"],
        }),
    ],
    build: {
        target: "esnext",
    },
    server: {
        port: 3000,
        headers: {
            "Cross-Origin-Opener-Policy": "same-origin-allow-popups",
        },
        proxy: {
            "^/api": { target: "" },
        },
    },
});
