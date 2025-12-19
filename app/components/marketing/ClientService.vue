<script setup lang="ts">
import { ChartLine } from "lucide-vue-next";

const slides = [
  {
    title: "آنالیز کسب‌وکار",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    icon: ChartLine, // Passing the component itself
  },
  {
    title: "هوشمندسازی نوین",
    description:
      "بهره‌گیری از جدیدترین تکنولوژی‌های روز برای بهبود فرآیندهای تجاری شما.",
    icon: ChartLine,
  },
  {
    title: "اتوماسیون",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    icon: ChartLine, // Passing the component itself
  },
  {
    title: "تحلیل داده",
    description:
      "بهره‌گیری از جدیدترین تکنولوژی‌های روز برای بهبود فرآیندهای تجاری شما.",
    icon: ChartLine,
  },
  // Add more slides here
];
</script>
<template>
  <section class="mt-20 py-10 px-5 bg-secondary rounded-4xl">
    <!-- title -->
    <div class="mb-8">
      <div class="flex items-center justify-start gap-3 mb-2">
        <img src="/images/icon/rSideL.png" class="w-8" alt="icon" />
        <span class="text-primary font-medium">خدمات ما</span>
      </div>
      <h2 class="text-2xl font-bold">مجموعه خدمات ما</h2>
    </div>
    <!-- service card -->
    <div class="flex flex-col gap-3">
      <li
        v-for="(slide, idx) in slides"
        :key="idx"
        class="list-none flex flex-col gap-3 border border-background rounded-2xl"
      >
        <div class="p-6 flex flex-col gap-4">
          <div
            class="p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary group-hover:text-white transition-colors"
          >
            <component :is="slide.icon" class="w-8 h-8 text-primary" />
          </div>
          <h4 class="font-bold text-xl">{{ slide.title }}</h4>
          <p class="text-muted-foreground leading-relaxed text-sm">
            {{ slide.description }}
          </p>
        </div>
      </li>
    </div>
  </section>
</template>
