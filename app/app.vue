<script setup lang="ts">
useSeoMeta({
  title: "Vihan | ویهان",
  description:
    "ویهان؛ تلاقی خلاقیت انسانی و قدرت هوش مصنوعی در توسعه نرم‌افزارهای پیشرفته و راهکارهای هوشمند.",
  ogTitle: "ویهان | نسل جدید نرم‌افزارهای مبتنی بر هوش مصنوعی",
  ogDescription:
    "ما در ویهان با استفاده از قدرت AI، آینده کسب‌وکار شما را می‌سازیم.",
  ogType: "website",
  ogUrl: "https://vihanco.ir/",
  ogImage: "https://vihanco.ir/og-image.png", // حتما عکسی با این نام در پوشه public قرار دهید
  twitterCard: "summary_large_image",
  ogLocale: "fa_IR",
});

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk && titleChunk !== "Vihan | ویهان"
      ? `${titleChunk} | ویهان`
      : "ویهان | راهکارهای هوشمند نرم‌افزاری";
  },
  htmlAttrs: {
    lang: "fa",
    dir: "rtl",
  },
  bodyAttrs: {
    class: "overflow-x-hidden antialiased font-vazir",
  },
  link: [
    { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    { rel: "canonical", href: "https://vihanco.ir/" },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Vihan | ویهان",
        url: "https://vihanco.ir/",
        logo: "https://vihanco.ir/logo.png",
        description:
          "توسعه‌دهنده نرم‌افزارهای هوشمند و راهکارهای مبتنی بر هوش مصنوعی",
        sameAs: [
          "https://linkedin.com/company/Vihan",
          "https://instagram.com/Vihan",
        ],
      }),
    },
  ],
});
</script>

<template>
  <div>
    <NuxtLoadingIndicator
      :height="3"
      color="repeating-linear-gradient(to right,#3b82f6 0%,#6366f1 100%)"
    />

    <NuxtLayout>
      <NuxtRouteAnnouncer />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
:root {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease-in-out;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(10px);
  filter: blur(5px);
}

.antialiased {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}
</style>
