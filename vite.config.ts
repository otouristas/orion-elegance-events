import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import { componentTagger } from "lovable-tagger";
import { imagetools } from "vite-imagetools";

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
    }),
    imagetools({
      defaultDirectives: (url) => {
        if (url.searchParams.has('format')) {
          return new URLSearchParams(url.searchParams.toString());
        }
        return new URLSearchParams('format=webp&quality=85');
      },
      extendOutputFormats: (builtins) => builtins,
      extendTransforms: (builtins) => builtins,
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom"],
  },
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
    ],
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
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
        },
      },
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    sourcemap: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: mode === 'production',
        drop_debugger: mode === 'production',
      },
    },
  },
  define: {
    // Ensure process.env is available
    global: 'globalThis',
  },
}));
