import { createApp } from 'vue';
import App from './App.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseContainer from './components/ui/BaseContainer.vue';
import BaseHeader from './components/ui/BaseHeader.vue';

const app = createApp(App);
app.component('base-button', BaseButton);
app.component('base-container', BaseContainer);
app.component('base-header', BaseHeader);
app.mount('#app');

