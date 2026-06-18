<script setup lang="ts">
import { Globe, Users, Calendar, ArrowUpRight, ChevronRight } from 'lucide-vue-next'

usePageSeo({
  title: 'UK–Middle East Trade, Business & Policy',
  description:
    'The Middle East Association connects the UK and the Middle East through trade, investment, policy and cultural dialogue. A trusted business association established in 1961.',
})

// Preload the responsive hero (LCP element) so the browser fetches the right variant early.
useHead({
  link: [
    {
      rel: 'preload',
      as: 'image',
      type: 'image/webp',
      href: '/images/hero-middle-east-1280.webp',
      imagesrcset:
        '/images/hero-middle-east-768.webp 768w, /images/hero-middle-east-1280.webp 1280w, /images/hero-middle-east.webp 1920w',
      imagesizes: '100vw',
      fetchpriority: 'high',
    },
  ],
})

const purpose = [
  {
    icon: Globe,
    title: 'International Dialogue',
    text: 'Facilitating meaningful conversations between UK and MENA leaders across sectors, creating a neutral ground for diplomatic and commercial progress.',
  },
  {
    icon: Users,
    title: 'Strategic Networks',
    text: 'Connecting decision-makers, thought leaders, and emerging professionals through our exclusive membership tiers and high-level networking events.',
  },
  {
    icon: Calendar,
    title: 'Expert Insights',
    text: 'Delivering authoritative analysis, roundtables, and exclusive briefings on regional developments, ensuring our members stay ahead of the curve.',
  },
]

const featured = [
  '/images/home-featured-1.webp',
  '/images/home-featured-2.webp',
  '/images/home-featured-3.webp',
]

const getInvolved = [
  {
    icon: Users,
    title: 'Join as a member',
    text: 'Become a member and gain access to exclusive events, networking opportunities, and insider briefings on UK-MENA developments.',
    to: '/membership',
  },
  {
    icon: Calendar,
    title: 'Attend our events',
    text: 'Participate in our conferences, seminars, and roundtables featuring leading policymakers, business executives, and thought leaders.',
    to: '/events',
  },
  {
    icon: Globe,
    title: 'Sponsor or partner an Middle East Association event',
    text: "Explore sponsorship and partnership opportunities to align your organization with the Middle East Association's mission.",
    to: '/sponsorship',
  },
  {
    icon: ArrowUpRight,
    title: 'Participate in the Young Professionals Group',
    text: 'Join our Young Professionals program designed for emerging leaders looking to build their network in UK-MENA relations.',
    to: '/young-professionals',
  },
  {
    icon: ChevronRight,
    title: 'Subscribe to Updates',
    text: 'Stay informed with our latest news, analysis, and insights delivered directly to your inbox.',
    to: '/contact',
  },
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative w-full min-h-[640px] lg:h-[88vh] lg:min-h-[760px] flex flex-col justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img
          src="/images/hero-middle-east.webp"
          srcset="/images/hero-middle-east-768.webp 768w, /images/hero-middle-east-1280.webp 1280w, /images/hero-middle-east.webp 1920w"
          sizes="100vw"
          alt="Detail of traditional Middle Eastern textiles and carpets"
          class="w-full h-full object-cover scale-105"
          width="1920"
          height="960"
          fetchpriority="high"
        >
        <div class="absolute inset-0 bg-black/30" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
        <div class="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-transparent" />
      </div>

      <div class="relative z-10 w-full max-w-[120rem] mx-auto px-6 lg:px-12 py-16">
        <div class="max-w-3xl">
          <div class="flex items-center gap-4 mb-6">
            <div class="h-px w-12 bg-primary-foreground/60" />
            <span class="text-primary-foreground/80 uppercase tracking-[0.2em] text-xs font-medium">Established 1961</span>
          </div>
          <h1 class="font-heading text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
            The Middle East Association
            <span class="block font-paragraph font-light text-xl md:text-2xl lg:text-3xl text-white/80 mt-5 leading-snug">
              UK–Middle East trade, business &amp; policy since 1961
            </span>
          </h1>
          <p class="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed font-light">
            We foster dialogue, understanding, and collaboration across policy, business, and culture — connecting the UK and the Middle East through trade, investment, and partnership.
          </p>
        </div>
      </div>
    </section>

    <!-- Our Purpose -->
    <section class="relative w-full bg-background py-24 lg:py-32 border-b border-primary/10">
      <div class="max-w-[120rem] mx-auto px-6 lg:px-12">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div class="lg:col-span-4 relative">
            <div class="sticky top-32">
              <span class="text-primary uppercase tracking-widest text-xs font-bold mb-4 block">Our Purpose</span>
              <h2 class="font-heading text-4xl lg:text-5xl text-secondary-foreground mb-8 leading-tight">
                Fostering Dialogue &amp; <br><span class="text-primary italic">Strategic Connection</span>
              </h2>
              <p class="text-secondary-foreground/70 text-lg leading-relaxed mb-8">
                Since 1961, we have served to foster trade, education, investment, and cultural understanding between the UK and the Middle East.
              </p>
            </div>
          </div>

          <div class="lg:col-span-8 space-y-12">
            <div
              v-for="item in purpose"
              :key="item.title"
              class="group relative bg-white p-10 border border-primary/10 hover:border-primary/30 transition-colors duration-500"
            >
              <div class="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-500 ease-in-out" />
              <component :is="item.icon" class="w-10 h-10 text-primary mb-6" />
              <h3 class="font-heading text-2xl mb-4">{{ item.title }}</h3>
              <p class="text-secondary-foreground/70 leading-relaxed text-lg">{{ item.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured photos -->
    <section class="w-full bg-background py-12 lg:py-16 border-b border-primary/10">
      <div class="max-w-[120rem] mx-auto px-6 lg:px-12 relative">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div v-for="(img, i) in featured" :key="img" class="overflow-hidden rounded-lg">
            <img
              :src="img"
              :alt="`The Middle East Association — featured image ${i + 1}`"
              width="854"
              height="640"
              loading="lazy"
              class="w-full h-80 object-cover object-top"
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Ways to Get Involved -->
    <section class="w-full bg-background py-24 lg:py-32 border-b border-primary/10">
      <div class="max-w-[120rem] mx-auto px-6 lg:px-12">
        <span class="text-primary uppercase tracking-widest text-xs font-bold mb-4 block">Get Involved</span>
        <h2 class="font-heading text-4xl lg:text-5xl text-secondary-foreground leading-tight max-w-2xl">
          Ways to Get <span class="text-primary italic">Involved</span>
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
          <NuxtLink
            v-for="item in getInvolved"
            :key="item.title"
            :to="item.to"
            class="group relative bg-white p-6 lg:p-8 border border-primary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-lg"
          >
            <div class="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-500 ease-in-out" />
            <component :is="item.icon" class="w-8 h-8 text-primary mb-4" />
            <h3 class="font-heading text-lg lg:text-xl mb-3 text-secondary-foreground">{{ item.title }}</h3>
            <p class="text-secondary-foreground/70 leading-relaxed text-sm">{{ item.text }}</p>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
