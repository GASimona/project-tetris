<template>
  <div id="app">
    <Tetris msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Tetris from './components/Tetris.vue'

export default {
  name: 'App',
  components: {
    Tetris
  }
}
</script>

<style>
#app {
  --bg-main-page: rgb(224, 211, 195);
  --bg-frame: rgb(230, 226, 18);
  --border-frame: rgb(241, 239, 85);
  --bg-small-buttons: rgb(224, 170, 89);
  --bg-big-buttons: brown;
  --color-screen: rgb(161, 168, 149);
  --bg-table: rgb(196, 196, 196);
  --border-table: rgb(160, 160, 160);
  --piece-color: black;
  
}

* {
  background-color: var(--bg-main-page);
}
</style>
