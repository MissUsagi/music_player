<template>
    <div class="actions">
      <base-button mode="btn-bg-light"
        ><i class="fa-solid fa-share-nodes fa-lg"></i
      ></base-button>
      <div class="player-actions">
        <base-button
          ><i class="fa-solid fa-backward-step fa-lg"></i
        ></base-button>
        <base-button mode="btn-xl"><i class="fa-solid fa-play fa-2xl"></i></base-button>
        <!-- <base-button><i class="fa-solid fa-pause fa-xl"></i></base-button> -->
        <base-button
          ><i class="fa-solid fa-forward-step fa-lg"></i
        ></base-button>
      </div>
      <base-button mode="btn-bg-light"
        ><i class="fa-solid fa-heart fa-lg"></i
      ></base-button>
    </div>
</template>

<style scoped>
.actions {
  display: flex;
  height: 30%;
  padding: 0 30px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.player-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>