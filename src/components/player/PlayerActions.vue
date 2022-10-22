<template>
  <div class="btn-container">
    <base-button mode="btn-bg-light"
      ><i class="fa-solid fa-share-nodes fa-lg"></i
    ></base-button>
    <div class="player-actions">
      <base-button @click="prev"
        ><i class="fa-solid fa-backward-step fa-lg"></i
      ></base-button>
      <base-button mode="btn-xl btn-outline" v-if="!isPlaying" @click="playMusic"
        ><i class="fa-solid fa-play fa-2xl"></i
      ></base-button>
      <base-button mode="btn-xl" v-else @click="pauseMusic"
        ><i class="fa-solid fa-pause fa-2xl"></i
      ></base-button>
      <base-button @click="next"
        ><i class="fa-solid fa-forward-step fa-lg"></i
      ></base-button>
    </div>
    <base-button @click="toggleFav" :class="{ fav: isFav }" mode="btn-bg-light" 
      ><i class="fa-solid fa-heart fa-lg"></i
    ></base-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPlaying: this.$store.state.nowPlaying,
      index: this.$store.getters.songIndex,
    };
  },
  computed: {
    isFav(){ return this.$store.getters.playlist[this.index].isFavourite;}
  },

  methods: {
    playMusic() {
      this.$store.commit('play', {value: this.index})
      this.isPlaying = true;
    },

    pauseMusic() {
      this.$store.commit('pause')
       this.isPlaying = false;
    },

    prev() {
      this.index--;
      if (this.index < 0) {
        this.index = this.$store.getters.playlist.length - 1;
      }
      this.$store.state.index = this.index;
            if(this.isPlaying === true) {         
          this.$store.commit('play', {value: this.index})
          }
    },

    next() {
      this.index++;
      if (this.index > this.$store.getters.playlist.length - 1) {
        this.index = 0;
      }
         this.$store.state.index = this.index;
         if(this.isPlaying === true) {         
          this.$store.commit('play', {value: this.index})
          }
    },

    toggleFav(){
      this.$store.getters.playlist[this.index].isFavourite = !this.$store.getters.playlist[this.index].isFavourite;
    }

  },
};
</script>

<style scoped>
.btn-container {
  display: flex;
  height: 30%;
  padding: 0 30px;
  margin: 0 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.player-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}

.fav {
  color: var(--secondary-color) !important;
}

@media only screen and (max-width: 600px) {

button.btn-bg-light {
  display: none;
}

.btn-container {
  justify-content: center;
}

}

</style>