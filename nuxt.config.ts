// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';
import type {} from '@nuxtjs/color-mode';
import type {} from '@nuxtjs/i18n';

export default defineNuxtConfig({
  modules: ['@nuxtjs/color-mode', '@nuxtjs/i18n', '@nuxt/image', 'shadcn-nuxt'],

  devtools: { enabled: true },

  // هماهنگی با کلاس دارک تیلوند
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storage: 'localStorage', // or 'sessionStorage' or 'cookie'
    storageKey: 'nuxt-color-mode',
    cookieAttrs: { maxAge: 31536000, path: '/' },
  },

  // تنظیمات پایه دو زبانه
  i18n: {
    defaultLocale: 'fa',
    locales: [
      { code: 'fa', name: 'فارسی', dir: 'rtl', file: 'fa.json' },
      { code: 'en', name: 'English', dir: 'ltr', file: 'en.json' },
    ],
  },

  shadcn: {
    prefix: '',
    componentDir: '@/components/ui',
  },

  css: ['~/assets/css/tailwind.css'],

  vite: {
    plugins: [tailwindcss()],
  },
});
