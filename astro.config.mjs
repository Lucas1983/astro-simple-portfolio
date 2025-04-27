import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
    site: 'https://astro-simple-portfolio.vercel.app/', // Required for sitemap -> Replace with your site's URL
    output: 'static',
    integrations: [tailwind(), sitemap(), icon()],
    adapter: vercel(),
});
