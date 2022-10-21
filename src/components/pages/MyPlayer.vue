<template>
  <base-container class="no-overflow">
    <div class="song-details">
      <player-menu class="player-menu"></player-menu>

    <div class="info-label">
      <!-- <h2>{{songs[0].artist}}</h2>
      <h3>{{songs[0].title}}</h3> -->
      <h2>{{nowPlaying[index].artist}}</h2>
      <h3>{{nowPlaying[index].title}}</h3>
      </div>

      <img :src="nowPlaying[index].img" alt="" />
    </div>
<player-actions @click="songIndex"></player-actions>
  </base-container>
</template>

<script>
import PlayerActions from '../player/PlayerActions.vue';
import PlayerMenu from '../player/PlayerMenu.vue';
export default {
  components: { PlayerActions, PlayerMenu},

  data() {
    return {
      index: this.$store.getters.songIndex, 
    };
  },
  computed: {
    nowPlaying(){
      return this.$store.getters.playlist;
    },


  },
  
  methods:{
      songIndex()
      {
        // logika do poprawy  nie wiem czemu to działa o.o
      this.index =  this.$store.getters.index;
      console.log(this.index);
      return this.index;
    }


  }
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
   height: 17%;
   border-radius: 20px 20px 0 0;
  width: 100%;
  top: 0;
  z-index: 3;
}

.info-label {
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

</style>
