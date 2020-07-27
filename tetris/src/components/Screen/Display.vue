<template>
  <div class="board">
    <Table v-bind:lineD="numberLineTableGame" 
           v-bind:columnD="numberColumnTableGame"></Table>
  </div>
</template>

<script>
import Table from "./Table.vue";
import store from "../../store/index.js"

export default {
  name: "Display",
  components: {
    Table,
  },
  computed: {
      numberLineTableGame: () => {
          return store.getters.numberLineTableGame
      },
      numberColumnTableGame: () => {
          return store.getters.numberColumnTableGame
      }
  },
};
</script>

<style scoped>
div {
  width: 50vw;
  /* height: 458px; */
  background-color: rgb(124, 136, 105);
}
</style>