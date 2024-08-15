<template>
  <div>
    <SearchBar />
    <Banner />
    <NavBar />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import Banner from '@/components/Banner.vue';
import SearchBar from '@/components/SearchBar.vue';
import NavBar from '@/components/NavBar.vue';
</script>

<style scoped>
</style>