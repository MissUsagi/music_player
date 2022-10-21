<template>
<div></div>
<transition><router-view></router-view></transition>
</template>

<script>

export default {
  name: 'App',

}
</script>

<style>
:root{
--primary-color: #5F558F;
--primary-dark: rgb(47, 26, 75);
--secondary-color: #ED5D74;
--inactive-color: #DEDEE7;
--light-grey: #F3F3F8;
--grey: #78747F;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container::-webkit-scrollbar {
  width: 30px;
}

.container::-webkit-scrollbar-track {
  border-radius: 10px;
  margin-block: 30px;
  margin-inline-end: 10px;
}
 
.container::-webkit-scrollbar-thumb {
  background: var(--inactive-color); 
  border: 0.7em solid var(--light-grey);
  border-radius: 30px;
}

.container::-webkit-scrollbar-thumb:hover {
  background: var(--primary-color); 
}


@supports(scrollbar-color: var(--inactive-color) var(--light-grey) ){
  *{  
  scrollbar-color: var(--inactive-color) var(--light-grey);
  scrollbar-width: none;
  }
}

body {
background-image: linear-gradient(-225deg, #A8BFFF 0%, #884D80 100%);
background-repeat: no-repeat;
background-size: cover;
background-attachment: fixed;
margin: 40px 0;
}

#app {
  font-family: 'Rambla', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.v-enter-from{
  opacity: 0;
}
.v-enter-active{
  transition: all 0.3s ease-out;
}
.v-enter-to{
   opacity: 1;
}


/* 

@media only screen and (max-width: 600px) {
  body {
   margin: 0;
  }
} */

</style>
