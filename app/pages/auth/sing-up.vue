<script setup lang="ts">
import { ref } from "vue";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { User, Mail, Lock, Eye, EyeOff } from "lucide-vue-next";

// ۱. متا‑دیتای صفحه
definePageMeta({
  layout: "auth",
});

// ۲. فرم (reactive)
const form = ref({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
});
const showPass = ref(false);

// ۳. ارسال (فقط مثال)
async function onSubmit() {
  if (form.value.password !== form.value.confirmPassword) {
    alert("کلمه عبور مطابقت ندارد!");
    return;
  }
  // …به API خود متصل بشین
  alert("ثبت نام موفق بود! 🚀");
}
</script>

<template>
  <!-- <section> درون layout قرار دارد؛ فقط محتوا را تعریف می‌کنیم -->
  <section class="space-y-8">
    <h1 class="text-4xl font-black text-center text-foreground">
      ایجاد حساب کاربری
    </h1>

    <form @submit.prevent="onSubmit" class="space-y-6">
      <!-- نام & نام خانوادگی (یک ردیف ۲ ستون) -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label for="firstName">نام</Label>
          <Input
            id="firstName"
            v-model="form.firstName"
            placeholder="مثال: محمد"
            required
            icon-left="{ User }"
          />
        </div>

        <div>
          <Label for="lastName">نام خانوادگی</Label>
          <Input
            id="lastName"
            v-model="form.lastName"
            placeholder="مثال: رضایی"
            required
            icon-left="{ User }"
          />
        </div>
      </div>

      <!-- ایمیل -->
      <div>
        <Label for="email">ایمیل</Label>
        <Input
          id="email"
          type="email"
          v-model="form.email"
          placeholder="info@example.com"
          required
          icon-left="{ Mail }"
        />
      </div>

      <!-- کلمه عبور -->
      <div class="relative">
        <Label for="password">کلمه عبور</Label>
        <Input
          id="password"
          :type="showPass ? 'text' : 'password'"
          v-model="form.password"
          placeholder="********"
          required
          icon-left="{ Lock }"
          icon-right="{ showPass ? EyeOff : Eye }"
          @click:icon-right="showPass = !showPass"
        />
      </div>

      <!-- تایید کلمه عبور -->
      <div class="relative">
        <Label for="confirmPassword">تایید کلمه عبور</Label>
        <Input
          id="confirmPassword"
          :type="showPass ? 'text' : 'password'"
          v-model="form.confirmPassword"
          placeholder="********"
          required
          icon-left="{ Lock }"
          icon-right="{ showPass ? EyeOff : Eye }"
          @click:icon-right="showPass = !showPass"
        />
      </div>

      <!-- دکمه ثبت‌نام -->
      <Button
        type="submit"
        class="w-full py-5 rounded-[1.25rem] text-xl font-black bg-primary hover:bg-primary/90 transition-colors shadow-lg focus-visible:ring ring-offset-background"
      >
        ایجاد حساب کاربری
      </Button>
    </form>

    <!-- لینک به صفحه ورود -->
    <p class="text-center text-muted-foreground">
      قبلاً حساب دارید؟
      <NuxtLink
        to="/auth/sing-in"
        class="font-semibold text-primary hover:underline"
      >
        وارد شوید
      </NuxtLink>
    </p>
  </section>
</template>

<style scoped>
/* ---------------------------------------------------------- */
/*   پس‌زمینه “غولای” و “blur” برای section (فقط در layout) */
/* ---------------------------------------------------------- */
section {
  @apply relative;
}

/* شکل‌های بزرگ blur – در layout اضافه می‌کنیم یا اینجا */
@layer utilities {
  .bg-blur-shapes::before,
  .bg-blur-shapes::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    filter: blur(120px);
    z-index: -1;
  }
  .bg-blur-shapes::before {
    width: 200px;
    height: 200px;
    background: rgba(139, 119, 255, 0.2); /* primary color */
    top: -30%;
    left: -10%;
  }
  .bg-blur-shapes::after {
    width: 150px;
    height: 150px;
    background: rgba(0, 255, 200, 0.15);
    bottom: -25%;
    right: -15%;
  }
}
</style>
