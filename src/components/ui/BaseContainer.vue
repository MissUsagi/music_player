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
   box-shadow: 0 10px 6px -2px rgba(51, 51, 51, 0.3);
}

@media only screen and (max-width: 600px) {
  div {
    width: 100vw;
    height: 100vh;
    border-radius: 0
  }
}

</style>