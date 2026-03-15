import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    // Serve public/blog/index.html for /blog routes in dev,
    // matching GitHub Pages' directory index behavior.
    {
      name: 'serve-blog',
      configureServer(server) {
        server.middlewares.use((req: import('http').IncomingMessage, _res, next) => {
          if (req.url?.startsWith('/blog') && !req.url.includes('.')) {
            // Serve the matching index.html for directory-style routes,
            // mirroring GitHub Pages' directory index behavior.
            const fs = require('fs');
            const path = require('path');
            const urlPath = req.url.replace(/\/$/, '');
            const filePath = path.join(__dirname, 'public', urlPath, 'index.html');
            if (fs.existsSync(filePath)) {
              req.url = urlPath + '/index.html';
            }
          }
          next();
        });
      },
    },
    react(),
  ],
});
