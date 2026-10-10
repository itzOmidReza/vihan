<!-- app/components/home/TestimonialsSection.vue -->
<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  Quote,
  Star,
  ChevronRight,
  ChevronLeft,
  MessageSquareHeart
} from '@lucide/vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'

import 'swiper/css'

import { testimonials } from '~/data/testimonials'
import { useLocalized } from '~/composables/useLocalized'

const { l, currentLocale } = useLocalized()
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
  <section class="w-full py-20 md:py-28 bg-background relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <!-- هدر سکشن با تیتر و دکمه‌های کنترل -->
      <div class="flex flex-col md:flex-row items-start md:items-end justify-between mb-14 gap-6">
        <div class="space-y-4 text-right">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
            <MessageSquareHeart class="h-3.5 w-3.5" />
            <span>صدای همراهان و کارفرمایان</span>
          </div>

          <h2 class="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight leading-tight">
            مشتریان درباره ما <span class="text-primary">چه می‌گویند؟</span>
          </h2>
          <p class="text-muted-foreground text-base max-w-md">
            بازخورد و تجربه مدیران و سازمان‌هایی که پروژه‌های خود را به تیم فنی ما سپردند.
          </p>
        </div>

        <!-- دکمه‌های هدایت اسلایدر -->
        <div class="flex items-center gap-3 self-end md:self-auto">
          <button
            @click="handlePrev"
            type="button"
            class="h-12 w-12 rounded-full border border-border/80 bg-card/60 backdrop-blur-md hover:bg-primary hover:text-white flex items-center justify-center transition-all shadow-md cursor-pointer active:scale-95"
            aria-label="Previous Review"
          >
            <ChevronRight class="h-5 w-5 rtl:rotate-0 ltr:rotate-180" />
          </button>
          <button
            @click="handleNext"
            type="button"
            class="h-12 w-12 rounded-full border border-border/80 bg-card/60 backdrop-blur-md hover:bg-primary hover:text-white flex items-center justify-center transition-all shadow-md cursor-pointer active:scale-95"
            aria-label="Next Review"
          >
            <ChevronLeft class="h-5 w-5 rtl:rotate-0 ltr:rotate-180" />
          </button>
        </div>
      </div>

      <!-- کانتینر اسلایدر نظرات -->
      <Swiper
        :key="`${currentLocale}-testimonials-loop`"
        :modules="[Autoplay]"
        :dir="isRTL ? 'rtl' : 'ltr'"
        :loop="true"
        :looped-slides="2"
        :speed="600"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }"
        :slides-per-view="1"
        :space-between="24"
        :grab-cursor="true"
        :breakpoints="{
          640: { slidesPerView: 1.3, spaceBetween: 24 },
          768: { slidesPerView: 2, spaceBetween: 24 },
          1024: { slidesPerView: 3, spaceBetween: 28 }
        }"
        @swiper="onSwiperInit"
        class="pb-10 pt-2 overflow-visible!"
      >
        <SwiperSlide
          v-for="item in testimonials"
          :key="item.id"
          class="h-auto!"
        >
          <div
            class="h-full flex flex-col justify-between p-8 rounded-[2.5rem] border border-border/60 bg-secondary/20 dark:bg-card/40 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl group"
          >
            <!-- بخش بالای کارت: آیکون نقل قول و ستاره‌ها -->
            <div class="flex justify-between items-start mb-6">
              <div
                class="p-3 bg-primary/10 rounded-2xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500"
              >
                <Quote class="h-6 w-6 fill-current" />
              </div>

              <div class="flex gap-1">
                <Star
                  v-for="i in item.rating"
                  :key="i"
                  class="h-4 w-4 fill-amber-400 text-amber-400"
                />
              </div>
            </div>

            <!-- متن بازخورد مشتری -->
            <p class="text-foreground/85 leading-relaxed text-base mb-8 grow italic font-medium">
              «{{ l(item.comment) }}»
            </p>

            <!-- مشخصات و تصویر کاربر -->
            <div class="flex items-center gap-4 border-t border-border/50 pt-6 mt-auto">
              <img
                :src="item.avatar"
                :alt="l(item.name)"
                class="w-13 h-13 rounded-full object-cover border-2 border-primary/20 ring-4 ring-background"
                loading="lazy"
              />
              <div class="flex flex-col text-right">
                <h4 class="font-black text-base text-foreground group-hover:text-primary transition-colors">
                  {{ l(item.name) }}
                </h4>
                <p class="text-muted-foreground text-xs font-semibold">
                  {{ l(item.company) }}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>
