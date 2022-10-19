<template>
<div>
   <slot></slot>
</div>
</template>

<style scoped>
div {
   position: relative;
   margin: auto;
   padding: 20px;
   width: 350px;
   height: calc(100vh - 40px);
   background-color: var(--light-grey);
   border-radius: 20px;
   overflow-y: scroll;
}

</style>