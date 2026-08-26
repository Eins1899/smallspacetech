import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// IMPORTANT: replace with your real domain once purchased
export default defineConfig({
  site: "https://smallspacetech.com",
  integrations: [sitemap()],
});
