<!-- app/components/layout/Navbar.vue -->
<script setup lang="ts">
import { ref } from 'vue'
import { Moon, Sun, PhoneCall, Menu, Globe, X } from '@lucide/vue'
import { siteConfig } from '~/data/site-config'

const colorMode = useColorMode()
const { locale, setLocale } = useI18n()
const localePath = useLocalePath()

const isDark = computed(() => colorMode.value === 'dark')
const isMobileOpen = ref(false)

const toggleTheme = () => {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}

const toggleLanguage = () => {
  setLocale(locale.value === 'fa' ? 'en' : 'fa')
}

const navItems = [
  { key: 'nav.home', to: '/' },
  { key: 'nav.services', to: '/services' },
  { key: 'nav.portfolio', to: '/projects' },
  { key: 'nav.about', to: '/about-us' },
  { key: 'nav.contact', to: '/contact-us' },
]
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 px-4 py-3 md:py-5 transition-all duration-300">
    <!-- کپسول شیشه‌ای نوبار اصلی -->
    <div
      class="max-w-7xl mx-auto rounded-3xl md:rounded-full flex items-center justify-between px-5 md:px-7 py-2.5 md:py-3 border border-border/40 bg-background/80 backdrop-blur-xl shadow-lg relative z-50"
    >
      <!-- ابزارهای دسکتاپ (چپ) -->
      <div class="hidden lg:flex items-center gap-3">
        <button
          @click="toggleTheme"
          type="button"
          class="h-9 w-9 rounded-full border border-border/60 bg-secondary/40 hover:bg-accent flex items-center justify-center transition-colors cursor-pointer text-foreground"
          :aria-label="isDark ? 'تم روشن' : 'تم تیره'"
        >
          <Sun v-if="isDark" class="h-4 w-4" />
          <Moon v-else class="h-4 w-4" />
        </button>

        <button
          @click="toggleLanguage"
          type="button"
          class="h-9 px-3 rounded-full border border-border/60 bg-secondary/40 hover:bg-accent flex items-center gap-1.5 text-xs font-bold transition-colors cursor-pointer text-foreground"
        >
          <Globe class="h-3.5 w-3.5 text-primary" />
          <span>{{ locale === 'fa' ? 'EN' : 'فا' }}</span>
        </button>

        <a :href="`tel:${siteConfig.contact.rawMobile}`">
          <button
            type="button"
            class="h-9 px-5 rounded-full bg-primary text-primary-foreground font-bold text-xs flex items-center gap-2 shadow-lg shadow-primary/25 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <span>{{ $t('nav.consultation') }}</span>
            <PhoneCall class="h-3.5 w-3.5" />
          </button>
        </a>
      </div>

      <!-- منوی اصلی و لوگو دسکتاپ (راست) -->
      <div class="hidden lg:flex items-center gap-8">
        <ul class="flex items-center gap-7">
          <li v-for="item in navItems" :key="item.key">
            <NuxtLink
              :to="localePath(item.to)"
              class="text-sm font-bold text-muted-foreground hover:text-primary transition-colors relative group py-1"
              active-class="text-primary font-black"
            >
              {{ $t(item.key) }}
              <span
                class="absolute -bottom-1 right-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"
              ></span>
            </NuxtLink>
          </li>
        </ul>

        <NuxtLink :to="localePath('/')" class="flex items-center justify-center">
          <img
            src="/Logo.png"
            :alt="locale === 'fa' ? siteConfig.legalName.fa : siteConfig.legalName.en"
            class="h-9 w-auto dark:hidden object-contain"
          />
          <img
            src="/darkLogo.png"
            :alt="locale === 'fa' ? siteConfig.legalName.fa : siteConfig.legalName.en"
            class="h-9 w-auto hidden dark:block object-contain"
          />
        </NuxtLink>
      </div>

      <!-- نمای موبایل -->
      <div class="lg:hidden flex items-center justify-between w-full">
        <!-- لوگوی موبایل -->
        <NuxtLink :to="localePath('/')" class="flex items-center justify-center">
          <img
            src="/Logo.png"
            :alt="locale === 'fa' ? siteConfig.legalName.fa : siteConfig.legalName.en"
            class="h-8 w-auto dark:hidden object-contain"
          />
          <img
            src="/darkLogo.png"
            :alt="locale === 'fa' ? siteConfig.legalName.fa : siteConfig.legalName.en"
            class="h-8 w-auto hidden dark:block object-contain"
          />
        </NuxtLink>

        <!-- دکمه‌های کنترل موبایل -->
        <div class="flex items-center gap-2">
          <button
            @click="toggleTheme"
            type="button"
            class="h-9 w-9 rounded-full border border-border/60 bg-secondary/40 flex items-center justify-center text-foreground cursor-pointer"
          >
            <Sun v-if="isDark" class="h-4 w-4" />
            <Moon v-else class="h-4 w-4" />
          </button>

          <button
            @click="toggleLanguage"
            type="button"
            class="h-9 px-2.5 rounded-full border border-border/60 bg-secondary/40 text-xs font-bold text-foreground cursor-pointer"
          >
            {{ locale === 'fa' ? 'EN' : 'فا' }}
          </button>

          <button
            @click="isMobileOpen = !isMobileOpen"
            type="button"
            class="h-9 w-9 rounded-xl border border-primary/20 bg-primary/10 text-primary flex items-center justify-center cursor-pointer hover:bg-primary/20 transition-colors"
            :aria-label="isMobileOpen ? 'بستن منو' : 'باز کردن منو'"
          >
            <X v-if="isMobileOpen" class="h-5 w-5" />
            <Menu v-else class="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>

    <!-- منوی کشویی اختصاصی موبایل (تمام صفحه با ترنزیشن نرم) -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="isMobileOpen"
          class="fixed inset-0 z-50 bg-background/95 backdrop-blur-2xl flex flex-col justify-between p-6 pt-24"
        >
          <!-- دکمه بستن در بالای منوی بازشده -->
          <div class="absolute top-5 left-5 right-5 flex items-center justify-between">
            <button
              @click="isMobileOpen = false"
              type="button"
              class="h-10 w-10 rounded-full border border-border/60 bg-secondary/50 flex items-center justify-center text-foreground cursor-pointer hover:bg-accent"
            >
              <X class="h-5 w-5" />
            </button>
            <img
              src="/Logo.png"
              alt="Logo"
              class="h-8 w-auto dark:hidden object-contain"
            />
            <img
              src="/darkLogo.png"
              alt="Logo"
              class="h-8 w-auto hidden dark:block object-contain"
            />
          </div>

          <!-- لیست صفحات منو -->
          <div class="flex flex-col gap-3 my-auto">
            <NuxtLink
              v-for="item in navItems"
              :key="item.key"
              :to="localePath(item.to)"
              @click="isMobileOpen = false"
              class="px-5 py-3.5 rounded-2xl text-lg font-bold text-muted-foreground hover:text-primary hover:bg-secondary/40 transition-all flex items-center justify-between"
              active-class="text-primary! bg-primary/10! font-black"
            >
              <span>{{ $t(item.key) }}</span>
              <span class="w-2 h-2 rounded-full bg-primary/40"></span>
            </NuxtLink>
          </div>

          <!-- دکمه تماس پایین منو -->
          <div class="pt-6 border-t border-border/50">
            <a :href="`tel:${siteConfig.contact.rawMobile}`" class="block w-full">
              <button
                type="button"
                class="w-full h-13 rounded-2xl bg-primary text-primary-foreground font-black text-base flex items-center justify-center gap-2.5 shadow-xl shadow-primary/25 cursor-pointer active:scale-95 transition-all"
              >
                <PhoneCall class="h-5 w-5" />
                <span>{{ $t('nav.consultation') }}</span>
              </button>
            </a>
          </div>
        </div>
      </Transition>
    </Teleport>
  </nav>
</template>
