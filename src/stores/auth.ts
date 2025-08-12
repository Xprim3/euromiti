import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  role: 'user' | 'admin' | 'moderator'
}

export const useAuthStore = defineStore('auth', () => {
  // State
  const user = ref<User | null>(null)
  const token = ref<string | null>(null)
  const isLoading = ref(false)

  // Getters
  const isAuthenticated = computed(() => !!user.value)
  const isAdmin = computed(() => user.value?.role === 'admin')
  const isModerator = computed(() => user.value?.role === 'moderator' || user.value?.role === 'admin')
  const userInitials = computed(() => {
    if (!user.value?.name) return '?'
    return user.value.name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  })

  // Actions
  const login = async (email: string, _password: string) => {
    try {
      isLoading.value = true
      // TODO: Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API delay
      
      // Mock user data - replace with actual API response
      const mockUser: User = {
        id: '1',
        email,
        name: 'John Doe',
        avatar: 'https://via.placeholder.com/150',
        role: 'admin'
      }
      
      user.value = mockUser
      token.value = 'mock-jwt-token'
      
      // Store in localStorage
      localStorage.setItem('user', JSON.stringify(mockUser))
      localStorage.setItem('token', 'mock-jwt-token')
      
      return { success: true, user: mockUser }
    } catch (error) {
      console.error('Login failed:', error)
      return { success: false, error: 'Login failed' }
    } finally {
      isLoading.value = false
    }
  }

  const logout = () => {
    user.value = null
    token.value = null
    localStorage.removeItem('user')
    localStorage.removeItem('token')
  }

  const register = async (email: string, _password: string, name: string) => {
    try {
      isLoading.value = true
      // TODO: Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API delay
      
      const mockUser: User = {
        id: Date.now().toString(),
        email,
        name,
        role: 'user'
      }
      
      user.value = mockUser
      token.value = 'mock-jwt-token'
      
      localStorage.setItem('user', JSON.stringify(mockUser))
      localStorage.setItem('token', 'mock-jwt-token')
      
      return { success: true, user: mockUser }
    } catch (error) {
      console.error('Registration failed:', error)
      return { success: false, error: 'Registration failed' }
    } finally {
      isLoading.value = false
    }
  }

  const checkAuth = () => {
    const storedUser = localStorage.getItem('user')
    const storedToken = localStorage.getItem('token')
    
    if (storedUser && storedToken) {
      user.value = JSON.parse(storedUser)
      token.value = storedToken
    }
  }

  // Initialize auth state
  checkAuth()

  return {
    // State
    user,
    token,
    isLoading,
    
    // Getters
    isAuthenticated,
    isAdmin,
    isModerator,
    userInitials,
    
    // Actions
    login,
    logout,
    register,
    checkAuth
  }
})
