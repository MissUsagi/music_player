<template>
  <base-container class="no-overflow">
    <div class="song-details">
      <player-menu class="player-menu"></player-menu>

    <div class="song-info">
      <h2>{{nowPlaying[songIndex].artist}}</h2>
      <h3>{{nowPlaying[songIndex].title}}</h3>
      </div>
      <img :src="nowPlaying[songIndex].img" alt="" />
    </div>
    <base-progressbar></base-progressbar>
<player-actions></player-actions>
  </base-container>
</template>

<script>
import PlayerActions from '../player/PlayerActions.vue';
import PlayerMenu from '../player/PlayerMenu.vue';
export default {
  components: { PlayerActions, PlayerMenu},
  computed: {
    nowPlaying(){
      return this.$store.getters.playlist;
    },
    songIndex(){
      return this.$store.getters.songIndex;
    }
  },
  
};
</script>

<style scoped>


h2 {
   font-weight: 600;
   font-size: 1.8rem;
}

h3{
   font-weight: 400;
   font-size: 1.3rem;
}

.no-overflow {
  overflow: hidden;
}

.song-details {
   position: relative;
   height: 70%;
}

.player-menu {
   position: absolute;
   background-color: rgba(47, 26, 75, 0.5);
   height: 20%;
   border-radius: 20px 20px 0 0;
  width: 100%;
  top: 0;
  z-index: 3;
}

.song-info {
position: absolute;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: rgba(47, 26, 75, 0.5);
height: 20%;
width: 100%;
bottom: 0;
color: white;
line-height: 1.6;
align-items: center;
text-align: center;
z-index: 2;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px 20px 0 0;
}

@media only screen and (max-width: 600px) {
  img {
    border-radius: 0;
  }
  .player-menu {
    border-radius: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center
  }
}


</style>
