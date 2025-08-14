<template>
  <div class="bg-brand-white">
    <!-- Hero Section -->
    <div class="relative h-[400px] bg-cover bg-center bg-no-repeat" style="background-image: url('/Media/contact.jpg'); background-size: cover; background-position: center top;">
      <!-- Reusable Dark Shadow Overlay -->
      <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20"></div>
      
      <!-- Content -->
      <div class="relative h-full flex items-end pb-16">
        <div class="max-w-7xl mx-auto px-6 w-full">
          <div class="text-left text-white max-w-2xl">
            <h1 class="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-2xl">
              {{ $t('contact.title') }}
            </h1>
            <p class="text-lg md:text-xl leading-relaxed opacity-95 text-white drop-shadow-lg">
              {{ $t('contact.subtitle') }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Working Times and Headquarters Section -->
    <div class="py-16 bg-brand-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Working Times Card -->
          <div class="bg-brand-white border border-brand-light-gray rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 group">
            <div class="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-primary/20 transition-colors duration-300">
              <svg class="w-8 h-8 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-brand-black mb-3">{{ $t('contact.hours.title') }}</h3>
            <p class="text-brand-gray mb-6 leading-relaxed">{{ $t('contact.hours.subtitle') }}</p>
            
            <!-- Working Hours -->
            <div class="space-y-3 mb-6">
              <div v-for="(hours, day) in businessHours" :key="day" 
                   class="flex justify-between items-center py-2 px-4 rounded-lg hover:bg-brand-light transition-colors duration-200">
                <span class="font-medium text-brand-black">{{ $t(`contact.hours.days.${day}`) }}</span>
                <span class="text-brand-primary font-semibold">{{ hours }}</span>
              </div>
            </div>
            
            <!-- Emergency Contact -->
            <div class="pt-4 border-t border-brand-light-gray">
              <p class="text-sm text-brand-gray mb-3">{{ $t('contact.hours.note') }}</p>
              <a href="tel:+35512345678" class="inline-flex items-center px-6 py-3 bg-brand-primary hover:bg-brand-primary/90 text-brand-white font-medium rounded-lg transition-colors duration-300">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                {{ $t('contact.hours.emergency') }}
              </a>
            </div>
          </div>

          <!-- Headquarters Card -->
          <div class="bg-brand-white border border-brand-light-gray rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 group">
            <div class="w-16 h-16 bg-brand-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-secondary/20 transition-colors duration-300">
              <svg class="w-8 h-8 text-brand-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-brand-black mb-3">{{ $t('contact.headquarters.title') }}</h3>
            <p class="text-brand-gray mb-6 leading-relaxed">{{ $t('contact.headquarters.subtitle') }}</p>
            
            <!-- Business Image -->
            <div class="relative h-48 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-xl overflow-hidden border border-brand-light-gray mb-6">
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-center text-brand-gray">
                  <svg class="w-12 h-12 mx-auto mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <p class="text-sm font-medium">{{ $t('contact.headquarters.placeholder') }}</p>
                </div>
              </div>
            </div>
            
            <!-- Address Info -->
            <div class="inline-flex items-center px-4 py-2 bg-brand-light rounded-lg">
              <svg class="w-4 h-4 mr-2 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <span class="text-brand-dark-gray font-medium">{{ $t('contact.location.address') }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-6 py-16">
      <!-- Contact Information Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <!-- Phone Card -->
        <div class="bg-brand-white border border-brand-light-gray rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 group">
          <div class="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-primary/20 transition-colors duration-300">
            <svg class="w-8 h-8 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-brand-black mb-3">{{ $t('contact.phone.title') }}</h3>
          <p class="text-brand-gray mb-6 leading-relaxed">{{ $t('contact.phone.description') }}</p>
          <a href="tel:+35512345678" class="inline-flex items-center px-6 py-3 bg-brand-primary hover:bg-brand-primary/90 text-brand-white font-medium rounded-lg transition-colors duration-300">
            <span class="mr-2">+355 12 345 678</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>

        <!-- Email Card -->
        <div class="bg-brand-white border border-brand-light-gray rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 group">
          <div class="w-16 h-16 bg-brand-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-secondary/20 transition-colors duration-300">
            <svg class="w-8 h-8 text-brand-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-brand-black mb-3">{{ $t('contact.email.title') }}</h3>
          <p class="text-brand-gray mb-6 leading-relaxed">{{ $t('contact.email.description') }}</p>
          <a href="mailto:info@euromiti.al" class="inline-flex items-center px-6 py-3 bg-brand-secondary hover:bg-brand-secondary/90 text-brand-white font-medium rounded-lg transition-colors duration-300">
            <span class="mr-2">info@euromiti.al</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>

        <!-- Location Card -->
        <div class="bg-brand-white border border-brand-light-gray rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 group">
          <div class="w-16 h-16 bg-brand-dark-gray/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-dark-gray/20 transition-colors duration-300">
            <svg class="w-8 h-8 text-brand-dark-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-brand-black mb-3">{{ $t('contact.location.title') }}</h3>
          <p class="text-brand-gray mb-6 leading-relaxed">{{ $t('contact.location.description') }}</p>
          <div class="inline-flex items-center px-6 py-3 bg-brand-dark-gray text-brand-white font-medium rounded-lg">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            {{ $t('contact.location.address') }}
          </div>
        </div>
      </div>

      <!-- Contact Form Section -->
      <div class="bg-brand-white border border-brand-light-gray rounded-xl p-8 md:p-12 mb-20">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-brand-black mb-4">{{ $t('contact.form.title') }}</h2>
          <p class="text-lg text-brand-gray max-w-2xl mx-auto">{{ $t('contact.form.subtitle') }}</p>
        </div>

        <form @submit.prevent="handleSubmit" class="max-w-3xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <!-- First Name -->
            <div>
              <label for="firstName" class="block text-sm font-medium text-brand-dark-gray mb-2">
                {{ $t('contact.form.firstName') }}
              </label>
              <input
                id="firstName"
                v-model="form.firstName"
                type="text"
                required
                class="w-full px-4 py-3 border border-brand-light-gray rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-colors duration-200"
                :placeholder="$t('contact.form.firstNamePlaceholder')"
              >
            </div>

            <!-- Last Name -->
            <div>
              <label for="lastName" class="block text-sm font-medium text-brand-dark-gray mb-2">
                {{ $t('contact.form.lastName') }}
              </label>
              <input
                id="lastName"
                v-model="form.lastName"
                type="text"
                required
                class="w-full px-4 py-3 border border-brand-light-gray rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-colors duration-200"
                :placeholder="$t('contact.form.lastNamePlaceholder')"
              >
            </div>
          </div>

          <!-- Email -->
          <div class="mb-6">
            <label for="email" class="block text-sm font-medium text-brand-dark-gray mb-2">
              {{ $t('contact.form.email') }}
            </label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              class="w-full px-4 py-3 border border-brand-light-gray rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-colors duration-200"
              :placeholder="$t('contact.form.emailPlaceholder')"
            >
          </div>

          <!-- Subject -->
          <div class="mb-6">
            <label for="subject" class="block text-sm font-medium text-brand-dark-gray mb-2">
              {{ $t('contact.form.subject') }}
            </label>
            <select
              id="subject"
              v-model="form.subject"
              required
              class="w-full px-4 py-3 border border-brand-light-gray rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-colors duration-200"
            >
              <option value="">{{ $t('contact.form.subjectPlaceholder') }}</option>
              <option value="general">{{ $t('contact.form.subjects.general') }}</option>
              <option value="support">{{ $t('contact.form.subjects.support') }}</option>
              <option value="business">{{ $t('contact.form.subjects.business') }}</option>
              <option value="partnership">{{ $t('contact.form.subjects.partnership') }}</option>
            </select>
          </div>

          <!-- Message -->
          <div class="mb-8">
            <label for="message" class="block text-sm font-medium text-brand-dark-gray mb-2">
              {{ $t('contact.form.message') }}
            </label>
            <textarea
              id="message"
              v-model="form.message"
              rows="6"
              required
              class="w-full px-4 py-3 border border-brand-light-gray rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-colors duration-200 resize-none"
              :placeholder="$t('contact.form.messagePlaceholder')"
            ></textarea>
          </div>

          <!-- Submit Button -->
          <div class="text-center">
            <button
              type="submit"
              :disabled="isSubmitting"
              class="inline-flex items-center px-8 py-4 bg-brand-primary hover:bg-brand-primary/90 disabled:bg-brand-gray text-brand-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
            >
              <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {{ isSubmitting ? $t('contact.form.sending') : $t('contact.form.send') }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Form data
const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: ''
})

// Form submission state
const isSubmitting = ref(false)

// Business hours
const businessHours = {
  monday: '8:00 AM - 6:00 PM',
  tuesday: '8:00 AM - 6:00 PM',
  wednesday: '8:00 AM - 6:00 PM',
  thursday: '8:00 AM - 6:00 PM',
  friday: '8:00 AM - 5:00 PM',
  saturday: '9:00 AM - 2:00 PM',
  sunday: 'Closed'
}

// Handle form submission
const handleSubmit = async () => {
  isSubmitting.value = true
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  // Reset form
  Object.assign(form, {
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  })
  
  isSubmitting.value = false
  
  // Show success message (you can integrate with your notification system)
  alert(t('contact.form.success'))
}
</script>

<style scoped>
/* Professional, clean styling */

/* Hero section styling */
.hero-section {
  height: 400px !important;
}

/* Reusable Shadow Overlay System */
.shadow-overlay-dark {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2));
}

.shadow-overlay-medium {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1));
}

.shadow-overlay-light {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.05));
}

/* Text Shadow Utilities */
.text-shadow-sm {
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
}

.text-shadow-md {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
}

.text-shadow-lg {
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
}

.text-shadow-xl {
  text-shadow: 0 8px 16px rgba(0, 0, 0, 0.8);
}

/* Easy background image change - just update the style attribute above */
</style>
