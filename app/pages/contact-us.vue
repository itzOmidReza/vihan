<!-- app/pages/contact-us.vue -->
<script setup lang="ts">
import ContactChannels from '~/components/contact/ContactChannels.vue'
import ContactForm from '~/components/contact/ContactForm.vue'
</script>

<template>
  <div class="py-12 md:py-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden" dir="rtl">
    <!-- بخش تیتر و معرفی -->
    <div class="text-center mb-16 md:mb-20 space-y-6">
      <h1 class="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight text-foreground">
        بیا درباره <span class="text-primary underline underline-offset-8 decoration-primary/20">ایده‌ات</span> گپ بزنیم
      </h1>
      <p class="text-muted-foreground text-base md:text-xl max-w-3xl mx-auto leading-relaxed">
        تیم ما آماده است تا پیچیده‌ترین چالش‌های فنی و ایده‌های نوآورانه شما را به راهکارهای هوشمند و پایدار تبدیل کند.
      </p>
    </div>

    <!-- ساختار دو ستونه ریسپانسیو و هماهنگ با RTL -->
    <div class="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch w-full">
      <!-- ستون اطلاعات تماس و دفتر مرکزی (راست در RTL) -->
      <ContactChannels class="w-full lg:w-5/12" />

      <!-- ستون فرم پیام و درخواست همکاری (چپ در RTL) -->
      <div class="w-full lg:w-7/12">
        <ContactForm />
      </div>
    </div>
  </div>
</template>
