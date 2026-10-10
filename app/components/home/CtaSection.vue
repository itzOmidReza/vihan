<!-- app/components/home/CtaSection.vue -->
<script setup lang="ts">
import { PhoneCall, Mail, MessageSquare } from '@lucide/vue'
import { siteConfig } from '~/data/site-config'

const localePath = useLocalePath()
</script>

<template>
  <section class="w-full py-20 px-6 lg:px-8 relative overflow-hidden bg-background">
    <div
      class="max-w-5xl mx-auto rounded-[3rem] border border-primary/25 bg-gradient-to-b from-primary/10 via-card/60 to-card/90 backdrop-blur-2xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl"
    >
      <div class="relative z-10 space-y-6">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider">
          <MessageSquare class="h-3.5 w-3.5" />
          <span>{{ $t('contact_section.badge') }}</span>
        </div>

        <h2 class="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight leading-tight">
          {{ $t('contact_section.title_start') }}
          <span class="text-primary">{{ $t('contact_section.title_highlight') }}</span>
          {{ $t('contact_section.title_end') }}
        </h2>

        <p class="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {{ $t('contact_section.subtitle') }}
        </p>

        <div class="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a :href="`tel:${siteConfig.contact.rawMobile}`">
            <button
              type="button"
              class="h-14 px-8 rounded-full bg-primary text-primary-foreground font-black text-base flex items-center gap-2.5 shadow-xl shadow-primary/25 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <PhoneCall class="h-4 w-4" />
              <span>تماس مستقیم با کارشناسان</span>
            </button>
          </a>

          <NuxtLink :to="localePath('/contact-us')">
            <button
              type="button"
              class="h-14 px-8 rounded-full border border-border bg-background/80 hover:bg-secondary text-foreground font-bold text-base flex items-center gap-2.5 transition-all cursor-pointer"
            >
              <Mail class="h-4 w-4 text-primary" />
              <span>ارسال فرم درخواست پروژه</span>
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
