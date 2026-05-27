<script setup lang="ts">
import { Menu, LogOut, User, Settings } from "lucide-vue-next";
import { ref } from "vue";

const sidebarOpen = ref(false);

const menuItems = [
  { label: "داشبورد", icon: User, to: "/admin" },
  { label: "کاربران", icon: User, to: "/admin/users" },
  { label: "تنظیمات", icon: Settings, to: "/admin/settings" },
];
</script>

<template>
  <div class="h-screen flex bg-muted/30">
    <!-- Sidebar -->
    <aside
      :class="[
        'fixed md:static z-40 h-full w-72 bg-card border-r shadow-xl transition-transform',
        sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0',
      ]"
    >
      <div class="p-6 border-b">
        <h2 class="text-2xl font-extrabold">پنل ادمین</h2>
      </div>

      <!-- Menu -->
      <nav class="p-4 space-y-2">
        <NuxtLink
          v-for="item in menuItems"
          :key="item.label"
          :to="item.to"
          class="flex items-center gap-3 p-3 rounded-xl text-lg transition hover:bg-primary/10"
        >
          <component :is="item.icon" class="w-5 h-5" />
          {{ item.label }}
        </NuxtLink>
      </nav>

      <!-- Footer -->
      <div class="absolute bottom-4 w-full p-4">
        <button
          class="flex items-center gap-3 w-full p-3 text-left rounded-xl hover:bg-destructive/10 text-destructive transition"
        >
          <LogOut class="w-5 h-5" />
          خروج
        </button>
      </div>
    </aside>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col">
      <!-- Header -->
      <header
        class="h-16 bg-background border-b flex items-center justify-between px-5 shadow-sm"
      >
        <button
          @click="sidebarOpen = !sidebarOpen"
          class="md:hidden p-2 rounded-lg hover:bg-muted transition"
        >
          <Menu class="w-6 h-6" />
        </button>

        <div class="font-semibold">بخش مدیریت</div>

        <div class="flex items-center gap-4">
          <User class="w-6 h-6" />
          <div><SharedModeToggle /></div>
        </div>
      </header>

      <!-- Page Content -->
      <main class="p-6 overflow-y-auto">
        <slot />
      </main>
    </div>
  </div>
</template>

<style scoped>
/* می‌توانی در صورت نیاز این قسمت را گسترش بدهی */
</style>
