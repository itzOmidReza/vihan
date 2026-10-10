<!-- app/pages/index.vue -->
<script setup lang="ts">
import { useLocalized } from '~/composables/useLocalized'
import { siteConfig } from '~/data/site-config'
import { projects } from '~/data/projects'

const { l } = useLocalized()
</script>

<template>
  <div class="max-w-7xl mx-auto px-6 py-12 space-y-12">
    <div class="text-center space-y-4">
      <h1 class="text-4xl md:text-6xl font-black">
        {{ $t('hero.title_start') }}
        <span class="text-primary">{{ $t('hero.title_highlight') }}</span>
      </h1>
      <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
        {{ $t('hero.description') }}
      </p>
    </div>

    <!-- تست رندر داده‌های واقعی پروژه‌ها -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
      <div
        v-for="project in projects"
        :key="project.id"
        class="border border-border/50 rounded-3xl p-6 bg-card/40 backdrop-blur-md space-y-4"
      >
        <img
          :src="project.image"
          :alt="l(project.title)"
          class="w-full aspect-video object-cover rounded-2xl"
          loading="lazy"
        />
        <h3 class="font-bold text-xl">{{ l(project.title) }}</h3>
        <p class="text-sm text-muted-foreground leading-relaxed">{{ l(project.description) }}</p>
        <div class="flex flex-wrap gap-2 pt-2">
          <span
            v-for="tag in project.tags"
            :key="tag"
            class="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
