import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/meet/', // Ensure your app is served from the /meet/ path
  plugins: [
    react(),
    VitePWA({
      manifest: {
        "short_name": "React App",
        "name": "Create React App Sample",
        "icons": [
          {
            "src": "/favicon.ico", // Ensure icon paths are correct and in the public folder
            "sizes": "48x48",
            "type": "image/x-icon",
            "purpose": "maskable"
          },
          {
            "src": "/meet-app-144.png",
            "type": "image/png",
            "sizes": "144x144",
            "purpose": "any"
          },
          {
            "src": "/meet-app-192.png",
            "type": "image/png",
            "sizes": "192x192",
            "purpose": "maskable"
          },
          {
            "src": "/meet-app-512.png",
            "type": "image/png",
            "sizes": "512x512",
            "purpose": "maskable"
          }
        ],
        "start_url": "/meet/", // Adjust to match your base path
        "display": "standalone",
        "theme_color": "#000000",
        "background_color": "#ffffff"
      },
      srcDir: 'src', // Ensure service worker file is in the correct directory
      filename: 'service-worker.js', // Ensure service worker is generated correctly
      registerType: 'autoUpdate',
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /\/.*\.png$/, // Cache images with this pattern
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'images',
              expiration: {
                maxEntries: 50,
              },
            },
          },
        ],
      },
    })
  ],
})
