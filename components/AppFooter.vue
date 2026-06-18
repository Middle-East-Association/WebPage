<script setup lang="ts">
import { Linkedin, Mail } from 'lucide-vue-next'
import { nav, site } from '~/data/site'
</script>

<template>
  <footer class="w-full bg-primary text-primary-foreground">
    <div class="max-w-[100rem] mx-auto px-8 lg:px-16 py-10 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
      <div>
        <h2 class="font-heading text-xl mb-1">{{ site.shortName }}</h2>
        <p class="font-paragraph text-sm text-primary-foreground/70">London, United Kingdom · Established {{ site.established }}</p>
      </div>

      <nav class="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
        <NuxtLink
          v-for="item in nav"
          :key="item.to"
          :to="item.to"
          class="font-paragraph text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <div class="flex gap-6">
        <a
          :href="site.social.linkedin"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:opacity-80 transition-opacity"
          aria-label="LinkedIn"
        >
          <Linkedin class="w-5 h-5" />
        </a>
        <a
          :href="site.social.x"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:opacity-80 transition-opacity"
          aria-label="X"
        >
          <!-- X (formerly Twitter) glyph -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-5 h-5"
            aria-hidden="true"
          >
            <path
              d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"
            />
          </svg>
        </a>
        <a
          :href="`mailto:${site.emails.general}`"
          class="hover:opacity-80 transition-opacity"
          aria-label="Email"
        >
          <Mail class="w-5 h-5" />
        </a>
      </div>
    </div>
  </footer>
</template>
