<script setup lang="ts">
import { Mail, MapPin, ArrowRight } from 'lucide-vue-next'
import { site } from '~/data/site'

usePageSeo({
  title: 'Contact Us',
  description:
    'Get in touch with The Middle East Association in London. General enquiries: info@the-mea.com. Membership: membership@the-mea.com.',
})
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="w-full bg-primary py-20 lg:py-32">
      <div class="max-w-[100rem] mx-auto px-8 lg:px-16">
        <div class="max-w-3xl">
          <h1 class="font-heading text-5xl lg:text-6xl mb-6 text-primary-foreground">Contact Us</h1>
          <p class="font-paragraph text-lg text-primary-foreground/90">
            Get in touch with the Middle East Association — the UK's leading business association for trade and engagement with the Middle East and North Africa. We're based in London and welcome enquiries from prospective members, partners and event attendees.
          </p>
        </div>
      </div>
    </section>

    <!-- Email + location -->
    <section class="w-full bg-background py-20 lg:py-32">
      <div class="max-w-[100rem] mx-auto px-8 lg:px-16">
        <div class="max-w-2xl mx-auto space-y-12">
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full flex-shrink-0">
              <Mail class="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 class="font-heading text-3xl mb-6 text-secondary-foreground">Email</h2>
              <div class="space-y-3">
                <a
                  :href="`mailto:${site.emails.general}`"
                  class="block font-paragraph text-lg text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  General Enquiries: {{ site.emails.general }}
                </a>
                <a
                  :href="`mailto:${site.emails.membership}`"
                  class="block font-paragraph text-lg text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Membership: {{ site.emails.membership }}
                </a>
              </div>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div class="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full flex-shrink-0">
              <MapPin class="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 class="font-heading text-3xl mb-6 text-secondary-foreground">Location</h2>
              <p class="font-paragraph text-lg text-secondary-foreground/80">London, United Kingdom</p>
            </div>
          </div>

          <div class="border-t border-bordersubtle pt-8">
            <p class="font-paragraph text-base text-secondary-foreground/70 mb-4">Explore how to get involved:</p>
            <div class="flex flex-wrap gap-4">
              <NuxtLink
                to="/membership"
                class="inline-flex items-center gap-1.5 font-paragraph text-base font-semibold text-primary hover:underline"
              >
                Become a member<ArrowRight class="w-4 h-4" />
              </NuxtLink>
              <NuxtLink
                to="/events"
                class="inline-flex items-center gap-1.5 font-paragraph text-base font-semibold text-primary hover:underline"
              >
                View upcoming events<ArrowRight class="w-4 h-4" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
