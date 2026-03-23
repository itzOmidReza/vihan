<script setup lang="ts">
import { Quote, ChevronRight, ChevronLeft, Star } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const containerRef = ref(null);

const slides = [
  {
    name: "مهناز درخشان",
    position: "مدیر عامل ویراموتور",
    description:
      "همکاری با این تیم تجربه فوق‌العاده‌ای بود. ابزارهای هوش مصنوعی آن‌ها دقیقاً همان چیزی بود که برای بهینه‌سازی فروش به آن نیاز داشتیم.",
    image: "https://i.pravatar.cc/150?u=mahnaz",
  },
  {
    name: "علیرضا سلیمی",
    position: "مدیر فنی آریا‌تک",
    description:
      "پشتیبانی عالی و دانش فنی بالا. پلتفرم آن‌ها به ما کمک کرد تا فرآیندهای تکراری را حذف کنیم و روی خلاقیت تمرکز کنیم.",
    image: "https://i.pravatar.cc/150?u=alireza",
  },
  {
    name: "سارا احمدی",
    position: "بنیان‌گذار استارتاپ نوآ",
    description:
      "سرعت و امنیت زیرساخت‌های ارائه شده فراتر از انتظار ما بود. تیمی که واقعاً دغدغه رشد کسب‌وکار شما را دارد.",
    image: "https://i.pravatar.cc/150?u=sara",
  },
  {
    name: "رضا محمدی",
    position: "مدیر دپارتمان IT پیشرو",
    description:
      "راهکارهای هوشمندسازی این شرکت باعث شد هزینه‌های عملیاتی ما تا ۳۰ درصد در سال اول کاهش پیدا کند.",
    image: "https://i.pravatar.cc/150?u=reza",
  },
];

const swiper = useSwiper(containerRef, {
  centeredSlides: false,
  loop: true,
  spaceBetween: 24,
  breakpoints: {
    640: { slidesPerView: 1.1 },
    768: { slidesPerView: 2.2 },
    1024: { slidesPerView: 3 },
  },
});
</script>

<template>
  <section
    class="w-full py-24 bg-background transition-colors duration-500"
    dir="rtl"
  >
    <div class="max-w-7xl mx-auto px-6">
      <div
        class="flex flex-col md:flex-row items-center justify-between mb-16 gap-6 text-center md:text-right"
      >
        <div class="space-y-4">
          <div class="flex items-center justify-center md:justify-start gap-3">
            <div class="w-10 h-1px bg-primary hidden md:block"></div>
            <span
              class="text-primary font-black text-sm tracking-widest uppercase"
              >صدای مشتریان</span
            >
          </div>
          <h2 class="text-3xl md:text-5xl font-black text-foreground">
            مشتریان درباره ما <span class="text-primary">چه می‌گویند؟</span>
          </h2>
        </div>

        <div class="flex gap-3">
          <Button
            variant="outline"
            size="icon"
            class="w-12 h-12 rounded-full border-border bg-card hover:bg-primary hover:text-white transition-all shadow-lg"
            @click="swiper.next()"
          >
            <ChevronRight class="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            class="w-12 h-12 rounded-full border-border bg-card hover:bg-primary hover:text-white transition-all shadow-lg"
            @click="swiper.prev()"
          >
            <ChevronLeft class="h-5 w-5" />
          </Button>
        </div>
      </div>

      <ClientOnly>
        <swiper-container
          ref="containerRef"
          :init="false"
          class="pb-12 overflow-visible"
        >
          <swiper-slide
            v-for="(slide, idx) in slides"
            :key="idx"
            class="h-auto"
          >
            <Card
              class="h-full border-border/50 bg-secondary/20 dark:bg-card/40 backdrop-blur-md rounded-4xl transition-all duration-500 hover:-translate-y-2 group"
            >
              <CardContent class="p-8 flex flex-col h-full relative">
                <div class="flex justify-between items-start mb-8">
                  <div
                    class="p-3 bg-primary/10 rounded-2xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500"
                  >
                    <Quote class="w-6 h-6 fill-current" />
                  </div>
                  <div class="flex gap-0.5">
                    <Star
                      v-for="i in 5"
                      :key="i"
                      class="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  </div>
                </div>

                <p
                  class="text-foreground/80 leading-relaxed text-base md:text-lg mb-10 grow italic"
                >
                  “{{ slide.description }}”
                </p>

                <div
                  class="flex items-center gap-4 border-t border-border/50 pt-6"
                >
                  <Avatar
                    class="w-14 h-14 border-2 border-primary/20 ring-4 ring-background"
                  >
                    <!-- <AvatarImage :src="slide.image" /> -->
                    <AvatarFallback>{{ slide.name[0] }}</AvatarFallback>
                  </Avatar>
                  <div class="flex flex-col">
                    <h4
                      class="font-black text-lg text-foreground group-hover:text-primary transition-colors"
                    >
                      {{ slide.name }}
                    </h4>
                    <p class="text-muted-foreground text-sm font-medium">
                      {{ slide.position }}
                    </p>
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
swiper-container::part(container) {
  overflow: visible;
}
</style>
