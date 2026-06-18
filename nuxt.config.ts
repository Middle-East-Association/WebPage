// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: true },

  // SSR + full prerendering => static, crawlable HTML for every page (great SEO + Core Web Vitals)
  ssr: true,

  // Static prerendered site: the client-side app manifest isn't needed, and disabling it
  // avoids the transient "#app-manifest" Vite pre-transform warning on cold dev starts.
  experimental: {
    appManifest: false,
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],

  css: ['~/assets/css/main.css'],

  // Canonical site identity. Override the URL on Vercel with the NUXT_SITE_URL env var.
  site: {
    url: process.env.NUXT_SITE_URL || 'https://www.the-mea.com',
    name: 'The Middle East Association',
    description:
      'The Middle East Association fosters dialogue, understanding, and collaboration across policy, business, and culture between the UK and the Middle East. Established 1961.',
  },

  // Self-host Google Fonts (no third-party requests at runtime; better privacy + performance)
  fonts: {
    families: [
      { name: 'Playfair Display', provider: 'google', weights: [400, 500, 600, 700, 800, 900], styles: ['normal', 'italic'] },
      { name: 'Inter', provider: 'google', weights: [300, 400, 500, 600, 700], styles: ['normal'] },
    ],
  },

  sitemap: {
    autoLastmod: true,
  },

  robots: {
    // Allow everything; sitemap reference is added automatically.
    allow: '/',
  },

  // Prerender all routes at build time -> static HTML served from the CDN.
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/events', '/membership', '/sponsorship', '/young-professionals', '/team', '/contact', '/robots.txt', '/sitemap.xml'],
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#2D1B4E' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
    },
  },
})
