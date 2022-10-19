<template>

<!-- <base-button><i class="fa-solid fa-backward-step fa-lg"></i></base-button>
<base-button><i class="fa-solid fa-play fa-xl"></i></base-button>
<base-button><i class="fa-solid fa-pause fa-xl"></i></base-button>
<base-button><i class="fa-solid fa-forward-step fa-lg"></i></base-button> -->
<!-- <ul>
  <li v-for="song in songs" :key="song.title">{{song.title}}</li>
</ul> -->
<my-playlist></my-playlist>

</template>

<script>
import MyPlaylist from './components/pages/MyPlaylist.vue'
export default {
  name: 'App',
  components: {MyPlaylist}
  

}
</script>

<style>
:root{
--primary-color: #5F558F;
--primary-dark: #2F1A4B;
--secondary-color: #ED5D74;
--inactive-color: #dddddd;
--light-grey: #F3F3F8;
--grey: #78747F;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
background-color: #21D4FD;
background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);
background-attachment: fixed;
margin: 20px 0;
}

#app {
  font-family: 'Rambla', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

}
</style>
