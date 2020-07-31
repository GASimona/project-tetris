<template>
  <div class="borderDesignScreen">
    <h1> - - - TETRIS - - - </h1>
    <div class="content">
      <Display></Display>
      <Info></Info>
    </div>
  </div>
</template>

<script>
import Display from "./Display.vue";
import Info from "./Info.vue";

export default {
  name: "Screen",
  components: {
    Display,
    Info,
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 0;
  margin-top: 0;
  background-color:rgb(230, 226, 18);
  position: relative;
}

.borderDesignScreen {
  background-color: rgb(230, 226, 18);
  padding-top: 1em;
  padding-bottom: 2em;
  padding-left: 3em;
  padding-right: 3em;
  margin: auto;
  border: 0.2em solid rgb(241, 239, 85);
  border-bottom: 0;
  border-top-left-radius: 2em;
  border-top-right-radius: 2em;
} 
.content {
  display: flex;
  justify-content: center;
  background-color: rgb(230, 226, 18);
}
</style>