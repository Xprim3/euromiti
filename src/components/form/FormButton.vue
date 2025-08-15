<template>
  <Button
    :type="type"
    :label="label"
    :icon="icon"
    :disabled="disabled"
    :loading="loading"
    :class="[
      'transition-all duration-200',
      size === 'sm' ? 'h-9 px-4 py-2 text-sm' : '',
      size === 'md' ? 'h-12 px-6 py-3' : '',
      size === 'lg' ? 'h-14 px-8 py-4 text-lg' : '',
             variant === 'primary' ? 'bg-[#2563eb] hover:bg-[#1d4ed8]' : '',
       variant === 'secondary' ? 'bg-[#6b7280] hover:bg-[#4b5563]' : '',
      variant === 'success' ? 'bg-green-600 hover:bg-green-700' : '',
      variant === 'warning' ? 'bg-yellow-600 hover:bg-yellow-700' : '',
      variant === 'danger' ? 'bg-red-600 hover:bg-red-700' : '',
      fullWidth ? 'w-full' : ''
    ]"
    @click="$emit('click', $event)"
  />
</template>

<script setup lang="ts">
import Button from 'primevue/button'

interface Props {
  type?: 'button' | 'submit' | 'reset'
  label: string
  icon?: string
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  fullWidth?: boolean
}

withDefaults(defineProps<Props>(), {
  type: 'button',
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
  fullWidth: false
})

defineEmits<{
  click: [event: Event]
}>()
</script>
