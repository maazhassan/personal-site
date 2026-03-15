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
          if (req.url?.startsWith('/blog')) {
            req.url = '/blog/index.html';
          }
          next();
        });
      },
    },
    react(),
  ],
});
