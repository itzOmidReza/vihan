<!-- app/components/home/StatsSection.vue -->
<script setup lang="ts">
import {
  Users,
  BriefcaseBusiness,
  Layers,
  ArrowLeft
} from '@lucide/vue'
import { siteConfig } from '~/data/site-config'

const localePath = useLocalePath()
</script>

<template>
  <section class="w-full py-16 px-4 md:px-6">
    <div
      class="max-w-7xl mx-auto relative overflow-hidden rounded-[2.5rem] md:rounded-[4rem] bg-secondary/30 dark:bg-secondary/15 border border-border/50 backdrop-blur-xl p-8 sm:p-12 lg:p-20 shadow-2xl transition-all duration-500"
    >
      <!-- هاله‌های رنگی نئونی پس‌زمینه کارت -->
      <div class="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div class="flex flex-col justify-center items-center gap-10 relative z-10 max-w-5xl mx-auto">
        <!-- تیتر و توضیح ماموریت تیم -->
        <div class="flex flex-col items-center gap-6 text-center">
          <div class="flex items-center justify-center gap-4">
            <div class="h-px w-8 md:w-16 bg-gradient-to-l from-transparent to-primary/50 hidden sm:block"></div>
            <h2 class="font-black text-3xl md:text-5xl lg:text-6xl text-foreground tracking-tight">
              ما مسیر هوشمندسازی را می‌شناسیم
            </h2>
            <div class="h-px w-8 md:w-16 bg-gradient-to-r from-transparent to-primary/50 hidden sm:block"></div>
          </div>

          <p class="font-medium text-muted-foreground leading-relaxed text-base md:text-xl max-w-3xl">
            تیم ما در شرکت <span class="text-primary font-bold">{{ siteConfig.legalName.fa }}</span> با ترکیب دانش به‌روز نرم‌افزار و الگوریتم‌های هوش مصنوعی، فراتر از یک مجری عمل می‌کند؛ ما <span class="text-primary font-bold">شریک تکنولوژی</span> شما برای ورود به دنیای مدرن هستیم.
          </p>
        </div>

        <!-- کارت‌های سه‌گانه آمار واقعی -->
        <div class="grid grid-cols-1 md:grid-cols-3 w-full gap-6 md:gap-8 mt-6">
          <!-- کارت ۱: تیم متخصص -->
          <div
            class="flex flex-col items-center group p-8 rounded-[2.5rem] bg-background/50 border border-border/60 hover:border-primary/40 hover:bg-background/80 transition-all duration-500 hover:-translate-y-1 shadow-sm"
          >
            <div
              class="p-5 rounded-2xl bg-primary/10 text-primary mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500"
            >
              <Users class="h-9 w-9" />
            </div>
            <span class="text-5xl font-black tracking-tight text-foreground tabular-nums">
              {{ siteConfig.stats.specialists }}
            </span>
            <p class="text-muted-foreground font-bold mt-2 text-sm md:text-base">
              متخصص هسته مرکزی
            </p>
          </div>

          <!-- کارت ۲: پروژه‌های موفق (برجسته‌تر با هایلایت پریمری) -->
          <div
            class="flex flex-col items-center group p-8 rounded-[2.5rem] bg-primary/10 border border-primary/30 md:-translate-y-6 shadow-xl shadow-primary/10 hover:bg-primary/15 transition-all duration-500"
          >
            <div
              class="p-5 rounded-2xl bg-primary text-primary-foreground mb-5 shadow-lg shadow-primary/25 group-hover:scale-110 transition-transform duration-500"
            >
              <BriefcaseBusiness class="h-9 w-9" />
            </div>
            <span class="text-5xl font-black tracking-tight text-primary tabular-nums">
              {{ siteConfig.stats.projects }}
            </span>
            <p class="text-primary font-black mt-2 text-sm md:text-base">
              پلتفرم و سامانه توسعه‌یافته
            </p>
          </div>

          <!-- کارت ۳: پشته‌های تکنولوژی مدرن -->
          <div
            class="flex flex-col items-center group p-8 rounded-[2.5rem] bg-background/50 border border-border/60 hover:border-primary/40 hover:bg-background/80 transition-all duration-500 hover:-translate-y-1 shadow-sm"
          >
            <div
              class="p-5 rounded-2xl bg-primary/10 text-primary mb-5 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500"
            >
              <Layers class="h-9 w-9" />
            </div>
            <span class="text-5xl font-black tracking-tight text-foreground tabular-nums">
              {{ siteConfig.stats.technologies }}
            </span>
            <p class="text-muted-foreground font-bold mt-2 text-sm md:text-base">
              تکنولوژی و فریم‌ورک مدرن
            </p>
          </div>
        </div>

        <!-- دکمه هدایت به صفحه درباره ما -->
        <div class="mt-6">
          <NuxtLink :to="localePath('/about-us')">
            <button
              type="button"
              class="h-14 md:h-16 px-10 md:px-12 rounded-full bg-primary text-primary-foreground font-black text-base md:text-lg flex items-center justify-center gap-3 shadow-xl shadow-primary/25 hover:scale-105 active:scale-95 transition-all cursor-pointer group"
            >
              <span>درباره تیم ما بیشتر بدانید</span>
              <ArrowLeft class="h-5 w-5 group-hover:-translate-x-1.5 transition-transform" />
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
