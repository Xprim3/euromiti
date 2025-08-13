<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const router = useRouter()
const { t, locale } = useI18n()

// Company info
const companyInfo = {
  name: 'EUROMITI',
  tagline: 'Your Trusted Energy Partner'
}

// Mobile menu state
const isMobileMenuOpen = ref(false)

// Navigation items with translations
const navigationItems = computed(() => [
  { label: t('navigation.ballina'), route: '/' },
  { 
    label: t('navigation.rrethNesh'), 
    route: '/about',
    hasSubmenu: true,
    submenuItems: [
      { label: t('navigation.historiaJone'), route: '/about/history' },
      { label: t('navigation.misioniVizioni'), route: '/about/mission' },
      { label: t('navigation.ekipiDrejtues'), route: '/about/team' }
    ]
  },
  { label: t('navigation.sherbimet'), route: '/services' },
  { label: t('navigation.lajme'), route: '/news' },
  { label: t('navigation.pikatEShitjes'), route: '/locations' },
  { label: t('navigation.mundesiPunesimi'), route: '/careers' },
  { label: t('navigation.shperblimet'), route: '/prices' },
  { label: t('navigation.kontakti'), route: '/contact' }
])

// Submenu state
const openSubmenu = ref<string | null>(null)

// Track which item was last clicked
const clickedItem = ref<string | null>(null)

// Animated border state
const hoveredButton = ref<string | null>(null)
const navButtonRefs = ref<HTMLElement[]>([])

// Get active button position for animated border
const getActiveButtonLeft = () => {
  if (hoveredButton.value) {
    const button = navButtonRefs.value.find((_, index) => 
      navigationItems.value[index]?.label === hoveredButton.value
    )
    if (button) {
      return button.offsetLeft
    }
  }
  
  if (clickedItem.value) {
    const button = navButtonRefs.value.find((_, index) => 
      navigationItems.value[index]?.route === clickedItem.value
    )
    if (button) {
      return button.offsetLeft
    }
  }
  
  // If submenu is open, keep border on that button
  if (openSubmenu.value) {
    const button = navButtonRefs.value.find((_, index) => 
      navigationItems.value[index]?.label === openSubmenu.value
    )
    if (button) {
      return button.offsetLeft
    }
  }
  
  // Default to BALLINA (first item) position
  if (navButtonRefs.value[0]) {
    return navButtonRefs.value[0].offsetLeft
  }
  
  return 0
}

const getActiveButtonWidth = () => {
  if (hoveredButton.value) {
    const button = navButtonRefs.value.find((_, index) => 
      navigationItems.value[index]?.label === hoveredButton.value
    )
    if (button) {
      return button.offsetWidth
    }
  }
  
  if (clickedItem.value) {
    const button = navButtonRefs.value.find((_, index) => 
      navigationItems.value[index]?.route === clickedItem.value
    )
    if (button) {
      return button.offsetWidth
    }
  }
  
  // If submenu is open, keep border on that button
  if (openSubmenu.value) {
    const button = navButtonRefs.value.find((_, index) => 
      navigationItems.value[index]?.label === openSubmenu.value
    )
    if (button) {
      return button.offsetWidth
    }
  }
  
  // Default to BALLINA (first item) width
  if (navButtonRefs.value[0]) {
    return navButtonRefs.value[0].offsetWidth
  }
  
  return 0
}

// Handle button hover
const handleButtonHover = (item: any) => {
  hoveredButton.value = item.label
}

// Handle button leave
const handleButtonLeave = () => {
  // Only clear hover if no submenu is open
  if (!openSubmenu.value) {
    hoveredButton.value = null
  }
}

// Enhanced hover logic for submenu items
const handleSubmenuHover = (itemLabel: string) => {
  // When hovering over submenu items, keep the parent button highlighted
  hoveredButton.value = itemLabel
}

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

// Scroll locking functions
const lockScroll = () => {
  document.body.style.overflow = 'hidden'
  document.body.style.position = 'fixed'
  document.body.style.width = '100%'
  document.body.style.top = `-${window.scrollY}px`
}

const unlockScroll = () => {
  const scrollY = document.body.style.top
  document.body.style.overflow = ''
  document.body.style.position = ''
  document.body.style.width = ''
  document.body.style.top = ''
  if (scrollY) {
    window.scrollTo(0, parseInt(scrollY || '0') * -1)
  }
}

// Toggle mobile menu
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  if (isMobileMenuOpen.value) {
    closeLanguageDropdown()
    lockScroll()
  } else {
    unlockScroll()
  }
}

// Close mobile menu
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  closeSubmenu() // Close any open submenus
  unlockScroll()
}

// Watch for mobile menu state changes to handle scroll locking
watch(isMobileMenuOpen, (newValue) => {
  if (newValue) {
    lockScroll()
  } else {
    unlockScroll()
  }
})

// Watch for locale changes to update navigation
watch(locale, () => {
  // Force re-computation of navigation items when language changes
  // This is handled automatically by the computed property
})

// Handle navigation click
const handleNavigationClick = (route: string) => {
  router.push(route)
  clickedItem.value = route
  closeMobileMenu()
}

// Language Switcher
const isLanguageDropdownOpen = ref(false)
const currentLanguage = ref({ flag: 'al', code: 'AL', name: 'Albanian' })
const availableLanguages = [
  { flag: 'al', code: 'AL', name: 'Albanian', locale: 'sq' },
  { flag: 'gb', code: 'EN', name: 'English', locale: 'en' },
  { flag: 'rs', code: 'SR', name: 'Serbian', locale: 'sr' }
]

const toggleLanguageDropdown = () => {
  isLanguageDropdownOpen.value = !isLanguageDropdownOpen.value
}

const selectLanguage = (lang: { flag: string; code: string; name: string; locale: string }) => {
  currentLanguage.value = lang
  locale.value = lang.locale
  isLanguageDropdownOpen.value = false
}

// Get flag URL from CDN
const getFlagUrl = (countryCode: string) => {
  return `https://flagcdn.com/w40/${countryCode}.png`
}

// Close language dropdown when clicking outside
const closeLanguageDropdown = () => {
  isLanguageDropdownOpen.value = false
}

// Global click listener to close dropdown
onMounted(() => {
  document.addEventListener('click', closeLanguageDropdown)
  
  // Set initial language based on current locale
  const currentLang = availableLanguages.find(lang => lang.locale === locale.value)
  if (currentLang) {
    currentLanguage.value = currentLang
  }
})

onUnmounted(() => {
  document.removeEventListener('click', closeLanguageDropdown)
  // Ensure scroll is unlocked when component is unmounted
  if (isMobileMenuOpen.value) {
    unlockScroll()
  }
})
</script>

<template>
  <header class="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <!-- Main Header Bar -->
    <div class="px-6 py-4 md:px-8 md:py-5">
      <div class="flex items-center justify-between">
        <!-- Left: Logo & Company Name -->
        <div class="flex items-center space-x-3">
          <!-- Circular Logo -->
          <div class="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center shadow-md">
            <span class="text-white text-sm font-bold">E</span>
          </div>
          
          <!-- Company Info -->
          <div>
            <h1 class="text-base font-bold text-gray-900 leading-tight">{{ companyInfo.name }}</h1>
          </div>
        </div>

        <!-- Center: Desktop Navigation (Always present, hidden on mobile) -->
        <nav class="hidden xl:flex items-center space-x-1 min-w-0 flex-1 justify-center">
          <div class="flex items-center space-x-1 relative">
            <!-- Animated bottom border indicator -->
            <div 
              class="absolute bottom-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out rounded-full shadow-sm opacity-100"
              :style="{
                left: getActiveButtonLeft() + 'px',
                width: getActiveButtonWidth() + 'px'
              }"
            ></div>
            
            <div
              v-for="(item, index) in navigationItems"
              :key="item.route"
              class="relative group"
              :ref="(el: any) => { if (el) navButtonRefs[index] = el }"
              @mouseenter="handleButtonHover(item)"
              @mouseleave="handleButtonLeave()"
            >
              <!-- Main Navigation Button -->
              <button
                @click="item.hasSubmenu ? toggleSubmenu(item.label) : handleNavigationClick(item.route)"
                class="flex items-center space-x-1 px-4 py-2 rounded-lg text-gray-700 hover:text-blue-700 transition-all duration-200 font-medium text-sm whitespace-nowrap relative"
                :class="{ 'text-blue-700': clickedItem === item.route || (item.hasSubmenu && openSubmenu === item.label) }"
              >
                <span>{{ item.label }}</span>
                <!-- Submenu Indicator -->
                <svg 
                  v-if="item.hasSubmenu"
                  class="w-3 h-3 text-gray-500 transition-transform duration-200" 
                  :class="{ 'rotate-180': openSubmenu === item.label }"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              <!-- Desktop Submenu Dropdown -->
              <div 
                v-if="item.hasSubmenu"
                class="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg border border-gray-200 py-2 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
              >
                <button
                  v-for="subItem in item.submenuItems"
                  :key="subItem.route"
                  @click="handleNavigationClick(subItem.route)"
                  @mouseenter="handleSubmenuHover(item.label)"
                  class="w-full flex items-center px-4 py-2 text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-all duration-200 text-left text-sm"
                  :class="{ 'text-blue-700 bg-blue-50': clickedItem === subItem.route }"
                >
                  <span class="font-medium">{{ subItem.label }}</span>
                </button>
              </div>
            </div>
          </div>
        </nav>

        <!-- Mobile Navigation Placeholder (Hidden on desktop) -->
        <div class="flex-1 xl:hidden"></div>

        <!-- Right: Language Switcher & Hamburger Button -->
        <div class="flex items-center space-x-3">
          <!-- Language Switcher -->
          <div class="relative" @click.stop>
            <button
              @click="toggleLanguageDropdown"
              class="flex items-center justify-center space-x-2 pl-3 pr-3 py-2 bg-white hover:bg-gray-50 rounded-lg transition-all duration-200 w-20"
              :class="{ 'bg-blue-50': isLanguageDropdownOpen }"
            >
              <!-- Flag Icon -->
              <img :src="getFlagUrl(currentLanguage.flag)" alt="Flag" class="w-4 h-3 rounded-sm">
              <!-- Language Code -->
              <span class="font-medium text-xs text-gray-700">{{ currentLanguage.code }}</span>
              <!-- Dropdown Arrow -->
              <svg 
                class="w-4 h-4 text-gray-500 transition-transform duration-200"
                :class="{ 'rotate-180': isLanguageDropdownOpen }"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            
            <!-- Language Dropdown -->
            <div
              class="absolute top-full left-0 right-0 mt-1 w-full bg-white shadow-lg border border-gray-200 py-2 z-50 transform transition-all duration-300 ease-out rounded-lg"
              :class="{ 
                'translate-y-0 opacity-100 scale-100 bg-blue-50 border-blue-300 shadow-md': isLanguageDropdownOpen,
                '-translate-y-2 opacity-0 scale-95 pointer-events-none': !isLanguageDropdownOpen
              }"
            >
              <button
                v-for="lang in availableLanguages"
                :key="lang.code"
                @click="selectLanguage(lang)"
                class="w-full flex items-center space-x-3 px-4 py-2 text-left transition-colors duration-150"
                :class="{ 'text-blue-700': currentLanguage.code === lang.code, 'text-gray-700 hover:text-blue-600': currentLanguage.code !== lang.code }"
              >
                <img :src="getFlagUrl(lang.flag)" alt="Flag" class="w-4 h-3 rounded-sm">
                <span class="font-medium text-xs">{{ lang.code }}</span>
              </button>
            </div>
          </div>

          <!-- Hamburger Button (Hidden on desktop) -->
          <div class="flex-shrink-0 xl:hidden">
            <button
              @click="toggleMobileMenu"
              class="w-10 h-10 flex items-center justify-center bg-white hover:bg-gray-50 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 shadow-sm border border-gray-200 hover:shadow-md"
              :class="{ 'bg-blue-50 border-blue-300 shadow-md': isMobileMenuOpen }"
            >
              <!-- Classic Hamburger Icon -->
              <div class="relative w-5 h-5">
                <!-- Top line -->
                <span 
                  class="absolute top-0.5 left-0 w-5 h-0.5 bg-gray-700 rounded-full transition-all duration-200"
                  :class="{ 'rotate-45 translate-y-1.5 bg-blue-600': isMobileMenuOpen }"
                ></span>
                
                <!-- Middle line -->
                <span 
                  class="absolute top-1/2 left-0 w-5 h-0.5 bg-gray-700 rounded-full transition-all duration-200 -translate-y-1/2"
                  :class="{ 'opacity-0': isMobileMenuOpen }"
                ></span>
                
                <!-- Bottom line -->
                <span 
                  class="absolute bottom-0.5 left-0 w-5 h-0.5 bg-gray-700 rounded-full transition-all duration-200"
                  :class="{ '-rotate-45 -translate-y-1.5 bg-blue-600': isMobileMenuOpen }"
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Sliding Dropdown from Right (Hidden on desktop) -->
    <div 
      class="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-out z-50 xl:hidden"
      :class="{ 'translate-x-0': isMobileMenuOpen, 'translate-x-full': !isMobileMenuOpen }"
    >
      <!-- Header with close button -->
      <div class="flex items-center justify-between p-6 border-b border-gray-100 bg-gray-50">
        <div>
          <h2 class="text-xl font-bold text-gray-900">{{ t('navigation.menu') }}</h2>
        </div>
        <button
          @click="closeMobileMenu"
          class="w-10 h-10 flex items-center justify-center bg-white rounded-full hover:bg-gray-100 transition-all duration-200 shadow-sm border border-gray-200"
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

    <!-- Backdrop (Hidden on desktop) -->
    <div 
      v-if="isMobileMenuOpen"
      @click="closeMobileMenu"
      class="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm z-40 transition-opacity duration-300 xl:hidden"
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
