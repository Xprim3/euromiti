<script setup lang="ts">
import { useAuthStore } from '../stores/auth'
import { useAppStore } from '../stores/app'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Avatar from 'primevue/avatar'

const authStore = useAuthStore()
const appStore = useAppStore()

const handleLogin = async () => {
  const result = await authStore.login('demo@example.com', 'password123')
  if (result.success) {
    appStore.showSuccess('Login Successful', 'Welcome back!')
  } else {
    appStore.showError('Login Failed', 'Please check your credentials')
  }
}

const handleLogout = () => {
  authStore.logout()
  appStore.showInfo('Logged Out', 'You have been successfully logged out')
}

const handleThemeToggle = () => {
  const newTheme = appStore.theme === 'light' ? 'dark' : 'light'
  appStore.setTheme(newTheme)
  appStore.showInfo('Theme Changed', `Switched to ${newTheme} theme`)
}
</script>

<template>
  <Card class="w-full max-w-md mx-auto">
    <template #title>
      <div class="flex items-center gap-3">
        <Avatar 
          v-if="authStore.user" 
          :label="authStore.userInitials" 
          size="large"
          class="bg-gradient-to-r from-blue-500 to-purple-500"
        />
        <Avatar 
          v-else 
          icon="pi pi-user" 
          size="large"
          class="bg-gray-400"
        />
        <div>
          <h3 class="text-lg font-semibold">
            {{ authStore.user ? authStore.user.name : 'Guest User' }}
          </h3>
          <p class="text-sm text-gray-500">
            {{ authStore.user ? authStore.user.role : 'Not authenticated' }}
          </p>
        </div>
      </div>
    </template>

    <template #content>
      <div class="space-y-4">
        <!-- Authentication Status -->
        <div class="p-3 rounded-lg" :class="{
          'bg-green-50 border border-green-200': authStore.isAuthenticated,
          'bg-gray-50 border border-gray-200': !authStore.isAuthenticated
        }">
          <p class="text-sm">
            <span class="font-medium">Status:</span>
            <span :class="{
              'text-green-600': authStore.isAuthenticated,
              'text-gray-600': !authStore.isAuthenticated
            }">
              {{ authStore.isAuthenticated ? 'Authenticated' : 'Not authenticated' }}
            </span>
          </p>
        </div>

        <!-- User Details -->
        <div v-if="authStore.user" class="space-y-2">
          <div class="flex justify-between">
            <span class="text-sm text-gray-600">Email:</span>
            <span class="text-sm font-medium">{{ authStore.user.email }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-sm text-gray-600">Role:</span>
            <span class="text-sm font-medium capitalize">{{ authStore.user.role }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-sm text-gray-600">Admin Access:</span>
            <span class="text-sm font-medium" :class="{
              'text-green-600': authStore.isAdmin,
              'text-red-600': !authStore.isAdmin
            }">
              {{ authStore.isAdmin ? 'Yes' : 'No' }}
            </span>
          </div>
        </div>

        <!-- Actions -->
        <div class="flex gap-2">
          <Button 
            v-if="!authStore.isAuthenticated"
            @click="handleLogin"
            :loading="authStore.isLoading"
            label="Login Demo"
            class="flex-1"
          />
          <Button 
            v-else
            @click="handleLogout"
            label="Logout"
            severity="secondary"
            class="flex-1"
          />
        </div>

        <!-- Theme Toggle -->
        <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <span class="text-sm text-gray-600">Theme:</span>
          <Button 
            @click="handleThemeToggle"
            :label="appStore.theme === 'light' ? '🌙 Dark' : '☀️ Light'"
            size="small"
            severity="secondary"
          />
        </div>

        <!-- Notifications Demo -->
        <div class="space-y-2">
          <p class="text-sm text-gray-600 font-medium">Demo Notifications:</p>
          <div class="flex gap-2">
            <Button 
              @click="appStore.showSuccess('Success!', 'This is a success message')"
              label="Success"
              size="small"
              severity="success"
            />
            <Button 
              @click="appStore.showError('Error!', 'This is an error message')"
              label="Error"
              size="small"
              severity="danger"
            />
            <Button 
              @click="appStore.showWarning('Warning!', 'This is a warning message')"
              label="Warning"
              size="small"
              severity="warn"
            />
          </div>
        </div>
      </div>
    </template>
  </Card>
</template>
