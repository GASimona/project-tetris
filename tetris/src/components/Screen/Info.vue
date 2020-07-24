<template>
    <div class="details">
            <div >
                <p>NEXT</p>
                <table class="nextPiece">
                    <tr v-for="line of lines" v-bind:key="line">
                        <td v-for="column of columns" v-bind:key="column">
                        </td>
                    </tr>
                </table>
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

export default {
    data() {
        let createLines = [];
        let createColumns = [];
        let nrLine = 4;
        let nrColumn = 4;

        for (let i = 0; i < nrLine; i++) {
            createLines.push(i);
        }
        for (let i = 0; i < nrColumn; i++) {
            createColumns.push(i);
        }

        let valueHiScore = 10;
        let valueScore = 2;
        let valueLevel = 1;


        return { 
            lines: createLines,
            columns : createColumns,
            hiScoreValue: valueHiScore,
            scoreValue: valueScore,
            levelValue: valueLevel 
        };
    }
}



</script>

<style scoped>
    .details {
        width: 40%;
        background-color: rgb(148, 163, 125);
        border-left: 2px solid rgb(0, 0, 0);
    }
    div, p {
        background-color:  rgb(148, 163, 125);
    }
    table {
        position: relative;
        margin: auto;
        padding: 2%;
    } 
    td {
        width: 7px;
        height: 7px;
        border: 3px solid rgb(150, 150, 150);
        padding: 2px;
    }
    td::after {
        width: 7px;
        height: 7px;
        content: "";
        background-color: rgb(150, 150, 150);
        display: block;
    }
    td.active {
        border-color: black;
    }
    td.active::after {
        background-color: black;
    }
</style>