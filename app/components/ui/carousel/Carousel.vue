<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import type { UnwrapRefCarouselApi } from "./interface"
import { cn } from "~/lib/utils"
import { useProvideCarousel } from "./useCarousel"

interface Props {
  opts?: Record<string, any>
  plugins?: any
  orientation?: "horizontal" | "vertical"
  class?: HTMLAttributes["class"]
}

const props = withDefaults(defineProps<Props>(), {
  orientation: "horizontal",
})

const emits = defineEmits<{
  (e: "init-api", payload: UnwrapRefCarouselApi): void
}>()

const { canScrollNext, canScrollPrev, carouselApi, carouselRef, orientation, scrollNext, scrollPrev } = useProvideCarousel(props, emits)

defineExpose({
  canScrollNext,
  canScrollPrev,
  carouselApi,
  carouselRef,
  orientation,
  scrollNext,
  scrollPrev,
})

function onKeyDown(event: KeyboardEvent) {
  const prevKey = props.orientation === "vertical" ? "ArrowUp" : "ArrowLeft"
  const nextKey = props.orientation === "vertical" ? "ArrowDown" : "ArrowRight"

  if (event.key === prevKey) {
    event.preventDefault()
    scrollPrev()

    return
  }

  if (event.key === nextKey) {
    event.preventDefault()
    scrollNext()
  }
}
</script>

<template>
  <div
    data-slot="carousel"
    :class="cn('relative', props.class)"
    role="region"
    aria-roledescription="carousel"
    tabindex="0"
    @keydown="onKeyDown"
  >
    <slot :can-scroll-next :can-scroll-prev :carousel-api :carousel-ref :orientation :scroll-next :scroll-prev />
  </div>
</template>
