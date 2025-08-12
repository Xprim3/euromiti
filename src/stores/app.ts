import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAppStore = defineStore('app', () => {
  // State
  const sidebarOpen = ref(false)
  const theme = ref<'light' | 'dark'>('light')
  const notifications = ref<Array<{
    id: string
    type: 'success' | 'error' | 'warning' | 'info'
    title: string
    message: string
    duration?: number
  }>>([])

  // Getters
  const hasNotifications = computed(() => notifications.value.length > 0)
  const unreadNotifications = computed(() => 
    notifications.value.filter(n => !n.duration)
  )

  // Actions
  const toggleSidebar = () => {
    sidebarOpen.value = !sidebarOpen.value
  }

  const setTheme = (newTheme: 'light' | 'dark') => {
    theme.value = newTheme
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }

  const addNotification = (notification: {
    type: 'success' | 'error' | 'warning' | 'info'
    title: string
    message: string
    duration?: number
  }) => {
    const id = Date.now().toString()
    const newNotification = { id, ...notification }
    
    notifications.value.push(newNotification)
    
    // Auto-remove notification after duration
    if (notification.duration) {
      setTimeout(() => {
        removeNotification(id)
      }, notification.duration)
    }
    
    return id
  }

  const removeNotification = (id: string) => {
    const index = notifications.value.findIndex(n => n.id === id)
    if (index > -1) {
      notifications.value.splice(index, 1)
    }
  }

  const clearNotifications = () => {
    notifications.value = []
  }

  const showSuccess = (title: string, message: string, duration = 5000) => {
    return addNotification({ type: 'success', title, message, duration })
  }

  const showError = (title: string, message: string, duration = 8000) => {
    return addNotification({ type: 'error', title, message, duration })
  }

  const showWarning = (title: string, message: string, duration = 6000) => {
    return addNotification({ type: 'warning', title, message, duration })
  }

  const showInfo = (title: string, message: string, duration = 4000) => {
    return addNotification({ type: 'info', title, message, duration })
  }

  // Initialize theme
  const initTheme = () => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark'
    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      // Auto-detect system theme
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setTheme(prefersDark ? 'dark' : 'light')
    }
  }

  // Initialize
  initTheme()

  return {
    // State
    sidebarOpen,
    theme,
    notifications,
    
    // Getters
    hasNotifications,
    unreadNotifications,
    
    // Actions
    toggleSidebar,
    setTheme,
    addNotification,
    removeNotification,
    clearNotifications,
    showSuccess,
    showError,
    showWarning,
    showInfo
  }
})
