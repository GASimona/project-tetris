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
  padding: 1em;
  border: 2px solid rgb(0, 0, 0);
  border-right: 0;
  background-color: rgb(161, 168, 149);
}
</style>