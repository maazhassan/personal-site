// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://maazhassan.net',
  base: '/blog/',
  output: 'static',
  build: {
    format: 'directory',
  },
  outDir: '../public/blog',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
