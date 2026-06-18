<script setup lang="ts">
import { site } from '~/data/site'

const route = useRoute()
const { url } = useSiteConfig()
const base = (url || '').replace(/\/$/, '')
const canonical = computed(() => base + route.path)

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
            description: site.tagline,
            foundingDate: String(site.established),
            email: site.emails.general,
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
  twitterCard: 'summary_large_image',
  ogImage: () => `${base}/og-image.jpg`,
  twitterImage: () => `${base}/og-image.jpg`,
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
