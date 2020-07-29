<template>
  <div class="details">
    <div>
      <p>NEXT</p>
      <Table lineD="4" columnD="4" tableInfo="true"></Table>
    </div>
    <div class="hiScore">
      <p>HI-SCORE</p>
      <div>{{ hiScoreValue }}</div>
    </div>
    <div class="score">
      <p>SCORE</p>
      <div>{{ scoreValue }}</div>
    </div>
    <div>
      <p>LEVEL</p>
      <div>{{ levelValue }}</div>
    </div>
  </div>
</template>

<script>
import Table from "./Table.vue";

export default {
  name: "Info",
  components: {
    Table,
  },
  data() {
    let valueHiScore = 10;
    let valueScore = 2;
    let valueLevel = 1;


    return {
      hiScoreValue: valueHiScore,
      scoreValue: valueScore,
      levelValue: valueLevel,
    };
  },
};
</script>

<style scoped>
.details {
  padding-left: 1em;
  padding-right: 1em;
  background-color: rgb(148, 163, 125);
  border: 2px solid black;
}
div,
p {
  background-color: rgb(148, 163, 125);
}
</style>