<template>
   <header>
      <slot></slot>
   </header>
</template>

<style scoped>
header {
   display: flex;
   flex-direction: row;
   position: sticky;
   background-color: var(--light-grey);
   top: 0;
   left: 0;
   right: 0;
   align-items: center;
   padding: 25px 30px 20px 30px;
}

/* h2{
   color: var(--primary-color);
   font-weight: 600;
   margin: auto;
   font-size: 2.8rem;
} */
</style>