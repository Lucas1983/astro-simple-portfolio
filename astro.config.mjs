import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
    site: 'https://lukasz-mielczarek.dev', // Required for sitemap -> Replace with your site's URL
    output: 'static',
    integrations: [tailwind(), sitemap(), icon()],
});
