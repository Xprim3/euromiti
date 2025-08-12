<script setup lang="ts">
// App.vue is now just a router container
import NotificationSystem from './components/NotificationSystem.vue'
import Header from './components/layout/Header.vue'
</script>

<template>
  <div id="app">
    <!-- Mobile-First Header -->
    <Header />

    <!-- Router View -->
    <router-view />

    <!-- Global Notification System -->
    <NotificationSystem />
  </div>
</template>

<style scoped>
/* App-level styles */
</style>
