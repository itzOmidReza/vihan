<script setup lang="ts">
import { TooltipRoot, useForwardPropsEmits } from "reka-ui"

interface Props {
  defaultOpen?: boolean
  open?: boolean
  delayDuration?: number
  disableHoverableContent?: boolean
  disableClosingTrigger?: boolean
  disabled?: boolean
  ignoreNonKeyboardFocus?: boolean
}

const props = defineProps<Props>()
const emits = defineEmits<{
  (e: "update:open", payload: boolean): void
}>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <TooltipRoot
    v-slot="slotProps"
    data-slot="tooltip"
    v-bind="forwarded"
  >
    <slot v-bind="slotProps" />
  </TooltipRoot>
</template>
