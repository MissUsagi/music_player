<template>
      <li>
      <div class="song-info">
      <h4><span>{{duration}}</span> | {{artist}}</h4>
      <h3>{{title}}</h3>
         </div>
      <div class="actions">
         <base-button mode="btn-no-bg btn-primary"><i class="fa-solid fa-share-nodes fa-lg"></i></base-button>
         <base-button @click="addToFav" mode="btn-no-bg btn-inactive"><i class="fa-solid fa-heart fa-lg" :class="{ fav: isFav }"></i></base-button>
      </div>
   </li>
</template>

<script>
export default {
   props: ['title', 'artist', 'duration', 'isFavourite'],
   data(){
      return{
         isFav: false,
      }
   },
methods: {
   addToFav() {
       this.isFav = !this.isFav;
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

li:hover h3{
   color: var(--secondary-color);
   transition: 0.1s ease-in-out;
}

li:last-child {
   border-bottom: none;
}

button {
   width: 30px;
   height: 30px;
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
}

.actions {
   align-items: flex-end;
   justify-content: center;
}

</style>