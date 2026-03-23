<script setup lang="ts">
import { Sparkles, ArrowLeft, Star, MousePointer2, Cpu } from "lucide-vue-next";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
</script>

<template>
  <section
    class="relative min-h-screen w-full flex items-center justify-center py-20 overflow-hidden bg-background transition-colors duration-500"
  >
    <div
      class="absolute inset-0 opacity-[0.15] dark:opacity-20 [background-image:radial-linear(var(--border)_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-linear(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
    ></div>
    <div
      class="absolute -top-40 -right-40 w-150 h-150 bg-primary/20 rounded-full blur-[120px] animate-pulse"
    ></div>
    <div
      class="absolute -bottom-40 -left-40 w-125 h-125 bg-blue-600/10 rounded-full blur-[120px]"
    ></div>

    <div
      class="container max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 z-20"
    >
      <div
        class="flex-1 flex flex-col items-start gap-8 text-right order-2 lg:order-1"
        dir="rtl"
      >
        <div
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md text-primary text-xs md:text-sm font-bold animate-in fade-in slide-in-from-top-4 duration-1000"
        >
          <div class="relative flex h-2 w-2">
            <span
              class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"
            ></span>
            <span
              class="relative inline-flex rounded-full h-2 w-2 bg-primary"
            ></span>
          </div>
          <Sparkles class="h-4 w-4" />
          <span>پیشرو در خدمات نسل چهارم هوش مصنوعی</span>
        </div>

        <h1
          class="font-black text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-foreground animate-in fade-in slide-in-from-right-8 duration-1000 delay-200"
        >
          کسب‌وکارت را با <br />
          <span class="relative inline-block">
            <span
              class="bg-linear-to-l from-primary via-blue-500 to-primary bg-clip-text text-transparent bg-size[200%_auto] animate-linear"
            >
              قدرت تکنولوژی
            </span>
            <svg
              class="absolute -bottom-2 left-0 w-full opacity-50"
              viewBox="0 0 300 12"
              fill="none"
            >
              <path
                d="M1 10.5C50 3 150 3 299 10.5"
                stroke="currentColor"
                class="text-primary"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </span>
          رشد بده
        </h1>

        <p
          class="text-muted-foreground text-lg md:text-xl max-w-xl leading-relaxed animate-in fade-in slide-in-from-right-12 duration-1000 delay-500"
        >
          ما با طراحی راهکارهای اختصاصی مبتنی بر AI، کسب‌وکار شما را به یک موتور
          هوشمند و خودکار تبدیل می‌کنیم.
        </p>

        <div
          class="flex flex-wrap gap-5 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700"
        >
          <a href="tel:+989185621567">
            <Button
              class="relative group h-16 px-10 rounded-full bg-primary text-primary-foreground overflow-hidden shadow-lg shadow-primary/25 transition-all hover:scale-105 active:scale-95"
            >
              <span
                class="relative z-10 flex items-center gap-2 text-lg font-bold"
              >
                دریافت مشاوره رایگان
                <ArrowLeft
                  class="w-5 h-5 group-hover:-translate-x-1 transition-transform"
                />
              </span>
              <div
                class="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"
              ></div>
            </Button>
          </a>
          <NuxtLink to="/projects">
            <Button
              variant="outline"
              class="h-16 px-10 rounded-full border-border text-foreground hover:bg-secondary transition-all gap-2 text-lg"
            >
              مشاهده پروژه‌ها
              <MousePointer2 class="w-4 h-4 text-muted-foreground" />
            </Button>
          </NuxtLink>
        </div>

        <div class="mt-4 animate-in fade-in duration-1000 delay-1000">
          <div
            class="flex items-center gap-4 p-2 pr-4 rounded-2xl bg-secondary/50 border border-border backdrop-blur-sm"
          >
            <div class="flex flex-row-reverse -space-x-3 space-x-reverse">
              <Avatar
                v-for="i in 4"
                :key="i"
                class="border-2 border-background w-10 h-10 ring-2 ring-primary/10"
              >
                <!-- <AvatarImage :src="`https://i.pravatar.cc/100?u=tech-${i}`" /> -->
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
            </div>
            <div class="h-8 w-px bg-border"></div>
            <div class="flex flex-col">
              <div class="flex items-center gap-1">
                <span class="text-foreground font-bold tracking-tighter text-sm"
                  >۱۳,۰۰۰+</span
                >
                <div class="flex">
                  <Star
                    v-for="i in 5"
                    :key="i"
                    class="w-3 h-3 fill-primary text-primary"
                  />
                </div>
              </div>
              <span class="text-[11px] text-muted-foreground font-medium"
                >مشتری که به ما اعتماد کردند</span
              >
            </div>
          </div>
        </div>
      </div>

      <div
        class="flex-1 relative w-full flex items-center justify-center lg:justify-end order-1 lg:order-2"
      >
        <div class="relative w-full max-w-137.5 aspect-square group">
          <svg
            viewBox="0 0 500 500"
            class="w-full h-full animate-float drop-shadow-[0_0_30px_rgba(var(--primary),0.3)]"
          >
            <circle
              cx="250"
              cy="250"
              r="60"
              class="fill-primary/20 stroke-primary animate-pulse"
              stroke-width="2"
            />
            <circle cx="250" cy="250" r="30" class="fill-primary" />

            <g
              class="stroke-primary/30"
              stroke-width="1.5"
              stroke-dasharray="4 4"
            >
              <line x1="250" y1="250" x2="100" y2="100" class="animate-dash" />
              <line x1="250" y1="250" x2="400" y2="100" />
              <line x1="250" y1="250" x2="400" y2="400" />
              <line x1="250" y1="250" x2="100" y2="400" />
            </g>

            <g class="fill-background stroke-primary" stroke-width="2">
              <circle cx="100" cy="100" r="15" class="animate-bounce-slow" />
              <circle cx="400" cy="100" r="20" class="animate-bounce-delayed" />
              <circle cx="400" cy="400" r="15" class="animate-bounce-slow" />
              <circle cx="100" cy="400" r="20" class="animate-bounce-delayed" />
            </g>

            <rect
              x="85"
              y="85"
              width="30"
              height="30"
              rx="8"
              class="fill-primary/10 stroke-primary animate-float-slow"
            />
            <path
              d="M380 80 L420 120 M420 80 L380 120"
              class="stroke-primary/60"
              stroke-width="3"
            />
          </svg>

          <div
            class="absolute top-10 -left-6 lg:-left-10 z-40 bg-background/60 backdrop-blur-2xl border border-border p-5 rounded-4xl shadow-2xl animate-float-delayed border-l-primary/50 border-l-4"
          >
            <div class="flex items-center gap-4">
              <div class="p-3 bg-primary/20 rounded-2xl">
                <Cpu class="w-6 h-6 text-primary animate-pulse" />
              </div>
              <div>
                <p
                  class="text-[10px] text-muted-foreground uppercase font-black tracking-widest"
                >
                  Core Status
                </p>
                <p class="font-bold text-sm text-foreground">
                  سیستم فعال (On-Air)
                </p>
              </div>
            </div>
          </div>

          <div
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-[95%] border border-primary/20 rounded-full animate-spin-slow opacity-20"
          ></div>
          <div
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 rounded-full blur-[100px] -z-10 opacity-40"
          ></div>
        </div>
      </div>
    </div>

    <div
      class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-20 hidden lg:block"
    >
      <div
        class="w-6 h-10 border-2 border-foreground rounded-full flex justify-center p-1"
      >
        <div class="w-1 h-2 bg-foreground rounded-full"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(2deg);
  }
}
@keyframes float-slow {
  0%,
  100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(-10px, -15px);
  }
}
@keyframes float-delayed {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
}
@keyframes linear {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}
@keyframes dash {
  to {
    stroke-dashoffset: -20;
  }
}
@keyframes spin-slow {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
@keyframes bounce-slow {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-linear {
  animation: gradient 6s linear infinite;
}
.animate-shimmer {
  animation: shimmer 2s infinite;
}
.animate-float {
  animation: float 6s ease-in-out infinite;
}
.animate-float-slow {
  animation: float-slow 4s ease-in-out infinite;
}
.animate-float-delayed {
  animation: float-delayed 5s ease-in-out infinite 0.5s;
}
.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}
.animate-dash {
  animation: dash 2s linear infinite;
}
.animate-bounce-slow {
  animation: bounce-slow 3s ease-in-out infinite;
}
.animate-bounce-delayed {
  animation: bounce-slow 3s ease-in-out infinite 1s;
}
</style>
