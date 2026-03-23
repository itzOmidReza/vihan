<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/nuxt";
</script>
<template>
  <div>
    <marketing-client-header />
    <slot />
    <SpeedInsights />
    <marketing-client-footer />
  </div>
</template>
