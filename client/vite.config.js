import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    exclude: ["js-big-decimal"],
  },
  resolve: {
    // alias: {
    //   "@": path.resolve(__dirname, "./src"),
    //   "@components": path.resolve(__dirname, "./src/components"),
    //   "@configs": path.resolve(__dirname, "./src/configs"),
    //   "@helpers": path.resolve(__dirname, "./src/helpers"),
    //   "@hook": path.resolve(__dirname, "./src/hook"),
    //   "@styles": path.resolve(__dirname, "./src/styles"),
    //   "@utils": path.resolve(__dirname, "./src/utils"),
    //   "@views": path.resolve(__dirname, "./src/views"),
    //   "@assets": path.resolve(__dirname, "./src/assets"),
    // },
    alias: {
      "@": "./src",
      "@components": "./src/components",
      "@configs": "./src/configs",
      "@helpers": "./src/helpers",
      "@hook": "./src/hook",
      "@styles": "./src/styles",
      "@utils": "./src/utils",
      "@views": "./src/views",
      "@assets": "./src/assets",
    },
  },
  plugins: [react()],
});
