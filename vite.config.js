import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react";


// https://vitejs.dev/config/
export default defineConfig({
  build: { manifest: true },
  base: process.env.NODE_ENV === "production" ? "/static/" : "/",
  root: "./src",
  plugins: [
    reactRefresh(),
  ]
});