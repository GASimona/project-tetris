<template>
  <div class="game">
    <div class="gameArea">
      <Screen></Screen>
      <Control></Control>
    </div>
  </div>
</template>

<script>
import Screen from "./screen/Screen.vue";
import Control from "./Control.vue";

export default {
  name: "Tetris",
  components: {
    Screen,
    Control,
  },
};
</script>

<style scoped>
.game {
  display: flex;
  justify-content: center;
  padding: 1em;
  margin: 0; 
  padding: 0;
}

@media only screen and (max-width: 450px) {
  .gameArea {
    width: 100vw;

  }
}
</style>
