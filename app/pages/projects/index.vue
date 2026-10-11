<!-- app/pages/projects/index.vue -->
<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  Search,
  ExternalLink,
  Cpu,
  Globe,
  PanelsTopLeft,
  Sparkles
} from '@lucide/vue'

import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'

interface Project {
  id: string
  title: string
  category: 'ai' | 'web' | 'app' | 'dashboard'
  categoryLabel: string
  description: string
  image: string
  tags: string[]
  icon: any
}

const activeCategory = ref<string>('all')
const searchQuery = ref<string>('')

const categories = [
  { id: 'all', label: 'همه' },
  { id: 'ai', label: 'هوش مصنوعی' },
  { id: 'web', label: 'وب' },
  { id: 'app', label: 'اپلیکیشن' },
  { id: 'dashboard', label: 'داشبورد' }
]

const projectsList: Project[] = [
  {
    id: 'ai-market-analyzer',
    title: 'تحلیلگر هوشمند بازارهای مالی',
    category: 'ai',
    categoryLabel: 'هوش مصنوعی',
    description: 'پلتفرم پیش‌بینی نوسانات ارزهای دیجیتال با استفاده از شبکه‌های عصبی عمیق و پردازش داده‌های لحظه‌ای.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2000&auto=format&fit=crop',
    tags: ['TensorFlow', 'Python', 'Nuxt 4'],
    icon: Cpu
  },
  {
    id: 'industrial-anomaly-detection',
    title: 'سیستم تشخیص ناهنجاری صنعتی',
    category: 'ai',
    categoryLabel: 'هوش مصنوعی',
    description: 'کنترل کیفیت خودکار خط تولید کارخانجات با استفاده از بینایی ماشین و تشخیص عیوب قطعات در میلی‌ثانیه.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop',
    tags: ['OpenCV', 'PyTorch', 'Vue 3'],
    icon: Cpu
  },
  {
    id: 'enterprise-voice-assistant',
    title: 'دستیار صوتی هوشمند سازمانی',
    category: 'ai',
    categoryLabel: 'هوش مصنوعی',
    description: 'بات هوشمند پاسخگویی صوتی با قابلیت درک لهجه‌های مختلف و اتصال به CRM داخلی شرکت.',
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=2000&auto=format&fit=crop',
    tags: ['NLP', 'FastAPI', 'WebSpeech'],
    icon: Cpu
  },
  {
    id: 'modern-real-estate-platform',
    title: 'پلتفرم جامع املاک مدرن',
    category: 'web',
    categoryLabel: 'وب',
    description: 'سامانه جستجوی ملک با قابلیت تور مجازی ۳۶۰ درجه و نقشه‌های حرارتی قیمت مسکن در مناطق مختلف.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2000&auto=format&fit=crop',
    tags: ['Three.js', 'Nuxt 4', 'Mapbox'],
    icon: Globe
  },
  {
    id: 'coding-academy-lms',
    title: 'آکادمی آنلاین آموزش برنامه نویسی',
    category: 'web',
    categoryLabel: 'وب',
    description: 'سیستم مدیریت یادگیری (LMS) با قابلیت اجرای کد در مرورگر و سیستم منتورینگ زنده.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2000&auto=format&fit=crop',
    tags: ['WebContainers', 'Firebase', 'Vue 3'],
    icon: Globe
  },
  {
    id: 'urban-services-superapp',
    title: 'سوپر اپلیکیشن خدمات شهری',
    category: 'app',
    categoryLabel: 'اپلیکیشن',
    description: 'یک اپلیکیشن واحد برای پرداخت‌های شهری، رزرو پارکینگ و پیگیری درخواست‌های شهرداری.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2000&auto=format&fit=crop',
    tags: ['Capacitor', 'Vue 3', 'Node.js'],
    icon: PanelsTopLeft
  },
  {
    id: 'smart-fitness-platform',
    title: 'پلتفرم سلامت و تناسب اندام',
    category: 'app',
    categoryLabel: 'اپلیکیشن',
    description: 'اپلیکیشن مربی هوشمند با قابلیت آنالیز حرکات ورزشی از طریق دوربین گوشی.',
    image: 'https://images.unsplash.com/photo-1510017803434-a899398421b3?q=80&w=2000&auto=format&fit=crop',
    tags: ['MediaPipe', 'TypeScript', 'PWA'],
    icon: PanelsTopLeft
  },
  {
    id: 'art-professionals-network',
    title: 'شبکه اجتماعی متخصصین هنر',
    category: 'app',
    categoryLabel: 'اپلیکیشن',
    description: 'فضایی برای اشتراک‌گذاری آثار هنری با رعایت کپی‌رایت از طریق بلاک‌چین.',
    image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=2000&auto=format&fit=crop',
    tags: ['Web3', 'Solidity', 'Vue 3'],
    icon: PanelsTopLeft
  },
  {
    id: 'chain-store-management-panel',
    title: 'پنل مدیریت فروشگاه های زنجیره ای',
    category: 'dashboard',
    categoryLabel: 'داشبورد',
    description: 'مدیریت یکپارچه انبارداری، حسابداری و فروش بیش از ۵۰ شعبه به صورت متمرکز.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop',
    tags: ['Nuxt 4', 'SQL Server', 'Excel Export'],
    icon: PanelsTopLeft
  }
]

const filteredProjects = computed(() => {
  return projectsList.filter((project) => {
    const matchesCategory =
      activeCategory.value === 'all' || project.category === activeCategory.value

    const query = searchQuery.value.trim().toLowerCase()
    const matchesSearch =
      !query ||
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.tags.some((tag) => tag.toLowerCase().includes(query))

    return matchesCategory && matchesSearch
  })
})
</script>

<template>
  <div class="w-full pb-32" dir="rtl">
    <!-- بخش معرفی و تیتر -->
    <header class="relative pt-24 md:pt-32 pb-16 border-b border-border/40 text-center">
      <div class="absolute inset-0 bg-primary/5 -z-10"></div>
      <div class="max-w-7xl mx-auto px-6 space-y-4">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
          <Sparkles class="h-3.5 w-3.5" />
          <span>پروژه‌ها و دستاوردها</span>
        </div>

        <h1 class="text-4xl md:text-6xl font-black tracking-tight text-foreground">
          ویترین <span class="text-primary">خلاقیت</span> و تخصص
        </h1>

        <p class="text-muted-foreground text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
          مجموعه‌ای از پروژه‌های شاخص ما در حوزه‌های هوش مصنوعی، توسعه وب و اپلیکیشن‌های پیشرفته دسکتاپ.
        </p>
      </div>
    </header>

    <!-- نوار فیلتر و جستجو -->
    <div class="sticky top-20 z-30 w-full bg-background/95 backdrop-blur-xl border-b border-border/50 py-4 mb-16 shadow-xs">
      <div class="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between gap-4">

        <!-- تب‌های دسته‌بندی -->
        <div class="flex items-center gap-2 p-1.5 bg-secondary/50 rounded-2xl overflow-x-auto">
          <button
            v-for="cat in categories"
            :key="cat.id"
            type="button"
            :class="[
              'px-5 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap cursor-pointer',
              activeCategory === cat.id
                ? 'bg-primary text-primary-foreground shadow-md'
                : 'hover:bg-background/50 text-muted-foreground'
            ]"
            @click="activeCategory = cat.id"
          >
            {{ cat.label }}
          </button>
        </div>

        <!-- باکس سرچ با پدینگ و موقعیت آیکون اصلاح‌شده -->
        <div style="width: 320px; max-width: 100%; position: relative;">
          <input
            v-model="searchQuery"
            type="text"
            dir="rtl"
            placeholder="جستجو در پروژه‌ها..."
            style="width: 100%; height: 48px; border-radius: 16px; padding: 0 44px 0 16px; font-size: 14px; text-align: right;"
            class="bg-secondary/40 border border-border/60 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
          />
          <Search
            class="w-4 h-4 text-muted-foreground pointer-events-none"
            style="position: absolute; right: 16px; top: 50%; transform: translateY(-50%);"
          />
        </div>

      </div>
    </div>

    <!-- گرید کارت‌های پروژه -->
    <main class="max-w-7xl mx-auto px-6">
      <div
        v-if="filteredProjects.length > 0"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="group relative bg-card rounded-[2.5rem] border border-border/50 overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
        >
          <!-- تصویر با نسبت ۴ به ۳ -->
          <div class="relative aspect-[4/3] overflow-hidden">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />

            <!-- دکمه مشاهده روی هاور -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
              <Button
                variant="default"
                class="w-full rounded-2xl gap-2 font-bold shadow-2xl h-9 px-4 py-2 cursor-pointer"
              >
                <span>مشاهده جزئیات</span>
                <ExternalLink class="w-4 h-4" />
              </Button>
            </div>

            <!-- بج روی تصویر -->
            <Badge class="absolute top-6 right-6 bg-background/80 backdrop-blur-md text-foreground font-bold border-none">
              {{ project.categoryLabel }}
            </Badge>
          </div>

          <!-- محتوای متنی کارت -->
          <div class="p-8 text-right">
            <div class="flex items-center gap-3 mb-4">
              <div class="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                <component :is="project.icon" class="w-5 h-5" />
              </div>
              <h3 class="text-xl font-black text-foreground group-hover:text-primary transition-colors">
                {{ project.title }}
              </h3>
            </div>

            <p class="text-muted-foreground leading-relaxed line-clamp-3 mb-6 text-sm">
              {{ project.description }}
            </p>

            <!-- تگ‌ها -->
            <div class="flex flex-wrap gap-2 pt-6 border-t border-border/50">
              <span
                v-for="(tag, tIdx) in project.tags"
                :key="tIdx"
                class="text-[10px] font-bold uppercase tracking-wider text-muted-foreground bg-secondary px-3 py-1 rounded-full dir-ltr"
              >
                #{{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
