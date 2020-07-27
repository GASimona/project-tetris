<template>
    <div class="details">
            <div >
                <p>NEXT</p>
                <Table lineD="4" columnD="4"></Table>    
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
import Table from './Table.vue'

export default {
    name: "Info",
    components: {
        Table
    },
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
</style>