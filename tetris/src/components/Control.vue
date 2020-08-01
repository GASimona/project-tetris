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
  },
};
</script>

<style scoped>
.control {
  display: flex;
  justify-content: center;
  background-color: var(--bg-frame);
  border: 0.2em solid var(--border-frame);
  border-top: 0;
  border-bottom-left-radius: 2em;
  border-bottom-right-radius: 2em;
  padding-bottom: 1em;
}
.moveButtono {
    position: relative;
    left: 1em;
}
.moveButtono,
.moveButtono div {
  background-color: var(--bg-frame);
}
.buttonLeft,
.buttonRight,
.buttonDown,
.buttonDownFinish {
  width: 3em;
  height: 3em;
  border-radius: 50%;
  background-color: var(--bg-big-buttons);
}

.buttonLeft {
  margin-right: 3em;
  position: relative;
  left: -2em;
}
.buttonRight {
  position: relative;
  left: -2em;
}
.buttonDown,
.buttonDownFinish {
  position: relative;
  left: 1em;
}

.buttonReset,
.buttonPause,
.buttonSound {
  width: 2em;
  height: 2em;
  border-radius: 50%;
  margin: 1em;
  background-color: var(--bg-small-buttons);
  position: relative;
  top: -1.25em;
}
.buttonRotate {
  width: 2em;
  height: 2em;
  border-radius: 50%;
  margin: 0.1em;
  font-size: 2em;
  position: relative;
  left: 2em;
  top: -0.5em;
  background-color: var(--bg-big-buttons);
}

.resetPauseRotate,
.resetPauseRotate .buttonSettings {
  margin-left: 1em;
  background-color: var(--bg-frame);
}
</style>