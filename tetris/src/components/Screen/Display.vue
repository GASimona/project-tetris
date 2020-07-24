<template>
    <div class="board">
        <Table></Table>        
    </div>
</template>

<script>
import Table from './Table.vue'

export default {
    name: 'Display',
    components: {
    Table,
    }
}
</script>

<style scoped>
div {
    width: 50vw;
    /* height: 458px; */
    background-color: rgb(124, 136, 105);
}
</style>