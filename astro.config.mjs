import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// Replace with your GitHub username and repository name
const GITHUB_USERNAME = 'creatify365';
const REPOSITORY_NAME = 'site';

export default defineConfig({
  site: `https://${GITHUB_USERNAME}.github.io`,

  // other configurations
  base: `/${REPOSITORY_NAME}`,

  vite: {
    plugins: [tailwindcss()]
  }
});