<template>
  <div class="game">
    <div class="gameArea">
        <Screen></Screen>
        <Control></Control>
    </div>
  </div>
</template>

<script>
  import Screen from './screen/Screen.vue'
  import Control from './Control.vue'

  export default {
  name: 'Tetris',
  components: {
    Screen,
    Control
  }
}
</script>

<style scoped>
  .game {
    /* width: 50vw; */
    border: 0.2em solid black;
    position: relative;
    margin: auto;
    display: flex;

  }
  .gameArea {
    margin: 5% 10% 0 10%;
    width: 90vw;
    display: flex;
    flex-direction: column;
  }
</style>
