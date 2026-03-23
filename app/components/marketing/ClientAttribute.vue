<script setup lang="ts">
import {
  ChartLine,
  ChevronRight,
  ChevronLeft,
  Bot,
  Zap,
  ShieldCheck,
  Layers,
  ArrowLeft,
} from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const containerRef = ref(null);

const slides = [
  {
    title: "هوش مصنوعی مولد",
    description:
      "بهره‌گیری از مدل‌های GPT و LLM برای اتوماسیون پاسخگویی و تولید محتوای هوشمند.",
    icon: Bot,
    color: "text-blue-500",
    glow: "group-hover:shadow-blue-500/10",
  },
  {
    title: "آنالیز پیش‌بینی‌کننده",
    description:
      "استخراج الگوهای پنهان از داده‌ها برای پیش‌بینی رفتار مشتریان و روند بازار.",
    icon: ChartLine,
    color: "text-emerald-500",
    glow: "group-hover:shadow-emerald-500/10",
  },
  {
    title: "زیرساخت ابری",
    description:
      "توسعه نرم‌افزارهای مقیاس‌پذیر روی بستر Cloud با امنیت و پایداری تضمین شده.",
    icon: Layers,
    color: "text-purple-500",
    glow: "group-hover:shadow-purple-500/10",
  },
  {
    title: "امنیت سایبری ای‌آی",
    description:
      "محافظت هوشمند از داده‌ها در برابر تهدیدات نوین با استفاده از سپرهای دفاعی AI.",
    icon: ShieldCheck,
    color: "text-red-500",
    glow: "group-hover:shadow-red-500/10",
  },
  {
    title: "اتوماسیون هوشمند",
    description:
      "جایگزینی فرآیندهای تکراری با ربات‌های نرم‌افزاری جهت افزایش سرعت عملکرد.",
    icon: Zap,
    color: "text-cyan-500",
    glow: "group-hover:shadow-cyan-500/10",
  },
];

const swiper = useSwiper(containerRef, {
  centeredSlides: false,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: { slidesPerView: 1.1, spaceBetween: 16 },
    768: { slidesPerView: 2.3, spaceBetween: 24 },
    1024: { slidesPerView: 3, spaceBetween: 30 },
  },
});
</script>

<template>
  <section
    class="w-full py-24 relative overflow-hidden bg-background transition-colors duration-500"
    dir="rtl"
  >
    <div
      class="absolute top-1/4 -right-20 w-125 h-125 bg-primary/5 rounded-full blur-[120px] -z-10"
    ></div>
    <div
      class="absolute bottom-1/4 -left-20 w-100 h-100 bg-blue-500/5 rounded-full blur-[100px] -z-10"
    ></div>

    <div class="max-w-7xl mx-auto px-6">
      <div
        class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
      >
        <div class="space-y-4">
          <div class="flex items-center gap-3">
            <div class="h-1.5 w-12 bg-primary rounded-full"></div>
            <span
              class="text-primary font-bold tracking-[0.2em] text-xs md:text-sm uppercase"
              >Advanced Ecosystem</span
            >
          </div>
          <h2
            class="text-4xl md:text-5xl font-black leading-tight tracking-tight text-foreground"
          >
            کامل‌ترین اکوسیستم <br />
            <span class="text-muted-foreground font-light"
              >هوشمندساز کسب‌وکار</span
            >
          </h2>
        </div>

        <div class="flex gap-4">
          <Button
            variant="outline"
            size="icon"
            class="w-14 h-14 rounded-2xl border-border bg-card/50 hover:bg-primary hover:text-white transition-all duration-300 shadow-xl shadow-black/5 cursor-pointer"
            @click="swiper.next()"
          >
            <ChevronRight class="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            class="w-14 h-14 rounded-2xl border-border bg-card/50 hover:bg-primary hover:text-white transition-all duration-300 shadow-xl shadow-black/5 cursor-pointer"
            @click="swiper.prev()"
          >
            <ChevronLeft class="h-6 w-6" />
          </Button>
        </div>
      </div>

      <ClientOnly>
        <swiper-container
          ref="containerRef"
          :init="false"
          class="overflow-visible"
        >
          <swiper-slide
            v-for="(slide, idx) in slides"
            :key="idx"
            class="h-auto pb-12"
          >
            <Card
              :class="[
                'group relative h-full border-border/50 bg-card/40 backdrop-blur-md transition-all duration-500',
                'hover:-translate-y-3 hover:border-primary/30 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]',
                slide.glow,
                'rounded-[2.5rem] overflow-hidden',
              ]"
            >
              <div
                class="absolute -top-12 -left-12 w-32 h-32 bg-primary/5 rounded-full group-hover:bg-primary/10 transition-colors duration-500 blur-2xl"
              ></div>

              <CardContent
                class="p-10 flex flex-col gap-8 relative z-10 h-full"
              >
                <div
                  class="p-5 rounded-3xl bg-secondary/50 dark:bg-secondary/40 w-fit group-hover:bg-primary group-hover:scale-110 transition-all duration-500 shadow-inner"
                >
                  <component
                    :is="slide.icon"
                    :class="[
                      'w-10 h-10 transition-colors duration-500 dark:group:hover:text-foreground',
                      'group-hover:text-primary-foreground ',
                      slide.color,
                    ]"
                  />
                </div>

                <div class="space-y-4 grow">
                  <h4
                    class="font-black text-2xl group-hover:text-primary transition-colors duration-300"
                  >
                    {{ slide.title }}
                  </h4>
                  <p class="text-muted-foreground leading-relaxed text-base">
                    {{ slide.description }}
                  </p>
                </div>

                <div
                  class="pt-6 flex items-center justify-between border-t border-border/50 mt-auto"
                >
                  <span
                    class="text-sm font-bold text-foreground/50 group-hover:text-primary transition-colors"
                    >کاوش در تکنولوژی</span
                  >
                  <div
                    class="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500"
                  >
                    <ArrowLeft
                      class="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </swiper-slide>
        </swiper-container>
      </ClientOnly>
    </div>
  </section>
</template>

<style scoped>
/* اسلایدر از باکس کات نشود */
swiper-container::part(container) {
  overflow: visible;
}

swiper-slide {
  height: auto;
}

/* برای صاف‌تر شدن انیمیشن‌ها در مانیتورهای High Refresh Rate */
.group {
  backface-visibility: hidden;
  transform: translateZ(0);
}
</style>
