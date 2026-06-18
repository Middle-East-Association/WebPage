import { site } from '~/data/site'

interface PageSeoOptions {
  /** The page <title> (rendered as "<title> | The Middle East Association" via the global titleTemplate). */
  title: string
  /** Meta description — keep to ~150-160 characters, unique per page. */
  description: string
  /**
   * Override the social-card title. Defaults to the same branded string the browser
   * tab shows, so Open Graph / Twitter cards match the page title.
   */
  ogTitle?: string
}

/**
 * Single source of truth for per-page SEO. Sets the title + description and, crucially,
 * the Open Graph and Twitter title/description that `useSeoMeta({ title })` does NOT
 * auto-derive — so every page (not just the home page) gets a complete social card.
 * Site-wide tags (og:locale, og:site_name, twitter:card, og:image, twitter:site) live in app.vue.
 */
export function usePageSeo(opts: PageSeoOptions) {
  const branded = opts.ogTitle ?? `${opts.title} | ${site.name}`

  useSeoMeta({
    title: opts.title,
    description: opts.description,
    ogTitle: branded,
    ogDescription: opts.description,
    twitterTitle: branded,
    twitterDescription: opts.description,
  })
}
