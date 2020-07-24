<template>
     <div class="content">
        <Display></Display>
        <Info></Info>
     </div>
</template>

<script>
  import Display from './Display.vue'
  import Info from './Info.vue'

  export default {
    name: 'Screen',
    components: {
      Display,
      Info
    }
  }
</script>

<style scoped>
  .content {
      width: 40vw;
      height: 35vw;
      border: 2px solid rgb(0, 0, 0);
      display: flex;
      flex-direction: row;
  }
</style>