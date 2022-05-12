<template>
  <PokeIndex></PokeIndex>
</template>

<script>
import PokeIndex from './views/PokeIndex.vue';

export default {
  name: 'App',
  components: {
    PokeIndex,
  },
};
</script>

<style>
/*全局样式配置*/
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
