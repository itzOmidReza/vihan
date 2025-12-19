<script setup lang="ts">
import { Quote, ChevronRight, ChevronLeft } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const containerRef = ref(null);

const slides = [
  {
    name: "مهناز درخشان",
    position: "مدیر عامل ویراموتور",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    icon: Quote, 
    image:'https://github.com/shadcn.png',
  },
  {
    name: "مهناز درخشان",
    position: "مدیر عامل ویراموتور",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    icon: Quote, 
    image:'https://github.com/shadcn.png',
  },
  {
    name: "مهناز درخشان",
    position: "مدیر عامل ویراموتور",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    icon: Quote, 
    image:'https://github.com/shadcn.png',
  },
  {
    name: "مهناز درخشان",
    position: "مدیر عامل ویراموتور",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    icon: Quote, 
    image:'https://github.com/shadcn.png',
  },
  {
    name: "مهناز درخشان",
    position: "مدیر عامل ویراموتور",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    icon: Quote, 
    image:'https://github.com/shadcn.png',
  },
];

const swiper = useSwiper(containerRef, {
  // Swiper options
  direction: "horizontal",
  spaceBetween: 20,
  breakpoints: {
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});
</script>
<template>
  <section class="mt-20" dir="rtl">
    <!-- name -->
    <div class="mb-8">
      <div class="flex items-center justify-start gap-3 mb-2">
        <img src="/images/icon/rSideL.png" class="w-8" alt="icon" />
        <span class="text-primary font-medium">نظرات مشتریان ما</span>
      </div>
      <h2 class="text-2xl font-bold">مشتریان درباره ما چه میگویند؟</h2>
    </div>
  </section>
  <!-- slide -->
  <ClientOnly>
    <swiper-container ref="containerRef" :init="false" class="pb-5">
      <swiper-slide v-for="(slide, idx) in slides" :key="idx">
        <Card
          class="h-full transition-all hover:border-primary/50 group bg-[#F6F6F6]"
        >
          <CardContent class=" flex flex-col gap-4 relative">
            <div
              class="px-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary group-hover:text-white transition-colors"
            >
              <component
                :is="slide.icon"
                class="w-8 h-8 text-primary group-hover:text-amber-50 py-0"
              />
            </div>
            <p class="text-muted-foreground leading-relaxed text-sm">
              {{ slide.description }}
            </p>
            <div class="flex items-center gap-2">
              <Avatar>
                <AvatarImage :src="slide.image" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
             <div>
                 <h4 class="font-semibold text-xl">{{ slide.name }}</h4>
              <p class="font-light text-sm">{{ slide.position }}</p>
             </div>
            </div>
          </CardContent>
        </Card>
      </swiper-slide>
    </swiper-container>
  </ClientOnly>

  <div class="flex gap-4 justify-center">
    <Button variant="outline" size="icon" @click="swiper.prev()">
      <ChevronRight class="h-4 w-4" />
    </Button>
    <Button variant="outline" size="icon" @click="swiper.next()">
      <ChevronLeft class="h-4 w-4" />
    </Button>
  </div>
</template>
