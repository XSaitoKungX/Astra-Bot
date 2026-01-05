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
      
      // Chunk size - set to 600KB as remaining large chunks are vendor libraries
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
          
          // Manual chunk splitting for optimal caching and smaller bundles
          manualChunks: (id) => {
            // Core React - rarely changes, cache long
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
            
            // Framer Motion - large library, separate chunk
            if (id.includes('node_modules/framer-motion')) {
              return 'vendor-motion';
            }
            
            // Icons - can be large
            if (id.includes('node_modules/lucide-react')) {
              return 'vendor-icons';
            }
            
            // Charts - heavy library
            if (id.includes('node_modules/recharts') ||
                id.includes('node_modules/d3-')) {
              return 'vendor-charts';
            }
            
            // Markdown rendering
            if (id.includes('node_modules/react-markdown') ||
                id.includes('node_modules/remark') ||
                id.includes('node_modules/rehype') ||
                id.includes('node_modules/unified') ||
                id.includes('node_modules/micromark') ||
                id.includes('node_modules/mdast') ||
                id.includes('node_modules/hast')) {
              return 'vendor-markdown';
            }
            
            // Syntax highlighting - split by language for smaller chunks
            if (id.includes('node_modules/react-syntax-highlighter')) {
              return 'vendor-syntax-core';
            }
            if (id.includes('node_modules/refractor') ||
                id.includes('node_modules/prismjs')) {
              return 'vendor-syntax-langs';
            }
            
            // i18n
            if (id.includes('node_modules/i18next') ||
                id.includes('node_modules/react-i18next')) {
              return 'vendor-i18n';
            }
            
            // Form handling
            if (id.includes('node_modules/react-hook-form') ||
                id.includes('node_modules/zod') ||
                id.includes('node_modules/@hookform')) {
              return 'vendor-forms';
            }
            
            // State management & data fetching
            if (id.includes('node_modules/zustand') || 
                id.includes('node_modules/@tanstack')) {
              return 'vendor-state';
            }
            
            // HTTP & utilities
            if (id.includes('node_modules/axios')) {
              return 'vendor-http';
            }
            
            // Date utilities
            if (id.includes('node_modules/date-fns') ||
                id.includes('node_modules/dayjs')) {
              return 'vendor-date';
            }
            
            // Other small utilities - group together
            if (id.includes('node_modules/react-hot-toast') ||
                id.includes('node_modules/clsx') ||
                id.includes('node_modules/tailwind-merge') ||
                id.includes('node_modules/class-variance-authority')) {
              return 'vendor-utils';
            }
            
            // Landing page - separate for faster initial load
            if (id.includes('/pages/LandingPage')) {
              return 'page-landing';
            }
            
            // Login page
            if (id.includes('/pages/LoginPage')) {
              return 'page-login';
            }
            
            // Docs pages
            if (id.includes('/pages/docs/')) {
              return 'pages-docs';
            }
            
            // Settings pages - lazy loaded, split by feature
            if (id.includes('/pages/settings/')) {
              if (id.includes('ModerationSettingsPage')) return 'page-settings-moderation';
              if (id.includes('LevelingSettingsPage')) return 'page-settings-leveling';
              if (id.includes('EconomySettingsPage')) return 'page-settings-economy';
              if (id.includes('WelcomeSettingsPage')) return 'page-settings-welcome';
              if (id.includes('TicketsSettingsPage')) return 'page-settings-tickets';
              if (id.includes('AutomodSettingsPage')) return 'page-settings-automod';
              if (id.includes('MusicSettingsPage')) return 'page-settings-music';
              if (id.includes('GiveawaySettingsPage')) return 'page-settings-giveaway';
              if (id.includes('LoggingSettingsPage')) return 'page-settings-logging';
              return 'pages-settings-other';
            }
            
            // Guild pages - lazy loaded, split further
            if (id.includes('/pages/guild/')) {
              // Heavy pages get their own chunk
              if (id.includes('AnalyticsPage')) return 'page-analytics';
              if (id.includes('ModerationPage')) return 'page-moderation';
              if (id.includes('EconomyPage')) return 'page-economy';
              if (id.includes('LevelingPage')) return 'page-leveling';
              if (id.includes('MusicPage')) return 'page-music';
              if (id.includes('TempVoicePage')) return 'page-tempvoice';
              if (id.includes('TicketsPage')) return 'page-tickets';
              if (id.includes('GiveawaysPage')) return 'page-giveaways';
              return 'pages-guild';
            }
            
            // Admin pages
            if (id.includes('/pages/admin/')) {
              return 'pages-admin';
            }
            
            // Components - split by type for smaller chunks
            if (id.includes('/components/')) {
              // Heavy components get their own chunk
              if (id.includes('DashboardLayout') || id.includes('Layout')) return 'components-layout';
              if (id.includes('Chart') || id.includes('Graph')) return 'components-charts';
              if (id.includes('Modal') || id.includes('Dialog')) return 'components-modals';
              if (id.includes('Form') || id.includes('Input') || id.includes('Select')) return 'components-forms';
              if (id.includes('Table') || id.includes('DataGrid')) return 'components-tables';
              if (id.includes('Card')) return 'components-cards';
              return 'components-ui';
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
