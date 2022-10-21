<template>
   <base-container>

   <base-header>  
   <router-link to="/player"><base-button mode="btn-bg-light btn-sm" type="button"><i class="fa-solid fa-reply fa-lg"></i></base-button></router-link>
   <h2>Playlist</h2>
   </base-header>

   <section>
   <ul>
  <song-item v-for="song in playlist" :key="playlist.indexOf(song)" :index="playlist.indexOf(song)" :title="song.title" :artist="song.artist" :duration="song.duration" :isFavourite="song.isFavourite"></song-item>
   </ul>
   </section>
   
   <div class="overlay"></div>
   </base-container>
</template>

<script>
import SongItem from '../playlist/SongItem.vue';

export default {
   components: {SongItem},
   
  computed: {
    playlist(){
      return this.$store.getters.playlist;
    }
  }
}
</script>

<style scoped>

section{
   padding: 20px 30px 20px 40px;
}

ul {
  list-style: none;
}

h2{
   color: var(--primary-color);
   font-weight: 600;
   margin: auto;
   font-size: 2.8rem;
}

.overlay{
   position: sticky;
   bottom: 0;
   left: 0;
   width: 100%;
   height: 5%;
   background-color: rgba(255, 255, 255, 0.8);
   filter: blur(16px);
}
</style>