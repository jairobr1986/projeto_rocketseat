import { defineConfig } from 'astro/config';

const site = process.env.SITE_URL;

export default defineConfig({
  output: 'static',
  devToolbar: { enabled: false },
  ...(site ? { site } : {}),
  base: process.env.BASE_PATH || '/',
});
