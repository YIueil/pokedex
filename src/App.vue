<template>
  <div>
    <PokeIndex></PokeIndex>
    <el-button type="primary">el-button</el-button>
  </div>

</template>

<script>
import PokeIndex from './views/PokeIndex.vue';

export default {
  name: 'App',
  components: {
    PokeIndex
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
