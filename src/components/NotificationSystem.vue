<script setup lang="ts">
import { useAppStore } from '../stores/app'
import { computed } from 'vue'
import Toast from 'primevue/toast'

const appStore = useAppStore()

const notifications = computed(() => appStore.notifications)

const getSeverity = (type: string) => {
  switch (type) {
    case 'success': return 'success'
    case 'error': return 'error'
    case 'warning': return 'warn'
    case 'info': return 'info'
    default: return 'info'
  }
}
</script>

<template>
  <div class="notification-system">
    <!-- PrimeVue Toast for notifications -->
    <Toast 
      v-for="notification in notifications" 
      :key="notification.id"
      :severity="getSeverity(notification.type)"
      :life="notification.duration || 5000"
      @close="appStore.removeNotification(notification.id)"
    >
      <template #message>
        <div class="flex flex-col">
          <span class="font-semibold">{{ notification.title }}</span>
          <span class="text-sm">{{ notification.message }}</span>
        </div>
      </template>
    </Toast>
  </div>
</template>

<style scoped>
.notification-system {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
}
</style>
