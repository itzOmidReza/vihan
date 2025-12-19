<script setup lang="ts">
import { UserRoundCheck, BriefcaseBusiness, Smile } from "lucide-vue-next";
</script>
<template>
  <div class="bg-[#111111] text-white mt-10 rounded-2xl p-3 overflow-hidden">
    <div
      class="flex flex-col justify-center items-center gap-5 relative lg:w-3xl m-auto"
    >
      <div class="flex items-center justify-center gap-2 mt-5">
        <img src="/images/icon/rSide.png" alt="" />
        <h3 class="font-medium text-2xl">حسناقهرمانی</h3>
        <img src="/images/icon/lSide.png" alt="" />
      </div>
      <p class="text-center font-light">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه
        درصد گذشته حال و آینده
      </p>
      <div class="flex justify-between w-full">
        <span class="flex flex-col items-center justify-center gap-2">
          <UserRoundCheck :size="50" stroke-width="1" class="text-[#353149]" />
          <p class="text-3xl">+20</p>
          <p class="text-sec-text">نیروی متخصص</p>
        </span>
        <span
          class="flex flex-col items-center justify-center gap-2 translate-y-20"
        >
          <BriefcaseBusiness
            :size="50"
            stroke-width="1"
            class="text-[#353149]"
          />
          <p class="text-3xl">+5</p>
          <p class="text-sec-text">سال سابقه</p>
        </span>
        <span class="flex flex-col items-center justify-center gap-2">
          <Smile :size="50" stroke-width="1" class="text-[#353149]" />
          <p class="text-3xl">+200</p>
          <p class="text-sec-text">کارفرمای راضی</p>
        </span>
      </div>
      <Button class="mt-24 mb-5 rounded-full w-64">درباره ما بیشتر بدانید</Button>
      <SharedCircle class="absolute -top-10 right-1/2 translate-x-1/2" />
    </div>
  </div>
</template>
