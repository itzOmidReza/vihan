<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { TooltipArrow, TooltipContent, TooltipPortal, useForwardPropsEmits } from "reka-ui"
import { cn } from "~/lib/utils"

defineOptions({
  inheritAttrs: false,
})

interface Props {
  side?: "top" | "right" | "bottom" | "left"
  sideOffset?: number
  align?: "start" | "center" | "end"
  alignOffset?: number
  avoidCollisions?: boolean
  collisionBoundary?: any
  collisionPadding?: any
  arrowPadding?: number
  sticky?: "partial" | "always"
  hideWhenDetached?: boolean
  asChild?: boolean
  as?: any
  class?: HTMLAttributes["class"]
}

const props = withDefaults(defineProps<Props>(), {
  sideOffset: 4,
})

const emits = defineEmits<{
  (e: "escapeKeyDown", event: KeyboardEvent): void
  (e: "pointerDownOutside", event: any): void
}>()

const delegatedProps = reactiveOmit(props, "class")
const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <TooltipPortal>
    <TooltipContent
      data-slot="tooltip-content"
      v-bind="{ ...forwarded, ...$attrs }"
      :class="cn('bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance', props.class)"
    >
      <slot />

      <TooltipArrow class="bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-xs" />
    </TooltipContent>
  </TooltipPortal>
</template>
