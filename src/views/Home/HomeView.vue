<script setup>
import Hero from "@/components/Hero.vue";
import HomeCard from "@/components/HomeCard.vue";
import JobListing from "@/components/JobListing.vue";
</script>
<template>
  <Hero />
  <HomeCard />
  <JobListing :limit="3" :showMore="true" />
</template>
