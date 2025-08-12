<script setup lang="ts">
// App.vue is now just a router container
import NotificationSystem from './components/NotificationSystem.vue'
import LanguageSwitcher from './components/LanguageSwitcher.vue'
</script>

<template>
  <div id="app">
    <!-- Navigation Header -->
    <nav
      class="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
    >
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between items-center py-4">
          <div class="flex items-center space-x-4">
            <img src="/vite.svg" class="h-8 w-8" alt="Vite logo" />
            <h1 class="text-xl font-bold">Euromiti</h1>
          </div>

          <div class="flex items-center space-x-6">
            <router-link
              to="/"
              class="hover:text-blue-200 transition-colors duration-200"
              active-class="text-blue-200 font-semibold"
            >
              🏠 {{ $t('navigation.home') }}
            </router-link>
            <router-link
              to="/about"
              class="hover:text-blue-200 transition-colors duration-200"
              active-class="text-blue-200 font-semibold"
            >
              ℹ️ {{ $t('navigation.about') }}
            </router-link>
            
            <!-- Language Switcher -->
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>

    <!-- Router View -->
    <router-view />

    <!-- Global Notification System -->
    <NotificationSystem />
  </div>
</template>

<style scoped>
/* Navigation styles */
</style>
