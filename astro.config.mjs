import { defineConfig } from 'astro/config';

import cloudfare from '@astrojs/cloudfare';

// https://astro.build/config
export default defineConfig({
  outputs: "server",
  adapter: cloudfare(),
});
