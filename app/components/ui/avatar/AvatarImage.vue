<!-- components/ui/avatar/AvatarImage.vue -->
<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { AvatarImage } from "reka-ui"
import { cn } from "~/lib/utils"

interface Props {
  src?: string
  alt?: string
  asChild?: boolean
  as?: any
  class?: HTMLAttributes["class"]
}

const props = withDefaults(defineProps<Props>(), {
  src: "",
})

const delegatedProps = reactiveOmit(props, "class")
</script>

<template>
  <AvatarImage
    v-if="props.src"
    data-slot="avatar-image"
    v-bind="delegatedProps"
    :class="cn('aspect-square size-full object-cover', props.class)"
  >
    <slot />
  </AvatarImage>
</template>
