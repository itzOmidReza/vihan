<!-- app/pages/about-us.vue -->
<script setup lang="ts">
import {
  Users,
  Target,
  Compass,
  Cpu,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Sparkles,
  ArrowLeft,
  FileDown
} from '@lucide/vue'
import { Card, CardHeader, CardTitle, CardContent } from '~/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '~/components/ui/avatar'
import { Badge } from '~/components/ui/badge'

import { teamMembers } from '~/data/team'
import { coreValues } from '~/data/about'
import { siteConfig } from '~/data/site-config'
import { useLocalized } from '~/composables/useLocalized'

const { l } = useLocalized()
const localePath = useLocalePath()

const iconMap: Record<string, any> = {
  Cpu,
  ShieldCheck,
  Zap,
}
</script>

<template>
  <div class="py-12 md:py-20 space-y-24 w-full overflow-hidden">
    <!-- بخش معرفی و داستان شرکت -->
    <section class="max-w-7xl mx-auto px-6 lg:px-8 w-full">
      <div class="flex flex-col lg:flex-row gap-12 items-center w-full">
        <!-- ستون متن‌ها -->
        <div class="w-full lg:w-7/12 space-y-6 text-right">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
            <Sparkles class="h-3.5 w-3.5" />
            <span>درباره شرکت ما</span>
          </div>

          <h1 class="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight leading-tight">
            ما در <span class="text-primary">{{ siteConfig.legalName.fa }}</span> مرزهای نرم‌افزار را جابه‌جا می‌کنیم
          </h1>

          <p class="text-muted-foreground text-base sm:text-lg leading-relaxed">
            شرکت ویهان با هدف پر کردن شکاف بین نیازهای عملیاتی کسب‌وکارهای مدرن و جدیدترین پیشرفت‌های حوزه هوش مصنوعی و کلان‌داده تأسیس شده است. ما معتقدیم فناوری نباید یک ابزار پیچیده و گیج‌کننده باشد، بلکه باید به عنوان یک مزیت رقابتی پایدار، فرآیندها را روان و تصمیم‌گیری‌ها را سودآور کند.
          </p>

          <div class="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-border/50">
            <div>
              <span class="text-3xl md:text-4xl font-black text-foreground tabular-nums">
                {{ siteConfig.stats.specialists }}
              </span>
              <p class="text-xs md:text-sm text-muted-foreground font-semibold mt-1">متخصص هسته فنی</p>
            </div>
            <div>
              <span class="text-3xl md:text-4xl font-black text-primary tabular-nums">
                {{ siteConfig.stats.projects }}
              </span>
              <p class="text-xs md:text-sm text-muted-foreground font-semibold mt-1">پروژه به سرانجام رسیده</p>
            </div>
            <div>
              <span class="text-3xl md:text-4xl font-black text-foreground tabular-nums">
                {{ siteConfig.stats.technologies }}
              </span>
              <p class="text-xs md:text-sm text-muted-foreground font-semibold mt-1">فریم‌ورک و تکنولوژی</p>
            </div>
          </div>
        </div>

        <!-- کارت بصری چشم‌انداز -->
        <div class="w-full lg:w-5/12">
          <div class="relative rounded-[3rem] p-8 md:p-10 border border-primary/30 bg-gradient-to-br from-primary/15 via-card/70 to-card/90 backdrop-blur-2xl shadow-2xl overflow-hidden space-y-6 text-right">
            <div class="p-4 rounded-2xl bg-primary text-primary-foreground w-fit shadow-lg shadow-primary/25">
              <Target class="h-8 w-8" />
            </div>

            <h3 class="text-2xl font-black text-foreground">
              مأموریت و چشم‌انداز ویهان
            </h3>

            <p class="text-muted-foreground text-sm sm:text-base leading-relaxed">
              «تبدیل شدن به معتبرترین قطب ارائه راهکارهای هوش مصنوعی کاربردی و سامانه‌های داده‌محور در سطح ملی و منطقه‌ای، از طریق به‌کارگیری هوشمندانه‌ترین استعدادها و بالاترین استانداردهای مهندسی روز جهان.»
            </p>

            <ul class="space-y-3 pt-2 text-sm font-semibold text-foreground/90">
              <li class="flex items-center gap-2.5">
                <CheckCircle2 class="h-4 w-4 text-primary shrink-0" />
                <span>طراحی بومی سیستم‌های تصمیم‌یار هوشمند</span>
              </li>
              <li class="flex items-center gap-2.5">
                <CheckCircle2 class="h-4 w-4 text-primary shrink-0" />
                <span>امنیت داده‌ها و انطباق با حریم خصوصی سازمانی</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- بخش ارزش‌های کاری -->
    <section class="max-w-7xl mx-auto px-6 lg:px-8 w-full">
      <div class="text-center max-w-2xl mx-auto mb-14 space-y-3">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
          <Compass class="h-3.5 w-3.5" />
          <span>ارزش‌های کاری ما</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-black text-foreground">
          اصولی که کار ما را می‌سازد
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-right">
        <div
          v-for="(val, idx) in coreValues"
          :key="idx"
          class="p-8 rounded-[2.5rem] bg-card/50 backdrop-blur-md border border-border/60 hover:border-primary/40 hover:-translate-y-1.5 transition-all duration-300 space-y-4"
        >
          <div class="p-4 rounded-2xl bg-primary/10 text-primary w-fit">
            <component :is="iconMap[val.icon] || Cpu" class="h-7 w-7" />
          </div>
          <h3 class="text-xl font-black text-foreground">
            {{ l(val.title) }}
          </h3>
          <p class="text-muted-foreground text-sm leading-relaxed">
            {{ l(val.desc) }}
          </p>
        </div>
      </div>
    </section>

    <!-- بخش تیم متخصص ما (استایل دقیق Shadcn با گرید ۳ تایی) -->
    <section class="max-w-7xl mx-auto px-6 lg:px-8 w-full py-6">
      <div class="flex items-center justify-end gap-3 mb-12 pr-4 border-r-4 border-primary">
        <h2 class="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
          تیم متخصص ما
        </h2>
        <Users class="h-7 w-7 text-primary" />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <Card
          v-for="member in teamMembers"
          :key="member.id"
          class="flex flex-col justify-between py-6 shadow-sm overflow-hidden group hover:shadow-2xl transition-all duration-500 border-muted/50 bg-card/50 backdrop-blur-sm rounded-xl"
        >
          <CardHeader class="flex flex-col items-center p-6 text-center">
            <Avatar class="w-28 h-28 mb-4 border-4 border-background shadow-xl group-hover:scale-105 transition-transform duration-300">
              <AvatarImage
                v-if="member?.avatar && member.avatar.trim() !== ''"
                :src="member.avatar"
                :alt="member?.name ? l(member.name) : 'عضو تیم'"
                class="aspect-square size-full object-cover"
              />
              <AvatarFallback class="bg-muted flex size-full items-center justify-center rounded-full text-2xl font-bold">
                {{ member?.name && l(member.name) ? l(member.name).trim().charAt(0) : 'و' }}
              </AvatarFallback>
            </Avatar>

            <CardTitle class="font-semibold text-xl mb-1 group-hover:text-primary transition-colors">
              {{ member?.name ? l(member.name) : '' }}
            </CardTitle>

            <Badge variant="secondary" class="mb-4 font-normal text-xs">
              {{ member?.role ? l(member.role) : '' }}
            </Badge>

            <p class="text-sm text-muted-foreground leading-relaxed min-h-15">
              {{ member?.bio ? l(member.bio) : '' }}
            </p>

            <div v-if="member?.skills?.length" class="flex flex-wrap justify-center gap-1.5 mt-2">
              <Badge
                v-for="(skill, sIdx) in (member.skills ?? []).slice(0, 3)"
                :key="sIdx"
                variant="outline"
                class="text-[10px] px-2 py-0.5 font-normal"
              >
                {{ skill }}
              </Badge>
            </div>
          </CardHeader>

          <CardContent class="px-6 flex flex-col items-center gap-4 pb-8">
            <div class="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-2"></div>

            <div class="flex items-center justify-center gap-2">
              <a
                v-if="member?.socials?.github"
                :href="member.socials.github"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center size-9 rounded-full hover:bg-primary/10 hover:text-primary dark:hover:bg-accent/50 text-muted-foreground transition-all"
                aria-label="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>

              <a
                v-if="member?.socials?.linkedin"
                :href="member.socials.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center size-9 rounded-full hover:bg-primary/10 hover:text-primary dark:hover:bg-accent/50 text-muted-foreground transition-all"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>

              <a
                v-if="member?.resume || member?.resumeUrl"
                :href="member.resume || member.resumeUrl"
                target="_blank"
                download
                class="inline-flex items-center justify-center text-xs font-medium border bg-background shadow-xs dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 px-3 mr-2 gap-2 rounded-full border-primary/20 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                <FileDown class="w-4 h-4" />
                <span>دریافت رزومه</span>
              </a>
              <span
                v-else
                class="inline-flex items-center justify-center text-xs font-medium border bg-background/50 text-muted-foreground/50 h-8 px-3 mr-2 gap-2 rounded-full border-border/40 cursor-not-allowed"
              >
                <FileDown class="w-4 h-4 opacity-50" />
                <span>دریافت رزومه</span>
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>

    <!-- اکشن پایانی دعوت به همکاری -->
    <section class="max-w-5xl mx-auto px-6 text-center">
      <div class="p-10 rounded-[2.5rem] bg-secondary/30 border border-border/60 backdrop-blur-xl space-y-6">
        <h2 class="text-2xl sm:text-3xl font-black text-foreground">
          مشتاق آشنایی و همکاری با شما هستیم
        </h2>
        <p class="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
          اگر نیاز به همراهی یک تیم مهندسی باانگیزه و متخصص دارید، درهای ویهان همیشه برای تبادل نظر باز است.
        </p>
        <NuxtLink :to="localePath('/contact-us')">
          <button
            type="button"
            class="h-13 px-8 rounded-full bg-primary text-primary-foreground font-black text-sm inline-flex items-center gap-2.5 shadow-xl shadow-primary/25 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <span>ارتباط با دفتر شرکت</span>
            <ArrowLeft class="h-4 w-4 rtl:rotate-0 ltr:rotate-180" />
          </button>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
