<!-- components/ui/avatar/AvatarFallback.vue -->
<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { AvatarFallback } from "reka-ui"
import { cn } from "~/lib/utils"

interface Props {
  delayMs?: number
  asChild?: boolean
  as?: any
  class?: HTMLAttributes["class"]
}

const props = defineProps<Props>()

const delegatedProps = reactiveOmit(props, "class")
</script>

<template>
  <AvatarFallback
    data-slot="avatar-fallback"
    v-bind="delegatedProps"
    :class="cn('bg-muted flex size-full items-center justify-center rounded-full', props.class)"
  >
    <slot />
  </AvatarFallback>
</template>
