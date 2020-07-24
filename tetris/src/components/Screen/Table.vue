<template>
    <table>
        <tr v-for="line of lines" v-bind:key="line">
            <td v-for="column of columns" v-bind:key="column"></td>
        </tr>
    </table>
</template>

<script>
// import Display from './Display.vue'

export default {
    name: 'Table',
    components: {
    },
        data: () => {
        let createLines = [];
        let createColumns = [];
        let nrLine = 23;
        let nrColumn = 15;

        for (let i = 0; i <= nrLine; i++) {
            createLines.push(i);
        }
        for (let i = 0; i <= nrColumn; i++) {
            createColumns.push(i);
        }

        return { 
            lines: createLines,
            columns : createColumns    
        }
    }
}
</script>

<style scoped>
table {    
    position: relative;
    top: 1vw;
    padding: 2%;
    margin: auto;
}
 td {
        width: 0.5rem;
        height: 0.5rem;
        border: 3px solid rgb(150, 150, 150);
        padding: 2px;
}   
td::after {
    width: 0.5rem;
    height: 0.5rem;
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