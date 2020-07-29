<template>
  <div class="control">
    <div class="moveButtono">
      <input type="button" @click="buttonDownFinish" value="↓↓" class="buttonDownFinish" />
      <div>
        <input type="button" @click="buttonLeft" value="←" class="buttonLeft" />
        <input type="button" @click="buttonRight" value="→" class="buttonRight" />
      </div>
      <input type="button" @click="buttonDown" value="↓" class="buttonDown" />
    </div>
    <div class="resetPauseRotate">
      <div class="buttonSettings">
        <input type="button" @click="buttonReset" value="R" class="buttonReset" />
        <input type="button" @click="buttonPause" value="P" class="buttonPause" />
        <input type="button" @click="buttonSound" value="S" class="buttonSound" />
      </div>
      <input type="button" @click="buttonRotate" value="↺" class="buttonRotate" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Control",
  components: {},
  methods: {
    buttonDown() {
      console.log("Muta piesa cu cate un rand");
    },
    buttonDownFinish() {
      console.log("Muta piesa jos de tot");
    },
    buttonLeft() {
      console.log("Muta piesa cu o coloana la stanga");
    },
    buttonRight() {
      console.log("Muta piesa cu o coloana la dreapta");
    },
    buttonReset() {
      console.log("Reset Joc");
    },
    buttonPause() {
      console.log("Pauza/Play Joc");
    },
    buttonSound() {
      console.log("Play/Stop song");
    },
    buttonRotate() {
      console.log("Roteste piesa");
    },
  }
};
</script>

<style scoped>
.control {
  width: 40vw;
  height: 20%;
  display: flex;
  justify-content: space-around;
  position: relative;
  top: 5%;
}
.buttonLeft,
.buttonRight,
.buttonDown,
.buttonDownFinish {
  width: 4em;
  height: 4em;
  border-radius: 30%;
  margin: 0.5em;
  background-color: brown;
  position: relative;
  top: -2em;
}

.buttonLeft {
  margin-right: 4em;
  position: relative;
  left: -2em;
}
.buttonDown,
.buttonDownFinish {
  position: relative;
  left: 2.5rem;
}

.buttonReset,
.buttonPause,
.buttonSound {
  width: 2em;
  height: 2em;
  border-radius: 30%;
  margin: 0.5em;
  background-color: rgb(224, 170, 89);
}
.buttonRotate {
  width: 2em;
  height: 2em;
  border-radius: 30%;
  margin: 0.1em;
  font-size: 2em;
  position: relative;
  left: 1em;
  background-color: brown;
}
</style>