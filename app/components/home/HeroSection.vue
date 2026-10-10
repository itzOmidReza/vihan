<!-- app/components/home/HeroSection.vue -->
<script setup lang="ts">
import { Sparkles, ArrowLeft, MousePointer2, Cpu } from '@lucide/vue'
import { siteConfig } from '~/data/site-config'

const localePath = useLocalePath()
</script>

<template>
  <section class="relative min-h-[calc(100vh-6rem)] w-full flex items-center justify-center py-16 md:py-24 overflow-hidden bg-background">
    <!-- پس‌زمینه شبکه‌ای (Grid Pattern) و افکت‌های نوری -->
    <div
      class="absolute inset-0 opacity-[0.12] dark:opacity-20 [background-image:radial-gradient(var(--border)_1px,transparent_1px)] [background-size:36px_36px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"
    ></div>
    <div class="absolute -top-32 -right-32 w-96 md:w-[32rem] h-96 md:h-[32rem] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
    <div class="absolute -bottom-32 -left-32 w-80 md:w-[28rem] h-80 md:h-[28rem] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 relative z-10 w-full">
      <!-- ستون متن‌ها و دکمه‌های اقدام (CTA) -->
      <div class="flex-1 flex flex-col items-start gap-6 lg:gap-8 order-2 lg:order-1 text-right">
        <!-- برچسب بالا (Badge) -->
        <div
          class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary/10 border border-primary/25 backdrop-blur-md text-primary text-xs md:text-sm font-bold shadow-xs"
        >
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <Sparkles class="h-4 w-4" />
          <span>{{ $t('hero.badge') }}</span>
        </div>

        <!-- تیتر اصلی -->
        <h1 class="font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.15] tracking-tight text-foreground">
          {{ $t('hero.title_start') }}
          <br />
          <span class="relative inline-block mt-2">
            <span class="bg-gradient-to-l from-primary via-blue-500 to-primary bg-clip-text text-transparent">
              {{ $t('hero.title_highlight') }}
            </span>
            <svg class="absolute -bottom-2 left-0 w-full opacity-60 text-primary" viewBox="0 0 300 12" fill="none">
              <path d="M1 10.5C50 3 150 3 299 10.5" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
            </svg>
          </span>
          <span class="mr-2">{{ $t('hero.title_end') }}</span>
        </h1>

        <!-- توضیحات هیرو -->
        <p class="text-muted-foreground text-base sm:text-lg md:text-xl max-w-xl leading-relaxed">
          {{ $t('hero.description') }}
        </p>

        <!-- دکمه‌های اکشن اصلی -->
        <div class="flex flex-wrap items-center gap-4 w-full sm:w-auto pt-2">
          <!-- دکمه تماس / مشاوره -->
          <a :href="`tel:${siteConfig.contact.rawMobile}`" class="w-full sm:w-auto">
            <button
              type="button"
              class="w-full sm:w-auto h-14 md:h-16 px-8 md:px-10 rounded-full bg-primary text-primary-foreground font-black text-base md:text-lg flex items-center justify-center gap-3 shadow-xl shadow-primary/25 hover:scale-105 active:scale-95 transition-all cursor-pointer group"
            >
              <span>{{ $t('hero.cta_primary') }}</span>
              <ArrowLeft class="h-5 w-5 group-hover:-translate-x-1.5 transition-transform" />
            </button>
          </a>

          <!-- دکمه هدایت به پروژه‌ها -->
          <NuxtLink :to="localePath('/projects')" class="w-full sm:w-auto">
            <button
              type="button"
              class="w-full sm:w-auto h-14 md:h-16 px-8 md:px-10 rounded-full border border-border/80 bg-background/60 hover:bg-secondary/60 text-foreground font-bold text-base md:text-lg flex items-center justify-center gap-3 transition-all cursor-pointer"
            >
              <span>{{ $t('hero.cta_secondary') }}</span>
              <MousePointer2 class="h-4 w-4 text-muted-foreground" />
            </button>
          </NuxtLink>
        </div>
      </div>

      <!-- ستون گرافیک بصری انتزاعی هوش مصنوعی (سمت راست در RTL) -->
      <div class="flex-1 relative w-full flex items-center justify-center lg:justify-end order-1 lg:order-2">
        <div class="relative w-full max-w-[28rem] aspect-square flex items-center justify-center">
          <!-- برچسب کارت وضعیت سیستم هوشمند شناور -->
          <div
            class="absolute top-4 -right-4 sm:right-0 z-20 bg-background/80 backdrop-blur-xl border border-border/60 p-4 rounded-3xl shadow-xl border-r-4 border-r-primary flex items-center gap-3"
          >
            <div class="p-2.5 bg-primary/15 rounded-2xl text-primary">
              <Cpu class="h-5 w-5 animate-pulse" />
            </div>
            <div>
              <p class="text-[10px] text-muted-foreground uppercase font-black tracking-widest">
                Core Engine
              </p>
              <p class="font-bold text-xs md:text-sm text-foreground">
                سیستم فعال (On-Air)
              </p>
            </div>
          </div>

          <!-- تصویر انتزاعی SVG نودهای شبکه و هوش مصنوعی -->
          <svg viewBox="0 0 500 500" class="w-full h-full drop-shadow-[0_0_40px_rgba(var(--primary),0.25)]">
            <circle cx="250" cy="250" r="70" class="fill-primary/15 stroke-primary/50 animate-pulse" stroke-width="2" />
            <circle cx="250" cy="250" r="35" class="fill-primary" />

            <!-- خطوط اتصال گراف -->
            <g class="stroke-primary/30" stroke-width="1.5" stroke-dasharray="4 4">
              <line x1="250" y1="250" x2="100" y2="100" />
              <line x1="250" y1="250" x2="400" y2="100" />
              <line x1="250" y1="250" x2="400" y2="400" />
              <line x1="250" y1="250" x2="100" y2="400" />
            </g>

            <!-- نودهای متصل -->
            <g class="fill-background stroke-primary" stroke-width="2">
              <circle cx="100" cy="100" r="16" />
              <circle cx="400" cy="100" r="22" />
              <circle cx="400" cy="400" r="16" />
              <circle cx="100" cy="400" r="22" />
            </g>
          </svg>

          <!-- هاله نوری پشت گرافیک -->
          <div class="absolute inset-0 bg-primary/20 rounded-full blur-[90px] -z-10 pointer-events-none"></div>
        </div>
      </div>
    </div>
  </section>
</template>
