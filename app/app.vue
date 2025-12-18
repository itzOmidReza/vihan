<script setup lang="ts">

useHead({
  title: 'Hosna Q',
  meta: [
    { name: 'description', content: 'My amazing site.' },
  ],
   htmlAttrs: {
        lang: 'fa',
        dir:'rtl',
      },
  bodyAttrs: {
    class: 'overflow-x-hidden',
  },
  script: [{ innerHTML: 'console.log(\'Hello world\')' }],
})

</script>

<template>
  <NuxtLayout>
    <NuxtRouteAnnouncer />
       <NuxtPage />
  </NuxtLayout>
</template>
