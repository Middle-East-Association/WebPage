<script setup lang="ts">
import { site } from '~/data/site'

const route = useRoute()
const router = useRouter()
const { url } = useSiteConfig()
const base = (url || '').replace(/\/$/, '')
// Build the canonical from the matched route, not the raw request path. The server also
// answers variants like /events/ and /EVENTS; without this the canonical changes once
// JavaScript runs (/events -> /events/) and Google may ignore it. Resolving by name maps
// variants to the real path while keeping the case of any dynamic params.
const canonical = computed(() => {
  const path = route.name ? router.resolve({ name: route.name, params: route.params }).path : route.path
  // Lookbehind keeps the trailing-slash strip linear (a plain /\/+$/ backtracks quadratically).
  return base + (path.replace(/(?<!\/)\/+$/, '') || '/')
})

// Site-wide title template
useHead({
  titleTemplate: (title) => (title ? `${title} | ${site.name}` : site.name),
  link: [{ rel: 'canonical', href: canonical }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Organization',
            '@id': `${base}/#organization`,
            name: site.name,
            alternateName: 'MEA',
            url: `${base}/`,
            logo: `${base}/logo.png`,
            image: `${base}/og-image.jpg`,
            description: site.tagline,
            slogan: site.tagline,
            foundingDate: String(site.established),
            foundingLocation: {
              '@type': 'Place',
              address: {
                '@type': 'PostalAddress',
                addressLocality: site.address.locality,
                addressCountry: site.address.country,
              },
            },
            address: {
              '@type': 'PostalAddress',
              addressLocality: site.address.locality,
              addressCountry: site.address.country,
            },
            areaServed: [
              { '@type': 'Country', name: 'United Kingdom' },
              { '@type': 'Place', name: 'Middle East and North Africa' },
            ],
            knowsAbout: site.knowsAbout,
            email: site.emails.general,
            contactPoint: [
              {
                '@type': 'ContactPoint',
                contactType: 'general enquiries',
                email: site.emails.general,
                areaServed: 'GB',
                availableLanguage: 'en',
              },
              {
                '@type': 'ContactPoint',
                contactType: 'membership enquiries',
                email: site.emails.membership,
                areaServed: 'GB',
                availableLanguage: 'en',
              },
            ],
            sameAs: [site.social.linkedin, site.social.x],
          },
          {
            '@type': 'WebSite',
            '@id': `${base}/#website`,
            name: site.name,
            url: `${base}/`,
            publisher: { '@id': `${base}/#organization` },
            inLanguage: 'en',
          },
        ],
      }),
    },
  ],
})

useSeoMeta({
  ogSiteName: site.name,
  ogType: 'website',
  ogUrl: canonical,
  ogLocale: 'en_GB',
  twitterCard: 'summary_large_image',
  twitterSite: site.twitterHandle,
  ogImage: () => `${base}/og-image.jpg`,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageType: 'image/jpeg',
  ogImageAlt: site.name,
  twitterImage: () => `${base}/og-image.jpg`,
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
