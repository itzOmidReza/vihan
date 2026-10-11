<!-- app/components/projects/ProjectsGrid.vue -->
<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { FolderSearch, RotateCcw } from '@lucide/vue'
import { Button } from '~/components/ui/button'
import ProjectCard from '~/components/projects/ProjectCard.vue'
import { cn } from '~/lib/utils'

interface LocalizedText {
  fa: string
  en: string
}

interface ProjectData {
  id: string
  title: LocalizedText
  description: LocalizedText
  category: string
  categoryLabel?: LocalizedText
  image: string
  tags: string[]
  link?: string
  icon?: string
}

interface Props {
  projects?: ProjectData[]
  loading?: boolean
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  projects: () => [],
  loading: false,
})

const emit = defineEmits<{
  (e: 'select', project: ProjectData): void
  (e: 'reset'): void
}>()
</script>

<template>
  <div :class="cn('w-full', props.class)">
    <!-- حالت بارگذاری (Skeleton) -->
    <div
      v-if="props.loading"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      <div
        v-for="i in 6"
        :key="i"
        class="h-96 rounded-[2.5rem] bg-secondary/30 animate-pulse border border-border/40"
      />
    </div>

    <!-- گرید کارت‌های پروژه در صورت وجود دیتا -->
    <div
      v-else-if="props.projects && props.projects.length > 0"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      <ProjectCard
        v-for="project in props.projects"
        :key="project.id"
        :project="project"
        @select="emit('select', project)"
      />
    </div>

    <!-- حالت خالی در صورت نبود نتیجه فیلتر -->
    <div
      v-else
      class="py-20 text-center flex flex-col items-center justify-center space-y-5 rounded-[2.5rem] border border-dashed border-border/80 bg-card/40 p-8"
    >
      <div
        class="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center"
      >
        <FolderSearch class="w-8 h-8" />
      </div>
      <div class="space-y-2 max-w-md">
        <h3 class="text-xl font-black text-foreground">
          هیچ پروژه‌ای یافت نشد
        </h3>
        <p class="text-sm text-muted-foreground leading-relaxed">
          با عبارت جستجو یا دسته‌بندی انتخاب‌شده پروژه‌ای پیدا نشد. لطفاً فیلترها را تغییر دهید.
        </p>
      </div>
      <Button
        variant="outline"
        class="rounded-full gap-2 font-bold px-6 cursor-pointer"
        @click="emit('reset')"
      >
        <RotateCcw class="w-4 h-4" />
        <span>بازنشانی فیلترها</span>
      </Button>
    </div>
  </div>
</template>

