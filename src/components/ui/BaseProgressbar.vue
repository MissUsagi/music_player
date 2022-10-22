<template>
    <div class="progressbar">
    <i class="fa-solid fa-volume-high circle"></i>
    </div>
</template>

<style scoped>
.progressbar {
  position: relative;
  height: 10px;
  background-color: var(--secondary-color);
}

.progressbar:before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 10px;
  width: 20%;
  background-color: white;
  z-index: 3;
}

.circle{
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-dark);
  top: -10px;
  left: 18%;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  box-shadow: 0 6px 6px -2px rgba(51, 51, 51, 0.3);
  background-color: white;
  z-index: 15;
}
</style>