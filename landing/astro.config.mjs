// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
// Pure static output for Cloudflare Workers
export default defineConfig({
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});
