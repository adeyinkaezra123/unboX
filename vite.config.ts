import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
    },
  },
  define: {
    __BUILD_TIME__: JSON.stringify(new Date().toLocaleDateString()),
    "process.env": process.env,
  },
  build: {
    commonjsOptions: { include: [] },
  },
  optimizeDeps: {
    disabled: false,
  },
});

// also don't forget to `npm i -D @types/node`, so __dirname won't complain
