<script setup lang="ts">
import { TooltipTrigger } from "reka-ui"

interface Props {
  asChild?: boolean
  as?: any
}

const props = defineProps<Props>()
</script>

<template>
  <TooltipTrigger
    data-slot="tooltip-trigger"
    v-bind="props"
  >
    <slot />
  </TooltipTrigger>
</template>
