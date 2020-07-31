<template>
  <table>
    <tr v-for="line of lines" v-bind:key="line">
      <td v-for="column of columns" 
      v-bind:key="column" 
      :class="{active: 
                (tableInfo && nextPiece.matrix[line][column]) || 
                (!tableInfo && tableGame.matrix[line][column])
        }"></td>
    </tr>
  </table>
</template>

<script>
import store from "../../store/index.js";
store.commit('activateNextPiece');


export default {
  name: "Table",
  components: {},
  props: ["lineD", "columnD", "tableInfo"],
  methods: {},
  computed: {
    lines: function () {
      let createLines = [];
      let nrLine = this.lineD;
      for (let i = 0; i < nrLine; i++) {
        createLines.push(i);
      }
      return createLines;
    },
    columns: function () {
      let createColumns = [];
      let nrColumn = this.columnD;
      for (let i = 0; i < nrColumn; i++) {
        createColumns.push(i);
      }
      return createColumns;
    },
    nextPiece: function () {
      return store.getters.nextPiece;
    },
    tableGame: function () {
        return store.getters.tableGame;
    }
  },
};
</script>

<style scoped>
table {
  position: relative;
  padding: 5px;
  margin: auto;
  background-color: rgb(196, 196, 196);
  border: 1px solid black;
}
td {
  width: 0.5rem;
  height: 0.5rem;
  border: 3px solid rgb(133, 133, 133);
  padding: 2px;
  background-color: rgb(196, 196, 196);
}
td::after {
  width: 0.5rem;
  height: 0.5rem;
  content: "";
  background-color: rgb(133, 133, 133);
  display: block;
}
td.active {
  border-color: black;
}
td.active::after {
  background-color: black;
}
</style>