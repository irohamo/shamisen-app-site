import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://shamisen.app',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
