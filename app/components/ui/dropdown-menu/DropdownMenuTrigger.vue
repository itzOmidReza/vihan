<script setup lang="ts">
import { DropdownMenuTrigger, useForwardProps } from "reka-ui"

interface Props {
  disabled?: boolean
  asChild?: boolean
  as?: any
}

const props = defineProps<Props>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <DropdownMenuTrigger
    data-slot="dropdown-menu-trigger"
    v-bind="forwardedProps"
  >
    <slot />
  </DropdownMenuTrigger>
</template>
