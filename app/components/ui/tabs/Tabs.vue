<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { TabsRoot, useForwardPropsEmits } from "reka-ui"
import { cn } from "~/lib/utils"

interface Props {
  defaultValue?: string | number
  modelValue?: string | number
  orientation?: "horizontal" | "vertical"
  dir?: "ltr" | "rtl"
  activationMode?: "automatic" | "manual"
  asChild?: boolean
  as?: any
  class?: HTMLAttributes["class"]
}

const props = defineProps<Props>()
const emits = defineEmits<{
  (e: "update:modelValue", payload: string | number): void
}>()

const delegatedProps = reactiveOmit(props, "class")
const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <TabsRoot
    v-slot="slotProps"
    data-slot="tabs"
    v-bind="forwarded"
    :class="cn('flex flex-col gap-2', props.class)"
  >
    <slot v-bind="slotProps" />
  </TabsRoot>
</template>
