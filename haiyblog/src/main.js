import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import { Theme } from '@primevue/themes';
const app =createApp(App)
app.use(PrimeVue,{
    theme:{
        preset: Aura
    }
});
app.mount('#app')
