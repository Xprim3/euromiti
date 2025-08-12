<script setup lang="ts">
import Card from 'primevue/card'
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 p-8"
  >
    <div class="max-w-4xl mx-auto">
      <Card class="shadow-2xl border-4 border-green-500">
        <template #title>
          <h1
            class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600"
          >
            🚀 About This Project
          </h1>
        </template>
        <template #content>
          <div class="space-y-6">
            <p class="text-lg text-gray-700">
              This is a modern Vue 3 application built with cutting-edge
              technologies:
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h3 class="font-bold text-blue-700 mb-2">Frontend</h3>
                <ul class="text-blue-600 space-y-1">
                  <li>• Vue 3 + TypeScript</li>
                  <li>• Vite build tool</li>
                  <li>• Tailwind CSS</li>
                </ul>
              </div>

              <div
                class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500"
              >
                <h3 class="font-bold text-purple-700 mb-2">UI Components</h3>
                <ul class="text-purple-600 space-y-1">
                  <li>• PrimeVue library</li>
                  <li>• Aura theme</li>
                  <li>• Responsive design</li>
                </ul>
              </div>
            </div>

            <div class="text-center">
              <router-link
                to="/"
                class="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg font-bold hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
              >
                ← Back to Home
              </router-link>
            </div>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>
