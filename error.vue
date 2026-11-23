<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()

const is404 = computed(() => props.error?.statusCode === 404)

useHead({
  title: is404.value ? 'Page not found' : 'Something went wrong',
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
})
</script>

<template>
  <NuxtLayout>
    <section class="w-full bg-primary py-24 lg:py-40">
      <div class="max-w-[100rem] mx-auto px-8 lg:px-16">
        <div class="max-w-2xl">
          <p class="text-primary-foreground/70 uppercase tracking-[0.2em] text-xs font-medium mb-6">
            Error {{ error?.statusCode || 500 }}
          </p>
          <h1 class="font-heading text-5xl lg:text-6xl mb-6 text-primary-foreground">
            {{ is404 ? 'Page not found' : 'Something went wrong' }}
          </h1>
          <p class="font-paragraph text-lg text-primary-foreground/90 mb-10">
            {{
              is404
                ? "The page you're looking for doesn't exist or has moved. Let's get you back on track."
                : 'An unexpected error occurred. Please try again, or return to the homepage.'
            }}
          </p>
          <div class="flex flex-wrap gap-4">
            <button
              class="inline-flex items-center justify-center bg-white text-primary hover:bg-white/90 px-8 py-3 rounded-lg font-paragraph font-semibold transition-colors"
              @click="clearError({ redirect: '/' })"
            >
              Back to home
            </button>
            <NuxtLink
              to="/events"
              class="inline-flex items-center justify-center border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-3 rounded-lg font-paragraph font-semibold transition-colors"
              @click="clearError()"
            >
              View events
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>
