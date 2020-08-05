<template>
  <div class="details">
    <div class="score">
      <p>SCORE</p>
      <div>{{ scoreValue }}</div>
    </div>
    <div class="hiScore">
      <p>HI-SCORE</p>
      <div>{{ hiScoreValue }}</div>
    </div>
    <div class="level">
      <p>LEVEL</p>
      <div>{{ levelValue }}</div>
    </div>
    <div>
      <p>NEXT</p>
      <Table lineD="4" columnD="4" tableInfo="true"></Table>
    </div>
  </div>
</template>

<script>
import Table from "./Table.vue";
import store from "../../store/index.js";


export default {
  name: "Info",
  components: {
    Table,
  },

  computed: {
    hiScoreValue: () => store.getters.hiScore,
    scoreValue: () => store.getters.score,
    levelValue: () => store.getters.level
  },

};
</script>

<style scoped>
.details {
  padding-left: 1em;
  padding-right: 1em;
  background-color: var(--color-screen);
  border: 2px solid black;
  border-left: 0;
}
div,
p {
  background-color: var(--color-screen);
}
.hiScore div,
.score div,
.level div {
  text-align: right;
}
</style>