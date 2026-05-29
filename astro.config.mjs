import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

const isVercel = process.env.VERCEL === '1' || !!process.env.VERCEL;

export default defineConfig({
  site: 'https://triathlonbangladesh.com',
  integrations: [tailwind(), react(), sitemap()],
  ...(isVercel ? {
    output: 'server',
    adapter: vercel({
      webAnalytics: { enabled: true },
    }),
  } : {
    output: 'static',
  }),
});
