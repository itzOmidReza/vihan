<template>
  <!-- body background, font …   -->
  <div class="min-h-screen bg-background flex items-center justify-center p-4">
    <!-- میشه یک هدر ساده یا آیکون مارک‌اِند اضافه کنید -->
    <header class="absolute top-4 right-4 z-10">
      <ModeToggle />
    </header>

    <!-- محتوا (pages) در اینجا قرار میاد -->
    <main class="w-full max-w-md space-y-8">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
// اگر می‌خواهید متغیرها یا کدهای اضافی استفاده کنید، اینجا بنویسید
import ModeToggle from "@/components/shared/ModeToggle.vue";
</script>

<style scoped>
/* برای اینکه بقیه‌ی صفحه (header/footer) در وسط قرار بگیرن */
.main {
  @apply mx-auto;
}
</style>
