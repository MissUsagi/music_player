import { createRouter, createWebHistory } from 'vue-router';
import MyPlayer from '../components/pages/MyPlayer.vue';
import MyPlaylist from '../components/pages/MyPlaylist.vue';

const router = createRouter({
   history: createWebHistory(),
   routes: [
      { path: '/', redirect: '/player' },
      { path: '/player', component: MyPlayer },
      { path: '/playlist', component: MyPlaylist },
      // { path: '/:notFound(.*)', component: NotFound },
   ]
});

export default router