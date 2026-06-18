<script setup lang="ts">
import { Users, CalendarDays, UserCheck, Briefcase, Globe, Lightbulb } from 'lucide-vue-next'

useSeoMeta({
  title: 'Young Professionals Group',
  description:
    'The MEA Young Professionals Group nurtures emerging talent under 35 with access to senior decision-makers, expert analysis, mentorship, and strategic networks across UK-MENA affairs.',
})

const offerings = [
  { icon: Users, title: 'Exclusive Networking', text: 'Connect with peers across sectors and gain access to senior MEA members, including diplomats, business leaders, and policy experts.' },
  { icon: CalendarDays, title: 'Tailored Events', text: 'Attend YPG-specific briefings, workshops, and social gatherings designed for early-career professionals. Participate in MEA flagship events at reduced rates.' },
  { icon: UserCheck, title: 'Mentorship Opportunities', text: 'Benefit from guidance by experienced professionals in your field. Gain insights into career pathways and strategic advice for professional development.' },
  { icon: Briefcase, title: 'Career Development', text: 'Access professional development workshops, skills training, and career guidance tailored to UK-MENA sectors including policy, business, and academia.' },
  { icon: Globe, title: 'Regional Insights', text: 'Receive authoritative briefings and analysis on MENA developments. Stay informed on political, economic, and social trends shaping the region.' },
  { icon: Lightbulb, title: 'Thought Leadership', text: 'Contribute to MEA publications and communications. Build your profile as an emerging expert on UK-MENA relations.' },
]

const gallery = Array.from({ length: 6 }, (_, i) => `/images/ypg-${i + 1}.webp`)
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="w-full bg-primary py-8 lg:py-12">
      <div class="max-w-[100rem] mx-auto px-8 lg:px-16">
        <div class="max-w-4xl">
          <h1 class="font-heading text-3xl lg:text-4xl text-primary-foreground">Young Professionals Group</h1>
        </div>
      </div>
    </section>

    <!-- About -->
    <section class="w-full bg-background py-20 lg:py-32">
      <div class="max-w-[100rem] mx-auto px-8 lg:px-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="font-heading text-4xl mb-6 text-primary">About</h2>
            <div class="space-y-4 font-paragraph text-base text-secondary-foreground/80">
              <p>The MEA Young Professionals Group (YPG) was established to nurture emerging talent and provide early-career professionals with unparalleled access to senior decision-makers, expert analysis, and strategic networks.</p>
              <p>Our members are ambitious individuals working across policy, diplomacy, business, academia, journalism, and civil society. They share a commitment to deepening UK-MENA understanding and advancing their careers in international affairs.</p>
              <p>Through exclusive events, mentorship opportunities, and professional development programmes, we equip young professionals with the knowledge, connections, and confidence to become the next generation of UK-MENA leaders.</p>
            </div>
            <div class="mt-8">
              <NuxtLink
                to="/contact"
                class="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-paragraph font-semibold transition-colors"
              >
                Join the YPG
              </NuxtLink>
            </div>
          </div>
          <div class="overflow-hidden rounded-lg">
            <img
              src="/images/ypg-hero.webp"
              alt="Middle East Association Young Professionals Group gathering"
              width="1200"
              height="500"
              class="w-full h-[500px] object-cover"
            >
          </div>
        </div>
      </div>
    </section>

    <!-- What we offer -->
    <section class="w-full bg-secondary py-20 lg:py-32">
      <div class="max-w-[100rem] mx-auto px-8 lg:px-16">
        <div class="text-center mb-16">
          <h2 class="font-heading text-4xl lg:text-5xl mb-6 text-primary">What We Offer</h2>
          <p class="font-paragraph text-lg text-secondary-foreground/80 max-w-3xl mx-auto">
            Our programme provides under 35s with the tools and connections to advance their careers in UK-MENA affairs.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="o in offerings" :key="o.title" class="bg-background p-8 border-l-4 border-primary">
            <div class="w-12 h-12 mb-4 flex items-center justify-center bg-primary/10 rounded-full">
              <component :is="o.icon" class="w-6 h-6 text-primary" />
            </div>
            <h3 class="font-heading text-xl mb-4 text-secondary-foreground">{{ o.title }}</h3>
            <p class="font-paragraph text-base text-secondary-foreground/80">{{ o.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery -->
    <section class="w-full bg-background py-20 lg:py-32">
      <div class="max-w-[100rem] mx-auto px-8 lg:px-16">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="(img, i) in gallery" :key="img" class="overflow-hidden rounded-lg">
            <img
              :src="img"
              :alt="`Young Professionals Group event photo ${i + 1}`"
              width="842"
              height="300"
              loading="lazy"
              class="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-300"
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
