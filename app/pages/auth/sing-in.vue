<script setup lang="ts">
/* ------------------------------------------------------------------ */
/* ۱. فعال‌کردن layout “auth” برای این صفحه                         */
/* ------------------------------------------------------------------ */
definePageMeta({
  layout: "auth",
});

/* ------------------------------------------------------------------ */
/* ۲. import کامپوننت‌های shadcn-nuxt و آیکون‌ها                    */
/* ------------------------------------------------------------------ */
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, Lock, Eye, EyeOff } from "lucide-vue-next";

/* ------------------------------------------------------------------ */
/* ۳. فرم ورود (reactive)                                            */
/* ------------------------------------------------------------------ */
const form = ref({
  email: "",
  password: "",
});
const showPass = ref(false);

/* ------------------------------------------------------------------ */
/* ۴. تابع ارسال (فقط مثال – به API واقعی وصل کنید)               */
/* ------------------------------------------------------------------ */
async function onSubmit() {
  // اعتبارسنجی ساده
  if (!form.value.email || !form.value.password) {
    alert("لطفاً تمام فیلدها را پر کنید.");
    return;
  }

  try {
    /* مثال: POST به /api/auth/login */
    // const res = await $fetch('/api/auth/login', { method: 'POST', body: form.value });

    alert("ورود موفق بود! 🚀");
  } catch (err) {
    console.error(err);
    alert("خطا در ورود. دوباره تلاش کنید.");
  }
}
</script>

<template>
  <section class="space-y-8">
    <!-- تیتر صفحه -->
    <h1 class="text-4xl font-black text-center text-foreground">
      ورود به حساب کاربری
    </h1>

    <!-- فرم ورود -->
    <form @submit.prevent="onSubmit" class="space-y-6">
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

      <!-- رمز عبور -->
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

      <!-- دکمه ورود -->
      <Button
        type="submit"
        class="w-full py-5 rounded-[1.25rem] text-xl font-black bg-primary hover:bg-primary/90 transition-colors shadow-lg focus-visible:ring ring-offset-background"
      >
        ورود به حساب کاربری
      </Button>
    </form>

    <!-- لینک ثبت‌نام -->
    <p class="text-center text-muted-foreground">
      هنوز حساب ندارید؟
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
/* اگر میخواید پس‌زمینه‌ی خاصی هم اضافه کنید، در layout تعریفش کنید */
/* برای مثال: استفاده از class bg-blur-shapes که قبلا تعریف شد */
</style>
