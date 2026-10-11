<script setup lang="ts">
import { DialogClose } from "reka-ui"

interface Props {
  asChild?: boolean
  as?: any
}

const props = defineProps<Props>()
</script>

<template>
  <DialogClose
    data-slot="sheet-close"
    v-bind="props"
  >
    <slot />
  </DialogClose>
</template>
