import { createApp } from 'vue'
import PrimeVue from 'primevue/config'

import router from './router'
import pinia from './stores'
import i18n from './i18n'
import './style.css'

import App from './App.vue'

const app = createApp(App)

// Use PrimeVue without theme preset to restore functionality
app.use(PrimeVue)

app.use(router)
app.use(pinia)
app.use(i18n)

app.mount('#app')
