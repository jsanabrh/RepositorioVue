import "@/assets/main.scss";
import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import router from '@/router';

library.add(fas);

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.mount('#app');