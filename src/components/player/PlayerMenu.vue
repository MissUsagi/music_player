<template>
 <div class="actions">
        <div class="btn-group">
             <base-button mode="btn-no-bg" type="button"><i class="fa-solid fa-repeat fa-xl"></i></base-button>
                <base-button mode="btn-no-bg" type="button"><i class="fa-solid fa-shuffle fa-xl"></i></base-button>
                   <base-button mode="btn-no-bg" type="button"><i class="fa-solid fa-arrow-rotate-right fa-xl"></i></base-button>
        </div>
        <router-link to="playlist"><base-button mode="btn-no-bg" class="hamburger" type="button"><i class="fa-solid fa-bars fa-xl"></i></base-button></router-link>
        </div>
</template>

<style scoped>
button {
   opacity: 0.9;
}

button:hover {
   scale: 1.1;
}

.actions{
   padding: 10px;
}

.btn-group{
 margin: auto;
 display: inline;
}

.hamburger{
   position: absolute; 
   right: 20px;
}

@media only screen and (max-width: 600px) {

   button {
      padding: 3px;
   }

   .btn-group{
      font-size: 1.5rem;
      margin: 5px 2px;
   }
   .hamburger {
      position: unset;
   }
}


</style>