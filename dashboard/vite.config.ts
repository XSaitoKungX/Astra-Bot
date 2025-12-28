// ===========================================
// Vite Configuration - Astra Dashboard
// Optimized for production performance
// ===========================================

import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
  // Load env variables
  const env = loadEnv(mode, process.cwd(), '');
  const isDev = mode === 'development';
  const isProd = mode === 'production';
  
  return {
    // ============================================
    // Plugins
    // ============================================
    plugins: [
      react({
        // Use React plugin with optimal settings
        jsxRuntime: 'automatic',
      }),
    ],
    
    // ============================================
    // Path Resolution
    // ============================================
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@components': path.resolve(__dirname, './src/components'),
        '@pages': path.resolve(__dirname, './src/pages'),
        '@lib': path.resolve(__dirname, './src/lib'),
        '@stores': path.resolve(__dirname, './src/stores'),
        '@hooks': path.resolve(__dirname, './src/hooks'),
        '@assets': path.resolve(__dirname, './src/assets'),
      },
    },
    
    // ============================================
    // Development Server
    // ============================================
    server: {
      port: 5173,
      strictPort: false,
      host: true, // Listen on all interfaces
      open: false, // Don't auto-open browser
      cors: true,
      
      // API Proxy
      proxy: {
        '/api': {
          target: env.VITE_API_URL || 'http://localhost:3001',
          changeOrigin: true,
          secure: false,
          ws: true, // Enable WebSocket proxying
        },
      },
      
      // HMR Configuration
      hmr: {
        overlay: true,
        clientPort: 5173,
      },
      
      // Watch options
      watch: {
        usePolling: false,
        ignored: ['**/node_modules/**', '**/dist/**'],
      },
    },
    
    // ============================================
    // Preview Server (for testing production builds)
    // ============================================
    preview: {
      port: 4173,
      strictPort: false,
      host: true,
      cors: true,
    },
    
    // ============================================
    // Build Configuration
    // ============================================
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      
      // Source maps only in development
      sourcemap: isDev ? 'inline' : false,
      
      // Minification
      minify: isProd ? 'terser' : false,
      terserOptions: isProd ? {
        compress: {
          drop_console: true,
          drop_debugger: true,
          pure_funcs: ['console.log', 'console.info', 'console.debug'],
          passes: 2,
        },
        mangle: {
          safari10: true,
        },
        format: {
          comments: false,
        },
      } : undefined,
      
      // Chunk size
      chunkSizeWarningLimit: 600,
      
      // Asset handling
      assetsInlineLimit: 4096, // 4kb - inline smaller assets as base64
      
      // CSS
      cssCodeSplit: true,
      cssMinify: isProd,
      
      // Target modern browsers
      target: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14'],
      
      // Rollup options
      rollupOptions: {
        external: [],
        output: {
          // Consistent chunk naming
          chunkFileNames: isProd ? 'assets/[name]-[hash].js' : 'assets/[name].js',
          entryFileNames: isProd ? 'assets/[name]-[hash].js' : 'assets/[name].js',
          assetFileNames: isProd ? 'assets/[name]-[hash][extname]' : 'assets/[name][extname]',
          
          // Manual chunk splitting for optimal caching
          manualChunks: (id) => {
            // Core React - rarely changes
            if (id.includes('node_modules/react/') || 
                id.includes('node_modules/react-dom/') ||
                id.includes('node_modules/scheduler/')) {
              return 'vendor-react';
            }
            
            // React Router
            if (id.includes('node_modules/react-router') ||
                id.includes('node_modules/@remix-run/router')) {
              return 'vendor-router';
            }
            
            // Animation libraries
            if (id.includes('node_modules/framer-motion')) {
              return 'vendor-motion';
            }
            
            // Icons
            if (id.includes('node_modules/lucide-react')) {
              return 'vendor-icons';
            }
            
            // State management & data fetching
            if (id.includes('node_modules/zustand') || 
                id.includes('node_modules/@tanstack')) {
              return 'vendor-state';
            }
            
            // Utility libraries
            if (id.includes('node_modules/axios') || 
                id.includes('node_modules/recharts') ||
                id.includes('node_modules/react-hot-toast') ||
                id.includes('node_modules/clsx') ||
                id.includes('node_modules/tailwind-merge')) {
              return 'vendor-utils';
            }
            
            // Date utilities
            if (id.includes('node_modules/date-fns') ||
                id.includes('node_modules/dayjs')) {
              return 'vendor-date';
            }
            
            // Settings pages - lazy loaded
            if (id.includes('/pages/settings/')) {
              return 'pages-settings';
            }
            
            // Guild pages - lazy loaded
            if (id.includes('/pages/guild/')) {
              return 'pages-guild';
            }
            
            // Admin pages
            if (id.includes('/pages/admin/')) {
              return 'pages-admin';
            }
          },
        },
      },
      
      // Report compressed sizes
      reportCompressedSize: true,
      
      // Empty outDir before build
      emptyOutDir: true,
    },
    
    // ============================================
    // Optimization
    // ============================================
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'react-router-dom',
        'framer-motion',
        'lucide-react',
        'zustand',
        '@tanstack/react-query',
        'axios',
        'react-hot-toast',
        'react-markdown',
        'remark-gfm',
        'react-syntax-highlighter',
      ],
      exclude: [],
      esbuildOptions: {
        jsx: 'automatic',
      },
    },
    
    // ============================================
    // Environment Variables
    // ============================================
    define: {
      __APP_VERSION__: JSON.stringify(process.env.npm_package_version || '1.0.0'),
      __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
    },
    
    // Base path
    base: '/',
    
    // Enable JSON loading
    json: {
      namedExports: true,
      stringify: false,
    },
    
    // Logging
    logLevel: isDev ? 'info' : 'warn',
    
    // Clear screen
    clearScreen: true,
  };
});
