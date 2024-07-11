<script setup>
import Hero from '@/components/Hero.vue'
import Home from '@/components/Home.vue'
import Jobs from '@/components/JobListings.vue'
</script>

<template>
  <Hero />
  <Home />
  <Jobs :limit="3" :showButton="true" />
</template>
