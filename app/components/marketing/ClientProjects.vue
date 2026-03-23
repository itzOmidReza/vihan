<script setup lang="ts">
import { ref } from "vue";
import {
  ExternalLink,
  Layers,
  ChevronRight,
  ChevronLeft,
  ArrowLeft,
  Briefcase,
} from "lucide-vue-next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  category: string;
}

const containerRef = ref(null);

const projects = ref<Project[]>([
  {
    id: 1,
    title: "تحلیلگر هوشمند بازارهای مالی",
    category: "هوش مصنوعی",
    description:
      "پلتفرم پیش‌بینی نوسانات ارزهای دیجیتال با استفاده از شبکه‌های عصبی عمیق و پردازش داده‌های لحظه‌ای.",
    // image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2000&auto=format&fit=crop",
    image: "/images/projects/photo-4.avif",
    tags: ["TensorFlow", "Python", "Nuxt 4"],
    link: "#",
  },
  {
    id: 2,
    title: "سیستم تشخیص ناهنجاری صنعتی",
    category: "هوش مصنوعی",
    description:
      "کنترل کیفیت خودکار خط تولید کارخانجات با استفاده از بینایی ماشین و تشخیص عیوب قطعات در میلی‌ثانیه.",
    // image:
    //   "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop",
    image: "/images/projects/photo-8.avif",
    tags: ["OpenCV", "PyTorch", "Vue 3"],
    link: "#",
  },
  {
    id: 3,
    title: "دستیار صوتی هوشمند سازمانی",
    category: "هوش مصنوعی",
    description:
      "بات هوشمند پاسخگویی صوتی با قابلیت درک لهجه‌های مختلف و اتصال به CRM داخلی شرکت.",
    // image:
    //   "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=2000&auto=format&fit=crop",
    image: "/images/projects/photo-2.avif",
    tags: ["NLP", "FastAPI", "WebSpeech"],
    link: "#",
  },

  // --- دسته بندی: وب (Web) ---
  {
    id: 4,
    title: "پلتفرم جامع املاک مدرن",
    category: "وب",
    description:
      "سامانه جستجوی ملک با قابلیت تور مجازی ۳۶۰ درجه و نقشه‌های حرارتی قیمت مسکن در مناطق مختلف.",
    // image:
    //   "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2000&auto=format&fit=crop",
    image: "/images/projects/photo-1.avif",
    tags: ["Three.js", "Nuxt 4", "Mapbox"],
    link: "#",
  },
  {
    id: 5,
    title: "آکادمی آنلاین آموزش برنامه نویسی",
    category: "وب",
    description:
      "سیستم مدیریت یادگیری (LMS) با قابلیت اجرای کد در مرورگر و سیستم منتورینگ زنده.",
    // image:
    //   "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2000&auto=format&fit=crop",
    image: "/images/projects/photo-10.png",
    tags: ["WebContainers", "Firebase", "Vue 3"],
    link: "#",
  },
]);
const swiper = useSwiper(containerRef, {
  loop: true,
  slidesPerView: 1.2,
  centeredSlides: true,
  spaceBetween: 20,
  autoplay: {
    delay: 5000,
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    768: { slidesPerView: 1.8, spaceBetween: 30 },
    1024: { slidesPerView: 2.2, spaceBetween: 40 },
  },
});
</script>

<template>
  <section
    class="w-full py-24 bg-background overflow-hidden relative"
    dir="rtl"
  >
    <div id="projects" class="max-w-7xl mx-auto px-6">
      <div class="relative z-10 flex flex-col items-center mb-20 text-center">
        <div
          class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6 transition-transform hover:scale-105"
        >
          <Briefcase class="w-4 h-4 text-primary" />
          <span
            class="text-primary font-black text-xs uppercase tracking-widest"
            >نمونه کارهای برتر</span
          >
        </div>

        <h2
          class="text-4xl md:text-6xl font-black tracking-tighter text-foreground mb-4"
        >
          آخرین پروژه‌های <span class="text-primary">ما</span>
        </h2>
        <div
          class="h-1.5 w-24 bg-linear-to-r from-transparent via-primary to-transparent rounded-full opacity-50"
        ></div>

        <div
          class="absolute -top-10 left-1/2 -translate-x-1/2 w-80 h-80 bg-primary/10 rounded-full blur-[100px] -z-10"
        ></div>
      </div>

      <ClientOnly>
        <swiper-container
          ref="containerRef"
          :init="false"
          class="overflow-visible py-10!"
        >
          <swiper-slide
            v-for="project in projects"
            :key="project.id"
            class="transition-all duration-700"
          >
            <Card
              class="py-0! group overflow-hidden border-border/50 bg-card/50 backdrop-blur-xl rounded-[3rem] transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
            >
              <CardContent class="p-0">
                <div class="relative aspect-16/10 overflow-hidden">
                  <img
                    :src="project.image"
                    :alt="project.title"
                    class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />

                  <div
                    class="absolute inset-0 bg-primary/20 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center"
                  >
                    <Button
                      size="lg"
                      class="rounded-full gap-2 font-bold shadow-2xl hover:scale-110 transition-transform"
                    >
                      <ExternalLink class="w-5 h-5" />
                      مشاهده زنده پروژه
                    </Button>
                  </div>

                  <div class="absolute top-6 right-6 flex gap-2">
                    <Badge
                      v-for="tag in project.tags"
                      :key="tag"
                      class="bg-background/80 backdrop-blur-md border-border text-foreground text-[10px] font-bold py-1 px-3"
                    >
                      {{ tag }}
                    </Badge>
                  </div>
                </div>

                <div class="p-10">
                  <div class="flex justify-between items-start mb-6">
                    <h3
                      class="text-2xl md:text-3xl font-black text-foreground group-hover:text-primary transition-colors"
                    >
                      {{ project.title }}
                    </h3>
                    <div
                      class="p-3 bg-secondary rounded-2xl group-hover:bg-primary/10 group-hover:rotate-12 transition-all"
                    >
                      <Layers class="text-primary w-6 h-6" />
                    </div>
                  </div>

                  <p
                    class="text-muted-foreground leading-relaxed text-base md:text-lg mb-10 line-clamp-2"
                  >
                    {{ project.description }}
                  </p>

                  <div
                    class="flex items-center justify-between pt-8 border-t border-border/50"
                  >
                    <div
                      class="flex items-center gap-3 text-primary font-black cursor-pointer group/link hover:opacity-80 transition-opacity"
                    >
                      <span class="text-sm md:text-base">بررسی جزئیات فنی</span>
                      <div
                        class="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center group-hover/link:bg-primary group-hover/link:text-white transition-all"
                      >
                        <ArrowLeft
                          class="w-5 h-5 rotate-45 group-hover:rotate-0 transition-transform"
                        />
                      </div>
                    </div>

                    <div class="flex -space-x-3 space-x-reverse">
                      <div
                        v-for="i in 3"
                        :key="i"
                        class="w-10 h-10 rounded-full border-2 border-background bg-secondary flex items-center justify-center overflow-hidden ring-2 ring-primary/5"
                      >
                        <img
                          :src="`https://i.pravatar.cc/100?u=${project.id}-${i}`"
                          alt="Team member"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </swiper-slide>
        </swiper-container>
      </ClientOnly>

      <div class="flex gap-6 justify-center mt-12">
        <Button
          variant="outline"
          size="icon"
          class="w-14 h-14 rounded-full border-border bg-card hover:bg-primary hover:text-white transition-all shadow-xl shadow-black/5"
          @click="swiper.next()"
        >
          <ChevronRight class="h-6 w-6" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          class="w-14 h-14 rounded-full border-border bg-card hover:bg-primary hover:text-white transition-all shadow-xl shadow-black/5"
          @click="swiper.prev()"
        >
          <ChevronLeft class="h-6 w-6" />
        </Button>
      </div>
    </div>
  </section>
</template>

<style scoped>
swiper-container {
  overflow: visible !important;
}

/* افکت کارت‌های کناری برای ایجاد عمق */
swiper-slide {
  transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
  filter: grayscale(0.5) blur(1px);
  opacity: 0.5;
  transform: scale(0.9);
}

swiper-slide.swiper-slide-active {
  filter: grayscale(0) blur(0);
  opacity: 1;
  transform: scale(1);
}

@media (max-width: 768px) {
  swiper-slide {
    transform: scale(0.95);
  }
}
</style>
