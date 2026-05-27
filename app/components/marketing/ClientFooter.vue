<script setup lang="ts">
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Send,
  Cpu,
} from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const currentYear = new Date().getFullYear();

const footerLinks = {
  company: [
    { name: "درباره ما", href: "/about-us" },
    { name: "سرویس ها", href: "/services" },
    { name: "پروژه‌ها", href: "/projects" },
    { name: "تماس با ما", href: "/contact-us" },
  ],
  services: [
    { name: "هوش مصنوعی", href: "#" },
    { name: "توسعه نرم‌افزار", href: "#" },
    { name: "تحلیل داده", href: "#" },
    { name: "مشاوره تکنولوژی", href: "#" },
  ],
  legal: [
    { name: "قوانین و مقررات", href: "#" },
    { name: "حریم خصوصی", href: "#" },
  ],
};
</script>

<template>
  <footer
    class="mt-32 border-t border-border/40 bg-background relative overflow-hidden"
    dir="rtl"
  >
    <div
      class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-primary/50 to-transparent"
    ></div>

    <div class="container mx-auto px-6 py-16">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div class="lg:col-span-4 space-y-6">
          <div class="flex items-center gap-2">
            <SharedLogo />
          </div>
          <p class="text-muted-foreground leading-relaxed text-sm md:text-base">
            ما در مجموعه ویهان، با بهره‌گیری از هوش مصنوعی و دانش روز نرم‌افزار،
            مسیر دیجیتالی شدن کسب‌وکار شما را هموار می‌کنیم. آینده همین‌جاست.
          </p>
          <div class="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              class="rounded-full hover:bg-primary hover:text-white transition-all"
            >
              <Github class="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              class="rounded-full hover:bg-primary hover:text-white transition-all"
            >
              <Linkedin class="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              class="rounded-full hover:bg-primary hover:text-white transition-all"
            >
              <Twitter class="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div class="lg:col-span-4 grid grid-cols-2 gap-8">
          <div>
            <h4 class="font-bold text-foreground mb-6">دسترسی سریع</h4>
            <ul class="space-y-4">
              <li v-for="link in footerLinks.company" :key="link.name">
                <NuxtLink
                  :to="link.href"
                  class="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {{ link.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-foreground mb-6">خدمات ما</h4>
            <ul class="space-y-4">
              <li v-for="link in footerLinks.services" :key="link.name">
                <NuxtLink
                  :to="link.href"
                  class="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {{ link.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>

        <div class="lg:col-span-4 space-y-6">
          <h4 class="font-bold text-foreground mb-2">عضویت در خبرنامه</h4>
          <p class="text-sm text-muted-foreground">
            آخرین اخبار دنیای AI و تکنولوژی را در ایمیل خود دریافت کنید.
          </p>
          <div class="relative group">
            <Input
              type="email"
              placeholder="ایمیل شما..."
              class="rounded-full bg-secondary/50 border-none pr-4 pl-12 h-12 focus-visible:ring-primary"
            />
            <Button
              size="icon"
              class="absolute left-1 top-1 rounded-full w-10 h-10 transition-transform group-hover:scale-95"
            >
              <Send class="w-4 h-4 rotate-180" />
            </Button>
          </div>

          <div class="pt-4 space-y-3">
            <div class="flex items-center gap-3 text-sm text-muted-foreground">
              <Phone class="w-4 h-4 text-primary" />
              <span>083-37210153</span>
            </div>
            <div class="flex items-center gap-3 text-sm text-muted-foreground">
              <Mail class="w-4 h-4 text-primary" />
              <span>info@vihanco.ir</span>
            </div>
          </div>
        </div>
      </div>

      <div
        class="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground"
      >
        <p>تمامی حقوق این وب‌سایت محفوظ است © {{ currentYear }}</p>
        <div class="flex gap-6">
          <NuxtLink
            v-for="link in footerLinks.legal"
            :key="link.name"
            :to="link.href"
            class="hover:text-primary transition-colors"
          >
            {{ link.name }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* انیمیشن ملایم برای لینک‌ها */
a {
  display: inline-block;
  position: relative;
}

a::after {
  content: "";
  position: absolute;
  width: 0;
  height: 1px;
  bottom: -2px;
  right: 0;
  background-color: hsl(var(--primary));
  transition: width 0.3s ease;
}

a:hover::after {
  width: 100%;
}
</style>
