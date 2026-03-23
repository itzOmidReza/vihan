<script setup lang="ts">
import {
  Cpu,
  Globe,
  Smartphone,
  BarChart3,
  Zap,
  CheckCircle2,
} from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const allServices = [
  {
    id: 1,
    title: "هوش مصنوعی و یادگیری ماشین",
    description:
      "ارائه راهکارهای پیشرفته پردازش تصویر، تحلیل داده و مدل‌های پیش‌بینی برای خودکارسازی کسب‌وکار شما.",
    icon: Cpu,
    color: "bg-blue-500",
    features: ["پردازش زبان طبیعی (NLP)", "بینایی ماشین", "سیستم‌های توصیه‌گر"],
  },
  {
    id: 2,
    title: "توسعه وب‌سایت‌های مدرن",
    description:
      "طراحی و برنامه‌نویسی سایت‌های فوق‌سریع با Nuxt 4 و معماری Microservices برای مقیاس‌پذیری نامحدود.",
    icon: Globe,
    color: "bg-emerald-500",
    features: ["رندرینگ SSR و ISR", "بهینه‌سازی Core Web Vitals", "امنیت بالا"],
  },
  {
    id: 3,
    title: "اپلیکیشن‌های موبایل (PWA/Native)",
    description:
      "توسعه اپلیکیشن‌های چندسکویی با تجربه کاربری عالی و هماهنگی کامل با سیستم‌عامل‌های iOS و Android.",
    icon: Smartphone,
    color: "bg-purple-500",
    features: ["تجربه کاربری Native", "دسترسی آفلاین", "Push Notifications"],
  },
  {
    id: 4,
    title: "تحلیل داده و هوش تجاری",
    description:
      "تبدیل داده‌های خام به داشبوردها و گزارش‌های مدیریتی برای تصمیم‌گیری‌های دقیق و سودآور.",
    icon: BarChart3,
    color: "bg-amber-500",
    features: [
      "مانیتورینگ زنده",
      "گزارش‌گیری خودکار",
      "یکپارچگی با پایگاه داده",
    ],
  },
];

const steps = [
  {
    title: "مشاوره و نیازسنجی",
    desc: "بررسی دقیق اهداف و چالش‌های کسب‌وکار شما",
  },
  {
    title: "طراحی و معماری",
    desc: "ترسیم نقشه راه و انتخاب بهترین پشته تکنولوژی",
  },
  {
    title: "توسعه و پیاده‌سازی",
    desc: "برنامه‌نویسی با استانداردهای جهانی و تست‌های مداوم",
  },
  {
    title: "پشتیبانی و توسعه",
    desc: "همراهی همیشگی برای ارتقا و نگهداری سیستم",
  },
];
</script>

<template>
  <div class="min-h-screen bg-background pb-20" dir="rtl">
    <section class="relative pt-32 pb-20 overflow-hidden">
      <div
        class="absolute top-0 right-0 w-125 h-125 bg-primary/10 rounded-full blur-[120px] -z-10"
      ></div>
      <div class="container max-w-7xl mx-auto px-6 text-center">
        <Badge
          variant="outline"
          class="mb-6 px-4 py-1 border-primary/30 text-primary animate-bounce"
          >خدمات ما</Badge
        >
        <h1
          class="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[1.2]"
        >
          راه‌حل‌های <span class="text-primary italic">هوشمند</span> <br />
          برای دنیای دیجیتال
        </h1>
        <p
          class="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed"
        >
          ما در لبه تکنولوژی حرکت می‌کنیم تا پیچیده‌ترین ایده‌های شما را به
          محصولات دیجیتالی تبدیل کنیم که تفاوت ایجاد می‌کنند.
        </p>
      </div>
    </section>

    <section class="container max-w-7xl mx-auto px-6 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="service in allServices"
          :key="service.id"
          class="group relative p-10 rounded-[3.5rem] bg-card/40 backdrop-blur-md border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_50px_rgba(var(--primary),0.1)] overflow-hidden"
        >
          <div
            :class="[
              'absolute -top-10 -left-10 w-40 h-40 opacity-0 group-hover:opacity-20 blur-[80px] rounded-full transition-opacity duration-700',
              service.color,
            ]"
          ></div>

          <div class="relative z-10 flex flex-col h-full">
            <div class="flex items-start justify-between mb-8">
              <div
                :class="[
                  'w-16 h-16 rounded-3xl flex items-center justify-center text-white shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3',
                  service.color,
                ]"
              >
                <component :is="service.icon" class="w-8 h-8" />
              </div>
              <div
                class="px-4 py-1.5 rounded-full bg-secondary text-[10px] font-black tracking-widest uppercase opacity-60 group-hover:opacity-100 transition-opacity"
              >
                Service 0{{ service.id }}
              </div>
            </div>

            <h3
              class="text-3xl font-black mb-4 group-hover:text-primary transition-colors duration-300"
            >
              {{ service.title }}
            </h3>
            <p class="text-muted-foreground text-lg leading-relaxed mb-10">
              {{ service.description }}
            </p>

            <div class="mt-auto pt-8 border-t border-border/40">
              <p
                class="text-xs font-bold mb-4 text-muted-foreground uppercase tracking-tighter"
              >
                ویژگی‌های کلیدی:
              </p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="feat in service.features"
                  :key="feat"
                  class="flex items-center gap-2 px-4 py-2 rounded-xl bg-background/50 border border-border/60 text-sm font-medium group-hover:border-primary/30 group-hover:bg-primary/5 transition-all"
                >
                  <CheckCircle2 class="w-4 h-4 text-primary" />
                  {{ feat }}
                </span>
              </div>
            </div>
          </div>

          <div
            class="absolute bottom-6 left-6 opacity-0 group-hover:opacity-10 transition-all duration-700 translate-y-4 group-hover:translate-y-0"
          >
            <component :is="service.icon" class="w-24 h-24 text-foreground" />
          </div>
        </div>
      </div>
    </section>

    <section class="container max-w-7xl mx-auto px-6 py-24 mt-20">
      <div
        class="bg-primary/5 rounded-[4rem] p-10 md:p-20 border border-primary/10 relative overflow-hidden"
      >
        <div class="absolute bottom-0 right-0 opacity-10">
          <Zap class="w-96 h-96 text-primary" />
        </div>

        <div class="relative z-10">
          <h2 class="text-4xl font-black mb-16 text-center md:text-right">
            فرآیند همکاری ما
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div
              v-for="(step, index) in steps"
              :key="index"
              class="relative group"
            >
              <div
                class="text-6xl font-black text-primary/10 mb-4 group-hover:text-primary/30 transition-colors"
              >
                ۰{{ index + 1 }}
              </div>
              <h4 class="text-xl font-bold mb-2">{{ step.title }}</h4>
              <p class="text-muted-foreground text-sm leading-relaxed">
                {{ step.desc }}
              </p>
              <div
                v-if="index < 3"
                class="hidden md:block absolute top-8 left-[-20%] w-1/2 h-px bg-border"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="container max-w-5xl mx-auto px-6 py-20 text-center">
      <div class="space-y-8">
        <h2 class="text-4xl md:text-5xl font-black">
          آماده‌اید تا ایده خود را <span class="text-primary">واقعی</span> کنید؟
        </h2>
        <p class="text-muted-foreground text-lg">
          همین امروز با کارشناسان ما تماس بگیرید و مشاوره رایگان دریافت کنید.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            class="rounded-full px-10 h-14 text-lg font-bold shadow-2xl shadow-primary/20"
            >شروع پروژه جدید</Button
          >
          <Button
            size="lg"
            variant="outline"
            class="rounded-full px-10 h-14 text-lg font-bold"
            >دریافت پروپوزال</Button
          >
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
section {
  animation: fadeIn 0.8s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
