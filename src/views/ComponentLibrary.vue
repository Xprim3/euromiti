<script setup lang="ts">
import { ref } from 'vue'
import BaseButton from '../components/ui/BaseButton.vue'
import BaseCard from '../components/ui/BaseCard.vue'
import BaseInput from '../components/ui/BaseInput.vue'

const formData = ref({
  name: '',
  email: '',
  message: ''
})

const isLoading = ref(false)

const handleSubmit = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
    alert('Form submitted!')
  }, 2000)
}
</script>

<template>
  <div class="min-h-screen bg-brand-light py-8">
    <div class="max-w-7xl mx-auto px-4">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-6xl font-bold text-gradient mb-4">
          🎨 EUROMITI Component Library
        </h1>
        <p class="text-xl text-brand-gray max-w-3xl mx-auto">
          Professional UI components built with our brand system for the petrol company website
        </p>
      </div>

      <!-- Component Showcase -->
      <div class="space-y-16">
        <!-- Buttons Section -->
        <section>
          <h2 class="text-3xl font-bold text-brand-dark-gray mb-8">🔘 BaseButton Component</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Button Variants -->
            <BaseCard>
              <template #header>
                <h3 class="text-xl font-semibold text-brand-dark-gray">Button Variants</h3>
              </template>
              <div class="space-y-3">
                <BaseButton variant="primary" size="md">Primary Button</BaseButton>
                <BaseButton variant="secondary" size="md">Secondary Button</BaseButton>
                <BaseButton variant="accent" size="md">Accent Button</BaseButton>
                <BaseButton variant="warning" size="md">Warning Button</BaseButton>
                <BaseButton variant="outline" size="md">Outline Button</BaseButton>
                <BaseButton variant="ghost" size="md">Ghost Button</BaseButton>
              </div>
            </BaseCard>

            <!-- Button Sizes -->
            <BaseCard>
              <template #header>
                <h3 class="text-xl font-semibold text-brand-dark-gray">Button Sizes</h3>
              </template>
              <div class="space-y-3">
                <BaseButton variant="primary" size="sm">Small Button</BaseButton>
                <BaseButton variant="primary" size="md">Medium Button</BaseButton>
                <BaseButton variant="primary" size="lg">Large Button</BaseButton>
                <BaseButton variant="primary" size="xl">Extra Large</BaseButton>
              </div>
            </BaseCard>

            <!-- Button States -->
            <BaseCard>
              <template #header>
                <h3 class="text-xl font-semibold text-brand-dark-gray">Button States</h3>
              </template>
              <div class="space-y-3">
                <BaseButton variant="primary" :loading="isLoading">
                  {{ isLoading ? 'Loading...' : 'Click Me' }}
                </BaseButton>
                <BaseButton variant="secondary" disabled>Disabled Button</BaseButton>
                <BaseButton variant="accent" fullWidth>Full Width Button</BaseButton>
              </div>
            </BaseCard>
          </div>
        </section>

        <!-- Cards Section -->
        <section>
          <h2 class="text-3xl font-bold text-brand-dark-gray mb-8">🃏 BaseCard Component</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Card Variants -->
            <BaseCard variant="default" padding="md">
              <template #header>
                <h3 class="text-xl font-semibold text-brand-dark-gray">Default Card</h3>
              </template>
              <p class="text-brand-gray">
                This is a default card with standard styling and medium padding.
              </p>
            </BaseCard>

            <BaseCard variant="elevated" padding="lg" hover>
              <template #header>
                <h3 class="text-xl font-semibold text-brand-dark-gray">Elevated Card</h3>
              </template>
              <p class="text-brand-gray">
                This card has elevated styling with large padding and hover effects.
              </p>
            </BaseCard>

            <BaseCard variant="outlined" padding="xl" clickable>
              <template #header>
                <h3 class="text-xl font-semibold text-brand-dark-gray">Clickable Card</h3>
              </template>
              <p class="text-brand-gray">
                This card is clickable and has outlined styling with extra large padding.
              </p>
            </BaseCard>
          </div>
        </section>

        <!-- Inputs Section -->
        <section>
          <h2 class="text-3xl font-bold text-brand-dark-gray mb-8">📝 BaseInput Component</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Input Variants -->
            <BaseCard>
              <template #header>
                <h3 class="text-xl font-semibold text-brand-dark-gray">Input Variants</h3>
              </template>
              <div class="space-y-4">
                <BaseInput
                  v-model="formData.name"
                  label="Name"
                  placeholder="Enter your name"
                  variant="default"
                  size="md"
                />
                <BaseInput
                  v-model="formData.email"
                  type="email"
                  label="Email"
                  placeholder="Enter your email"
                  variant="outlined"
                  size="md"
                  required
                />
                <BaseInput
                  v-model="formData.message"
                  label="Message"
                  placeholder="Enter your message"
                  variant="filled"
                  size="lg"
                  helperText="This is a helper text for the input field"
                />
              </div>
            </BaseCard>

            <!-- Input Sizes and States -->
            <BaseCard>
              <template #header>
                <h3 class="text-xl font-semibold text-brand-dark-gray">Input Sizes & States</h3>
              </template>
              <div class="space-y-4">
                <BaseInput
                  label="Small Input"
                  placeholder="Small size"
                  size="sm"
                />
                <BaseInput
                  label="Medium Input"
                  placeholder="Medium size"
                  size="md"
                />
                <BaseInput
                  label="Large Input"
                  placeholder="Large size"
                  size="lg"
                />
                <BaseInput
                  label="Disabled Input"
                  placeholder="This input is disabled"
                  disabled
                />
                <BaseInput
                  label="Input with Error"
                  placeholder="This input has an error"
                  error="This field is required"
                />
              </div>
            </BaseCard>
          </div>
        </section>

        <!-- Brand Colors Section -->
        <section>
          <h2 class="text-3xl font-bold text-brand-dark-gray mb-8">🎨 Brand Color System</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- Primary Colors -->
            <BaseCard>
              <div class="text-center">
                <div class="w-20 h-20 bg-brand-primary rounded-full mx-auto mb-3"></div>
                <h3 class="font-semibold text-brand-dark-gray">Primary Blue</h3>
                <p class="text-sm text-brand-gray">#1e40af</p>
              </div>
            </BaseCard>

            <BaseCard>
              <div class="text-center">
                <div class="w-20 h-20 bg-brand-secondary rounded-full mx-auto mb-3"></div>
                <h3 class="font-semibold text-brand-dark-gray">Secondary Green</h3>
                <p class="text-sm text-brand-gray">#059669</p>
              </div>
            </BaseCard>

            <BaseCard>
              <div class="text-center">
                <div class="w-20 h-20 bg-brand-accent rounded-full mx-auto mb-3"></div>
                <h3 class="font-semibold text-brand-dark-gray">Accent Red</h3>
                <p class="text-sm text-brand-gray">#dc2626</p>
              </div>
            </BaseCard>

            <BaseCard>
              <div class="text-center">
                <div class="w-20 h-20 bg-brand-warning rounded-full mx-auto mb-3"></div>
                <h3 class="font-semibold text-brand-dark-gray">Warning Orange</h3>
                <p class="text-sm text-brand-gray">#d97706</p>
              </div>
            </BaseCard>
          </div>

          <!-- Fuel Colors -->
          <div class="mt-8">
            <h3 class="text-2xl font-bold text-brand-dark-gray mb-6">⛽ Fuel-Specific Colors</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <BaseCard>
                <div class="text-center">
                  <div class="w-20 h-20 bg-fuel-gasoline rounded-full mx-auto mb-3"></div>
                  <h3 class="font-semibold text-brand-dark-gray">Gasoline</h3>
                  <p class="text-sm text-brand-gray">Red</p>
                </div>
              </BaseCard>

              <BaseCard>
                <div class="text-center">
                  <div class="w-20 h-20 bg-fuel-diesel rounded-full mx-auto mb-3"></div>
                  <h3 class="font-semibold text-brand-dark-gray">Diesel</h3>
                  <p class="text-sm text-brand-gray">Blue</p>
                </div>
              </BaseCard>

              <BaseCard>
                <div class="text-center">
                  <div class="w-20 h-20 bg-fuel-lpg rounded-full mx-auto mb-3"></div>
                  <h3 class="font-semibold text-brand-dark-gray">LPG</h3>
                  <p class="text-sm text-brand-gray">Green</p>
                </div>
              </BaseCard>

              <BaseCard>
                <div class="text-center">
                  <div class="w-20 h-20 bg-fuel-electric rounded-full mx-auto mb-3"></div>
                  <h3 class="font-semibold text-brand-dark-gray">Electric</h3>
                  <p class="text-sm text-brand-gray">Purple</p>
                </div>
              </BaseCard>
            </div>
          </div>
        </section>

        <!-- Form Demo -->
        <section>
          <h2 class="text-3xl font-bold text-brand-dark-gray mb-8">📋 Form Demo</h2>
          
          <BaseCard class="max-w-2xl mx-auto">
            <template #header>
              <h3 class="text-xl font-semibold text-brand-dark-gray">Contact Form</h3>
            </template>
            
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <BaseInput
                v-model="formData.name"
                label="Full Name"
                placeholder="Enter your full name"
                required
                fullWidth
              />
              
              <BaseInput
                v-model="formData.email"
                type="email"
                label="Email Address"
                placeholder="Enter your email address"
                required
                fullWidth
              />
              
              <BaseInput
                v-model="formData.message"
                label="Message"
                placeholder="Enter your message"
                required
                fullWidth
              />
              
              <div class="flex gap-4">
                <BaseButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  :loading="isLoading"
                  fullWidth
                >
                  {{ isLoading ? 'Sending...' : 'Send Message' }}
                </BaseButton>
                
                <BaseButton
                  type="button"
                  variant="outline"
                  size="lg"
                  @click="formData = { name: '', email: '', message: '' }"
                >
                  Reset
                </BaseButton>
              </div>
            </form>
          </BaseCard>
        </section>
      </div>
    </div>
  </div>
</template>
