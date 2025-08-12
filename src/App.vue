<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
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
  { name: 'Tokyo', code: 'TKY' }
]
</script>

<template>
  <div class="min-h-screen bg-gray-50 p-8">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <Card class="mb-6">
        <template #title>
          <div class="flex items-center gap-4">
            <img src="/vite.svg" class="h-8 w-8" alt="Vite logo" />
            <img src="./assets/vue.svg" class="h-8 w-8" alt="Vue logo" />
            <h1 class="text-2xl font-bold text-gray-800">PrimeVue + Vue + Aura Theme</h1>
          </div>
        </template>
        <template #content>
          <p class="text-gray-600">Welcome to your new PrimeVue-powered application!</p>
        </template>
      </Card>

      <!-- PrimeVue Components Demo -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card>
          <template #title>Buttons</template>
          <template #content>
            <div class="flex flex-wrap gap-2">
              <Button label="Primary" />
              <Button label="Secondary" severity="secondary" />
              <Button label="Success" severity="success" />
              <Button label="Warning" severity="warn" />
              <Button label="Danger" severity="danger" />
            </div>
          </template>
        </Card>

        <Card>
          <template #title>Input & Dropdown</template>
          <template #content>
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <InputText placeholder="Enter your name" class="w-full" />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">City</label>
                <Dropdown 
                  v-model="selectedCity" 
                  :options="cities" 
                  optionLabel="name" 
                  placeholder="Select a city"
                  class="w-full"
                />
              </div>
            </div>
          </template>
        </Card>
      </div>

      <!-- Original HelloWorld component -->
      <Card>
        <template #title>Original Component</template>
        <template #content>
          <HelloWorld msg="Vite + Vue + PrimeVue" />
        </template>
      </Card>
    </div>
  </div>
</template>

<style scoped>
/* You can keep your existing styles or remove them since we're using Tailwind + PrimeVue */
</style>
