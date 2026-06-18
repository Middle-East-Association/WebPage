<script setup lang="ts">
import { Check, ArrowRight } from 'lucide-vue-next'
import { membershipTiers, memberBenefits } from '~/data/membership'
import { site } from '~/data/site'

useSeoMeta({
  title: 'Membership',
  description:
    'Join a distinguished community of leaders shaping UK-MENA relations. Access senior decision-makers, exclusive briefings, and strategic networking opportunities across four membership tiers.',
})

const photos = ['/images/membership-1.webp', '/images/membership-2.webp', '/images/membership-3.webp']
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="w-full bg-primary py-20 lg:py-32">
      <div class="max-w-[100rem] mx-auto px-8 lg:px-16">
        <div class="max-w-4xl">
          <h1 class="font-heading text-5xl lg:text-6xl mb-6 text-primary-foreground">Membership</h1>
          <p class="font-paragraph text-lg text-primary-foreground/90">
            Join a distinguished community of leaders shaping UK-MENA relations. Access senior decision-makers, exclusive briefings, and strategic networking opportunities.
          </p>
        </div>
      </div>
    </section>

    <!-- Why become a member -->
    <section class="w-full bg-background py-12 lg:py-16">
      <div class="max-w-[100rem] mx-auto px-8 lg:px-16">
        <div class="mb-10">
          <h2 class="font-heading text-3xl lg:text-4xl mb-3 text-primary">Why Become a Member?</h2>
          <p class="font-paragraph text-base text-secondary-foreground/80 max-w-2xl">
            Our members gain privileged access to the most influential voices in UK-MENA affairs.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="b in memberBenefits" :key="b.title" class="bg-secondary p-6 border-l-4 border-primary">
            <h3 class="font-heading text-lg mb-2 text-secondary-foreground">{{ b.title }}</h3>
            <p class="font-paragraph text-sm text-secondary-foreground/80">{{ b.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Photos -->
    <section class="w-full bg-background py-12 lg:py-16">
      <div class="max-w-[100rem] mx-auto px-8 lg:px-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <img
            v-for="(img, i) in photos"
            :key="img"
            :src="img"
            :alt="`Middle East Association membership community photo ${i + 1}`"
            width="600"
            height="450"
            loading="lazy"
            class="w-full h-auto object-cover rounded-sm"
          >
        </div>
      </div>
    </section>

    <!-- Membership tiers -->
    <section id="membership-tiers" class="w-full bg-secondary py-20 lg:py-32">
      <div class="max-w-[100rem] mx-auto px-8 lg:px-16">
        <div class="text-center mb-16">
          <h2 class="font-heading text-4xl lg:text-5xl mb-6 text-primary">Membership Tiers</h2>
          <p class="font-paragraph text-lg text-secondary-foreground/80 max-w-3xl mx-auto">
            Choose the membership level that best suits your needs and objectives.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="tier in membershipTiers" :key="tier.name" class="flex flex-col bg-background p-8 border-t-4 border-primary">
            <h3 class="font-heading text-2xl mb-4 text-secondary-foreground">{{ tier.name }}</h3>
            <div class="mb-6">
              <p class="font-heading text-4xl text-primary">{{ tier.price }}</p>
              <p class="font-paragraph text-sm text-secondary-foreground/60">per year</p>
            </div>
            <div class="mb-6 flex-grow">
              <h4 class="font-paragraph text-sm font-semibold text-secondary-foreground mb-3">Benefits</h4>
              <div class="space-y-2">
                <div v-for="(benefit, i) in tier.benefits" :key="i" class="flex items-start gap-2">
                  <Check class="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <p class="font-paragraph text-sm text-secondary-foreground/80">{{ benefit }}</p>
                </div>
              </div>
            </div>
            <div class="mb-6 pb-6 border-b border-secondary-foreground/10">
              <h4 class="font-paragraph text-sm font-semibold text-secondary-foreground mb-2">Eligibility</h4>
              <p class="font-paragraph text-sm text-secondary-foreground/70">{{ tier.eligibility }}</p>
            </div>
            <a
              :href="site.applyFormUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-1 whitespace-nowrap font-normal transition shadow hover:underline px-4 py-4 w-full bg-white text-primary hover:bg-white/90 h-12 text-base tracking-wide"
            >
              Apply Now<ArrowRight class="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
