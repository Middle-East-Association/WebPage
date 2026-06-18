<script setup lang="ts">
import { Mail } from 'lucide-vue-next'
import { site } from '~/data/site'

useSeoMeta({
  title: 'Contact Us',
  description:
    'Get in touch with The Middle East Association. General enquiries: info@the-mea.com. Membership: membership@the-mea.com.',
})
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="w-full bg-primary py-20 lg:py-32">
      <div class="max-w-[100rem] mx-auto px-8 lg:px-16">
        <div class="max-w-4xl">
          <h1 class="font-heading text-5xl lg:text-6xl mb-6 text-primary-foreground">Contact Us</h1>
        </div>
      </div>
    </section>

    <!-- Email -->
    <section class="w-full bg-background py-20 lg:py-32">
      <div class="max-w-[100rem] mx-auto px-8 lg:px-16">
        <div class="max-w-2xl mx-auto">
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
        </div>
      </div>
    </section>
  </div>
</template>
