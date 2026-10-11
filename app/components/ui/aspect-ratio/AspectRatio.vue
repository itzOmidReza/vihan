<script setup lang="ts">
import { AspectRatio } from "reka-ui"

interface Props {
  ratio?: number
  asChild?: boolean
  as?: any
}

const props = withDefaults(defineProps<Props>(), {
  ratio: 1,
})
</script>

<template>
  <AspectRatio
    v-slot="slotProps"
    data-slot="aspect-ratio"
    v-bind="props"
  >
    <slot v-bind="slotProps" />
  </AspectRatio>
</template>
