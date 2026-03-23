// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css"],

  // ۱. تنظیم آدرس سایت (برای Sitemap و SEO ضروری است)
  site: {
    url: "https://vihanco.ir/",
    name: "ویهان | راهکارهای هوشمند نرم‌افزاری",
  },

  vite: {
    plugins: [tailwindcss()],
  },

  // ۲. اضافه کردن ماژول sitemap به لیست ماژول‌ها
  modules: [
    "shadcn-nuxt",
    "@nuxtjs/color-mode",
    "nuxt-swiper",
    "@nuxtjs/sitemap",
  ],

  // ۳. تنظیمات نقشه سایت
  sitemap: {
    cacheMaxAgeSeconds: 3600, // یک ساعت کش
    autoLastmod: true, // درج خودکار تاریخ آخرین تغییرات
  },

  shadcn: {
    prefix: "",
    componentDir: "@/components/ui",
  },

  colorMode: {
    classSuffix: "",
  },

  // ۴. بهینه‌سازی رندر صفحات برای SEO بهتر
  routeRules: {
    "/": { prerender: true }, // رندر پیش‌فرض صفحه اصلی برای سرعت بیشتر
  },
});
