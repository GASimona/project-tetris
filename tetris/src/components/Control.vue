<template>
  <div class="control">
    <div class="moveButtono">
      <input
        type="button"
        @click="buttonTeleportDown()"
        value="↓↓"
        class="buttonTeleportDown"
        v-bind:disabled="!isTheButtonEnabled"
      />
      <div>
        <!-- v-on:keyup.left="buttonLeft()" -->
        <input
          type="button"
          @click="buttonLeft()"
          value="←"
          class="buttonLeft"
          v-bind:disabled="!isTheButtonEnabled"
        />
        <input
          type="button"
          @click="buttonRight()"
          value="→"
          class="buttonRight"
          v-bind:disabled="!isTheButtonEnabled"
        />
      </div>
      <input
        type="button"
        @click="buttonDown()"
        value="↓"
        class="buttonDown"
        v-bind:disabled="!isTheButtonEnabled"
      />
    </div>
    <div class="resetPauseRotate">
      <div class="buttonSettings">
        <input type="button" @click="buttonPlayPause()" value="P" class="buttonPlayPause" />
        <input type="button" @click="buttonReset()" value="R" class="buttonReset" />
        <input type="button" @click="buttonSound()" value="S" class="buttonSound" />
      </div>
      <input
        type="button"
        @click="buttonRotate()"
        value="↺"
        class="buttonRotate"
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
    },
    buttonTeleportDown() {
      store.commit("teleportDown");
    },
    buttonLeft() {
      let diff = {
        diffLine: 0,
        diffColumn: -1,
      };
      store.commit("movePiece", diff);
    },
    buttonRight() {
      let diff = {
        diffLine: 0,
        diffColumn: 1,
      };
      store.commit("movePiece", diff);
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
    },
    buttonReset() {
      store.commit("reset");
    },
    buttonSound() {
      console.log("Play/Stop song");
    },
    buttonRotate() {
      store.commit("rotateMatrix");
    },
  },
  // mounted() {
  //   console.log("mounted");
  //   window.addEventListener(
  //     "keypress",
  //     function (e) {
  //       console.log(String.fromCharCode(e.keyCode));
  //     }.bind(this)
  //   );
  // },
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
.buttonTeleportDown {
  width: 3em;
  height: 3em;
  border-radius: 50%;
  background-color: var(--bg-big-buttons);
  color: black;
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
.buttonTeleportDown {
  position: relative;
  left: 1em;
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
  color: black;
}

.resetPauseRotate,
.resetPauseRotate .buttonSettings {
  margin-left: 1em;
  background-color: var(--bg-frame);
}
</style>