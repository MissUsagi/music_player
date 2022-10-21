import { createApp } from 'vue';
import store from './store/store.js'
import router from './router/router.js'
import App from './App.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseContainer from './components/ui/BaseContainer.vue';
import BaseHeader from './components/ui/BaseHeader.vue';

const app = createApp(App);
app.use(store);
app.use(router);
app.component('base-button', BaseButton);
app.component('base-container', BaseContainer);
app.component('base-header', BaseHeader);

app.mount('#app');

