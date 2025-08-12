<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'default' | 'elevated' | 'outlined' | 'flat'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  hover?: boolean
  clickable?: boolean
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  padding: 'md',
  hover: false,
  clickable: false,
  shadow: 'md'
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const cardClasses = computed(() => {
  const baseClasses = [
    'bg-brand-white rounded-xl border transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2'
  ]

  // Variant classes
  const variantClasses = {
    default: 'border-brand-light-gray',
    elevated: 'border-transparent',
    outlined: 'border-brand-primary',
    flat: 'border-transparent shadow-none'
  }

  // Padding classes
  const paddingClasses = {
    none: '',
    sm: 'p-3',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10'
  }

  // Shadow classes
  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl'
  }

  // Interactive classes
  const interactiveClasses = []
  if (props.clickable) {
    interactiveClasses.push('cursor-pointer')
  }
  if (props.hover) {
    interactiveClasses.push('hover:shadow-lg hover:-translate-y-1')
  }

  return [
    ...baseClasses,
    variantClasses[props.variant],
    paddingClasses[props.padding],
    shadowClasses[props.shadow],
    ...interactiveClasses
  ].join(' ')
})

const handleClick = (event: MouseEvent) => {
  if (props.clickable) {
    emit('click', event)
  }
}

const handleKeydown = (event: KeyboardEvent) => {
  if (props.clickable && (event.key === 'Enter' || event.key === ' ')) {
    event.preventDefault()
    emit('click', event as unknown as MouseEvent)
  }
}
</script>

<template>
  <div
    :class="cardClasses"
    :tabindex="clickable ? 0 : undefined"
    @click="handleClick"
    @keydown="handleKeydown"
  >
    <!-- Card Header -->
    <div v-if="$slots.header" class="mb-4">
      <slot name="header" />
    </div>

    <!-- Card Content -->
    <div class="flex-1">
      <slot />
    </div>

    <!-- Card Footer -->
    <div v-if="$slots.footer" class="mt-4 pt-4 border-t border-brand-light-gray">
      <slot name="footer" />
    </div>
  </div>
</template>
