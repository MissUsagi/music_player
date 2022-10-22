<template>
<router-view v-slot="slotProps"><transition name="route" mode="out-in">
  <component :is="slotProps.Component"></component>
  </transition></router-view>
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

a {
  text-decoration: none;
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
margin: 50px 0;
}

#app {
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  font-family: 'Rambla', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
   
}

.route-enter-from,
.route-leave-to{
  opacity: 0;
}
.route-enter-active{
  transition: opacity 0.3s ease-out;
}
.route-leave-active{
  transition: opacity 0.3s ease-in;
}
.route-enter-to,
.route-leave-from{
   opacity: 1;
}

</style>
