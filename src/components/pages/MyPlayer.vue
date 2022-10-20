<template>
  <base-container class="no-overflow">
    <div class="img-container">
      <div class="player-menu"></div>
    <div class="info-label">
      <h2>{{songs[0].artist}}</h2>
      <h3>{{songs[0].title}}</h3>
      </div>
      <img :src="songs[0].img" alt="" />
    </div>
<player-actions></player-actions>
  </base-container>
</template>

<script>
import PlayerActions from '../player/PlayerActions.vue';
export default {
  components: { PlayerActions },
  data() {
    return {
      songs: [
        {
          title: "Electronic Future Beats",
          artist: "QubeSounds",
          src: require("../../assets/music/electronic-future-beats-117997.mp3"),
          img: require("../../assets/images/city.jpg"),
          isFavourite: false,
          duration: "2:06",
        },
      ],
    };
  },
};
</script>

<style scoped>


h2 {
   font-weight: 600;
   font-size: 1.5rem;
}

h3{
   font-weight: 400;
}


.img-container {
   position: relative;
   height: 70%;
}

.player-menu {
   position: absolute;
   background-color: rgba(47, 26, 75, 0.5);
   /* background-color: yellow; */
   height: 90px;
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
height: 100px;
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
