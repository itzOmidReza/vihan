<script setup lang="ts">
import { DropdownMenuGroup } from "reka-ui"

interface Props {
  asChild?: boolean
  as?: any
}

const props = defineProps<Props>()
</script>

<template>
  <DropdownMenuGroup
    data-slot="dropdown-menu-group"
    v-bind="props"
  >
    <slot />
  </DropdownMenuGroup>
</template>
