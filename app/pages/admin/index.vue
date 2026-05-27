<script setup lang="ts">
import { Users, BarChart2, ShoppingBag, DollarSign } from "lucide-vue-next";

definePageMeta({
  layout: "admin",
});

// داده نمونه برای ویجت‌ها
const stats = [
  {
    title: "کاربران جدید",
    value: "۱,۲۴۵",
    icon: Users,
    change: "+8%",
  },
  {
    title: "فروش امروز",
    value: "۳۵,۰۰۰,۰۰۰ تومان",
    icon: DollarSign,
    change: "+12%",
  },
  {
    title: "سفارشات",
    value: "۳۴۷",
    icon: ShoppingBag,
    change: "+3%",
  },
  {
    title: "بازدید امروز",
    value: "۹,۵۱۰",
    icon: BarChart2,
    change: "+18%",
  },
];
</script>

<template>
  <div class="space-y-8">
    <!-- عنوان صفحه -->
    <div>
      <h1 class="text-3xl font-extrabold">داشبورد</h1>
      <p class="text-muted-foreground mt-1">
        خلاصه‌ای از وضعیت امروز سیستم مدیریت.
      </p>
    </div>

    <!-- ویجت‌ها -->
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      <div
        v-for="item in stats"
        :key="item.title"
        class="bg-card border rounded-2xl p-6 shadow-sm hover:shadow-md transition"
      >
        <div class="flex items-center justify-between">
          <component :is="item.icon" class="w-8 h-8 text-primary" />
          <span class="text-sm text-green-600 font-medium">{{
            item.change
          }}</span>
        </div>

        <div class="mt-4">
          <p class="text-muted-foreground text-sm">{{ item.title }}</p>
          <p class="text-2xl font-bold mt-1">{{ item.value }}</p>
        </div>
      </div>
    </div>

    <!-- بخش نمودار (Chart Placeholder) -->
    <div class="bg-card border rounded-2xl p-6 shadow-sm">
      <div class="flex items-center justify-between mb-4">
        <h2 class="font-semibold text-xl">نمودار فعالیت ماهانه</h2>
        <p class="text-muted-foreground text-sm">
          به‌زودی نمودار واقعی اضافه می‌شود
        </p>
      </div>

      <div
        class="h-64 bg-muted rounded-xl flex items-center justify-center text-muted-foreground"
      >
        جای نمودار
      </div>
    </div>

    <!-- بخش لیست آخرین فعالیت‌ها -->
    <div class="bg-card border rounded-2xl p-6 shadow-sm">
      <h2 class="font-semibold text-xl mb-4">آخرین فعالیت‌ها</h2>

      <ul class="space-y-4">
        <li class="flex items-center justify-between border-b pb-3">
          <span>کاربر جدید ثبت‌نام کرد</span>
          <span class="text-sm text-muted-foreground">۲ ساعت پیش</span>
        </li>
        <li class="flex items-center justify-between border-b pb-3">
          <span>یک سفارش جدید ثبت شد</span>
          <span class="text-sm text-muted-foreground">۵ ساعت پیش</span>
        </li>
        <li class="flex items-center justify-between">
          <span>کاربر علی رضایی رمز خود را تغییر داد</span>
          <span class="text-sm text-muted-foreground">۱ روز پیش</span>
        </li>
      </ul>
    </div>
  </div>
</template>
