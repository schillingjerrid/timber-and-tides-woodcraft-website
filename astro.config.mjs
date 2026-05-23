// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://timberandtideswoodcraft.com',
  base: '/',
  integrations: [mdx(), sitemap()],
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()]
  }
});