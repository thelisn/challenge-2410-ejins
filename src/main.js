import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
// pinia storage 저장 plugin
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App);
const pinia = createPinia()

app.use(router);
app.use(pinia);
app.mount('#app');

pinia.use(piniaPluginPersistedstate)