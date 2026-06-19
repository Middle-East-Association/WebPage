<script setup lang="ts">
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-vue-next'
import { flagshipEvents, upcomingEvents, pastEventImages, type EventCategory } from '~/data/events'

// Badge styling per event category, kept on-brand (purple / gold / cream).
const categoryBadge: Record<EventCategory, string> = {
  'Flagship': 'bg-softaccent/25 text-primary',
  'Young Professionals': 'bg-primary/10 text-primary',
  'Regional Spotlight': 'bg-secondary text-primary border border-bordersubtle',
  'Conference': 'bg-primary text-primary-foreground',
}

usePageSeo({
  title: 'Events & Briefings',
  description:
    'The Middle East Association delivers a year-round programme of high-level events, briefings and discussions fostering informed debate and engagement on developments across the Middle East and North Africa.',
})

// Structured data for upcoming events (Google event rich results)
const { url } = useSiteConfig()
const base = (url || '').replace(/\/$/, '')
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': upcomingEvents.map((e) => {
          const online = e.isOnline || e.location?.toLowerCase() === 'online'
          return {
            '@type': 'Event',
            name: e.title,
            startDate: e.startDate,
            ...(e.endDate ? { endDate: e.endDate } : {}),
            eventStatus: 'https://schema.org/EventScheduled',
            eventAttendanceMode: online
              ? 'https://schema.org/OnlineEventAttendanceMode'
              : 'https://schema.org/OfflineEventAttendanceMode',
            location: online
              ? { '@type': 'VirtualLocation', url: e.registerUrl || `${base}/events` }
              : {
                  '@type': 'Place',
                  // Real venue name when known; otherwise the city (defaults to London — verify per event).
                  name: e.venue || e.city || 'London',
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: e.city || 'London',
                    addressCountry: 'GB',
                  },
                },
            description: `${e.category} event hosted by The Middle East Association, fostering UK-Middle East trade, business and policy dialogue.`,
            image: [`${base}/og-image.jpg`],
            organizer: { '@id': `${base}/#organization` },
            url: e.registerUrl || `${base}/events`,
          }
        }),
      }),
    },
  ],
})
</script>

<template>
  <div>
    <!-- Flagship events -->
    <section id="flagship-events" class="w-full bg-gradient-to-b from-primary to-primary/95 py-16 lg:py-24 px-6 md:px-12">
      <div class="max-w-[120rem] mx-auto">
        <div class="mb-12 lg:mb-16">
          <h1 class="font-heading text-5xl lg:text-6xl mb-4 text-primary-foreground">Events &amp; Briefings</h1>
          <p class="font-paragraph text-lg text-primary-foreground/90 max-w-3xl">
            The Middle East Association delivers a year-round programme of high-level events, briefings and discussions that foster informed debate and meaningful engagement on developments across the Middle East and North Africa.
          </p>
        </div>
        <h2 class="font-heading text-2xl lg:text-3xl mb-6 text-primary-foreground">Flagship Events</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          <div
            v-for="ev in flagshipEvents"
            :key="ev.title"
            class="group relative border border-primary-foreground/20 p-6 hover:border-primary-foreground/40 hover:bg-primary-foreground/10 transition-all duration-500 overflow-hidden bg-primary-foreground/5 backdrop-blur-sm rounded-lg"
          >
            <div class="absolute top-0 right-0 w-20 h-20 bg-primary-foreground/10 rounded-full transform translate-x-1/3 -translate-y-1/3 group-hover:scale-110 transition-transform duration-500" />
            <div class="text-4xl mb-3 relative z-10 group-hover:scale-110 transition-transform duration-300">{{ ev.emoji }}</div>
            <h3 class="font-heading text-lg mb-2 text-primary-foreground relative z-10">{{ ev.title }}</h3>
            <p class="text-primary-foreground/80 text-sm leading-relaxed relative z-10">{{ ev.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Upcoming events -->
    <section id="upcoming-events" class="w-full py-24 lg:py-32 px-6 md:px-12 bg-background">
      <div class="max-w-[120rem] mx-auto">
        <div class="mb-16">
          <h2 class="font-heading text-5xl lg:text-6xl mb-6 text-primary">Upcoming Events</h2>
          <p class="font-paragraph text-lg text-primary/70 max-w-2xl">
            Join us for our upcoming events and be part of important conversations shaping the Middle East and North Africa region.
          </p>
        </div>
        <ul class="border-y border-primary/10 divide-y divide-primary/10">
          <li
            v-for="ev in upcomingEvents"
            :key="ev.title"
            class="group flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:gap-5 sm:py-5 transition-colors hover:bg-secondary/40 -mx-3 px-3 rounded-md"
          >
            <div class="flex items-center gap-2 text-sm font-medium text-primary/60 sm:w-32 sm:shrink-0">
              <Calendar class="w-4 h-4 text-softaccent shrink-0" />
              <time :datetime="ev.startDate">{{ ev.date }}</time>
            </div>
            <h3 class="flex-1 font-heading text-lg lg:text-xl text-primary transition-colors group-hover:text-primary/70">{{ ev.title }}</h3>
            <div class="flex items-center gap-3">
              <span
                :class="categoryBadge[ev.category]"
                class="inline-flex shrink-0 items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide"
              >{{ ev.category }}</span>
              <span v-if="ev.time" class="hidden md:flex items-center gap-1.5 text-sm text-primary/60">
                <Clock class="w-4 h-4 text-softaccent" />{{ ev.time }}
              </span>
              <span v-if="ev.location" class="hidden md:flex items-center gap-1.5 text-sm text-primary/60">
                <MapPin class="w-4 h-4 text-softaccent" />{{ ev.location }}
              </span>
              <a
                v-if="ev.registerUrl"
                :href="ev.registerUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="group/btn inline-flex shrink-0 items-center gap-1.5 rounded-full bg-softaccent px-4 py-1.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Register<ArrowRight class="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <!-- Past events gallery -->
    <section class="w-full bg-background py-12 lg:py-16 border-b border-primary/10">
      <div class="max-w-[120rem] mx-auto px-6 lg:px-12 relative">
        <h2 class="font-heading text-3xl lg:text-4xl mb-12 text-primary">Past Events</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          <div v-for="(img, i) in pastEventImages" :key="img" class="overflow-hidden rounded-lg">
            <img
              :src="img"
              :alt="`The Middle East Association past event ${i + 1}`"
              width="874"
              height="640"
              loading="lazy"
              class="w-full h-80 object-cover object-top"
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
