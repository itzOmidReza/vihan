<script setup lang="ts">
import { ref } from "vue";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { User, Mail, Lock, Eye, EyeOff } from "lucide-vue-next";

definePageMeta({
  layout: "auth",
});

const form = ref({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
});

const showPass = ref(false);

async function onSubmit() {
  if (form.value.password !== form.value.confirmPassword) {
    alert("کلمه عبور با تکرار آن یکسان نیست!");
    return;
  }
  alert("ثبت‌نام با موفقیت انجام شد! 🎉");
}
</script>

<template>
  <section class="max-w-xl mx-auto space-y-8 animate-fadeIn background">
    <!-- عنوان -->
    <div class="text-center space-y-2">
      <h1 class="text-4xl font-extrabold text-foreground">ایجاد حساب کاربری</h1>
      <p class="text-muted-foreground">
        لطفاً اطلاعات خود را با دقت وارد کنید.
      </p>
    </div>

    <!-- کارت فرم -->
    <div
      class="bg-card border rounded-2xl shadow-xl px-8 py-10 space-y-6 backdrop-blur-sm"
    >
      <form @submit.prevent="onSubmit" class="space-y-6">
        <!-- نام و نام خانوادگی -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="space-y-2">
            <Label for="firstName">نام</Label>
            <Input
              id="firstName"
              v-model="form.firstName"
              required
              placeholder="مثال: محمد"
              icon-left="{ User }"
              class="h-12 text-lg"
            />
          </div>

          <div class="space-y-2">
            <Label for="lastName">نام خانوادگی</Label>
            <Input
              id="lastName"
              v-model="form.lastName"
              required
              placeholder="مثال: رضایی"
              icon-left="{ User }"
              class="h-12 text-lg"
            />
          </div>
        </div>

        <!-- ایمیل -->
        <div class="space-y-2">
          <Label for="email">ایمیل</Label>
          <Input
            id="email"
            type="email"
            v-model="form.email"
            required
            placeholder="info@example.com"
            icon-left="{ Mail }"
            class="h-12 text-lg"
          />
        </div>

        <!-- پسورد -->
        <div class="space-y-2 relative">
          <Label for="password">کلمه عبور</Label>
          <Input
            id="password"
            :type="showPass ? 'text' : 'password'"
            v-model="form.password"
            required
            placeholder="********"
            icon-left="{ Lock }"
            icon-right="{ showPass ? EyeOff : Eye }"
            @click:icon-right="showPass = !showPass"
            class="h-12 text-lg"
          />
        </div>

        <!-- تایید پسورد -->
        <div class="space-y-2 relative">
          <Label for="confirmPassword">تکرار کلمه عبور</Label>
          <Input
            id="confirmPassword"
            :type="showPass ? 'text' : 'password'"
            v-model="form.confirmPassword"
            required
            placeholder="********"
            icon-left="{ Lock }"
            icon-right="{ showPass ? EyeOff : Eye }"
            @click:icon-right="showPass = !showPass"
            class="h-12 text-lg"
          />
        </div>

        <!-- دکمه ثبت‌نام -->
        <Button
          type="submit"
          class="w-full h-12 text-lg font-extrabold rounded-xl shadow-lg bg-primary hover:bg-primary/90 transition-all"
        >
          ایجاد حساب
        </Button>
      </form>
    </div>

    <!-- لینک ورود -->
    <p class="text-center text-sm text-muted-foreground">
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
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fadeIn {
  animation: fadeIn 0.45s ease-out;
}
</style>
