<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import {
  DropdownMenuContent,
  DropdownMenuPortal,
  useForwardPropsEmits,
} from "reka-ui"
import { cn } from "~/lib/utils"

defineOptions({
  inheritAttrs: false,
})

interface Props {
  sideOffset?: number
  side?: "top" | "right" | "bottom" | "left"
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

const props = withDefaults(
  defineProps<Props>(),
  {
    sideOffset: 4,
  },
)
const emits = defineEmits<{
  (e: "escapeKeyDown", event: KeyboardEvent): void
  (e: "pointerDownOutside", event: any): void
  (e: "focusOutside", event: any): void
  (e: "interactOutside", event: any): void
  (e: "openAutoFocus", event: Event): void
  (e: "closeAutoFocus", event: Event): void
}>()

const delegatedProps = reactiveOmit(props, "class")

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <DropdownMenuPortal>
    <DropdownMenuContent
      data-slot="dropdown-menu-content"
      v-bind="{ ...$attrs, ...forwarded }"
      :class="cn('bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--reka-dropdown-menu-content-available-height) min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md', props.class)"
    >
      <slot />
    </DropdownMenuContent>
  </DropdownMenuPortal>
</template>
