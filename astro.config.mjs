import { defineConfig } from 'astro/config';

// This repo is a GitHub *user* page (mir8077faiyaz.github.io), so it deploys
// to the domain root — no "base" path needed. If you ever rename this to a
// project repo instead, set base: '/repo-name' here.
export default defineConfig({
  site: 'https://mir8077faiyaz.github.io',
});
