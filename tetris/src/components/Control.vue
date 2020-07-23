<template>
    <div class="control">
        <div class="moveButtono">
            <div>
                <button class="buttonLeft">←</button>
                <button class="buttonRight">→</button>
            </div>
            <button class="buttonDown">↓</button>
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

</script>

<style scoped>
    .control {
        width: 100%;
        height: 20%;
        display: flex;
        justify-content: space-around;
        position: relative;
        top: 5%;
        
    }
    .buttonLeft, .buttonRight, .buttonDown {
        width: 4em;
        height: 4em;
        border-radius: 50%;
        margin: 0.5em;
    }

    .buttonLeft {
        margin-right: 3em;
    }
    .buttonDown {
        position: relative;
        left: 3.5em;
    }

    .buttonReset, .buttonPause, .buttonSound {
        width: 2em;
        height: 2em;
        border-radius: 50%;
        margin: 0.5em;
    }
    .buttonRotate {
        width: 2em;
        height: 2em;
        border-radius: 50%;
        margin: 0.1em;
        font-size: 2em;
        position: relative;
        left: 1em;
    }
</style>