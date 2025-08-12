<script setup lang="ts">
import HelloWorld from '../components/HelloWorld.vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import { ref } from 'vue'

const selectedCity = ref()
const cities = [
  { name: 'New York', code: 'NY' },
  { name: 'London', code: 'LDN' },
  { name: 'Paris', code: 'PRS' },
  { name: 'Tokyo', code: 'TKY' },
]
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-8"
  >
    <div class="max-w-4xl mx-auto">
      <!-- Header with obvious Tailwind test -->
      <Card class="mb-6 shadow-2xl border-4 border-blue-500">
        <template #title>
          <div class="flex items-center gap-4">
            <img
              src="/vite.svg"
              class="h-8 w-8 animate-bounce"
              alt="Vite logo"
            />
            <img
              src="../assets/vue.svg"
              class="h-8 w-8 animate-pulse"
              alt="Vue logo"
            />
            <h1
              class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
            >
              🎉 Tailwind CSS is Working! 🎉
            </h1>
          </div>
        </template>
        <template #content>
          <p
            class="text-lg text-gray-700 bg-yellow-200 p-4 rounded-lg border-l-4 border-yellow-500"
          >
            ✅ If you see this yellow box with rounded corners and a left
            border, Tailwind CSS is working!
          </p>
        </template>
      </Card>

      <!-- PrimeVue Components Demo with Tailwind styling -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card
          class="transform hover:scale-105 transition-transform duration-300"
        >
          <template #title>
            <span class="text-green-600 font-bold"
              >🎨 Buttons with Tailwind</span
            >
          </template>
          <template #content>
            <div class="flex flex-wrap gap-2">
              <Button label="Primary" class="bg-blue-500 hover:bg-blue-700" />
              <Button
                label="Secondary"
                severity="secondary"
                class="bg-gray-500 hover:bg-gray-700"
              />
              <Button
                label="Success"
                severity="success"
                class="bg-green-500 hover:bg-green-700"
              />
              <Button
                label="Warning"
                severity="warn"
                class="bg-yellow-500 hover:bg-yellow-700"
              />
              <Button
                label="Danger"
                severity="danger"
                class="bg-red-500 hover:bg-red-700"
              />
            </div>
          </template>
        </Card>

        <Card
          class="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200"
        >
          <template #title>
            <span class="text-purple-700 font-bold">📝 Input & Dropdown</span>
          </template>
          <template #content>
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-red-500 mb-2"
                  >Name</label
                >
                <InputText
                  placeholder="Enter your name"
                  class="w-full border-2 border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-blue-500 mb-2"
                  >City</label
                >
                <Dropdown
                  v-model="selectedCity"
                  :options="cities"
                  optionLabel="name"
                  placeholder="Select a city"
                  class="w-full border-2 border-blue-300 focus:border-blue-500"
                />
              </div>
            </div>
          </template>
        </Card>
      </div>

      <!-- Tailwind CSS Test Section -->
      <Card
        class="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200"
      >
        <template #title>
          <span class="text-green-700 font-bold">🧪 Tailwind CSS Test</span>
        </template>
        <template #content>
          <div class="space-y-4">
            <div class="bg-red-500 text-white p-4 rounded-lg shadow-lg">
              🔴 Red background with white text and shadow
            </div>
            <div class="bg-blue-500 text-white p-4 rounded-lg shadow-lg">
              🔵 Blue background with white text and shadow
            </div>
            <div class="bg-green-500 text-white p-4 rounded-lg shadow-lg">
              🟢 Green background with white text and shadow
            </div>
            <div class="text-center">
              <span
                class="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full font-bold animate-pulse"
              >
                🎯 Animated yellow pill button
              </span>
            </div>
          </div>
        </template>
      </Card>

      <!-- Original HelloWorld component -->
      <Card class="mt-6 bg-gradient-to-r from-gray-50 to-gray-100">
        <template #title>Original Component</template>
        <template #content>
          <HelloWorld msg="Vite + Vue + PrimeVue + Tailwind CSS" />
        </template>
      </Card>
    </div>
  </div>
</template>

<style scoped>
/* You can keep your existing styles or remove them since we're using Tailwind + PrimeVue */
</style>
