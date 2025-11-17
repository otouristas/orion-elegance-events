import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    nodePolyfills({
      // Only include necessary polyfills for production
      globals: {
        Buffer: false,
        global: false,
        process: false,
      },
      protocolImports: false,
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    exclude: [
      "@radix-ui/react-separator",
      "@radix-ui/react-checkbox",
    ],
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
