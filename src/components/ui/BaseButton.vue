<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'primary' | 'secondary' | 'accent' | 'warning' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  disabled?: boolean
  loading?: boolean
  fullWidth?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
  fullWidth: false,
  type: 'button'
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const buttonClasses = computed(() => {
  const baseClasses = [
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'active:scale-95'
  ]

  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl'
  }

  // Variant classes
  const variantClasses = {
    primary: [
      'bg-brand-primary text-brand-white',
      'hover:bg-blue-700 focus:ring-blue-500',
      'shadow-md hover:shadow-lg'
    ],
    secondary: [
      'bg-brand-secondary text-brand-white',
      'hover:bg-green-700 focus:ring-green-500',
      'shadow-md hover:shadow-lg'
    ],
    accent: [
      'bg-brand-accent text-brand-white',
      'hover:bg-red-700 focus:ring-red-500',
      'shadow-md hover:shadow-lg'
    ],
    warning: [
      'bg-brand-warning text-brand-white',
      'hover:bg-orange-700 focus:ring-orange-500',
      'shadow-md hover:shadow-lg'
    ],
    outline: [
      'bg-transparent border-2 border-brand-primary text-brand-primary',
      'hover:bg-brand-primary hover:text-brand-white',
      'focus:ring-brand-primary'
    ],
    ghost: [
      'bg-transparent text-brand-primary',
      'hover:bg-brand-primary hover:text-brand-white',
      'focus:ring-brand-primary'
    ]
  }

  // Width classes
  const widthClasses = props.fullWidth ? 'w-full' : ''

  return [
    ...baseClasses,
    sizeClasses[props.size],
    ...variantClasses[props.variant],
    widthClasses
  ].join(' ')
})

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>

<template>
  <button
    :class="buttonClasses"
    :disabled="disabled || loading"
    :type="type"
    @click="handleClick"
  >
    <!-- Loading Spinner -->
    <svg
      v-if="loading"
      class="animate-spin -ml-1 mr-2 h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>

    <!-- Button Content -->
    <slot />
  </button>
</template>
