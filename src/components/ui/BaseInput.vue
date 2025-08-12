<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search'
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'outlined' | 'filled'
  disabled?: boolean
  readonly?: boolean
  placeholder?: string
  label?: string
  helperText?: string
  error?: string
  required?: boolean
  fullWidth?: boolean
  modelValue?: string | number
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  size: 'md',
  variant: 'default',
  disabled: false,
  readonly: false,
  required: false,
  fullWidth: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
  focus: [event: FocusEvent]
  blur: [event: FocusEvent]
  input: [event: Event]
}>()

const inputClasses = computed(() => {
  const baseClasses = [
    'w-full rounded-lg border transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'placeholder:text-brand-gray'
  ]

  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-base',
    lg: 'px-5 py-4 text-lg'
  }

  // Variant classes
  const variantClasses = {
    default: [
      'bg-brand-white border-brand-light-gray',
      'focus:border-brand-primary focus:ring-brand-primary',
      'hover:border-brand-gray'
    ],
    outlined: [
      'bg-transparent border-brand-primary',
      'focus:ring-brand-primary',
      'hover:border-brand-primary'
    ],
    filled: [
      'bg-brand-light border-brand-light-gray',
      'focus:bg-brand-white focus:border-brand-primary focus:ring-brand-primary',
      'hover:bg-brand-light-gray'
    ]
  }

  // Error state
  const errorClasses = props.error
    ? 'border-brand-accent focus:border-brand-accent focus:ring-brand-accent'
    : ''

  // Width classes
  const widthClasses = props.fullWidth ? 'w-full' : ''

  return [
    ...baseClasses,
    sizeClasses[props.size],
    ...variantClasses[props.variant],
    errorClasses,
    widthClasses
  ].join(' ')
})

const labelClasses = computed(() => {
  return [
    'block text-sm font-medium mb-2',
    props.error ? 'text-brand-accent' : 'text-brand-dark-gray'
  ].join(' ')
})

const helperClasses = computed(() => {
  return [
    'text-sm mt-1',
    props.error ? 'text-brand-accent' : 'text-brand-gray'
  ].join(' ')
})

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
  emit('input', event)
}
</script>

<template>
  <div :class="{ 'w-full': fullWidth }">
    <!-- Label -->
    <label v-if="label" :class="labelClasses">
      {{ label }}
      <span v-if="required" class="text-brand-accent ml-1">*</span>
    </label>

    <!-- Input Field -->
    <input
      :type="type"
      :class="inputClasses"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :required="required"
      @input="handleInput"
      @focus="emit('focus', $event)"
      @blur="emit('blur', $event)"
    />

    <!-- Helper Text or Error -->
    <p v-if="helperText || error" :class="helperClasses">
      {{ error || helperText }}
    </p>
  </div>
</template>
