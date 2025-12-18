<script setup lang="ts">
import { Menu } from "lucide-vue-next";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import type ModeToggleVue from "../shared/ModeToggle.vue";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string }[] = [
  {
    title: "صفحه اصلی",
    href: "/",
  },
  {
    title: "سرویس ها",
    href: "/about-us",
  },
   {
    title: "تعرفه ها",
    href: "/about-us",
  },
   {
    title: "درباره ما",
    href: "/about-us",
  },
   {
    title: "تماس با ما",
    href: "/cantact-us",
  },
];
</script>

<template>
  <header class="flex items-center justify-between p-3 border-b z-10 ">
    <!-- mobile header -->
    <div class="lg:hidden flex items-center justify-start gap-2">
      <Sheet>
        <SheetTrigger><Menu /></SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle class="mt-5">Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      <SharedLogo />
    </div>
    <!-- pc header -->
    <div class="hidden lg:flex items-center gap-5">
      <SharedLogo />
      <NavigationMenu>
        <NavigationMenuList class="flex gap-3 flex-row-reverse">
          <NavigationMenuItem
            v-for="component in components"
            :key="component.title"
          >
            <NuxtLink :to="component.href"> {{ component.title }}</NuxtLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
    <SharedModeToggle />
  </header>
</template>
