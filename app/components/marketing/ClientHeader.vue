<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";
import {
  Menu,
  PhoneCall,
  ArrowLeft,
  Home,
  Briefcase,
  MessageSquare,
  Info,
  Layers,
  Instagram,
  Linkedin,
  Twitter,
  X,
} from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

// ۱. ساختار بهینه برای منو
const menuItems = [
  { title: "صفحه اصلی", href: "/", icon: Home },
  { title: "سرویس‌ها", href: "/services", icon: Layers },
  { title: "پروژه‌ها", href: "/projects", icon: Briefcase },
  { title: "درباره ما", href: "/about-us", icon: Info },
  { title: "تماس با ما", href: "/contact-us", icon: MessageSquare },
];

// تابعی که بر اساس href فعال بودن را بررسی می‌کند
const route = useRoute();

const isActive = (href: string) => {
  // root needs exact match, others can be prefix
  return href === "/" ? route.path === "/" : route.path.startsWith(href);
};

// ۲. ساختار بهینه برای شبکه‌های اجتماعی (رفع خطای TypeScript Key)
const socialLinks = [
  { id: "instagram", icon: Instagram, href: "#" },
  { id: "linkedin", icon: Linkedin, href: "#" },
  { id: "twitter", icon: Twitter, href: "#" },
];

// ۳. مدیریت اسکرول به روش استاندارد Nuxt 3
const isScrolled = ref(false);
const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 py-4',
      isScrolled ? 'md:py-2' : 'md:py-6',
    ]"
  >
    <div
      :class="[
        'max-w-7xl mx-auto rounded-3xl md:rounded-full transition-all duration-500 flex items-center justify-between px-6 py-3 border',
        isScrolled
          ? 'bg-background/70 backdrop-blur-xl border-border/50 shadow-[0_8px_32px_rgba(0,0,0,0.1)]'
          : 'bg-transparent border-transparent',
      ]"
    >
      <div class="hidden lg:flex items-center gap-4">
        <!-- cta -->
        <SharedModeToggle />
        <a href="tel:+989223649782">
          <Button
            class="rounded-full px-6 gap-2 group shadow-xl shadow-primary/20 hover:scale-105 transition-all font-bold cursor-pointer"
          >
            مشاوره رایگان
            <PhoneCall
              class="w-4 h-4 group-hover:rotate-12 transition-transform"
            />
          </Button>
        </a>
      </div>
      <!-- menu -->
      <div class="hidden lg:flex items-center gap-10" dir="rtl">
        <SharedLogo class="h-8 w-auto" />
        <ul class="flex items-center gap-8">
          <li v-for="item in menuItems" :key="item.title">
            <NuxtLink
              :to="item.href"
              class="text-sm font-bold text-muted-foreground transition-all relative group flex gap-2"
              :class="{
                'text-primary': isActive(item.href), // رنگ فعال
                'hover:text-primary': !isActive(item.href), // hover در غیرفعال بودن
              }"
            >
              <component :is="item.icon" class="w-5 h-5" />
              {{ item.title }}
              <span
                class="absolute -bottom-1 right-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"
              ></span>
            </NuxtLink>
          </li>
        </ul>
      </div>

      <!-- mobile menu -->
      <div class="lg:hidden flex items-center justify-between w-full" dir="rtl">
        <SharedLogo />

        <div class="flex items-center gap-3">
          <SharedModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                class="rounded-2xl border-primary/20 bg-primary/5"
              >
                <Menu class="w-6 h-6 text-primary" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              class="w-full sm:w-100 border-l border-border/50 bg-background/95 backdrop-blur-2xl p-0 overflow-hidden flex flex-col"
            >
              <div
                class="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-[80px]"
              ></div>

              <div class="relative h-full flex flex-col p-8 z-10" dir="rtl">
                <SheetHeader class="text-right mb-10">
                  <div class="flex justify-between items-center">
                    <SharedLogo />
                    <SheetClose
                      class="rounded-xl p-2 hover:bg-secondary transition-colors text-muted-foreground"
                    >
                      <X class="w-6 h-6" />
                    </SheetClose>
                  </div>
                </SheetHeader>

                <div
                  class="flex flex-col gap-3 flex-1 overflow-y-auto no-scrollbar"
                >
                  <p
                    class="text-[10px] font-black uppercase tracking-[3px] text-primary/60 mb-2 pr-2"
                  >
                    دسترسی سریع
                  </p>

                  <SheetClose
                    as-child
                    v-for="item in menuItems"
                    :key="item.title"
                  >
                    <NuxtLink
                      :to="item.href"
                      class="flex items-center justify-between p-5 rounded-3xl bg-secondary/30 border border-border/40 hover:border-primary/40 hover:bg-primary/5 transition-all group"
                    >
                      <div class="flex items-center gap-4">
                        <div
                          class="p-2.5 rounded-xl bg-background border border-border group-hover:bg-primary group-hover:text-white transition-all duration-500"
                        >
                          <component :is="item.icon" class="w-5 h-5" />
                        </div>
                        <span class="font-black text-lg">{{ item.title }}</span>
                      </div>
                      <ArrowLeft
                        class="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-primary"
                      />
                    </NuxtLink>
                  </SheetClose>
                </div>

                <div
                  class="mt-auto pt-6 border-t border-border/40 flex items-center justify-between"
                >
                  <span
                    class="text-[10px] font-black text-muted-foreground uppercase tracking-widest"
                    >مارا در شبکه های اجتماعی پیدا کنید</span
                  >
                  <div class="flex gap-2.5">
                    <a
                      v-for="social in socialLinks"
                      :key="social.id"
                      :href="social.href"
                      class="p-2.5 rounded-xl bg-secondary/50 hover:bg-primary/10 hover:text-primary transition-all border border-border/40"
                    >
                      <component :is="social.icon" class="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* خط زیر فقط برای آیتم فعال */
.active::after {
  content: "";
}
</style>
