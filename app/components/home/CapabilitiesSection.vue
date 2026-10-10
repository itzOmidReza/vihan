<!-- app/components/home/CapabilitiesSection.vue -->
<script setup lang="ts">
import {
  Sparkle,
  ChartColumn,
  BrainCircuit,
  Cpu,
  DatabaseZap,
  ArrowUpLeft
} from '@lucide/vue'

const localePath = useLocalePath()

const capabilities = [
  {
    id: 'business-analysis',
    title: 'آنالیز کسب‌وکار',
    description: 'تحلیل دقیق داده‌های تجاری برای شناسایی نقاط رشد و بهینه‌سازی استراتژی‌های فروش با هوش مصنوعی.',
    icon: ChartColumn,
    glowColor: 'from-blue-500/10 to-cyan-500/10',
    accentColor: 'text-blue-500',
    pointColor: 'bg-blue-500',
  },
  {
    id: 'modern-ai',
    title: 'هوشمندسازی نوین',
    description: 'پیاده‌سازی مدل‌های یادگیری ماشین برای خودکارسازی تصمیمات پیچیده و افزایش دقت عملیاتی.',
    icon: BrainCircuit,
    glowColor: 'from-purple-500/10 to-pink-500/10',
    accentColor: 'text-purple-500',
    pointColor: 'bg-purple-500',
  },
  {
    id: 'intelligent-automation',
    title: 'اتوماسیون هوشمند',
    description: 'حذف کارهای تکراری و خسته‌کننده با استفاده از ربات‌های نرم‌افزاری و الگوریتم‌های هوشمند.',
    icon: Cpu,
    glowColor: 'from-amber-500/10 to-orange-500/10',
    accentColor: 'text-amber-500',
    pointColor: 'bg-orange-500',
  },
  {
    id: 'big-data',
    title: 'تحلیل داده‌های حجیم',
    description: 'پردازش و استخراج بینش‌های ارزشمند از کلان‌داده‌ها (Big Data) برای پیش‌بینی دقیق بازار.',
    icon: DatabaseZap,
    glowColor: 'from-emerald-500/10 to-teal-500/10',
    accentColor: 'text-emerald-500',
    pointColor: 'bg-emerald-500',
  },
]
</script>

<template>
  <section id="capabilities" class="w-full py-20 md:py-28 relative overflow-hidden bg-background">
    <!-- پترن و هاله پس‌زمینه -->
    <div
      class="absolute top-0 right-0 w-full h-full bg-[radial-gradient(40%_40%_at_50%_0%,var(--primary)_0%,transparent_100%)] opacity-[0.03] dark:opacity-[0.08] pointer-events-none"
    ></div>

    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <!-- هدر سکشن با خط مرزی پایین -->
      <div class="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-border/50 pb-10">
        <div class="space-y-4">
          <div class="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 w-fit">
            <Sparkle class="h-3.5 w-3.5 text-primary fill-primary" />
            <span class="text-primary font-bold text-xs uppercase tracking-widest">
              Our Capabilities
            </span>
          </div>

          <h2 class="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground leading-tight">
            راهکارهایی برای <br />
            <span class="text-primary">دنیای فردا</span>
          </h2>
        </div>

        <p class="text-muted-foreground max-w-md text-base md:text-lg leading-relaxed font-medium">
          ما با بهره‌گیری از دانش روز دنیا در حوزه IT و AI، خدماتی ارائه می‌دهیم که کسب‌وکار شما را در لبه تکنولوژی نگه می‌دارد.
        </p>
      </div>

      <!-- گرید ۴تایی کارت‌ها -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="item in capabilities"
          :key="item.id"
          class="group relative p-8 bg-card/40 backdrop-blur-md border border-border/60 rounded-[2.5rem] transition-all duration-500 hover:border-primary/50 hover:-translate-y-2.5 hover:shadow-2xl overflow-hidden flex flex-col justify-between"
        >
          <!-- هاله ملایم پس‌زمینه هنگام هاور -->
          <div
            class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br pointer-events-none"
            :class="item.glowColor"
          ></div>

          <div class="relative z-10 flex flex-col h-full">
            <!-- آیکون بالا -->
            <div
              class="mb-8 p-5 bg-secondary/80 dark:bg-secondary/30 rounded-2xl w-fit group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 group-hover:shadow-lg group-hover:shadow-primary/25 group-hover:-rotate-6"
            >
              <component
                :is="item.icon"
                class="h-8 w-8 transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <!-- عنوان و توضیح -->
            <h3 class="font-black text-2xl mb-4 group-hover:text-primary transition-colors">
              {{ item.title }}
            </h3>

            <p class="text-muted-foreground leading-relaxed text-sm md:text-base mb-8 grow">
              {{ item.description }}
            </p>

            <!-- لینک و دکمه کاوش سرویس -->
            <NuxtLink :to="localePath('/services')" class="mt-auto">
              <div class="flex items-center justify-between cursor-pointer border-t border-border/50 pt-6 group/link">
                <span class="text-sm font-bold text-foreground/75 group-hover:text-primary transition-colors">
                  کاوش سرویس
                </span>
                <div
                  class="p-2.5 rounded-full bg-secondary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                >
                  <ArrowUpLeft
                    class="h-4 w-4 transition-transform group-hover:scale-110 rtl:rotate-0 ltr:-rotate-90"
                  />
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
