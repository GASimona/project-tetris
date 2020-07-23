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
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

* {
  background-color: rgb(224, 211, 195);
}
</style>
