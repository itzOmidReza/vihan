<!-- app/components/home/ProjectsSection.vue -->
<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  Briefcase,
  ChevronRight,
  ChevronLeft,
  ExternalLink,
  Layers,
  ArrowLeft
} from '@lucide/vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'

import 'swiper/css'

import { projects } from '~/data/projects'
import { useLocalized } from '~/composables/useLocalized'

const { l, currentLocale } = useLocalized()
const localePath = useLocalePath()

const swiperInstance = ref<SwiperType | null>(null)
const isRTL = computed(() => currentLocale.value === 'fa')

const onSwiperInit = (swiper: SwiperType) => {
  swiperInstance.value = swiper
}

const handlePrev = () => {
  if (isRTL.value) {
    swiperInstance.value?.slideNext()
  } else {
    swiperInstance.value?.slidePrev()
  }
}

const handleNext = () => {
  if (isRTL.value) {
    swiperInstance.value?.slidePrev()
  } else {
    swiperInstance.value?.slideNext()
  }
}
</script>

<template>
  <section class="w-full py-24 bg-background overflow-hidden relative">
    <!-- افکت‌های نوری پس‌زمینه -->
    <div class="absolute -top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <!-- هدر سکشن با تیتر و خط نئونی -->
      <div class="relative z-10 flex flex-col items-center mb-16 text-center">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-5 transition-transform hover:scale-105">
          <Briefcase class="h-4 w-4 text-primary" />
          <span class="text-primary font-black text-xs uppercase tracking-widest">
            {{ $t('portfolio_section.badge') }}
          </span>
        </div>

        <h2 class="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground mb-4">
          {{ $t('portfolio_section.title') }}
        </h2>
        <p class="text-muted-foreground text-base md:text-lg max-w-xl">
          {{ $t('portfolio_section.description') }}
        </p>

        <div class="h-1.5 w-24 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full opacity-60 mt-6"></div>
      </div>

      <!-- اسلایدر پروژه‌ها -->
      <Swiper
        :key="`${currentLocale}-projects-loop`"
        :modules="[Autoplay]"
        :dir="isRTL ? 'rtl' : 'ltr'"
        :loop="true"
        :looped-slides="3"
        :speed="700"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }"
        :slides-per-view="1"
        :space-between="32"
        :grab-cursor="true"
        :breakpoints="{
          768: { slidesPerView: 1.3, spaceBetween: 32 },
          1024: { slidesPerView: 1.8, spaceBetween: 40 }
        }"
        @swiper="onSwiperInit"
        class="py-8 overflow-visible!"
      >
        <SwiperSlide
          v-for="project in (projects ?? [])"
          :key="project?.id"
          class="h-auto!"
        >
          <div
            class="group h-full flex flex-col justify-between overflow-hidden border border-border/60 bg-card/50 backdrop-blur-xl rounded-[2.5rem] md:rounded-[3rem] transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/40"
          >
            <!-- تصویر پروژه با اورلی و تگ‌ها -->
            <div class="relative aspect-16/10 overflow-hidden">
              <img
                :src="project?.image"
                :alt="project?.title ? l(project.title) : ''"
                class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
              />

              <!-- لایه هاور شیشه‌ای روی تصویر -->
              <div
                class="absolute inset-0 bg-primary/20 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center"
              >
                <a :href="project?.link || '#'" target="_blank" rel="noopener noreferrer">
                  <button
                    type="button"
                    class="h-11 px-7 rounded-full bg-primary text-primary-foreground font-bold text-sm flex items-center gap-2 shadow-2xl hover:scale-105 active:scale-95 transition-transform cursor-pointer"
                  >
                    <ExternalLink class="h-4 w-4" />
                    <span>{{ $t('portfolio_section.view_project') }}</span>
                  </button>
                </a>
              </div>

              <!-- تگ‌های تکنولوژی در بالای تصویر -->
              <div class="absolute top-5 right-5 flex flex-wrap gap-2 max-w-[80%]">
                <span
                  v-for="tag in (project?.tags ?? [])"
                  :key="tag"
                  class="bg-background/85 backdrop-blur-md border border-border/70 text-foreground text-[11px] font-bold py-1 px-3 rounded-full shadow-xs"
                >
                  {{ tag }}
                </span>
              </div>
            </div>

            <!-- محتوای متنی کارت -->
            <div class="p-8 md:p-10 flex flex-col grow justify-between">
              <div>
                <div class="flex justify-between items-start mb-4 gap-4">
                  <h3 class="text-xl md:text-2xl font-black text-foreground group-hover:text-primary transition-colors">
                    {{ project?.title ? l(project.title) : '' }}
                  </h3>
                  <div class="p-3 bg-secondary rounded-2xl group-hover:bg-primary/10 group-hover:rotate-12 transition-all shrink-0">
                    <Layers class="text-primary h-5 w-5" />
                  </div>
                </div>

                <p class="text-muted-foreground leading-relaxed text-sm md:text-base line-clamp-3 mb-8">
                  {{ l(project.description) }}
                </p>
              </div>

              <!-- بخش فوتر کارت -->
              <div class="flex items-center justify-between pt-6 border-t border-border/50 mt-auto">
                <NuxtLink
                  :to="localePath('/projects')"
                  class="flex items-center gap-2 text-primary font-bold text-sm hover:opacity-80 transition-opacity cursor-pointer group/link"
                >
                  <span>بررسی جزئیات فنی</span>
                  <div class="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center group-hover/link:bg-primary group-hover/link:text-white transition-all">
                    <ArrowLeft class="h-4 w-4 rtl:rotate-0 ltr:rotate-180" />
                  </div>
                </NuxtLink>

                <span class="text-xs font-semibold text-muted-foreground/60 uppercase tracking-widest">
                  #{{ project.category }}
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <!-- دکمه‌های ناوبری اسلایدر پروژه‌ها -->
      <div class="flex gap-4 justify-center mt-10">
        <button
          @click="handlePrev"
          type="button"
          class="h-13 w-13 rounded-full border border-border/80 bg-card hover:bg-primary hover:text-white flex items-center justify-center transition-all shadow-md cursor-pointer active:scale-95"
          aria-label="Previous Project"
        >
          <ChevronRight class="h-6 w-6 rtl:rotate-0 ltr:rotate-180" />
        </button>
        <button
          @click="handleNext"
          type="button"
          class="h-13 w-13 rounded-full border border-border/80 bg-card hover:bg-primary hover:text-white flex items-center justify-center transition-all shadow-md cursor-pointer active:scale-95"
          aria-label="Next Project"
        >
          <ChevronLeft class="h-6 w-6 rtl:rotate-0 ltr:rotate-180" />
        </button>
      </div>
    </div>
  </section>
</template>
