<!-- components/ui/avatar/Avatar.vue -->
<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { AvatarRoot } from "reka-ui"
import { cn } from "~/lib/utils"

interface Props {
  asChild?: boolean
  as?: any
  class?: HTMLAttributes["class"]
}

const props = defineProps<Props>()
const delegatedProps = reactiveOmit(props, "class")
</script>

<template>
  <AvatarRoot
    data-slot="avatar"
    v-bind="delegatedProps"
    :class="cn('relative flex size-8 shrink-0 overflow-hidden rounded-full', props.class)"
  >
    <slot />
  </AvatarRoot>
</template>
