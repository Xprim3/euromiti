<script setup lang="ts">
// App.vue is now just a router container
import NotificationSystem from './components/NotificationSystem.vue'
import Header from './components/layout/Header.vue'
</script>

<template>
  <div id="app" class="bg-white min-h-screen">
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
#app {
  background-color: #ffffff !important;
  min-height: 100vh;
  width: 100%;
}

/* Ensure global white background */
:deep(html), :deep(body) {
  background-color: #ffffff !important;
}
</style>
