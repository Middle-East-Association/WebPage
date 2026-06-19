<script setup lang="ts">
import { ChevronDown, Mail } from 'lucide-vue-next'
import { team } from '~/data/team'

usePageSeo({
  title: 'Our Team',
  description:
    'Meet the dedicated professionals who lead The Middle East Association: former ambassadors, business leaders and regional experts driving our mission to strengthen UK-MENA relations.',
})

// Person structured data — surfaces the team's credentials (former ambassadors, business
// leaders, MENA experts) to search engines as a strong E-E-A-T / entity signal.
const { url } = useSiteConfig()
const base = (url || '').replace(/\/$/, '')
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': team.map((m) => ({
          '@type': 'Person',
          name: m.name,
          jobTitle: m.role,
          worksFor: { '@id': `${base}/#organization` },
          image: `${base}${m.image}`,
          ...(m.email ? { email: m.email } : {}),
        })),
      }),
    },
  ],
})

const open = reactive<Record<number, boolean>>({})
const toggle = (i: number) => (open[i] = !open[i])
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="w-full bg-primary py-20 lg:py-32">
      <div class="max-w-[100rem] mx-auto px-8 lg:px-16">
        <div class="max-w-4xl">
          <h1 class="font-heading text-5xl lg:text-6xl mb-6 text-primary-foreground">Our Team</h1>
          <p class="font-paragraph text-xl text-primary-foreground/90">
            Meet the dedicated professionals who lead The Middle East Association and drive our mission to strengthen UK-MENA relations.
          </p>
        </div>
      </div>
    </section>

    <!-- Team grid -->
    <section class="w-full bg-background py-20 lg:py-32">
      <div class="max-w-[100rem] mx-auto px-8 lg:px-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div v-for="(member, i) in team" :key="member.name" class="flex flex-col h-full">
            <div class="flex flex-col h-full bg-white border border-bordersubtle rounded-lg overflow-hidden">
              <div class="relative overflow-hidden bg-secondary flex-shrink-0">
                <img
                  :src="member.image"
                  :alt="`${member.name}, ${member.role} at The Middle East Association`"
                  width="403"
                  height="320"
                  loading="lazy"
                  class="w-full h-80 object-cover"
                >
              </div>
              <div class="flex flex-col flex-grow p-6">
                <h2 class="font-heading text-2xl mb-2 text-primary">{{ member.name }}</h2>
                <p class="font-paragraph text-sm text-primary/70 mb-4">{{ member.role }}</p>

                <button
                  class="flex items-center justify-center gap-2 mt-auto pt-4 border-t border-bordersubtle text-primary hover:text-primary/80 transition-colors"
                  :aria-expanded="!!open[i]"
                  aria-label="Toggle biography"
                  @click="toggle(i)"
                >
                  <span class="font-paragraph text-sm">{{ open[i] ? 'Hide biography' : 'View biography' }}</span>
                  <ChevronDown class="w-4 h-4 transition-transform" :class="{ 'rotate-180': open[i] }" />
                </button>

                <div v-show="open[i]" class="border-t border-bordersubtle -mx-6 mt-4">
                  <div class="p-6 bg-secondary/50">
                    <p class="font-paragraph text-sm text-secondary-foreground/80 mb-4">{{ member.bio }}</p>
                    <a
                      v-if="member.email"
                      :href="`mailto:${member.email}`"
                      class="inline-flex items-center gap-2 font-paragraph text-sm text-primary hover:underline"
                    >
                      <Mail class="w-4 h-4" />Contact
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
