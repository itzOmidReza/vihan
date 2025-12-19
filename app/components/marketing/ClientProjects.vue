<script setup lang="ts">
import { ref, onMounted } from "vue";
import {
  ExternalLink,
  Github,
  Layers,
  ChevronRight,
  ChevronLeft,
  Search,
} from "lucide-vue-next";

// Define the structure for your project
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const containerRef = ref(null);

// Your Project Data
const projects = ref<Project[]>([
  {
    id: 1,
    title: "پلتفرم هوشمند مدیریت مالی",
    description:
      "یک سیستم جامع برای مانیتورینگ تراکنش‌های بانکی و آنالیز بودجه با استفاده از هوش مصنوعی.",
    image: "https://picsum.photos/1920/1080", // Replace with your image path
    tags: ["Nuxt 4", "Tailwind", "PostgreSQL"],
    link: "#",
  },
  {
    id: 2,
    title: "اپلیکیشن رزرو آنلاین سلامت",
    description:
      "طراحی و توسعه رابط کاربری مدرن برای سیستم نوبت‌دهی پزشکان و پرونده‌های الکترونیک.",
    image: "https://picsum.photos/1920/1080",
    tags: ["Vue 3", "Shadcn UI", "TypeScript"],
    link: "#",
  },
  {
    id: 3,
    title: "داشبورد اختصاصی مدیریت محتوا",
    description:
      "پنل پیشرفته برای مدیریت فروشگاه‌های اینترنتی با قابلیت گزارش‌گیری لحظه‌ای.",
    image: "https://picsum.photos/1920/1080",
    tags: ["Nuxt 4", "Pinia", "Lucide"],
    link: "#",
  },
]);

// Swiper Configuration
const swiper = useSwiper(containerRef, {
//   dir: "rtl",
  loop: true,
  slidesPerView: 1.1,
  centeredSlides: true,
  spaceBetween: 20,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    // Mobile to Tablet
    640: {
      slidesPerView: 1.5,
      spaceBetween: 25,
    },
    // Desktop
    1024: {
      slidesPerView: 2.5,
      spaceBetween: 30,
      centeredSlides: false,
    },
  },
});

onMounted(() => {
  // Optional: You can access swiper instance if you need custom events
  if (swiper.instance) {
    console.log("Swiper is ready!");
  }
});
</script>

<template>
  <!-- title -->
  <section
    class="mt-20 bg-[#111111] text-white rounded-2xl p-3 overflow-hidden relative"
    dir="rtl"
  >
    <div class="flex items-center justify-center gap-2 my-10">
      <img src="/images/icon/rSide.png" alt="" />
      <h3 class="font-medium text-4xl">حسناقهرمانی</h3>
      <img src="/images/icon/lSide.png" alt="" />
    </div>
    <SharedCircle class="absolute -top-10 right-1/2 translate-x-1/2" />
    <!-- slide -->
    <ClientOnly>
      <swiper-container ref="containerRef" :init="false" dir="rtl" class="pb-5">
        <swiper-slide v-for="project in projects" :key="project.id">
          <Card
            class="group overflow-hidden border-none bg-[#F6F6F6] rounded-4xl transition-all duration-500 hover:shadow-xl"
          >
            <CardContent class="p-0">
              <div class="relative aspect-video overflow-hidden">
                <img
                  :src="project.image"
                  :alt="project.title"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  class="absolute inset-0 bg-liner-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6"
                >
                  <div class="flex gap-2">
                    <Button size="sm" variant="secondary" class="rounded-full">
                      <ExternalLink class="w-4 h-4 ml-2" />
                      مشاهده پروژه
                    </Button>
                  </div>
                </div>
              </div>

              <div class="p-8 text-right" dir="rtl">
                <div class="flex flex-wrap gap-2 mb-4">
                  <Badge
                    v-for="tag in project.tags"
                    :key="tag"
                    variant="secondary"
                    class="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors rounded-lg px-3"
                  >
                    {{ tag }}
                  </Badge>
                </div>

                <h3
                  class="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors"
                >
                  {{ project.title }}
                </h3>

                <p class="text-gray-500 leading-7 text-sm line-clamp-2">
                  {{ project.description }}
                </p>

                <div
                  class="mt-6 pt-6 border-t border-gray-200 flex justify-between items-center"
                >
                  <div
                    class="flex items-center text-primary font-semibold gap-1 cursor-pointer group/link"
                  >
                    <span>جزئیات بیشتر</span>
                    <ChevronLeft
                      class="w-4 h-4 transition-transform group-hover/link:-translate-x-1"
                    />
                  </div>
                  <Layers class="text-gray-300 w-5 h-5" />
                </div>
              </div>
            </CardContent>
          </Card>
        </swiper-slide>
      </swiper-container>
    </ClientOnly>

    <div class="flex gap-4 justify-center">
      <Button variant="outline" size="icon" @click="swiper.prev()">
        <ChevronRight class="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon" @click="swiper.next()">
        <ChevronLeft class="h-4 w-4" />
      </Button>
    </div>
  </section>
</template>
<style scoped>
    
.text-card-foreground.flex.flex-col.gap-6.border.py-6.shadow-sm.group.overflow-hidden.border-none.bg-\[\#F6F6F6\].rounded-4xl.transition-all.duration-500.hover\:shadow-xl {
  padding: 0;
}
</style>
