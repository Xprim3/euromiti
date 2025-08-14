import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import router from './router'
import pinia from './stores'
import i18n from './i18n'
import './style.css'
import './assets/global.css'
import App from './App.vue'

const app = createApp(App)

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})

app.use(router)
app.use(pinia)
app.use(i18n)

app.mount('#app')
