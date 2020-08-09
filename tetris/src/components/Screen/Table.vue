<template>
    <table>
      <tr v-for="line of lines" :key="line">
        <td
          v-for="column of columns"
          :key="column"
          :class="{active: 
                (tableInfo && nextPiece.matrix[line][column]) || 
                (!tableInfo && tableGame.matrix[line][column])
        }"
        ></td>
      </tr>
      <tr style="display: none">Here it is {{tableGame}}</tr>
    </table>
</template>

<script>
import store from "../../store/index.js";
store.commit("activateNextPiece");

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
    },
  },
};
</script>

<style scoped>
table {
  position: relative;
  padding: 0.5em;
  margin: auto;
  background-color: var(--bg-table);
  border: 1px solid black;
}
td {
  width: 2px;
  height: 2px;
  border: 0.25em solid var(--border-table);
  padding: 2px;
  background-color: var(--bg-table);
}
td::after {
  width: 0.5em;
  height: 0.5em;
  content: "";
  background-color: var(--border-table);
  display: block;
}
td.active {
  border-color: var(--piece-color);
}
td.active::after {
  background-color: var(--piece-color);
}

</style>