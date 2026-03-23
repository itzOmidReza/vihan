<script setup lang="ts">
import { ref, computed } from "vue";
import {
  ExternalLink,
  ArrowUpLeft,
  Code2,
  Cpu,
  Globe,
  Layout,
  Search,
} from "lucide-vue-next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const categories = ["همه", "هوش مصنوعی", "وب", "اپلیکیشن", "داشبورد"];
const activeCategory = ref("همه");
const searchQuery = ref("");

const projects = ref<Project[]>([
  // --- دسته بندی: هوش مصنوعی (AI) ---
  {
    id: 1,
    title: "تحلیلگر هوشمند بازارهای مالی",
    category: "هوش مصنوعی",
    description:
      "پلتفرم پیش‌بینی نوسانات ارزهای دیجیتال با استفاده از شبکه‌های عصبی عمیق و پردازش داده‌های لحظه‌ای.",
    // image:
    //   "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2000&auto=format&fit=crop",
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
  // --- دسته بندی: اپلیکیشن (Mobile/App) ---
  {
    id: 6,
    title: "سوپر اپلیکیشن خدمات شهری",
    category: "اپلیکیشن",
    description:
      "یک اپلیکیشن واحد برای پرداخت‌های شهری، رزرو پارکینگ و پیگیری درخواست‌های شهرداری.",
    // image:
    //   "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2000&auto=format&fit=crop",
    image: "/images/projects/photo-6.avif",
    tags: ["Capacitor", "Vue 3", "Node.js"],
    link: "#",
  },
  {
    id: 7,
    title: "پلتفرم سلامت و تناسب اندام",
    category: "اپلیکیشن",
    description:
      "اپلیکیشن مربی هوشمند با قابلیت آنالیز حرکات ورزشی از طریق دوربین گوشی.",
    // image:
    //   "https://images.unsplash.com/photo-1510017803434-a899398421b3?q=80&w=2000&auto=format&fit=crop",
    image: "/images/projects/photo-5.avif",
    tags: ["MediaPipe", "TypeScript", "PWA"],
    link: "#",
  },
  {
    id: 8,
    title: "شبکه اجتماعی متخصصین هنر",
    category: "اپلیکیشن",
    description:
      "فضایی برای اشتراک‌گذاری آثار هنری با رعایت کپی‌رایت از طریق بلاک‌چین.",
    // image:
    //   "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=2000&auto=format&fit=crop",
    image: "/images/projects/photo-7.avif",
    tags: ["Web3", "Solidity", "Vue 3"],
    link: "#",
  },
  {
    id: 9,
    title: "پنل مدیریت فروشگاه های زنجیره ای",
    category: "داشبورد",
    description:
      "مدیریت یکپارچه انبارداری، حسابداری و فروش بیش از ۵۰ شعبه به صورت متمرکز.",
    // image:
    //   "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
    image: "/images/projects/photo-4.avif",
    tags: ["Nuxt 4", "SQL Server", "Excel Export"],
    link: "#",
  },
]);

const filteredProjects = computed(() => {
  return projects.value.filter((project) => {
    const matchesCategory =
      activeCategory.value === "همه" ||
      project.category === activeCategory.value;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      project.description
        .toLowerCase()
        .includes(searchQuery.value.toLowerCase());
    return matchesCategory && matchesSearch;
  });
});
</script>

<template>
  <div class="min-h-screen bg-background pb-20" dir="rtl">
    <!-- header -->
    <section
      class="relative pt-32 pb-20 overflow-hidden border-b border-border/50"
    >
      <div class="absolute inset-0 bg-primary/5 -z-10"></div>
      <div class="container max-w-7xl mx-auto px-6 text-center">
        <h1 class="text-5xl md:text-7xl font-black tracking-tighter mb-6">
          ویترین <span class="text-primary">خلاقیت</span> و تخصص
        </h1>
        <p
          class="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed"
        >
          مجموعه‌ای از پروژه‌های شاخص ما در حوزه‌های هوش مصنوعی، توسعه وب و
          اپلیکیشن‌های پیشرفته دسکتاپ.
        </p>
      </div>
    </section>
    <!-- search bar -->
    <section
      class="sticky top-20 z-30 py-6 bg-background/80 backdrop-blur-xl border-b border-border"
    >
      <div
        class="container max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div
          class="flex items-center gap-2 p-1.5 bg-secondary/50 rounded-2xl overflow-x-auto w-full md:w-auto no-scrollbar"
        >
          <button
            v-for="cat in categories"
            :key="cat"
            @click="activeCategory = cat"
            :class="[
              'px-6 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap',
              activeCategory === cat
                ? 'bg-primary text-primary-foreground shadow-lg'
                : 'hover:bg-background/50 text-muted-foreground',
            ]"
          >
            {{ cat }}
          </button>
        </div>

        <div class="relative w-full md:w-80 group" dir="rtl">
          <Search
            class="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors z-10"
          />

          <Input
            v-model="searchQuery"
            placeholder="جستجو در پروژه‌ها..."
            class="h-12 w-full pr-12 pl-4 rounded-2xl bg-secondary/30 border-none focus-visible:ring-2 focus-visible:ring-primary transition-all placeholder:text-muted-foreground/50"
          />

          <button
            v-if="searchQuery"
            @click="searchQuery = ''"
            class="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-1"
          >
            <span class="text-xs">✕</span>
          </button>
        </div>
      </div>
    </section>
    <!-- projects list -->
    <section class="container max-w-7xl mx-auto px-6 py-16">
      <div
        v-if="filteredProjects.length > 0"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <transition-group name="list">
          <div
            v-for="project in filteredProjects"
            :key="project.id"
            class="group relative bg-card rounded-[2.5rem] border border-border/50 overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
          >
            <div class="relative aspect-[4/3] overflow-hidden">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8"
              >
                <Button class="w-full rounded-2xl gap-2 font-bold shadow-2xl">
                  مشاهده جزئیات
                  <ExternalLink class="w-4 h-4" />
                </Button>
              </div>
              <Badge
                class="absolute top-6 right-6 bg-background/80 backdrop-blur-md text-foreground font-bold"
              >
                {{ project.category }}
              </Badge>
            </div>

            <div class="p-8">
              <div class="flex items-center gap-3 mb-4">
                <div class="p-2 rounded-lg bg-primary/10 text-primary">
                  <component
                    :is="
                      project.category === 'هوش مصنوعی'
                        ? Cpu
                        : project.category === 'وب'
                          ? Globe
                          : Layout
                    "
                    class="w-5 h-5"
                  />
                </div>
                <h3
                  class="text-xl font-black text-foreground group-hover:text-primary transition-colors"
                >
                  {{ project.title }}
                </h3>
              </div>

              <p
                class="text-muted-foreground leading-relaxed line-clamp-3 mb-6 text-sm"
              >
                {{ project.description }}
              </p>

              <div class="flex flex-wrap gap-2 pt-6 border-t border-border/50">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="text-[10px] font-bold uppercase tracking-wider text-muted-foreground bg-secondary px-3 py-1 rounded-full"
                >
                  #{{ tag }}
                </span>
              </div>
            </div>
          </div>
        </transition-group>
      </div>

      <div
        v-else
        class="text-center py-40 bg-secondary/20 rounded-[3rem] border-2 border-dashed border-border"
      >
        <div
          class="bg-background w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl"
        >
          <Search class="w-10 h-10 text-muted-foreground opacity-20" />
        </div>
        <h3 class="text-2xl font-bold text-foreground mb-2">
          نتیجه‌ای یافت نشد
        </h3>
        <p class="text-muted-foreground">
          با تغییر کلمات جستجو یا دسته‌بندی دوباره امتحان کنید.
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
input.file\:text-foreground.selection\:bg-primary.selection\:text-primary-foreground.dark\:bg-input\/30.border-input.min-w-0.border.px-3.py-1.text-base.shadow-xs.outline-none.file\:inline-flex.file\:h-7.file\:border-0.file\:bg-transparent.file\:text-sm.file\:font-medium.disabled\:pointer-events-none.disabled\:cursor-not-allowed.disabled\:opacity-50.md\:text-sm.focus-visible\:border-ring.aria-invalid\:ring-destructive\/20.dark\:aria-invalid\:ring-destructive\/40.aria-invalid\:border-destructive.h-12.w-full.pr-12.pl-4.rounded-2xl.bg-secondary\/30.border-none.focus-visible\:ring-2.focus-visible\:ring-primary.transition-all.placeholder\:text-muted-foreground\/50 {
  padding-right: 48px;
}
</style>
