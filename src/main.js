import { createApp } from 'vue';
import store from './store/store.js'
import router from './router/router.js'
import App from './App.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseContainer from './components/ui/BaseContainer.vue';
import BaseHeader from './components/ui/BaseHeader.vue';
import BaseProgressbar from './components/ui/BaseProgressbar.vue';

const app = createApp(App);
app.use(store);
app.component('base-button', BaseButton);
app.component('base-container', BaseContainer);
app.component('base-header', BaseHeader);
app.component('base-progressbar', BaseProgressbar);
app.use(router);

router.isReady().then(function () {
   app.mount('#app');
});


