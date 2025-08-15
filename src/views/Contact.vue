<template>
  <div class="bg-brand-white">
    <!-- Hero Section -->
    <div class="relative h-[300px] md:h-[400px] bg-cover bg-center bg-no-repeat" style="background-image: url('/Media/contact.jpg'); background-size: cover; background-position: center top;">
      <!-- Reusable Dark Shadow Overlay -->
      <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20"></div>
      
      <!-- Content -->
      <div class="relative h-full flex items-end pb-8 md:pb-16">
        <div class="max-w-7xl mx-auto px-4 md:px-6 w-full">
          <div class="text-left text-white max-w-2xl">
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white drop-shadow-2xl">
              {{ $t('contact.title') }}
            </h1>
            <p class="text-base md:text-lg lg:text-xl leading-relaxed opacity-95 text-white drop-shadow-lg">
              {{ $t('contact.subtitle') }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Base Card Section -->
    <div class="py-8 md:py-16 bg-brand-white">
      <div class="max-w-7xl mx-auto px-4 md:px-6">
        <!-- Main Base Card -->
        <div class="bg-brand-white border border-brand-light-gray rounded-xl p-6 md:p-8 lg:p-12 shadow-lg mb-12 md:mb-16">
          <div class="text-left mb-6 md:mb-8">
            <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-black mb-3 md:mb-4">{{ $t('contact.main.title') }}</h2>
            <p class="text-base md:text-lg text-brand-gray max-w-3xl">{{ $t('contact.main.subtitle') }}</p>
          </div>
          
          <!-- Main Content -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
            <!-- Left Side - Information -->
            <div class="space-y-4 md:space-y-6">
              <div class="flex items-start space-x-3 md:space-x-4">
                <div class="w-10 h-10 md:w-12 md:h-12 bg-brand-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 md:w-6 md:h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg md:text-xl font-semibold text-brand-black mb-2">{{ $t('contact.main.phone.title') }}</h3>
                  <p class="text-sm md:text-base text-brand-gray mb-2 md:mb-3">{{ $t('contact.main.phone.description') }}</p>
                  <a href="tel:+35512345678" class="text-base md:text-lg text-brand-primary font-semibold hover:text-brand-primary/80 transition-colors">
                    +355 12 345 678
                  </a>
                </div>
              </div>
              
              <div class="flex items-start space-x-3 md:space-x-4">
                <div class="w-10 h-10 md:w-12 md:h-12 bg-brand-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 md:w-6 md:h-6 text-brand-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg md:text-xl font-semibold text-brand-black mb-2">{{ $t('contact.main.email.title') }}</h3>
                  <p class="text-sm md:text-base text-brand-gray mb-2 md:mb-3">{{ $t('contact.main.email.description') }}</p>
                  <a href="mailto:info@euromiti.al" class="text-base md:text-lg text-brand-secondary font-semibold hover:text-brand-secondary/80 transition-colors">
                    info@euromiti.al
                  </a>
                </div>
              </div>
              
              <div class="flex items-start space-x-3 md:space-x-4">
                <div class="w-10 h-10 md:w-12 md:h-12 bg-brand-dark/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 md:w-6 md:h-6 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg md:text-xl font-semibold text-brand-black mb-2">{{ $t('contact.main.location.title') }}</h3>
                  <p class="text-sm md:text-base text-brand-gray mb-2 md:mb-3">{{ $t('contact.main.location.description') }}</p>
                  <a href="https://www.google.com/maps/dir/?api=1&destination=Rr.+100,+Tirana,+Albania" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     class="text-base md:text-lg text-brand-dark font-semibold hover:text-brand-primary transition-colors">
                    Rr. 100, Tirana, Albania
                  </a>
                </div>
              </div>
            </div>
            
            <!-- Right Side - Main Image -->
            <div class="relative">
              <div class="relative h-64 md:h-80 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 rounded-xl overflow-hidden border border-brand-light-gray">
                <img src="/Media/ferizaj.jpg" 
                     alt="Ferizaj Main Office"
                     class="w-full h-full object-cover">
              </div>
            </div>
          </div>
        </div>
        
        
        
        <!-- 3 Location Cards with PrimeVue Card Component -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <Card v-for="location in businessLocations" :key="location.id" 
                class="hover:shadow-xl transition-all duration-300 group hover:border-brand-primary/30">
            
            <!-- Location Image -->
            <template #header>
              <div class="relative h-40 md:h-48 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 overflow-hidden">
                <img v-if="location.imagePath" 
                     :src="location.imagePath" 
                     :alt="location.name"
                     class="w-full h-full object-cover">
                <div v-else class="absolute inset-0 flex items-center justify-center">
                  <div class="text-center text-brand-gray">
                    <svg class="w-12 h-12 md:w-16 md:h-16 mx-auto mb-2 md:mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <p class="text-xs md:text-sm font-medium">{{ location.imagePlaceholder }}</p>
                  </div>
                </div>
              </div>
            </template>
            
            <!-- Location Content -->
            <template #content>
              <div class="text-center mb-4">
                <h3 class="text-lg md:text-xl font-bold text-brand-black mb-2 md:mb-3">{{ location.name }}</h3>
                <p class="text-sm md:text-base text-brand-gray leading-relaxed">{{ location.notes }}</p>
              </div>
              
              <!-- Contact Information Grid -->
              <div class="space-y-3">
                <!-- Number -->
                <div class="flex items-center space-x-3 p-3 bg-brand-light/30 rounded-lg">
                  <div class="w-8 h-8 bg-brand-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg class="w-4 h-4 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-xs font-medium text-brand-dark-gray uppercase tracking-wide">Number</p>
                    <a :href="`tel:${location.phone}`" class="text-sm font-semibold text-brand-primary hover:text-brand-primary/80 transition-colors block truncate">
                      {{ location.phone }}
                    </a>
                  </div>
                </div>
                
                <!-- Email -->
                <div class="flex items-center space-x-3 p-3 bg-brand-light/30 rounded-lg">
                  <div class="w-8 h-8 bg-brand-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg class="w-4 h-4 text-brand-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-xs font-medium text-brand-dark-gray uppercase tracking-wide">Email</p>
                    <a :href="`mailto:${location.email}`" class="text-sm font-semibold text-brand-secondary hover:text-brand-secondary/80 transition-colors block truncate">
                      {{ location.email }}
                    </a>
                  </div>
                </div>
                
                <!-- Location -->
                <div class="flex items-center space-x-3 p-3 bg-brand-light/30 rounded-lg">
                  <div class="w-8 h-8 bg-brand-dark/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg class="w-4 h-4 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-xs font-medium text-brand-dark-gray uppercase tracking-wide">Location</p>
                    <a :href="`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location.address)}`" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       class="text-sm font-semibold text-brand-dark hover:text-brand-primary transition-colors cursor-pointer hover:underline block truncate">
                      {{ location.address }}
                    </a>
                  </div>
                </div>
              </div>
            </template>
            

          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Card from 'primevue/card'

const { t } = useI18n()



// Business locations
const businessLocations = [
  {
    id: 1,
    name: t('contact.locations.ferizaj'),
    notes: 'Our main office and production facility.',
    address: 'Rr. 100, Tirana, Albania',
    phone: '+355 12 345 678',
    email: 'ferizaj@euromiti.al',
    imagePath: '/Media/ferizaj.jpg',
    imagePlaceholder: t('contact.locations.ferizajImage')
  },
  {
    id: 2,
    name: t('contact.locations.gjilan'),
    notes: 'Convenient location for local customers.',
    address: 'Rr. 200, Durrës, Albania',
    phone: '+355 12 345 679',
    email: 'gjilan@euromiti.al',
    imagePath: '/Media/gjilan.jpg',
    imagePlaceholder: t('contact.locations.gjilanImage')
  },
  {
    id: 3,
    name: 'Distribution Center',
    notes: 'Warehouse and distribution hub.',
    address: 'Rr. 300, Vlorë, Albania',
    phone: '+355 12 345 680',
    email: 'distribution@euromiti.al',
    imagePath: '/Media/gjilan.jpg',
    imagePlaceholder: 'Distribution Center'
  }
]




</script>

<style scoped>
/* All styling now handled by PrimeVue Aura theme and Tailwind CSS */
</style>
