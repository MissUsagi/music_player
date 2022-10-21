<template>
  <div class="actions">
    <base-button mode="btn-bg-light"
      ><i class="fa-solid fa-share-nodes fa-lg"></i
    ></base-button>
    <div class="player-actions">
      <base-button @click="prev"
        ><i class="fa-solid fa-backward-step fa-lg"></i
      ></base-button>
      <base-button mode="btn-xl" v-if="!isPlaying" @click="playMusic"
        ><i class="fa-solid fa-play fa-2xl"></i
      ></base-button>
      <base-button mode="btn-xl" v-else @click="pauseMusic"
        ><i class="fa-solid fa-pause fa-2xl"></i
      ></base-button>
      <base-button @click="next"
        ><i class="fa-solid fa-forward-step fa-lg"></i
      ></base-button>
    </div>
    <base-button mode="btn-bg-light"
      ><i class="fa-solid fa-heart fa-lg"></i
    ></base-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPlaying: false,
      index: this.$store.getters.songIndex,
    };
  },
  provide(){
    return {
      songIndex: this.index,
    }
  },
  methods: {
    playMusic() {
      return (this.isPlaying = !this.isPlaying);
    },
    pauseMusic() {
      return (this.isPlaying = !this.isPlaying);
    },
    prev() {
      this.index--;
      if (this.index < 0) {
        this.index = this.$store.getters.playlist.length - 1;
      }
      this.$store.getters.index = this.index;
      console.log( this.$store.getters.index);
    },
    next() {
      this.index++;
      if (this.index > this.$store.getters.playlist.length - 1) {
        this.index = 0;
      }
         this.$store.getters.index = this.index;
      console.log(this.$store.getters.index);
    },
  },
};
</script>

<style scoped>
.actions {
  display: flex;
  height: 30%;
  padding: 0 30px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.player-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>