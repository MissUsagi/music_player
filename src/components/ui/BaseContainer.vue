<template>
<div class="container">
   <slot></slot>
</div>
</template>

<style scoped>
div {
   position: relative;
   margin: auto;
   width: 800px;
   height: 80vh;
   background-color: var(--light-grey);
   border-radius: 30px;
   overflow-y: scroll;
}
/* 
@media only screen and (max-width: 600px) {
  div {
    width: 100%;

  }
} */

</style>