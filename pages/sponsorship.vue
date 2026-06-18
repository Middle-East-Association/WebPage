<script setup lang="ts">
import { Eye, Handshake, Lightbulb } from 'lucide-vue-next'

useSeoMeta({
  title: 'Partnership & Sponsorship',
  description:
    'Partner with the Middle East Association to maximise brand visibility, thought leadership, and senior-level engagement across flagship UK-MENA events and topic-led briefings.',
})

const cards = [
  {
    icon: Eye,
    title: 'Brand Visibility',
    text: 'Position your organisation at the forefront of UK-MENA dialogue. Gain recognition among policymakers, diplomats, business leaders, and academics through our events, publications, and digital platforms.',
  },
  {
    icon: Handshake,
    title: 'Strategic Access',
    text: 'Connect directly with senior stakeholders shaping UK-MENA policy and business. Participate in exclusive roundtables and private briefings with ambassadors, ministers, and regional experts.',
  },
  {
    icon: Lightbulb,
    title: 'Thought Leadership',
    text: "Demonstrate your commitment to international dialogue and regional expertise. Contribute to policy discussions and showcase your organisation's insights through our platforms.",
  },
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="w-full bg-primary py-8 lg:py-12">
      <div class="max-w-[100rem] mx-auto px-8 lg:px-16">
        <div class="max-w-4xl">
          <h1 class="font-heading text-3xl lg:text-4xl text-primary-foreground">Partnership &amp; Sponsorship</h1>
        </div>
      </div>
    </section>

    <!-- Why partner -->
    <section class="w-full bg-background py-20 lg:py-32">
      <div class="max-w-[100rem] mx-auto px-8 lg:px-16">
        <div class="mb-16">
          <h2 class="font-heading text-4xl lg:text-4xl mb-4 text-primary">Why Partner with MEA?</h2>
          <p class="font-paragraph text-lg text-secondary-foreground/80 max-w-3xl text-left">
            Sponsorship packages are designed to maximise brand visibility, thought leadership, and senior-level engagement, translating alignment with the MEA into meaningful relationships and long-term strategic value. Opportunities are available across flagship MEA events, as well as through exclusive sponsorship of smaller, topic-led briefings focused on timely and relevant issues. Previous sponsors and partners include The National, M&amp;C Saatchi World Services, Initium Corporate Finance, Chatila Jewellers and XE.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 shadow-[12px_12px_4px_0px_#d9d9d9]">
          <div v-for="c in cards" :key="c.title" class="bg-secondary p-8 border-l-4 border-primary">
            <div class="w-12 h-12 mb-4 flex items-center justify-center bg-primary/10 rounded-full">
              <component :is="c.icon" class="w-6 h-6 text-primary" />
            </div>
            <h3 class="font-heading text-2xl mb-4 text-secondary-foreground">{{ c.title }}</h3>
            <p class="font-paragraph text-base text-secondary-foreground/80">{{ c.text }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
