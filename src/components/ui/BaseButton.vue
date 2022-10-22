<template>
      <button :class="mode" :type="type">
      <slot></slot>
   </button>
</template>

<script>
export default {
   props: {
      mode:{
         type: String,
         required: false,
         default: null
      },
         type:{
         type: String,
         required: false,
         default: null
      },
      }
      }
      </script>

<style scoped>

button {
   width: 2.8em;
   height: 2.8em;
   margin: 5px 10px;
   text-align: center;
   border-radius: 50%;
   font-size: 1.6rem;
   border: none;
   background-color: var(--primary-color);
   color: white;
   cursor: pointer;
}
button:hover {
   background-color: var(--primary-dark);
}

a {
   text-decoration: none;
}

.btn-primary {
   color: var(--primary-color);
}
.btn-secondary {
   color: var(--secondary-color);
}

.btn-inactive {
   color: var(--inactive-color);
}

.btn-outline {
   outline: var(--inactive-color) 10px solid;
}

.btn-xl {
   min-width: 4em;
   min-height: 4em;
}

.btn-bg-light {
   background-color: white;
   color: var(--primary-color);
}

.btn-bg-light:hover {
      background-color: white;
      color: var(--primary-dark);
        scale: 1.1;
           transition: scale 50ms ease-in;
}
.btn-no-bg{
   background: none;
}

.btn-no-bg:hover {
   scale: 1.2;
   background: none;
   transition: scale 50ms ease-in;
}

@media only screen and (max-width: 600px) {
button {
   width: 2.5em;
   height: 2.5em;
   margin: 5px 10px;
}

}

</style>