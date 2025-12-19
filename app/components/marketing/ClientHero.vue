<script setup lang="ts">
import { Sparkles } from "lucide-vue-next";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
</script>
<template>
  <section class="mt-8 flex flex-col lg:flex-row items-center justify-between">
    <!-- Hero Text -->
    <div class="flex-1 flex flex-col gap-3">
      <span
        class="border border-primary py-0.5 rounded-full text-sm flex items-center justify-center gap-1 w-32"
        ><Sparkles class="text-primary h-4" />وقت تغییره!</span
      >
      <h1 class="font-medium text-3xl">
        وقتشه کسب کارت بیشتر از همیشه رشد بدی!
      </h1>
      <p class="text-sec-text">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
      </p>
      <Button class="rounded-full w-52">دریافت مشاوره رایگان</Button>

      <div class="flex items-center justify-start gap-3">
        <div
          class="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2"
        >
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://github.com/leerob.png" alt="@leerob" />
            <AvatarFallback>LR</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage
              src="https://github.com/itzOmidReza.png"
              alt="@itzOmidReza"
            />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
        </div>
        <span>13K مشتری</span>
      </div>
    </div>
    <!-- Hero Image -->
    <div class="flex-1 relative flex items-center justify-center lg:items-end flex-row-reverse gap-5 mt-16 w-full">
        <img src="\images\banner\hero.png" alt="">
        <img src="\images\banner\hero-tiny.png" alt="" class="absolute -top-10 right-0 lg:hidden w-40">
        <div class="bg-primary rounded-[18px] h-80 lg:flex flex-col items-center justify-between pb-5 hidden"><img src="\images\banner\hero-tiny.png" alt="" class="h-64"><p class="text-sm font-medium">وقتشه کسب کارت رو جار بزنی!</p></div>
    </div>
  </section>
</template>
