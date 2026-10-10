<!-- app/layouts/default.vue -->
<script setup lang="ts">
import Navbar from '~/components/layout/Navbar.vue'
import Footer from '~/components/layout/Footer.vue'
import { siteConfig } from '~/data/site-config'

const { locale } = useI18n()

// داخل app/layouts/default.vue در تابع useHead:
useHead({
  htmlAttrs: {
    lang: computed(() => locale.value),
    dir: computed(() => (locale.value === 'fa' ? 'rtl' : 'ltr')),
  },
  titleTemplate: (titleChunk) => {
    const siteName = locale.value === 'fa' ? siteConfig.legalName.fa : siteConfig.legalName.en
    return titleChunk ? `${titleChunk} | ${siteName}` : siteName
  },
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon_io/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon_io/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon_io/favicon-16x16.png' },
    { rel: 'manifest', href: '/favicon_io/site.webmanifest' },
  ],
})
</script>

<template>
  <div class="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-500 selection:bg-primary selection:text-primary-foreground">
    <NuxtLoadingIndicator color="repeating-linear-gradient(to right, #3b82f6 0%, #8b5cf6 100%)" />
    <Navbar />
    <main class="grow pt-24">
      <slot />
    </main>
    <Footer />
  </div>
</template>
