<template>
  <div class="details">
    <div>
      <p>Next</p>
      <Table lineD="4" columnD="4" tableInfo="true"></Table>
    </div>
    <div class="score">
      <p>Score</p>
      <div>{{ scoreValue }}</div>
    </div>
    <div class="hiScore">
      <p>Hi-Score</p>
      <div>{{ hiScoreValue }}</div>
    </div>
    <div class="cleans">
      <p>Cleans</p>
      <div>{{ cleansValue }}</div>
    </div>
    <div class="level">
      <p>Level</p>
      <div>{{ levelValue }}</div>
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
    levelValue: () => store.getters.level,
    cleansValue: () => store.getters.cleans,
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
.level div,
.cleans div {
  text-align: right;
}

@media only screen and (max-width: 1000px) {
  Table {
    position: relative;
    left: -30px;
  }
  .details {
    width: 65px;
  }
  .hiScore {
    width: 80px;
    position: relative;
    left: -15px;
  }
}
</style>