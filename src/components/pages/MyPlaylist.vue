<template>
   <base-container>

   <base-header>  
   <base-button mode="btn-bg-light btn-sm" type="button"><i class="fa-solid fa-reply fa-lg"></i></base-button>
   <h2>Playlist</h2>
   </base-header>

   <section>
   <ul>
  <song-item v-for="song in songs" :key="songs.indexOf(song)" :title="song.title" :artist="song.artist" :duration="song.duration" :isFavourite="songs.isFavourite"></song-item>
   </ul>
   </section>
   
   <div class="overlay"></div>
   </base-container>
</template>

<script>
import SongItem from '../playlist/SongItem.vue';

export default {
   components: {SongItem},
   data(){
    return { 
      songs: [
        {
          title: 'Electronic Future Beats',
          artist: 'QubeSounds',
          src: require('../../assets/music/electronic-future-beats-117997.mp3'),
          img: '../../assets/images/city-gc961cfcb_640.jpg',
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