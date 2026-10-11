<script setup lang="ts">
import {
  DropdownMenuRadioGroup,
  useForwardPropsEmits,
} from "reka-ui"

interface Props {
  modelValue?: any
  asChild?: boolean
  as?: any
}

const props = defineProps<Props>()
const emits = defineEmits<{
  (e: "update:modelValue", payload: any): void
}>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <DropdownMenuRadioGroup
    data-slot="dropdown-menu-radio-group"
    v-bind="forwarded"
  >
    <slot />
  </DropdownMenuRadioGroup>
</template>
