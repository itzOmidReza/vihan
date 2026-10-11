<!-- app/components/projects/ProjectsFilterBar.vue -->
<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Search, RotateCcw } from '@lucide/vue'
import { cn } from '~/lib/utils'
import { useLocalized } from '~/composables/useLocalized'

interface CategoryItem {
  id: string
  label: {
    fa: string
    en: string
  }
}

interface Props {
  activeCategory?: string
  searchQuery?: string
  categories?: CategoryItem[]
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  activeCategory: 'all',
  searchQuery: '',
  categories: () => [],
})

const emit = defineEmits<{
  (e: 'update:activeCategory', value: string): void
  (e: 'update:searchQuery', value: string): void
  (e: 'reset'): void
}>()

const { l } = useLocalized()

const handleCategoryClick = (id: string) => {
  emit('update:activeCategory', id)
}

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:searchQuery', target.value)
}

const handleReset = () => {
  emit('reset')
}
</script>

<template>
  <div
    :class="
      cn(
        'w-full bg-background/95 backdrop-blur-xl border-b border-border/50 py-4 mb-12 shadow-xs transition-colors',
        props.class
      )
    "
  >
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 w-full flex flex-col md:flex-row items-center justify-between gap-4"
    >
      <!-- تب‌های دسته‌بندی -->
      <div
        class="flex items-center gap-2 p-1.5 bg-secondary/50 rounded-2xl overflow-x-auto max-w-full scrollbar-none"
      >
        <button
          v-for="cat in props.categories"
          :key="cat.id"
          type="button"
          :class="[
            'px-5 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap cursor-pointer select-none',
            props.activeCategory === cat.id
              ? 'bg-primary text-primary-foreground shadow-md'
              : 'hover:bg-background/50 text-muted-foreground hover:text-foreground',
          ]"
          @click="handleCategoryClick(cat.id)"
        >
          {{ l(cat.label) }}
        </button>
      </div>

      <!-- کادر جستجو با استایل RTL و دکمه بازنشانی -->
      <div class="flex items-center gap-2 w-full md:w-auto">
        <div class="relative w-full md:w-80">
          <input
            :value="props.searchQuery"
            type="text"
            dir="rtl"
            placeholder="جستجو در پروژه‌ها، تگ‌ها..."
            class="w-full h-12 rounded-2xl bg-secondary/40 border border-border/60 text-foreground placeholder:text-muted-foreground/60 pr-11 pl-4 text-sm text-right focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            @input="handleInput"
          />
          <Search
            class="w-4 h-4 text-muted-foreground pointer-events-none absolute right-4 top-1/2 -translate-y-1/2"
          />
        </div>

        <button
          v-if="props.searchQuery || props.activeCategory !== 'all'"
          type="button"
          title="بازنشانی فیلترها"
          class="h-12 w-12 shrink-0 rounded-2xl border border-border/60 bg-secondary/40 hover:bg-secondary text-muted-foreground hover:text-foreground flex items-center justify-center transition-all cursor-pointer"
          @click="handleReset"
        >
          <RotateCcw class="w-4 h-4" />
        </button>
      </div>
    </div>
  </div>
</template>

