import { defineConfig } from 'astro/config';

// Replace with your GitHub username and repository name
const GITHUB_USERNAME = 'creatify365';
const REPOSITORY_NAME = 'site';

export default defineConfig({
  site: `https://${GITHUB_USERNAME}.github.io`,
  base: `/${REPOSITORY_NAME}`,
  // other configurations
});