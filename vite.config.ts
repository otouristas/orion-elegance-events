import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    nodePolyfills({
      // Only include necessary polyfills for production
      globals: {
        Buffer: false,
        global: false,
        process: false,
      },
      protocolImports: false,
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.gif', '**/*.svg'],
  build: {
    // Ensure proper module resolution for production
    rollupOptions: {
      external: mode === "development" ? [] : undefined,
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
  },
  define: {
    // Ensure process.env is available
    global: 'globalThis',
  },
}));
