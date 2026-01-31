import { defineConfig } from 'astro/config';

const getBase = () => {
  if (process.env.DEPLOY_ENV === 'github') {
    return '/portfolio';
  }
  return '/';
}

export default defineConfig({
  // Your project's public directory.
  publicDir: 'public',

  // Your project's source directory.
  srcDir: 'src',

  // The directory to output the build to.
  outDir: 'dist',

  // Image optimization settings.
  image: {
    // Enable image optimization.
    service: {
      enabled: true,
      // You can also use a different image service like 'sharp' or 'squoosh'.
      // entrypoint: 'astro/assets/services/squoosh'
    }
  },

  // GitHub Pages deployment settings.
  site: 'https://apondi-art.github.io',
  base: getBase(),
});
