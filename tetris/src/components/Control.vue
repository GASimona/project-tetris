<template>
    <div class="control">
        <div class="moveButtono">
            <button class="buttonDown">↓↓</button>
            <div>
                <button class="buttonLeft">←</button>
                <button class="buttonRight">→</button>
            </div>
            <button class="buttonDownFinish">↓</button>
        </div>
        <div class="resetPauseRotate">
            <div class="buttonSettings">
                <button class="buttonReset">R</button>
                <button class="buttonPause">P</button>
                <button class="buttonSound">S</button>
            </div>
                <button class="buttonRotate">↺</button>
        </div>
    </div>
</template>

<script>
export default {
  name: "Control",
  components: {},
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
    .buttonLeft, .buttonRight, .buttonDown, .buttonDownFinish {
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
    .buttonDown, .buttonDownFinish {
        position: relative;
        left: 2.5rem;
    }

    .buttonReset, .buttonPause, .buttonSound {
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