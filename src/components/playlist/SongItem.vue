<template>
      <li>
      <div class="song-info">
      <h4><span>{{duration}}</span> | {{artist}}</h4>
      <h3>{{title}}</h3>
         </div>
      <div class="actions">
         <base-button mode="btn-no-bg btn-primary"><i class="fa-solid fa-share-nodes fa-lg"></i></base-button>
         <base-button mode="btn-no-bg btn-inactive "><i class="fa-solid fa-heart fa-lg"></i></base-button>
      </div>
   </li>
</template>

<script>
export default {
   props: ['title', 'artist', 'duration']
}
</script>

<style scoped>
li{
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 10px 0;
border-bottom: 1px solid var(--inactive-color);
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
}

h3 {
   color: var(--primary-dark);
}

.song-info {
   text-align: left;
}

.actions {
   align-items: flex-end;
   justify-content: center;
}

</style>