<!-- app/pages/projects/index.vue -->
<script setup lang="ts">
import { Sparkles } from '@lucide/vue'
import { projects } from '~/data/projects'
import { useProjectFilter } from '~/composables/useProjectFilter'
import ProjectsFilterBar from '~/components/projects/ProjectsFilterBar.vue'
import ProjectsGrid from '~/components/projects/ProjectsGrid.vue'

const {
  activeCategory,
  searchQuery,
  categories,
  filteredProjects,
  resetFilters,
} = useProjectFilter(projects)
</script>

<template>
  <div class="w-full pb-32 overflow-x-hidden" dir="rtl">
    <!-- بخش معرفی و تیتر -->
    <header class="relative pt-24 md:pt-32 pb-16 border-b border-border/40 text-center">
      <div class="absolute inset-0 bg-primary/5 -z-10 pointer-events-none"></div>
      <div class="max-w-7xl mx-auto px-6 space-y-4">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
          <Sparkles class="h-3.5 w-3.5" />
          <span>پروژه‌ها و دستاوردها</span>
        </div>

        <h1 class="text-4xl md:text-6xl font-black tracking-tight text-foreground">
          ویترین <span class="text-primary">خلاقیت</span> و تخصص
        </h1>

        <p class="text-muted-foreground text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
          مجموعه‌ای از پروژه‌های شاخص ما در حوزه‌های هوش مصنوعی، توسعه سامانه‌های مدرن تحت وب و اپلیکیشن‌های پیشرفته.
        </p>
      </div>
    </header>

    <!-- نوار فیلتر و جستجو -->
    <div class="sticky top-20 z-30 w-full">
      <ProjectsFilterBar
        v-model:active-category="activeCategory"
        v-model:search-query="searchQuery"
        :categories="categories"
        @reset="resetFilters"
      />
    </div>

    <!-- بدنه اصلی و گرید پروژه‌ها -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6">
      <ProjectsGrid
        :projects="filteredProjects"
        @reset="resetFilters"
      />
    </main>
  </div>
</template>
