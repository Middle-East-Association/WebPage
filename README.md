# The Middle East Association — Nuxt site

Server-rendered, SEO-optimised rebuild of The Middle East Association website (originally built in Wix). Built with **Nuxt 3**, **Tailwind CSS**, self-hosted fonts, and full structured data. Deploys to **Vercel** with zero config.

## Why this fixes the SEO

The original Wix site rendered all content with client-side JavaScript, so crawlers saw an empty page. This rebuild:

- **Server-renders + prerenders every page** to static, fully-crawlable HTML.
- Emits **unique `<title>` and meta descriptions** per page, canonical URLs, Open Graph + Twitter cards.
- Ships **JSON-LD structured data**: `Organization`, `WebSite`, and `Event` (event rich results).
- Generates **`sitemap.xml`** and **`robots.txt`** automatically.
- **Self-hosts fonts** (Playfair Display + Inter) and serves **optimised WebP images** for fast Core Web Vitals.
- Uses **semantic HTML** (one `<h1>` per page, descriptive `alt` text).
- Adds **`Person` (team) structured data**, enriched `Organization` (address, contactPoint, areaServed, knowsAbout) and a **responsive hero** with `srcset` + preload.

📋 Full SEO audit, implementation status and remaining work: [`docs/seo-audit.md`](docs/seo-audit.md).

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build / preview

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this repo to GitHub and import it in Vercel (framework auto-detected as **Nuxt**).
2. **Set the production domain** so canonical URLs, the sitemap and OG tags are correct:
   - In Vercel → Project → Settings → Environment Variables, add:
     ```
     NUXT_SITE_URL = https://your-real-domain.com
     ```
   - The default is `https://www.the-mea.com` (used only if the env var is unset).
3. Deploy. No other configuration is required.

Every push to `main` (or merged PR) triggers a fresh production deployment on Vercel automatically.

## Editing content

All page content lives in plain data files under [`data/`](./data):

- `data/site.ts` — name, emails, social links, navigation, the membership "Apply" form URL.
- `data/team.ts` — team members + bios.
- `data/events.ts` — flagship events, upcoming events (with dates), past-event gallery.
- `data/membership.ts` — membership tiers, prices and benefits.

Images live in [`public/images/`](./public/images) (optimised WebP). Replace a file and keep the same name to swap an image.

## Notes

- The body font in the original was Wix's proprietary **Madefor**; it is substituted with **Inter** (a very close, freely-licensed match).
- External actions point at the organisation's existing services: membership "Apply Now" → HubSpot form; event "Register Now" → buytickets.at.
