<template>
  <NuxtLink to="/">
    <div class="flex items-center justify-start gap-2">
      <ClientOnly>
        <img
          src="/images/brands/Logo.png"
          alt="logo"
          class="dark:hidden h-8 w-auto"
        />
        <img
          src="/images/brands/Logo-dark.png"
          alt="logo"
          class="hidden dark:block h-8 w-auto"
        />

        <template #fallback>
          <div class="w-8 h-8 bg-gray-200 animate-pulse rounded-md"></div>
        </template>
      </ClientOnly>

      <span class="font-black text-xl">ویهان</span>
    </div>
  </NuxtLink>
</template>
