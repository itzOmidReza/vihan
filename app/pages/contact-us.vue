<script setup lang="ts">
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  Linkedin,
  Instagram,
  Twitter,
} from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    id: "email",
    title: "ایمیل ما",
    value: "info@vihanco.ir",
    icon: Mail,
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    id: "phone",
    title: "شماره تماس",
    value: "۰۲۱-۱۲۳۴۵۶۷۸",
    icon: Phone,
    color: "bg-emerald-500/10 text-emerald-500",
  },
  {
    id: "hours",
    title: "ساعات کاری",
    value: "شنبه تا چهارشنبه ۹ تا ۱۸",
    icon: Clock,
    color: "bg-purple-500/10 text-purple-500",
  },
];

const socialLinks = [
  { id: "linkedin", icon: Linkedin, href: "#" },
  { id: "instagram", icon: Instagram, href: "#" },
  { id: "twitter", icon: Twitter, href: "#" },
];
</script>

<template>
  <section
    class="relative min-h-screen pt-32 pb-20 overflow-hidden bg-background flex items-center"
    dir="rtl"
  >
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
      <div
        class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]"
      ></div>
      <div
        class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]"
      ></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 w-full">
      <div class="text-center mb-20 space-y-6">
        <h1
          class="text-4xl md:text-7xl font-black tracking-tighter text-foreground"
        >
          بیا درباره
          <span
            class="text-primary underline underline-offset-12 decoration-primary/20"
            >ایده‌ات</span
          >
          گپ بزنیم
        </h1>
        <p
          class="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
        >
          تیم ما آماده است تا پیچیده‌ترین چالش‌های فنی شما را به راهکارهای
          هوشمند تبدیل کند.
        </p>
      </div>

      <div
        class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-stretch"
      >
        <div class="lg:col-span-5 space-y-6">
          <div class="grid grid-cols-1 gap-4">
            <div
              v-for="info in contactInfo"
              :key="info.id"
              class="flex items-center gap-5 p-5 rounded-4xl bg-card border border-border/50 backdrop-blur-md transition-all hover:border-primary/40 hover:translate-x-2"
            >
              <div :class="['p-4 rounded-2xl shrink-0', info.color]">
                <component :is="info.icon" class="w-6 h-6" />
              </div>
              <div class="text-right">
                <p class="text-xs text-muted-foreground font-bold mb-1">
                  {{ info.title }}
                </p>
                <p class="text-lg font-black text-foreground">
                  {{ info.value }}
                </p>
              </div>
            </div>
          </div>

          <div
            class="p-8 rounded-[2.5rem] bg-secondary/30 border border-border/50 relative overflow-hidden group"
          >
            <div class="relative z-10 space-y-6 text-right">
              <div class="flex items-center gap-3 text-primary">
                <MapPin class="w-6 h-6" />
                <span class="font-black text-2xl">دفتر مرکزی</span>
              </div>
              <p class="text-foreground/80 leading-loose text-lg font-medium">
                کرمانشاه، خیابان شهیدبهشتی، پارک علم و فناوری
              </p>

              <div class="flex gap-3 pt-4">
                <Button
                  v-for="social in socialLinks"
                  :key="social.id"
                  variant="secondary"
                  size="icon"
                  class="rounded-xl hover:bg-primary hover:text-white transition-all w-10 h-10 shadow-sm border border-border/40 cursor-pointer"
                >
                  <component :is="social.icon" class="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-7">
          <div
            class="h-full p-8 md:p-12 rounded-[3.5rem] bg-card border border-border shadow-2xl shadow-primary/5 relative"
          >
            <form class="space-y-8" @submit.prevent>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="space-y-3 text-right">
                  <label class="text-sm font-black pr-2 text-foreground/70"
                    >نام کامل</label
                  >
                  <Input
                    placeholder="نام شما"
                    class="h-16 rounded-[1.25rem] bg-background/50 border-border/60 focus:border-primary text-lg px-6 mt-1"
                  />
                </div>
                <div class="space-y-3 text-right">
                  <label class="text-sm font-black pr-2 text-foreground/70"
                    >شماره موبایل</label
                  >
                  <Input
                    placeholder="۰۹۱۲"
                    class="h-16 rounded-[1.25rem] bg-background/50 border-border/60 focus:border-primary text-lg px-6 text-left mt-1"
                  />
                </div>
              </div>

              <div class="space-y-3 text-right">
                <label class="text-sm font-black pr-2 text-foreground/70"
                  >موضوع پروژه</label
                >
                <Input
                  placeholder="در چه حوزه‌ای نیاز به همکاری دارید؟"
                  class="h-16 rounded-[1.25rem] bg-background/50 border-border/60 focus:border-primary text-lg px-6 mt-1"
                />
              </div>

              <div class="space-y-3 text-right">
                <label class="text-sm font-black pr-2 text-foreground/70"
                  >توضیحات تکمیلی</label
                >
                <Textarea
                  placeholder="خلاصه‌ای از ایده خود را بنویسید..."
                  class="min-h-45 rounded-3xl bg-background/50 border-border/60 focus:border-primary p-6 text-lg mt-1"
                />
              </div>

              <Button
                size="lg"
                class="w-full h-16 rounded-3xl text-xl font-black gap-4 group shadow-2xl shadow-primary/30 transition-all hover:scale-[1.02] cursor-pointer"
              >
                شروع گفتگو با مشاوران
                <Send
                  class="w-6 h-6 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500"
                />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (min-width: 1024px) {
  .order-2 {
    order: 0;
  }
  .order-1 {
    order: 0;
  }
}

input:focus,
textarea:focus {
  background-color: hsl(var(--background));
  transform: translateY(-2px);
  transition: all 0.3s ease;
}
</style>
