<script setup lang="ts">
import {
  BarChart3,
  BrainCircuit,
  Cpu,
  DatabaseZap,
  ArrowLeft,
  Sparkle,
} from "lucide-vue-next";

const services = [
  {
    title: "آنالیز کسب‌وکار",
    description:
      "تحلیل دقیق داده‌های تجاری برای شناسایی نقاط رشد و بهینه‌سازی استراتژی‌های فروش با هوش مصنوعی.",
    icon: BarChart3,
    gradient: "from-blue-500/10 to-cyan-500/10",
    accent: "bg-blue-500",
    color: "text-red-500",
  },
  {
    title: "هوشمندسازی نوین",
    description:
      "پیاده‌سازی مدل‌های یادگیری ماشین برای خودکارسازی تصمیمات پیچیده و افزایش دقت عملیاتی.",
    icon: BrainCircuit,
    gradient: "from-purple-500/10 to-pink-500/10",
    accent: "bg-purple-500",
    color: "text-purple-500",
  },
  {
    title: "اتوماسیون هوشمند",
    description:
      "حذف کارهای تکراری و خسته‌کننده با استفاده از ربات‌های نرم‌افزاری و الگوریتم‌های هوشمند.",
    icon: Cpu,
    gradient: "from-orange-500/10 to-red-500/10",
    accent: "bg-orange-500",
    color: "text-emerald-500",
  },
  {
    title: "تحلیل داده‌های حجیم",
    description:
      "پردازش و استخراج بینش‌های ارزشمند از کلان‌داده‌ها (Big Data) برای پیش‌بینی دقیق بازار.",
    icon: DatabaseZap,
    gradient: "from-emerald-500/10 to-teal-500/10",
    accent: "bg-emerald-500",
    color: "text-blue-500",
  },
];
</script>

<template>
  <section
    class="w-full py-24 relative overflow-hidden bg-background"
    dir="rtl"
  >
    <div
      id="services"
      class="absolute top-0 right-0 w-full h-full bg-[radial-gradient(35%_35%_at_50%_0%,var(--primary)_0%,transparent_100%)] opacity-[0.03] dark:opacity-[0.07]"
    ></div>

    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div
        class="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-border/50 pb-10"
      >
        <div class="space-y-4">
          <div
            class="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit"
          >
            <Sparkle class="w-4 h-4 text-primary fill-primary" />
            <span
              class="text-primary font-bold text-[10px] md:text-xs uppercase tracking-widest"
              >Our Capabilities</span
            >
          </div>
          <h2
            class="text-4xl md:text-5xl font-black tracking-tight text-foreground"
          >
            راهکارهایی برای <br />
            <span class="text-primary">دنیای فردا</span>
          </h2>
        </div>
        <p
          class="text-muted-foreground max-w-md text-base md:text-lg leading-relaxed font-medium"
        >
          ما با بهره‌گیری از دانش روز دنیا در حوزه IT و AI، خدماتی ارائه می‌دهیم
          که کسب‌وکار شما را در لبه تکنولوژی نگه می‌دارد.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(service, idx) in services"
          :key="idx"
          class="group relative p-8 bg-card/40 backdrop-blur-md border border-border/50 rounded-[2.5rem] transition-all duration-500 hover:border-primary/50 hover:-translate-y-3 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] dark:hover:shadow-primary/5 overflow-hidden"
        >
          <div
            :class="[
              'absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-linear-to-br',
              service.gradient,
            ]"
          ></div>

          <div
            :class="[
              'absolute -top-2 -left-2 w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-[20]',
              service.accent,
            ]"
          ></div>

          <div class="relative z-10 flex flex-col h-full">
            <div
              class="mb-8 p-5 bg-secondary dark:bg-secondary/30 rounded-2xl w-fit group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 group-hover:shadow-lg group-hover:shadow-primary/25 group-hover:-rotate-6"
            >
              <component
                :is="service.icon"
                :class="[
                  'w-8 h-8 transition-transform duration-500 group-hover:scale-110 group-hover:text-primary-foreground',
                  service.color,
                ]"
              />
            </div>

            <h4
              class="font-black text-2xl mb-4 group-hover:text-primary transition-colors"
            >
              {{ service.title }}
            </h4>
            <p
              class="text-muted-foreground leading-relaxed text-sm md:text-base mb-8 grow"
            >
              {{ service.description }}
            </p>
            <NuxtLink to="/services">
              <div
                class="flex items-center justify-between group/link cursor-pointer border-t border-border/50 pt-6"
              >
                <span
                  class="text-sm font-bold text-foreground/70 group-hover:text-primary transition-colors"
                  >کاوش سرویس</span
                >
                <div
                  class="p-2 rounded-full bg-secondary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                >
                  <ArrowLeft
                    class="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform"
                  />
                </div></div
            ></NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* حذف انیمیشن Keyframes قدیمی برای پرفورمنس بهتر و استفاده از کلاس‌های Tailwind */
.grid > div {
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
}
</style>
