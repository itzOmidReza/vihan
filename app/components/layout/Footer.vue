<script setup lang="ts">
import { Phone, Mail, Send } from '@lucide/vue'
import { siteConfig } from '~/data/site-config'

const { locale } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <footer class="mt-32 border-t border-border/40 bg-background relative overflow-hidden">
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-primary/50 to-transparent"></div>

    <div class="max-w-7xl mx-auto px-6 py-16">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <!-- ستون اول: معرفی و شبکه‌های اجتماعی -->
        <div class="lg:col-span-4 space-y-6">
          <NuxtLink :to="localePath('/')" class="flex items-center gap-3">
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
            <span class="font-black text-xl tracking-tight text-foreground">
              {{ locale === 'fa' ? siteConfig.legalName.fa : siteConfig.legalName.en }}
            </span>
          </NuxtLink>

          <p class="text-muted-foreground leading-relaxed text-sm md:text-base">
            {{ $t('hero.description') }}
          </p>

          <div class="flex items-center gap-3">
            <!-- GitHub -->
            <a
              :href="siteConfig.socials.github"
              target="_blank"
              rel="noopener noreferrer"
              class="h-9 w-9 rounded-full border border-border/60 bg-secondary/30 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all cursor-pointer"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>

            <!-- LinkedIn -->
            <a
              :href="siteConfig.socials.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="h-9 w-9 rounded-full border border-border/60 bg-secondary/30 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all cursor-pointer"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>

            <!-- Twitter / X -->
            <a
              :href="siteConfig.socials.twitter"
              target="_blank"
              rel="noopener noreferrer"
              class="h-9 w-9 rounded-full border border-border/60 bg-secondary/30 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all cursor-pointer"
              aria-label="Twitter"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
          </div>
        </div>

        <!-- ستون دوم: لینک‌های سریع و خدمات -->
        <div class="lg:col-span-4 grid grid-cols-2 gap-8">
          <div>
            <h4 class="font-bold text-foreground mb-6">{{ $t('footer.quick_links') }}</h4>
            <ul class="space-y-4">
              <li>
                <NuxtLink :to="localePath('/about-us')" class="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {{ $t('nav.about') }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="localePath('/services')" class="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {{ $t('nav.services') }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="localePath('/projects')" class="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {{ $t('nav.portfolio') }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="localePath('/contact-us')" class="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {{ $t('nav.contact') }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="font-bold text-foreground mb-6">{{ $t('footer.our_services') }}</h4>
            <ul class="space-y-4 text-sm text-muted-foreground">
              <li>{{ locale === 'fa' ? 'هوش مصنوعی و داده' : 'AI & Data Intelligence' }}</li>
              <li>{{ locale === 'fa' ? 'توسعه وب مدرن' : 'Modern Web Development' }}</li>
              <li>{{ locale === 'fa' ? 'اپلیکیشن‌های تجاری' : 'Enterprise Applications' }}</li>
              <li>{{ locale === 'fa' ? 'مشاوره فنی و معماری' : 'Technical Consultation' }}</li>
            </ul>
          </div>
        </div>

        <!-- ستون سوم: خبرنامه و اطلاعات تماس -->
        <div class="lg:col-span-4 space-y-6">
          <h4 class="font-bold text-foreground mb-2">{{ $t('footer.newsletter_title') }}</h4>
          <p class="text-sm text-muted-foreground">
            {{ $t('footer.newsletter_subtitle') }}
          </p>

          <form @submit.prevent class="relative">
            <input
              type="email"
              :placeholder="$t('footer.newsletter_placeholder')"
              class="w-full h-12 rounded-full bg-secondary/50 border border-border/50 px-4 pl-12 text-sm outline-none focus:border-primary transition-colors"
            />
            <button
              type="submit"
              class="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center absolute left-1 top-1 transition-transform hover:scale-95 cursor-pointer"
              aria-label="عضویت در خبرنامه"
            >
              <Send class="h-4 w-4" />
            </button>
          </form>

          <div class="pt-4 space-y-3 text-sm text-muted-foreground">
            <div class="flex items-center gap-3">
              <Phone class="h-4 w-4 text-primary" />
              <span dir="ltr">{{ siteConfig.contact.mobile }}</span>
            </div>
            <div class="flex items-center gap-3">
              <Mail class="h-4 w-4 text-primary" />
              <span>{{ siteConfig.contact.email }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- نوار پایانی کپی‌رایت -->
      <div class="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
        <p>{{ $t('footer.copyright') }}</p>
        <div class="flex gap-6">
          <a href="#" class="hover:text-primary transition-colors">{{ $t('footer.terms') }}</a>
          <a href="#" class="hover:text-primary transition-colors">{{ $t('footer.privacy') }}</a>
        </div>
      </div>
    </div>
  </footer>
</template>
