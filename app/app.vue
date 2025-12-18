<script setup lang="ts">
import { Banana } from 'lucide-vue-next';
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
       <Button> <Banana /> Click me</Button>
       <hr class="my-10">
       <ModeToggle/>
  </div>
</template>
