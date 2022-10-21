<template>
      <li>
      <div class="song-info" @click="playSong(index)">
      <h4><span>{{duration}}</span> | {{artist}}</h4>
      <h3>{{title}}</h3>
         </div>
      <div class="actions">
         <base-button mode="btn-no-bg btn-primary"><i class="fa-solid fa-share-nodes fa-lg"></i></base-button>
         <base-button @click="addToFav(index)" mode="btn-no-bg btn-inactive"><i class="fa-solid fa-heart fa-lg" :class="{ fav: isFavourite }"></i></base-button>
      </div>
   </li>
</template>

<script>
export default {
   props: ['index', 'title', 'artist', 'duration', 'isFavourite'],
   data(){
     return {player: new Audio(), }
   },

// methods: {
//    addToFav() {
//        this.isFav = !this.isFav;
//        return console.log(this.$store.getters.playlist);
//    }
// },
methods:  {
      addToFav(idx) {
     return this.$store.getters.playlist[idx].isFavourite = ! this.$store.getters.playlist[idx].isFavourite;
   },

   playSong(index){
      //KOD DO ZMIANY
      console.log('song' + index);
      this.$store.state.index = index;
      console.log(this.$store.getters.songIndex);
            this.player.src = this.$store.getters.playlist[index].src; 
                  this.player.play();

   //    if(typeof this.playlist[idx].src != undefined)
   //    {
   //    this.currentSong = this.playlist[idx];

   //    }    
   //   console.log(this.currentSong);


   //    this.isPlaying = true;

   }
}
}
</script>

<style scoped>
li{
cursor: pointer;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 20px 0;
border-bottom: 1px solid var(--inactive-color);
}

.song-info:hover h3{
   color: var(--secondary-color);
   transition: 0.1s ease-in-out;
}

li:last-child {
   border-bottom: none;
}

button {
   width: 30px;
   height: 30px;
   margin: 0 10px;
}

h4{
   color: var(--grey);
   font-weight: 400;
   font-size: 1.5rem;
}

h3 {
   text-transform: capitalize;
   color: var(--primary-dark);
   font-size: 2rem;
}

.fav{
   color: var(--secondary-color);
}

.song-info {
   text-align: left;
   width: 70%;
}

.actions {
   align-items: flex-end;
   justify-content: center;
}

</style>