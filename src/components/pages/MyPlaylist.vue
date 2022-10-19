<template>
   <base-container>
   <header>
   <base-button mode="btn-bg-light"><i class="fa-solid fa-reply fa-lg"></i></base-button>
   <h2>Playlist</h2>
   </header>
   <section>
   <ul>
  <song-item v-for="song in songs" :key="songs.indexOf(song)" :title="song.title" :artist="song.artist" :duration="song.duration"></song-item>
   </ul>
   </section>
   </base-container>
</template>

<script>
import SongItem from '../playlist/SongItem.vue';
import BaseButton from '../ui/BaseButton.vue';

export default {
   components: {SongItem, BaseButton},
   data(){
    return { 
      songs: [
        {
          title: 'Electronic Future Beats',
          artist: 'QubeSounds',
          src: require('../../assets/music/electronic-future-beats-117997.mp3'),
          img: '',
          isFavourite: false,
          duration: '2:06',
        },
        {
          title: 'Forest Lullaby',
          artist: 'Lesfm',
          src: require('../../assets/music/forest-lullaby-110624.mp3'),
          img: '',
          isFavourite: false,
          duration: '2:18',
        },
               {
          title: 'Into The Night',
          artist: 'prazkhanal',
          src: require('../../assets/music/into-the-night-20928.mp3'),
          img: '',
          isFavourite: false,
          duration: '2:20',
        },
                       {
          title: 'Lofi Study',
          artist: 'FASSounds',
          src: require('../../assets/music/lofi-study-112191.mp3'),
          img: '',
          isFavourite: false,
          duration: '2:27',
        },
               {
          title: 'Moment',
          artist: 'SergeQuadrado',
          src: require('../../assets/music/moment-14023.mp3'),
          img: '',
          isFavourite: false,
         duration: '3:32',
        }, 
        {
             title: 'Powerful Beat',
          artist: 'penguinmusic',
          src: require('../../assets/music/powerful-beat-121791.mp3'),
          img: '',
          isFavourite: false,
          duration: '1:13',
        },
              {
             title: 'Slow Trap',
          artist: 'Anton Vlasov',
          src: require('../../assets/music/slow-trap-18565.mp3'),
          img: '',
          isFavourite: false,
          duration: '2:34'
        },
      ]
    }
  }
}
</script>

<style scoped>
header {
   display: flex;
   flex-direction: row;
   margin-bottom: 10px;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

h2{
   color: var(--primary-color);
   font-weight: 600;
   margin: auto;
}
</style>