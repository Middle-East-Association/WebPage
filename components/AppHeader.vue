<script setup lang="ts">
import { Menu, X } from 'lucide-vue-next'
import { nav, site } from '~/data/site'

const route = useRoute()
const open = ref(false)

const isActive = (to: string) => route.path === to

// Close the mobile menu whenever navigation happens
watch(() => route.path, () => (open.value = false))
</script>

<template>
  <header class="w-full bg-background border-b border-secondary-foreground/10 sticky top-0 z-50">
    <div class="max-w-[120rem] mx-auto py-4 px-6">
      <div class="flex items-center justify-between">
        <NuxtLink to="/" class="flex items-center flex-shrink-0" aria-label="Home — The Middle East Association">
          <img
            src="/logo.png"
            :alt="`${site.name} logo`"
            width="57"
            height="57"
            class="w-[2cm] h-[2cm] object-cover rounded-lg"
          >
        </NuxtLink>

        <nav class="hidden lg:flex items-center gap-6" aria-label="Primary">
          <NuxtLink
            v-for="item in nav"
            :key="item.to"
            :to="item.to"
            class="font-paragraph text-xs transition-colors"
            :class="isActive(item.to) ? 'text-primary font-semibold' : 'text-secondary-foreground hover:text-primary'"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <button
          class="inline-flex items-center justify-center bg-transparent text-foreground rounded-full lg:hidden h-8 w-8"
          :aria-expanded="open"
          aria-label="Toggle menu"
          @click="open = !open"
        >
          <component :is="open ? X : Menu" class="w-5 h-5 text-secondary-foreground" />
        </button>
      </div>

      <!-- Mobile menu -->
      <nav v-show="open" class="lg:hidden mt-4 flex flex-col gap-1 pb-2" aria-label="Mobile">
        <NuxtLink
          v-for="item in nav"
          :key="item.to"
          :to="item.to"
          class="font-paragraph text-sm py-2 px-2 rounded transition-colors"
          :class="isActive(item.to) ? 'text-primary font-semibold' : 'text-secondary-foreground hover:text-primary hover:bg-secondary'"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
