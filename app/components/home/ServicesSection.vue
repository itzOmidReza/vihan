<!-- app/components/home/ServicesSection.vue -->
<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  Cpu,
  Globe,
  Smartphone,
  BarChart3,
  CircleCheck,
  ChevronRight,
  ChevronLeft,
  ArrowLeft,
  Sparkle
} from '@lucide/vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'

// استایل‌های Swiper
import 'swiper/css'

import { services } from '~/data/services'
import { useLocalized } from '~/composables/useLocalized'

const { l, currentLocale } = useLocalized()
const localePath = useLocalePath()

const swiperInstance = ref<SwiperType | null>(null)
const isRTL = computed(() => currentLocale.value === 'fa')

const onSwiperInit = (swiper: SwiperType) => {
  swiperInstance.value = swiper
}

// ناوبری هوشمند متناسب با RTL و LTR
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

const iconMap: Record<string, any> = {
  Cpu,
  Globe,
  Smartphone,
  ChartColumn: BarChart3,
  BarChart3,
}

const getColorClasses = (color: string) => {
  switch (color) {
    case 'blue':
      return {
        bg: 'bg-blue-500',
        text: 'text-blue-500',
        glow: 'group-hover:shadow-blue-500/20',
      }
    case 'emerald':
      return {
        bg: 'bg-emerald-500',
        text: 'text-emerald-500',
        glow: 'group-hover:shadow-emerald-500/20',
      }
    case 'purple':
      return {
        bg: 'bg-purple-500',
        text: 'text-purple-500',
        glow: 'group-hover:shadow-purple-500/20',
      }
    case 'amber':
    default:
      return {
        bg: 'bg-amber-500',
        text: 'text-amber-500',
        glow: 'group-hover:shadow-amber-500/20',
      }
  }
}
</script>

<template>
  <section class="w-full py-20 md:py-28 relative overflow-hidden bg-background">
    <!-- افکت‌های نوری پس‌زمینه -->
    <div class="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
    <div class="absolute bottom-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <!-- هدر سکشن همراه دکمه‌های کنترل لوپ -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div class="space-y-4">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
            <Sparkle class="h-3.5 w-3.5 fill-primary" />
            <span>{{ $t('services_section.badge') }}</span>
          </div>
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight text-foreground">
            {{ $t('services_section.title') }}
          </h2>
          <p class="text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed">
            {{ $t('services_section.description') }}
          </p>
        </div>

        <!-- دکمه‌های کنترل اسلایدر -->
        <div class="flex items-center gap-3 self-end md:self-auto">
          <button
            @click="handlePrev"
            type="button"
            class="h-12 w-12 rounded-2xl border border-border/70 bg-card/60 backdrop-blur-md hover:bg-primary hover:text-white flex items-center justify-center transition-all shadow-md cursor-pointer active:scale-95"
            aria-label="Previous Slide"
          >
            <ChevronRight class="h-5 w-5 rtl:rotate-0 ltr:rotate-180" />
          </button>
          <button
            @click="handleNext"
            type="button"
            class="h-12 w-12 rounded-2xl border border-border/70 bg-card/60 backdrop-blur-md hover:bg-primary hover:text-white flex items-center justify-center transition-all shadow-md cursor-pointer active:scale-95"
            aria-label="Next Slide"
          >
            <ChevronLeft class="h-5 w-5 rtl:rotate-0 ltr:rotate-180" />
          </button>
        </div>
      </div>

      <!-- کانتینر سوایپر لوپ بی‌نهایت با پشتیبانی کامل از RTL -->
      <Swiper
        :key="`${currentLocale}-infinite`"
        :modules="[Autoplay]"
        :dir="isRTL ? 'rtl' : 'ltr'"
        :loop="true"
        :looped-slides="3"
        :speed="600"
        :autoplay="{
          delay: 4500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }"
        :slides-per-view="1"
        :space-between="24"
        :grab-cursor="true"
        :breakpoints="{
          640: { slidesPerView: 1.4, spaceBetween: 24 },
          768: { slidesPerView: 2, spaceBetween: 24 },
          1024: { slidesPerView: 3, spaceBetween: 24 }
        }"
        @swiper="onSwiperInit"
        class="pb-10 pt-2 overflow-visible!"
      >
        <SwiperSlide
          v-for="service in (services ?? [])"
          :key="service?.id"
          class="h-auto!"
        >
          <div
            class="h-full group relative p-8 md:p-10 rounded-[2.5rem] bg-card/50 backdrop-blur-md border border-border/60 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden flex flex-col justify-between"
            :class="getColorClasses(service?.color || 'blue').glow"
          >
            <!-- هاله محو داخلی کارت هنگام هاور -->
            <div
              class="absolute -top-12 -left-12 w-40 h-40 opacity-0 group-hover:opacity-30 blur-[60px] rounded-full transition-opacity duration-700 pointer-events-none"
              :class="getColorClasses(service?.color || 'blue').bg"
            ></div>

            <div class="relative z-10 flex flex-col h-full">
              <!-- ردیف آیکون و بج سرویس -->
              <div class="flex items-start justify-between mb-8">
                <div
                  class="w-16 h-16 rounded-3xl flex items-center justify-center text-white shadow-xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                  :class="getColorClasses(service?.color || 'blue').bg"
                >
                  <component :is="iconMap[service?.icon || 'Cpu'] || Cpu" class="h-8 w-8" />
                </div>
                <span class="px-3.5 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-black tracking-widest uppercase">
                  Service {{ service?.serviceNumber || '01' }}
                </span>
              </div>

              <!-- عنوان و متن سرویس -->
              <h3 class="text-2xl font-black mb-4 group-hover:text-primary transition-colors duration-300">
                {{ service?.title ? l(service.title) : '' }}
              </h3>
              <p class="text-muted-foreground text-sm leading-relaxed mb-8 grow">
                {{ service?.description ? l(service.description) : '' }}
              </p>

              <!-- قابلیت‌های سرویس -->
              <div class="pt-6 border-t border-border/40 mt-auto">
                <p class="text-xs font-bold mb-3 text-muted-foreground uppercase tracking-wider">
                  {{ $t('services_section.features_title') }}
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="(feat, idx) in (service?.features ?? [])"
                    :key="idx"
                    class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-background/70 border border-border/60 text-xs font-medium text-foreground group-hover:border-primary/30 transition-all"
                  >
                    <CircleCheck class="h-3.5 w-3.5 text-primary shrink-0" />
                    <span>{{ feat ? l(feat) : '' }}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <!-- لینک فوتر سکشن -->
      <div class="mt-4 text-center">
        <NuxtLink :to="localePath('/services')" class="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline group">
          <span>مشاهده تمامی خدمات و جزییات فنی</span>
          <ArrowLeft class="h-4 w-4 rtl:group-hover:-translate-x-1 ltr:group-hover:translate-x-1 transition-transform" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
