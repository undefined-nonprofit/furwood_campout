import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import { targetBlank } from "./src/plugins/targetBlank";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],

  markdown: {
    rehypePlugins: [[targetBlank, { domain: 'furwoodcampout.com' }]],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});