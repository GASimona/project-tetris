<template>
  <div class="control">
    <div class="resetPauseSoundRotate">
      <div class="buttonSettings">
        <input type="button" v-on:click="buttonPlayPause()" value="P" class="buttonPlayPause" />
        <input type="button" v-on:click="buttonReset()" value="R" class="buttonReset" />
        <input type="button" v-on:click="buttonSound()" value="S" class="buttonSound" />
      </div>
      <input
      type="button"
        v-on:click="buttonTeleportDown()"
        value="↓↓"
        class="buttonTeleportDown"
        v-bind:disabled="!isTheButtonEnabled"
      />
    </div>
    <div class="moveButtono">
      <input
        type="button"
        v-on:click="buttonRotate()"
        value="↺"
        class="buttonRotate"
        v-bind:disabled="!isTheButtonEnabled"
      />
      <div>
        <input
          type="button"
          v-on:click="buttonLeft()"
          value="←"
          class="buttonLeft"
          v-bind:disabled="!isTheButtonEnabled"
        />
        <input
          type="button"
          v-on:click="buttonRight()"
          value="→"
          class="buttonRight"
          v-bind:disabled="!isTheButtonEnabled"
        />
      </div>
      <input
        type="button"
        v-on:click="buttonDown()"
        value="↓"
        class="buttonDown"
        v-bind:disabled="!isTheButtonEnabled"
      />
    </div>
  </div>
</template>

<script>
import store from "../store/index.js";

export default {
  name: "Control",
  components: {},
  computed: {
    isTheButtonEnabled: () => store.getters.isStarted,
  },
  methods: {
    buttonDown() {
      let diff = {
        diffLine: 1,
        diffColumn: 0,
      };
      store.commit("movePiece", diff);
      store.commit("playbutton");
    },
    buttonTeleportDown() {
      store.commit("teleportDown");
      store.commit("playbutton");
    },
    buttonLeft() {
      let diff = {
        diffLine: 0,
        diffColumn: -1,
      };
      store.commit("movePiece", diff);
      store.commit("playbutton");
    },
    buttonRight() {
      let diff = {
        diffLine: 0,
        diffColumn: 1,
      };
      store.commit("movePiece", diff);
      store.commit("playbutton");
    },
    buttonPlayPause() {
      let diff = {
        diffLine: 1,
        diffColumn: 0,
      };
      if (!store.getters.isStarted) {
        let intervalId = setInterval(() => {
          store.commit("movePiece", diff);
        }, store.getters.speed);
        store.commit("setInterval", intervalId);
        store.commit("toggleStarted");
      } else {
        clearInterval(store.getters.intervalId);
        store.commit("toggleStarted");
        store.commit("setInterval", null);
      }
      store.commit("playbutton");
    },
    buttonReset() {
      store.commit("reset");
      store.commit("playbutton");
    },
    buttonSound() {
      store.commit("toggleSound");
      store.commit("playbutton");
    },
    buttonRotate() {
      store.commit("rotateMatrix");
      store.commit("playbutton");
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
.buttonRotate {
  width: 3em;
  height: 3em;
  border-radius: 50%;
  background-color: var(--bg-big-buttons);
  color: black;
  outline: none;
  cursor: pointer;
}

.buttonDown,
.buttonRotate  {
  position: relative;
  left: 2.5em;
}
.buttonLeft {
  margin-right: 3em;
  position: relative;
  left: -1em;
}

.buttonReset,
.buttonPlayPause,
.buttonSound {
  width: 2em;
  height: 2em;
  border-radius: 50%;
  margin: 1em;
  background-color: var(--bg-small-buttons);
  position: relative;
  left: -5em;
  top: -1.25em;
  outline: none;
  cursor: pointer;
}
.buttonTeleportDown {
  width: 2em;
  height: 2em;
  border-radius: 50%;
  margin: 0.1em;
  font-size: 2em;
  position: relative;
  top: -0.5em;
  left: -0.15em;
  background-color: var(--bg-big-buttons);
  color: black;
  outline: none;
  cursor: pointer;
}

.resetPauseSoundRotate,
.resetPauseSoundRotate .buttonSettings {
  margin-left: 1em;
  background-color: var(--bg-frame);
}

@media only screen and (max-width: 500px) {
  .control {
    border-radius: 0;
  }
  .moveButtono,
  .resetPauseSoundRotate {
    position: relative;
    top: -0.75em;
  }
  .buttonTeleportDown {
    position: relative;
    left: -0.5em;
  }
}
</style>