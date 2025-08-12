<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Company info
const companyInfo = {
  name: 'EUROMITI',
  tagline: 'Your Trusted Energy Partner'
}

// Mobile menu state
const isMobileMenuOpen = ref(false)

// Navigation items
const navigationItems = [
  { label: 'BALLINA', route: '/' },
  { 
    label: 'RRETH NESH', 
    route: '/about',
    hasSubmenu: true,
    submenuItems: [
      { label: 'Historia Jonë', route: '/about/history' },
      { label: 'Misioni & Vizioni', route: '/about/mission' },
      { label: 'Ekipi Drejtues', route: '/about/team' }
    ]
  },
  { label: 'SHERBIMET', route: '/services' },
  { label: 'LAJME', route: '/news' },
  { label: 'PIKAT E SHITJES', route: '/locations' },
  { label: 'MUNDESI PUNESIMI', route: '/careers' },
  { label: 'SHPERBLIMET', route: '/prices' },
  { label: 'KONTAKTI', route: '/contact' }
]

// Submenu state
const openSubmenu = ref<string | null>(null)

// Track which item was last clicked
const clickedItem = ref<string | null>(null)

// Toggle submenu
const toggleSubmenu = (itemLabel: string) => {
  if (openSubmenu.value === itemLabel) {
    openSubmenu.value = null
    clickedItem.value = null
  } else {
    openSubmenu.value = itemLabel
    clickedItem.value = itemLabel
  }
}

// Close submenu
const closeSubmenu = () => {
  openSubmenu.value = null
  clickedItem.value = null
}

// Toggle mobile menu
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// Close mobile menu
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  closeSubmenu() // Close any open submenus
}

// Handle navigation click
const handleNavigationClick = (route: string) => {
  router.push(route)
  clickedItem.value = route
  closeMobileMenu()
}
</script>

<template>
  <header class="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
    <!-- Main Header Bar -->
    <div class="px-4 py-3">
      <div class="flex items-center justify-between">
        <!-- Left: Logo & Company Name -->
        <div class="flex items-center space-x-3">
          <!-- Circular Logo -->
          <div class="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center shadow-md">
            <span class="text-white text-lg font-bold">E</span>
          </div>
          
          <!-- Company Info -->
          <div>
            <h1 class="text-lg font-bold text-gray-900 leading-tight">{{ companyInfo.name }}</h1>
            <p class="text-xs text-gray-600 leading-tight">{{ companyInfo.tagline }}</p>
          </div>
        </div>

        <!-- Right: Hamburger Button -->
        <div class="flex-shrink-0">
          <button
            @click="toggleMobileMenu"
            class="w-11 h-11 flex items-center justify-center bg-white hover:bg-gray-50 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-sm border border-gray-200"
            :class="{ 'bg-blue-50 border-blue-200': isMobileMenuOpen }"
          >
            <!-- Hamburger Icon with Animation -->
            <div class="relative w-5 h-5">
              <span 
                class="absolute w-5 h-0.5 bg-gray-600 rounded-full transition-all duration-300"
                :class="{ 'rotate-45 translate-y-1.5 bg-blue-600': isMobileMenuOpen }"
              ></span>
              <span 
                class="absolute w-5 h-0.5 bg-gray-600 rounded-full transition-all duration-300 top-2"
                :class="{ 'opacity-0': isMobileMenuOpen }"
              ></span>
              <span 
                class="absolute w-5 h-0.5 bg-gray-600 rounded-full transition-all duration-300 top-4"
                :class="{ '-rotate-45 -translate-y-1.5 bg-blue-600': isMobileMenuOpen }"
              ></span>
            </div>
          </button>
        </div>
      </div>
    </div>

    <!-- Sliding Dropdown from Right -->
    <div 
      class="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-out z-50"
      :class="{ 'translate-x-0': isMobileMenuOpen, 'translate-x-full': !isMobileMenuOpen }"
    >
      <!-- Header with close button -->
      <div class="flex items-center justify-between p-6 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div>
          <h2 class="text-xl font-bold text-gray-900">Menu</h2>
        </div>
        <button
          @click="closeMobileMenu"
          class="w-10 h-10 flex items-center justify-center bg-white rounded-full"
        >
          <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <!-- Navigation Items -->
      <nav class="p-6">
        <div class="space-y-1">
          <div
            v-for="item in navigationItems"
            :key="item.route"
            class="space-y-1"
          >
            <!-- Main Navigation Button -->
            <button
              @click="item.hasSubmenu ? toggleSubmenu(item.label) : handleNavigationClick(item.route)"
              class="w-full flex items-center px-4 py-3 rounded-lg text-gray-700 transition-all duration-200 text-left group"
              :class="{ 
                'text-blue-700 bg-blue-50': clickedItem === item.route || (item.hasSubmenu && openSubmenu === item.label),
                'hover:text-blue-700 hover:bg-blue-50': !item.hasSubmenu || openSubmenu !== item.label
              }"
            >
              <span class="font-medium text-sm tracking-wide">{{ item.label }}</span>
              <!-- Submenu Indicator -->
              <div v-if="item.hasSubmenu" class="ml-auto flex items-center">
                <svg 
                  class="w-3 h-3 text-gray-500 transition-transform duration-200" 
                  :class="{ 'rotate-180': openSubmenu === item.label }"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
              <!-- Arrow for non-submenu items -->
              <div v-else class="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <svg class="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </button>

            <!-- Submenu Items -->
            <div 
              v-if="item.hasSubmenu"
              class="overflow-hidden transition-all duration-300 ease-out"
              :class="{ 'max-h-32 opacity-100': openSubmenu === item.label, 'max-h-0 opacity-0': openSubmenu !== item.label }"
            >
              <div class="ml-4 space-y-1 py-1">
                <button
                  v-for="subItem in item.submenuItems"
                  :key="subItem.route"
                  @click="handleNavigationClick(subItem.route)"
                  class="w-full flex items-center px-4 py-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-100 transition-all duration-200 text-left text-xs"
                  :class="{ 'text-blue-600 bg-blue-100': clickedItem === subItem.route }"
                >
                  <span class="font-medium">{{ subItem.label }}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <!-- Simple Footer -->
      <div class="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100 bg-gray-50">
        <div class="text-center">
          <p class="text-xs text-gray-500">
            Powered by <span class="font-medium text-blue-600">EUROMITI</span>
          </p>
        </div>
      </div>
    </div>

    <!-- Backdrop -->
    <div 
      v-if="isMobileMenuOpen"
      @click="closeMobileMenu"
      class="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm z-40 transition-opacity duration-300"
    ></div>
  </header>
</template>

<style scoped>
/* Hamburger animation classes */
.rotate-45 {
  transform: rotate(45deg);
}

.-rotate-45 {
  transform: rotate(-45deg);
}

.translate-y-1\.5 {
  transform: translateY(6px);
}

.-translate-y-1\.5 {
  transform: translateY(-6px);
}

.opacity-0 {
  opacity: 0;
}

/* Smooth transitions */
.transition-all {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.transition-transform {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
