import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import { events } from './src/data/event.ts';

const isVercel = process.env.VERCEL === '1' || !!process.env.VERCEL;
const site = 'https://triathlonbangladesh.com';
// Server output renders /events/[slug] on demand, so the sitemap can't discover those pages by itself.
const eventPages = isVercel ? events.map((e) => `${site}/events/${e.slug}/`) : [];

export default defineConfig({
  site,
  integrations: [tailwind(), react(), sitemap({ customPages: eventPages })],
  ...(isVercel ? {
    output: 'server',
    adapter: vercel({
      webAnalytics: { enabled: true },
    }),
  } : {
    output: 'static',
  }),
});
