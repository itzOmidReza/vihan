<script setup lang="ts">
definePageMeta({
  layout: "auth",
});

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, Lock, Eye, EyeOff } from "lucide-vue-next";

const form = ref({
  email: "",
  password: "",
});
const showPass = ref(false);

async function onSubmit() {
  if (!form.value.email || !form.value.password) {
    alert("لطفاً همه فیلدها را پر کنید.");
    return;
  }

  try {
    alert("ورود موفق! 🚀");
  } catch (err) {
    console.error(err);
    alert("خطا در ورود. لطفاً دوباره تلاش کنید.");
  }
}
</script>

<template>
  <section class="max-w-md mx-auto space-y-8 animate-fadeIn">
    <!-- عنوان -->
    <div class="text-center space-y-2">
      <h1 class="text-4xl font-extrabold text-foreground">خوش برگشتی 👋</h1>
      <p class="text-muted-foreground">لطفاً وارد حساب کاربری خود شوید.</p>
    </div>

    <!-- کارت فرم -->
    <div
      class="bg-card border rounded-2xl shadow-xl px-8 py-10 space-y-6 backdrop-blur-sm"
    >
      <form @submit.prevent="onSubmit" class="space-y-6">
        <!-- ایمیل -->
        <div class="space-y-2">
          <Label for="email">ایمیل</Label>
          <Input
            id="email"
            type="email"
            v-model="form.email"
            placeholder="your@email.com"
            required
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
            placeholder="********"
            required
            icon-left="{ Lock }"
            icon-right="{ showPass ? EyeOff : Eye }"
            @click:icon-right="showPass = !showPass"
            class="h-12 text-lg"
          />
        </div>

        <!-- دکمه ورود -->
        <Button
          type="submit"
          class="w-full h-12 text-lg font-extrabold rounded-xl shadow-lg bg-primary hover:bg-primary/90 transition-all"
        >
          ورود به حساب
        </Button>
      </form>
    </div>

    <!-- لینک ثبت‌نام -->
    <p class="text-center text-sm text-muted-foreground">
      حساب ندارید؟
      <NuxtLink
        to="/auth/sing-up"
        class="font-semibold text-primary hover:underline"
      >
        ثبت‌نام کنید
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
  animation: fadeIn 0.4s ease-out;
}
</style>
