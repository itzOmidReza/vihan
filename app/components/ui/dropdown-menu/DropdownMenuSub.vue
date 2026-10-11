<script setup lang="ts">
import {
  DropdownMenuSub,
  useForwardPropsEmits,
} from "reka-ui"

interface Props {
  defaultOpen?: boolean
  open?: boolean
}

const props = defineProps<Props>()
const emits = defineEmits<{
  (e: "update:open", payload: boolean): void
}>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <DropdownMenuSub v-slot="slotProps" data-slot="dropdown-menu-sub" v-bind="forwarded">
    <slot v-bind="slotProps" />
  </DropdownMenuSub>
</template>
