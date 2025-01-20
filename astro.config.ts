import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://www.neoncarrot.com.au",
  scopedStyleStrategy: "where",
  integrations: [mdx(), react()],
});
