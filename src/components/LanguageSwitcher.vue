<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { availableLocales, type Locale } from '../i18n'
import Dropdown from 'primevue/dropdown'
import { computed } from 'vue'

const { locale } = useI18n()

const currentLocale = computed(() => {
  return availableLocales.find(l => l.code === locale.value) || availableLocales[0]
})

const handleLocaleChange = (newLocale: Locale) => {
  locale.value = newLocale
  localStorage.setItem('locale', newLocale)
}

const localeOptions = availableLocales.map(locale => ({
  label: `${locale.flag} ${locale.name}`,
  value: locale.code
}))
</script>

<template>
  <div class="language-switcher">
    <Dropdown
      v-model="locale"
      :options="localeOptions"
      optionLabel="label"
      optionValue="value"
      :placeholder="currentLocale.flag"
      class="w-auto"
      @change="handleLocaleChange"
    />
  </div>
</template>

<style scoped>
.language-switcher {
  min-width: auto;
}
</style>
