<!-- app/components/projects/ProjectCard.vue -->
<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import {
  ExternalLink,
  Cpu,
  Globe,
  PanelsTopLeft,
  Sparkles,
} from '@lucide/vue'
import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'
import { cn } from '~/lib/utils'
import { useLocalized } from '~/composables/useLocalized'

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
  project: ProjectData
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'select', project: ProjectData): void
}>()

const { l } = useLocalized()

const iconMap: Record<string, any> = {
  Cpu,
  Globe,
  PanelsTopLeft,
  Sparkles,
}

const resolveIcon = (name?: string) => {
  if (!name) return Cpu
  return iconMap[name] || Cpu
}
</script>

<template>
  <div
    :class="
      cn(
        'group relative bg-card rounded-[2.5rem] border border-border/50 overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 flex flex-col justify-between',
        props.class
      )
    "
  >
    <!-- تصویر کارت با نسبت ابعاد و لایه هاور -->
    <div class="relative aspect-4/3 overflow-hidden bg-muted/40">
      <img
        :src="props.project?.image"
        :alt="props.project?.title ? l(props.project.title) : ''"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />

      <!-- دکمه مشاهده روی هاور -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 sm:p-8"
      >
        <a
          v-if="props.project?.link && props.project.link !== '#'"
          :href="props.project.link"
          target="_blank"
          rel="noopener noreferrer"
          class="w-full"
        >
          <Button
            variant="default"
            class="w-full rounded-2xl gap-2 font-bold shadow-2xl h-11 px-4 cursor-pointer"
          >
            <span>مشاهده جزئیات</span>
            <ExternalLink class="w-4 h-4" />
          </Button>
        </a>
        <Button
          v-else
          variant="default"
          class="w-full rounded-2xl gap-2 font-bold shadow-2xl h-11 px-4 cursor-pointer"
          @click="emit('select', props.project)"
        >
          <span>مشاهده جزئیات</span>
          <ExternalLink class="w-4 h-4" />
        </Button>
      </div>

      <!-- بج دسته‌بندی روی تصویر -->
      <Badge
        v-if="props.project?.categoryLabel"
        class="absolute top-6 right-6 bg-background/85 backdrop-blur-md text-foreground font-bold border-none shadow-sm"
      >
        {{ l(props.project.categoryLabel) }}
      </Badge>
    </div>

    <!-- محتوای متنی کارت -->
    <div class="p-6 sm:p-8 text-right flex-1 flex flex-col justify-between">
      <div>
        <div class="flex items-center gap-3 mb-4">
          <div class="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
            <component :is="resolveIcon(props.project?.icon)" class="w-5 h-5" />
          </div>
          <h3 class="text-xl font-black text-foreground group-hover:text-primary transition-colors">
            {{ props.project?.title ? l(props.project.title) : '' }}
          </h3>
        </div>

        <p class="text-muted-foreground leading-relaxed line-clamp-3 mb-6 text-sm">
          {{ props.project?.description ? l(props.project.description) : '' }}
        </p>
      </div>

      <!-- تگ‌های تکنولوژی -->
      <div class="flex flex-wrap gap-2 pt-5 border-t border-border/50">
        <span
          v-for="(tag, tIdx) in (props.project?.tags ?? [])"
          :key="tIdx"
          class="text-[11px] font-bold uppercase tracking-wider text-muted-foreground bg-secondary px-3 py-1 rounded-full dir-ltr"
        >
          #{{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

