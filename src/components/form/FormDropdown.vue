<template>
  <div class="form-field">
    <label 
      v-if="label" 
      :for="id" 
      class="block text-sm font-semibold text-gray-700 mb-2"
    >
      {{ label }}
      <span v-if="required" class="text-red-500 ml-1">*</span>
    </label>
    
    <Dropdown
      :id="id"
      v-model="dropdownValue"
      :options="options"
      :optionLabel="optionLabel"
      :optionValue="optionValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :class="[
        'w-full',
        error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
      ]"
      :aria-describedby="error ? `${id}-error` : undefined"
    />
    
    <p 
      v-if="error" 
      :id="`${id}-error`" 
      class="mt-1 text-sm text-red-600"
    >
      {{ error }}
    </p>
    
    <p 
      v-else-if="helpText" 
      class="mt-1 text-sm text-gray-500"
    >
      {{ helpText }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Dropdown from 'primevue/dropdown'

interface Props {
  modelValue: any
  label?: string
  id?: string
  options: any[]
  optionLabel?: string
  optionValue?: string
  placeholder?: string
  required?: boolean
  disabled?: boolean
  error?: string
  helpText?: string
}

const props = withDefaults(defineProps<Props>(), {
  id: () => `dropdown-${Math.random().toString(36).substr(2, 9)}`,
  optionLabel: 'label',
  optionValue: 'value',
  required: false,
  disabled: false
})

const emit = defineEmits<{
  'update:modelValue': [value: any]
}>()

const dropdownValue = computed({
  get: () => props.modelValue,
  set: (value: any) => emit('update:modelValue', value)
})
</script>

<style scoped>
.form-field {
  @apply w-full;
}
</style>
