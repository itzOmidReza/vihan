<!-- app/pages/services/index.vue -->
<script setup lang="ts">
import {
  Cpu,
  Globe,
  Smartphone,
  BarChart3,
  CircleCheck,
  Sparkles,
  ArrowLeft,
  Workflow,
  Search,
  PenTool,
  Code2,
  Rocket,
  ShieldCheck,
  PhoneCall
} from '@lucide/vue'
import { services, workflowSteps } from '~/data/services'
import { siteConfig } from '~/data/site-config'
import { useLocalized } from '~/composables/useLocalized'

const { l, currentLocale } = useLocalized()
const localePath = useLocalePath()

const iconMap: Record<string, any> = {
  Cpu,
  Globe,
  Smartphone,
  ChartColumn: BarChart3,
  BarChart3,
  Search,
  PenTool,
  Code2,
  Rocket,
}


const getColorClasses = (color: string) => {
  switch (color) {
    case 'blue':
      return {
        bg: 'bg-blue-500',
        text: 'text-blue-500',
        glow: 'hover:shadow-blue-500/15',
        border: 'hover:border-blue-500/40',
        badge: 'bg-blue-500/10 text-blue-500 border-blue-500/20'
      }
    case 'emerald':
      return {
        bg: 'bg-emerald-500',
        text: 'text-emerald-500',
        glow: 'hover:shadow-emerald-500/15',
        border: 'hover:border-emerald-500/40',
        badge: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20'
      }
    case 'purple':
      return {
        bg: 'bg-purple-500',
        text: 'text-purple-500',
        glow: 'hover:shadow-purple-500/15',
        border: 'hover:border-purple-500/40',
        badge: 'bg-purple-500/10 text-purple-500 border-purple-500/20'
      }
    case 'amber':
    default:
      return {
        bg: 'bg-amber-500',
        text: 'text-amber-500',
        glow: 'hover:shadow-amber-500/15',
        border: 'hover:border-amber-500/40',
        badge: 'bg-amber-500/10 text-amber-500 border-amber-500/20'
      }
  }
}
</script>

<template>
  <div class="py-12 md:py-20 space-y-24">
    <!-- هدر صفحه خدمات -->
    <section class="max-w-7xl mx-auto px-6 lg:px-8 text-center space-y-6">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
        <Sparkles class="h-3.5 w-3.5" />
        <span>خدمات و حوزه‌های تخصصی</span>
      </div>

      <h1 class="text-4xl sm:text-5xl md:text-6xl font-black text-foreground tracking-tight max-w-4xl mx-auto leading-tight">
        راهکارهای مهندسی نرم‌افزار و <br class="hidden sm:block" />
        <span class="text-primary">هوشمندسازی مقیاس‌پذیر</span>
      </h1>

      <p class="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
        از توسعه پلتفرم‌های ابری و سازمانی تا طراحی و استقرار مدل‌های یادگیری عمیق، همراه شما برای تحول دیجیتال پایدار هستیم.
      </p>
    </section>

    <!-- لیست تفصیلی خدمات محوری -->
    <section class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
        <div
          v-for="service in (services ?? [])"
          :key="service?.id"
          class="group p-8 sm:p-10 rounded-[2.5rem] bg-card/50 backdrop-blur-xl border border-border/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between"
          :class="[getColorClasses(service?.color || 'blue').glow, getColorClasses(service?.color || 'blue').border]"
        >
          <div>
            <!-- بالای کارت: آیکون، شماره سرویس و بج -->
            <div class="flex items-start justify-between mb-8">
              <div
                class="w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                :class="getColorClasses(service?.color || 'blue').bg"
              >
                <component :is="iconMap[service?.icon || 'Cpu'] || Cpu" class="h-8 w-8" />
              </div>

              <span
                class="px-3.5 py-1.5 rounded-full text-xs font-black tracking-widest uppercase border"
                :class="getColorClasses(service?.color || 'blue').badge"
              >
                SERVICE {{ service?.serviceNumber || '01' }}
              </span>
            </div>

            <!-- عنوان و توضیحات -->
            <h2 class="text-2xl sm:text-3xl font-black text-foreground mb-4 group-hover:text-primary transition-colors">
              {{ service?.title ? l(service.title) : '' }}
            </h2>

            <p class="text-muted-foreground text-base leading-relaxed mb-8">
              {{ service?.description ? l(service.description) : '' }}
            </p>

            <!-- ویژگی‌های فنی و قابلیت‌ها -->
            <div class="pt-6 border-t border-border/50 mb-8 space-y-4">
              <h3 class="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                توانمندی‌ها و استانداردهای این حوزه:
              </h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div
                  v-for="(feat, idx) in (service?.features ?? [])"
                  :key="idx"
                  class="flex items-center gap-2 p-2.5 rounded-xl bg-secondary/30 border border-border/40 text-xs sm:text-sm font-semibold text-foreground/90"
                >
                  <CircleCheck class="h-4 w-4 text-primary shrink-0" />
                  <span>{{ feat ? l(feat) : '' }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- دکمه اقدام / درخواست مشاوره برای این سرویس -->
          <div class="pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4 mt-auto">
            <span class="text-xs text-muted-foreground font-medium">
              دارای پروتکل‌های امنیتی و گارانتی تحویل
            </span>

            <NuxtLink :to="localePath('/contact-us')" class="w-full sm:w-auto">
              <button
                type="button"
                class="w-full sm:w-auto h-11 px-6 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-white font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer group/btn"
              >
                <span>درخواست مشاوره این سرویس</span>
                <ArrowLeft class="h-4 w-4 rtl:group-hover/btn:-translate-x-1 ltr:group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- بخش فرآیند مهندسی و متدولوژی اجرایی (Workflow) -->
    <section class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="rounded-[3rem] border border-border/60 bg-secondary/20 dark:bg-card/40 backdrop-blur-2xl p-8 sm:p-12 lg:p-16">
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
            <Workflow class="h-3.5 w-3.5" />
            <span>متدولوژی پیاده‌سازی</span>
          </div>
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight">
            مسیر اجرای پروژه در <span class="text-primary">ویهان</span>
          </h2>
          <p class="text-muted-foreground text-sm sm:text-base">
            چهار گام شفاف و تضمین‌شده از ایده تا راه‌اندازی بدون غافلگیری یا تأخیر زمانی
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="step in (workflowSteps ?? [])"
            :key="step?.step"
            class="relative p-6 rounded-3xl bg-background/60 border border-border/60 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div class="flex items-center justify-between mb-6">
                <div class="p-3.5 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <component :is="iconMap[step?.icon] || Search" class="h-6 w-6" />
                </div>
                <span class="text-2xl font-black text-muted-foreground/40 tabular-nums">
                  {{ step?.step }}
                </span>
              </div>
              <h3 class="text-lg font-black text-foreground mb-3 group-hover:text-primary transition-colors">
                {{ step?.title ? l(step.title) : '' }}
              </h3>
              <p class="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                {{ step?.desc ? l(step.desc) : '' }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- بنر پایانی شروع پروژه -->
    <section class="max-w-5xl mx-auto px-6 text-center space-y-6">
      <div class="p-10 md:p-14 rounded-[2.5rem] bg-gradient-to-b from-primary/15 via-background to-background border border-primary/30 shadow-2xl space-y-6">
        <div class="p-4 rounded-full bg-primary/10 text-primary w-fit mx-auto">
          <ShieldCheck class="h-8 w-8" />
        </div>
        <h2 class="text-3xl sm:text-4xl font-black text-foreground">
          پروژه اختصاصی در ذهن دارید؟
        </h2>
        <p class="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
          با کارشناسان فنی ما تماس بگیرید یا پیام بگذارید تا پس از بررسی دقیق نیازمندی‌ها، داکیومنت فنی و برآورد زمان‌بندی را دریافت کنید.
        </p>

        <div class="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a :href="`tel:${siteConfig.contact.rawMobile}`">
            <button
              type="button"
              class="h-13 px-8 rounded-full bg-primary text-primary-foreground font-black text-sm flex items-center gap-2.5 shadow-xl shadow-primary/25 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <PhoneCall class="h-4 w-4" />
              <span>تماس مستقیم فوری</span>
            </button>
          </a>

          <NuxtLink :to="localePath('/contact-us')">
            <button
              type="button"
              class="h-13 px-8 rounded-full border border-border bg-card/60 hover:bg-secondary text-foreground font-bold text-sm flex items-center gap-2 transition-all cursor-pointer"
            >
              <span>تکمیل فرم درخواست پروژه</span>
              <ArrowLeft class="h-4 w-4 rtl:rotate-0 ltr:rotate-180" />
            </button>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
