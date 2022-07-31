<template>
  <PokeIndex></PokeIndex>
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
  padding: 0;
  border: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
}
* {
  padding: 0;
  margin: 0;
}

html,body {
  width: 100%;
  height: 100%;
}
</style>
