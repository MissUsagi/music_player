<template>
      <button :class="mode">
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
      }
      }
      </script>

<style scoped>
button {
   width: 30px;
   height: 30px;
   border-radius: 50%;
   border: none;
   background-color: var(--primary-color);
   color: white;
   cursor: pointer;
}

.btn-no-bg{
   background: none;
}

.btn-bg-light {
   background-color: white;
   color: var(--primary-color);
}

.btn-bg-light:hover {
      background-color: white;
      color: var(--primary-dark);
        scale: 1.2;
           transition: scale 50ms ease-in;
}

.btn-no-bg:hover {
   scale: 1.2;
   background: none;
   transition: scale 50ms ease-in;
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

button:hover {
   background-color: var(--secondary-color);
}

</style>