<!-- app/pages/index.vue -->
<script setup lang="ts">
import HeroSection from '~/components/home/HeroSection.vue'
import ServicesSection from '~/components/home/ServicesSection.vue'
import CapabilitiesSection from '~/components/home/CapabilitiesSection.vue'
import ProjectsSection from '~/components/home/ProjectsSection.vue'
import StatsSection from '~/components/home/StatsSection.vue'
import TestimonialsSection from '~/components/home/TestimonialsSection.vue'
import CtaSection from '~/components/home/CtaSection.vue'
</script>

<template>
  <div class="relative overflow-hidden space-y-6">
    <HeroSection />
    <ServicesSection />
    <CapabilitiesSection />
    <ProjectsSection />
    <StatsSection />
    <TestimonialsSection />
    <CtaSection />
  </div>
</template>
