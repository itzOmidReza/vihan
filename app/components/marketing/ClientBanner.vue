<script setup lang="ts">
import {
  UserRoundCheck,
  BriefcaseBusiness,
  Smile,
  ArrowRight,
} from "lucide-vue-next";
import { Button } from "@/components/ui/button";
</script>

<template>
  <section class="w-full py-16 px-4 md:px-6">
    <div
      class="max-w-7xl mx-auto relative overflow-hidden rounded-[2.5rem] md:rounded-[4rem] bg-secondary/30 dark:bg-secondary/10 border border-border/50 backdrop-blur-sm p-8 lg:p-20 shadow-2xl transition-all duration-500"
    >
      <div
        class="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10"
      ></div>
      <div
        class="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -z-10"
      ></div>

      <div
        class="flex flex-col justify-center items-center gap-10 relative z-10 max-w-5xl mx-auto"
      >
        <div class="flex flex-col items-center gap-6 text-center">
          <div class="flex items-center justify-center gap-4">
            <div
              class="h-px w-8 md:w-16 bg-linear-to-l from-transparent to-primary/50 hidden sm:block"
            ></div>
            <h2
              class="font-black text-3xl md:text-5xl lg:text-6xl bg-linear-to-b from-foreground to-foreground/70 bg-clip-text text-transparent tracking-tight"
            >
              ما در <span class="text-primary font-bold">ویهان</span> مسیر
              هوشمندسازی را می‌شناسیم
            </h2>
            <div
              class="h-px w-8 md:w-16 bg-linear-to-r from-transparent to-primary/50 hidden sm:block"
            ></div>
          </div>
          <p
            class="font-medium text-muted-foreground leading-relaxed text-lg md:text-xl max-w-3xl"
            dir="rtl"
          >
            تیم ما با ترکیب تخصص فنی و خلاقیت، فراتر از یک شرکت نرم‌افزاری عمل
            می‌کند. ما
            <span class="text-primary font-bold">شریک استراتژیک</span> شما در
            دنیای تکنولوژی هستیم.
          </p>
        </div>

        <div
          class="grid grid-cols-1 md:grid-cols-3 w-full gap-8 md:gap-12 mt-10"
          dir="rtl"
        >
          <div
            class="flex flex-col items-center group p-8 rounded-[2.5rem] bg-background/40 border border-border/50 hover:border-primary/30 hover:bg-background/60 transition-all duration-500"
          >
            <div
              class="p-5 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500"
            >
              <UserRoundCheck :size="40" stroke-width="1.5" />
            </div>
            <div class="flex items-baseline gap-1">
              <span class="text-5xl font-black tracking-tighter tabular-nums"
                >+20</span
              >
            </div>
            <p class="text-muted-foreground font-bold mt-2">نیروی متخصص</p>
          </div>

          <div
            class="flex flex-col items-center group p-8 rounded-[2.5rem] bg-primary/5 border border-primary/20 md:-translate-y-8 shadow-xl shadow-primary/5 hover:bg-primary/10 transition-all duration-500"
          >
            <div
              class="p-5 rounded-2xl bg-primary text-primary-foreground mb-6 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-500"
            >
              <BriefcaseBusiness :size="40" stroke-width="1.5" />
            </div>
            <div class="flex items-baseline gap-1">
              <span class="text-5xl font-black tracking-tighter tabular-nums"
                >+5</span
              >
            </div>
            <p class="text-primary font-black mt-2">سال سابقه درخشان</p>
          </div>

          <div
            class="flex flex-col items-center group p-8 rounded-[2.5rem] bg-background/40 border border-border/50 hover:border-primary/30 hover:bg-background/60 transition-all duration-500"
          >
            <div
              class="p-5 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500"
            >
              <Smile :size="40" stroke-width="1.5" />
            </div>
            <div class="flex items-baseline gap-1">
              <span class="text-5xl font-black tracking-tighter tabular-nums"
                >+200</span
              >
            </div>
            <p class="text-muted-foreground font-bold mt-2">کارفرمای راضی</p>
          </div>
        </div>

        <div class="mt-10 md:mt-16">
          <Button
            size="lg"
            class="h-16 px-12 rounded-full text-lg font-black group gap-3 shadow-2xl shadow-primary/20 hover:scale-105 transition-all"
          >
            <NuxtLink to="/about-us"> درباره ما بیشتر بدانید </NuxtLink>
            <ArrowRight
              class="w-6 h-6 group-hover:-translate-x-2 transition-transform rotate-180"
            />
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tabular-nums {
  font-variant-numeric: tabular-nums;
}

/* انیمیشن ورود آرام برای کارت‌ها */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.grid > div {
  animation: fadeInUp 0.8s ease-out forwards;
}

/* تاخیر انیمیشن برای هر کارت */
.grid > div:nth-child(1) {
  animation-delay: 0.1s;
}
.grid > div:nth-child(2) {
  animation-delay: 0.3s;
}
.grid > div:nth-child(3) {
  animation-delay: 0.5s;
}
</style>
