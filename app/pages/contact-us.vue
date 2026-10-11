<!-- app/pages/contact-us.vue -->
<script setup lang="ts">
import { ref } from 'vue'
import {
  Mail,
  Phone,
  Clock,
  MapPin,
  Send,
  CheckCircle2
} from '@lucide/vue'

import { Input } from '~/components/ui/input'
import { Textarea } from '~/components/ui/textarea'
import { Button } from '~/components/ui/button'

const form = ref({
  name: '',
  phone: '',
  subject: '',
  description: ''
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)

const handleSubmit = async () => {
  if (!form.value.name || !form.value.phone || !form.value.description) {
    return
  }

  isSubmitting.value = true
  await new Promise((resolve) => setTimeout(resolve, 800))
  isSubmitting.value = false
  isSubmitted.value = true
}
</script>

<template>
  <div class="py-12 md:py-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
    <!-- بخش تیتر و معرفی -->
    <div class="text-center mb-16 md:mb-20 space-y-6">
      <h1 class="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight text-foreground">
        بیا درباره <span class="text-primary underline underline-offset-8 decoration-primary/20">ایده‌ات</span> گپ بزنیم
      </h1>
      <p class="text-muted-foreground text-base md:text-xl max-w-3xl mx-auto leading-relaxed">
        تیم ما آماده است تا پیچیده‌ترین چالش‌های فنی شما را به راهکارهای هوشمند تبدیل کند.
      </p>
    </div>

    <!-- بدنه دو ستونه -->
    <div class="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch w-full">
      <!-- ستون اطلاعات تماس (سمت راست در RTL) -->
      <div class="w-full lg:w-5/12 space-y-6">
        <div class="grid grid-cols-1 gap-4">
          <!-- کارت ایمیل -->
          <div class="flex items-center gap-5 p-5 rounded-3xl bg-card border border-border/50 backdrop-blur-md transition-all hover:border-primary/40">
            <div class="p-4 rounded-2xl shrink-0 bg-blue-500/10 text-blue-500">
              <Mail class="w-6 h-6" />
            </div>
            <div class="text-right flex-1">
              <p class="text-xs text-muted-foreground font-bold mb-1">ایمیل ما</p>
              <p class="text-base sm:text-lg font-black text-foreground dir-ltr text-right">info@vihandata.ir</p>
            </div>
          </div>

          <!-- کارت تلفن -->
          <div class="flex items-center gap-5 p-5 rounded-3xl bg-card border border-border/50 backdrop-blur-md transition-all hover:border-primary/40">
            <div class="p-4 rounded-2xl shrink-0 bg-emerald-500/10 text-emerald-500">
              <Phone class="w-6 h-6" />
            </div>
            <div class="text-right flex-1">
              <p class="text-xs text-muted-foreground font-bold mb-1">شماره تماس</p>
              <p class="text-base sm:text-lg font-black text-foreground dir-ltr text-right">۰۸۳-۳۸۲۵۰۰۰۰</p>
            </div>
          </div>

          <!-- کارت ساعات کاری -->
          <div class="flex items-center gap-5 p-5 rounded-3xl bg-card border border-border/50 backdrop-blur-md transition-all hover:border-primary/40">
            <div class="p-4 rounded-2xl shrink-0 bg-purple-500/10 text-purple-500">
              <Clock class="w-6 h-6" />
            </div>
            <div class="text-right flex-1">
              <p class="text-xs text-muted-foreground font-bold mb-1">ساعات کاری</p>
              <p class="text-base sm:text-lg font-black text-foreground">شنبه تا چهارشنبه ۹ تا ۱۸</p>
            </div>
          </div>
        </div>

        <!-- کارت دفتر مرکزی -->
        <div class="p-8 rounded-[2.5rem] bg-secondary/30 border border-border/50 relative overflow-hidden">
          <div class="relative z-10 space-y-4 text-right">
            <div class="flex items-center gap-3 text-primary">
              <MapPin class="w-6 h-6" />
              <span class="font-black text-xl sm:text-2xl">دفتر مرکزی</span>
            </div>
            <p class="text-foreground/80 leading-relaxed text-sm sm:text-base font-medium">
              کرمانشاه، پارک علم و فناوری زاگرس، مرکز رشد فناوری اطلاعات، برج فناوری
            </p>

            <!-- شبکه‌های اجتماعی با آیکون‌های SVG خالص بدون نیاز به پکیج -->
            <div class="flex gap-3 pt-3">
              <!-- لینکدین -->
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-secondary text-secondary-foreground hover:bg-primary hover:text-white transition-all shadow-sm border border-border/40"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>

              <!-- اینستاگرام -->
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-secondary text-secondary-foreground hover:bg-primary hover:text-white transition-all shadow-sm border border-border/40"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>

              <!-- توییتر / X -->
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-secondary text-secondary-foreground hover:bg-primary hover:text-white transition-all shadow-sm border border-border/40"
                aria-label="X"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z"/>
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- ستون فرم پیام (سمت چپ در RTL) -->
      <div class="w-full lg:w-7/12">
        <div class="h-full p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] bg-card border border-border shadow-2xl relative">
          <!-- پیام تأیید ارسال -->
          <div
            v-if="isSubmitted"
            class="p-10 rounded-2xl bg-primary/10 border border-primary/20 text-center space-y-4 my-8"
          >
            <div class="w-14 h-14 rounded-full bg-primary/20 text-primary mx-auto flex items-center justify-center">
              <CheckCircle2 class="w-8 h-8" />
            </div>
            <h3 class="text-xl font-black text-foreground">
              پیام شما با موفقیت دریافت شد
            </h3>
            <p class="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
              از ارتباط شما سپاسگزاریم. درخواست شما ثبت شده و همکاران فنی ما به زودی با شما تماس خواهند گرفت.
            </p>
            <Button
              variant="outline"
              class="rounded-full text-xs font-bold mt-2"
              @click="isSubmitted = false"
            >
              ارسال پیام دیگر
            </Button>
          </div>

          <!-- فرم ورود اطلاعات -->
          <form v-else class="space-y-6 md:space-y-8" @submit.prevent="handleSubmit">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- نام کامل -->
              <div class="space-y-2 text-right">
                <label class="text-sm font-black pr-2 text-foreground/70">نام کامل</label>
                <Input
                  v-model="form.name"
                  required
                  placeholder="نام شما"
                  class="h-14 rounded-2xl bg-background/50 border-border/60 focus:border-primary text-base px-5 text-right"
                />
              </div>

              <!-- شماره موبایل -->
              <div class="space-y-2 text-right">
                <label class="text-sm font-black pr-2 text-foreground/70">شماره موبایل</label>
                <Input
                  v-model="form.phone"
                  required
                  dir="ltr"
                  placeholder="۰۹۱۲..."
                  class="h-14 rounded-2xl bg-background/50 border-border/60 focus:border-primary text-base px-5 text-left"
                />
              </div>
            </div>

            <!-- موضوع پروژه -->
            <div class="space-y-2 text-right">
              <label class="text-sm font-black pr-2 text-foreground/70">موضوع پروژه</label>
              <Input
                v-model="form.subject"
                placeholder="در چه حوزه‌ای نیاز به همکاری دارید؟"
                class="h-14 rounded-2xl bg-background/50 border-border/60 focus:border-primary text-base px-5 text-right"
              />
            </div>

            <!-- توضیحات تکمیلی -->
            <div class="space-y-2 text-right">
              <label class="text-sm font-black pr-2 text-foreground/70">توضیحات تکمیلی</label>
              <Textarea
                v-model="form.description"
                required
                rows="5"
                placeholder="خلاصه‌ای از ایده خود را بنویسید..."
                class="rounded-2xl bg-background/50 border-border/60 focus:border-primary p-5 text-base resize-none text-right"
              />
            </div>

            <!-- دکمه ارسال پیام -->
            <Button
              type="submit"
              :disabled="isSubmitting"
              class="w-full h-16 rounded-2xl text-lg font-black gap-3 shadow-xl shadow-primary/25 hover:scale-[1.01] transition-all cursor-pointer"
            >
              <span>{{ isSubmitting ? 'در حال ثبت...' : 'شروع گفتگو با مشاوران' }}</span>
              <Send class="w-5 h-5 rtl:rotate-180" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
