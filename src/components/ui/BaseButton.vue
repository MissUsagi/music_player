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
   width: 80px;
   height: 80px;
   margin: 5px;
   text-align: center;
   align-content: center;
   border-radius: 50%;
   font-size: 1.6rem;
   border: none;
   background-color: var(--primary-color);
   color: white;
   cursor: pointer;
}
button:hover {
   background-color: var(--secondary-color);
}

.btn-xl {
   min-width: 100px;
   min-height: 100px;
}

.btm-sm {
   min-width: 60px;
   min-height: 60px;
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

</style>