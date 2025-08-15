<template>
  <div class="form-field">
    <div class="flex items-center">
      <Checkbox
        :id="id"
        v-model="checkboxValue"
        :binary="true"
        :disabled="disabled"
        :class="[
          error ? 'border-red-500' : ''
        ]"
        :aria-describedby="error ? `${id}-error` : undefined"
      />
      
      <label 
        v-if="label" 
        :for="id" 
        class="ml-3 text-sm text-gray-700 cursor-pointer"
      >
        {{ label }}
        <span v-if="required" class="text-red-500 ml-1">*</span>
      </label>
    </div>
    
    <p 
      v-if="error" 
      :id="`${id}-error`" 
      class="mt-1 text-sm text-red-600 ml-8"
    >
      {{ error }}
    </p>
    
    <p 
      v-else-if="helpText" 
      class="mt-1 text-sm text-gray-500 ml-8"
    >
      {{ helpText }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Checkbox from 'primevue/checkbox'

interface Props {
  modelValue: boolean
  label?: string
  id?: string
  required?: boolean
  disabled?: boolean
  error?: string
  helpText?: string
}

const props = withDefaults(defineProps<Props>(), {
  id: () => `checkbox-${Math.random().toString(36).substr(2, 9)}`,
  required: false,
  disabled: false
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const checkboxValue = computed({
  get: () => props.modelValue,
  set: (value: boolean) => emit('update:modelValue', value)
})
</script>

<style scoped>
.form-field {
  @apply w-full;
}
</style>
