<script setup lang="ts">
import {
  Users,
  Cpu,
  Code2,
  Rocket,
  Github,
  Linkedin,
  FileDown, // اضافه شد
} from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const teamMembers = [
  {
    id: 1,
    name: "حسنا قهرمانی",
    role: "مدیر عامل و متخصص AI",
    image: "https://github.com/Hosnaqh9.png",
    bio: "مهندس یادگیری ماشین و سیستم های هوشمند",
    resumeUrl: "/resumes/hosna-ghahramani-cv.pdf",
    social: {
      github: "https://github.com/Hosnaqh9",
      linkedin: "https://www.linkedin.com/in/hosna-ghahramani",
    },
  },
  {
    id: 2,
    name: "مهدیه ولایی",
    role: "ارشد توسعه نرم‌افزار",
    image: "/team/member2.jpg",
    bio: "عاشق معماری سیستم‌های توزیع شده",
    resumeUrl: "/resumes/mahdiyeh-velayi-cv.pdf",
    social: {
      github: "https://github.com/mahdiyeh",
      linkedin: "https://www.linkedin.com/in/mahdiyeh-velayi",
    },
  },
  {
    id: 3,
    name: "فردین درکه",
    role: "متخصص هوش مصنوعی",
    image: "https://github.com/Im-Fardin.png",
    bio: "تمرکز بر روی بینایی ماشین و شبکه‌های عصبی.",
    resumeUrl: "/resumes/fardin-derege-cv.pdf",
    social: {
      github: "https://github.com/Im-Fardin",
      linkedin: "https://www.linkedin.com/in/fardin-deregeh/",
    },
  },
  {
    id: 4,
    name: "مهراب جلیلیان",
    role: "متخصص هوش مصنوعی",
    image: "/team/member4.jpg",
    bio: "خالق تجربه‌های بصری خیره‌کننده در دنیای دیجیتال.",
    resumeUrl: "/resumes/mehrab-jalilian-cv",
    social: { github: "#", linkedin: "#" },
  },
  {
    id: 5,
    name: "مرصاد کریمی ",
    role: "Embedded Linux Developer",
    image: "https://github.com/xmersad.png",
    bio: "علاقه‌مند به یکپارچه‌سازی سیستم‌ها",
    resumeUrl: "/resumes/Mersad-Karimi-cv.pdf",
    social: {
      github: "https://github.com/xmersad",
      linkedin: "https://www.linkedin.com/in/mersadk",
    },
  },
  {
    id: 6,
    name: "امیدرضا شهبازی",
    role: "توسعه‌دهنده Full-stack",
    image: "https://github.com/itzOmidReza.png",
    bio: "عاشق معماری سیستم‌های توزیع شده و Nuxt.",
    resumeUrl: "/resumes/omidreza-shahbazi-cv.pdf",
    social: {
      github: "https://github.com/itzOmidReza",
      linkedin: "https://www.linkedin.com/in/itzomidreza/",
    },
  },
  {
    id: 7,
    name: "مبینا یوسفی",
    role: "توسعه‌دهنده FrontEnd",
    image: "https://github.com/MobinaYousefi4.png",
    bio: "تمرکز بر رشد و تأثیر کسب و کار",
    resumeUrl: "/resumes/mobina-yousefi-cv.pdf",
    social: {
      github: "https://github.com/MobinaYousefi4",
      linkedin: "https://www.linkedin.com/in/itzomidreza/",
    },
  },
];
</script>

<template>
  <div class="container mx-auto px-4 py-16" dir="rtl">
    <section
      class="relative min-h-[70vh] flex items-center justify-center overflow-hidden mb-20 mt-10"
    >
      <div class="absolute inset-0 -z-10">
        <div
          class="absolute top-[10%] left-[15%] w-72 h-72 bg-primary/20 rounded-full blur-[120px] animate-pulse"
        ></div>
        <div
          class="absolute bottom-[10%] right-[15%] w-72 h-72 bg-blue-500/10 rounded-full blur-[120px]"
        ></div>
      </div>

      <div
        class="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        <div class="text-right space-y-8">
          <div
            class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
          >
            <span class="relative flex h-2 w-2">
              <span
                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"
              ></span>
              <span
                class="relative inline-flex rounded-full h-2 w-2 bg-primary"
              ></span>
            </span>
            نسل جدید نرم‌افزارهای هوشمند
          </div>

          <h1
            class="text-5xl md:text-7xl font-black tracking-tight leading-[1.2]"
          >
            تلاقی <span class="text-primary">خلاقیت انسانی</span> <br />
            و قدرت
            <span
              class="bg-linear-to-l from-blue-400 to-emerald-400 bg-clip-text text-transparent"
              >هوش مصنوعی</span
            >
          </h1>

          <p class="text-lg text-muted-foreground max-w-xl leading-relaxed">
            ما در <strong class="text-foreground">ویهان</strong>، فقط کد
            نمی‌زنیم؛ ما با استفاده از الگوریتم‌های پیشرفته یادگیری ماشین،
            محصولاتی می‌سازیم که فکر می‌کنند، یاد می‌گیرند و کسب‌وکار شما را به
            مقیاس جهانی می‌رسانند.
          </p>

          <div class="flex flex-wrap gap-4 pt-4">
            <a href="tel:+989185621567">
              <Button size="lg" class="rounded-full px-8 h-12 text-md gap-2">
                <Rocket class="w-5 h-5" />
                شروع همکاری
              </Button>
            </a>
            <NuxtLink to="/projects">
              <Button
                size="lg"
                variant="outline"
                class="rounded-full px-8 h-12 text-md cursor-pointer"
              >
                مشاهده پروژه‌ها
              </Button>
            </NuxtLink>
          </div>
        </div>

        <div class="relative hidden lg:flex justify-center items-center">
          <div class="relative w-full h-96 flex justify-center items-center">
            <div
              class="absolute w-64 h-64 border border-primary/30 rounded-3xl rotate-45 animate-[spin_10s_linear_infinite]"
            ></div>
            <div
              class="absolute w-80 h-80 border border-blue-500/20 rounded-[40px] -rotate-12 animate-[spin_15s_linear_infinite_reverse]"
            ></div>
            <div
              class="absolute w-40 h-40 bg-linear-to-br from-primary to-blue-600 rounded-full blur-2xl opacity-50"
            ></div>
            <div
              class="relative z-20 bg-background/80 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl"
            >
              <Cpu class="w-20 h-20 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
      <Card
        v-for="(item, idx) in [
          {
            icon: Cpu,
            title: 'هوش مصنوعی پیشرفته',
            desc: 'پیاده‌سازی مدل‌های یادگیری عمیق برای بهینه‌سازی فرآیندها.',
          },
          {
            icon: Code2,
            title: 'توسعه نرم‌افزار',
            desc: 'ساخت اپلیکیشن‌های مقیاس‌پذیر با جدیدترین تکنولوژی‌های روز.',
          },
          {
            icon: Rocket,
            title: 'سرعت و کیفیت',
            desc: 'تعهد ما تحویل پروژه‌ها در سریع‌ترین زمان با بالاترین استانداردهای جهانی است.',
          },
        ]"
        :key="idx"
        class="bg-secondary/20 border-none hover:bg-secondary/30 transition-colors"
      >
        <CardHeader>
          <component :is="item.icon" class="w-10 h-10 text-primary mb-2" />
          <CardTitle>{{ item.title }}</CardTitle>
          <CardDescription>{{ item.desc }}</CardDescription>
        </CardHeader>
      </Card>
    </div>

    <section class="py-12">
      <div class="flex items-center gap-3 mb-10 border-r-4 border-primary pr-4">
        <Users class="w-8 h-8 text-primary" />
        <h2 class="text-3xl font-bold">تیم متخصص ما</h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card
          v-for="member in teamMembers"
          :key="member.id"
          class="overflow-hidden group hover:shadow-2xl transition-all duration-500 border-muted/50 bg-card/50 backdrop-blur-sm"
        >
          <CardHeader class="flex flex-col items-center p-6 text-center">
            <Avatar
              class="w-28 h-28 mb-4 border-4 border-background shadow-xl group-hover:scale-105 transition-transform duration-300"
            >
              <!-- <AvatarImage :src="member.image" :alt="member.name" /> -->
              <AvatarFallback class="text-2xl">{{
                member.name[0]
              }}</AvatarFallback>
            </Avatar>

            <CardTitle
              class="text-xl mb-1 group-hover:text-primary transition-colors"
              >{{ member.name }}</CardTitle
            >
            <Badge variant="secondary" class="mb-4 font-normal">{{
              member.role
            }}</Badge>
            <p class="text-sm text-muted-foreground leading-relaxed min-h-15">
              {{ member.bio }}
            </p>
          </CardHeader>

          <CardContent class="flex flex-col items-center gap-4 pb-8">
            <div
              class="w-full h-px bg-linear-to-r from-transparent via-border to-transparent mb-2"
            ></div>

            <div class="flex items-center justify-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                class="rounded-full hover:bg-primary/10 hover:text-primary"
                asChild
              >
                <a :href="member.social.github" target="_blank"
                  ><Github class="w-4 h-4"
                /></a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                class="rounded-full hover:bg-primary/10 hover:text-primary"
                asChild
              >
                <a :href="member.social.linkedin" target="_blank"
                  ><Linkedin class="w-4 h-4"
                /></a>
              </Button>

              <Button
                variant="outline"
                size="sm"
                class="mr-2 gap-2 rounded-full border-primary/20 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300"
                asChild
              >
                <a :href="member.resumeUrl" download>
                  <FileDown class="w-4 h-4" />
                  <span class="text-xs">دریافت رزومه</span>
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  </div>
</template>
