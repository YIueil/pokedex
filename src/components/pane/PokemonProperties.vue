<template>
  <div class="common-layout">
    <el-row class="main">
      <el-col :span="8">
        <div class="img-box">
          {{ pokemon.label }}
          <img class="img" v-bind:src="require('@/assets/thumbnails/' + pokemon.bid + '.png')"
               alt="pokemon_icon"/>
        </div>
      </el-col>
      <el-col :span="16">
        main
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'PokemonProperties',
  props: {
    pokemon: {
      type: Object
    }
  },
  mounted() {

  }
}
</script>

<style scoped>
.main {
  height: 400px;
}
.img-box {
  position: relative;
  height: 300px;
  border: 2px dotted rgba(0, 0, 0, 0.5);
  border-top: none;
  border-bottom: none;
  border-radius: 10px;
  text-align: center;
}

.img-box .img {
  position:absolute;
  height: 100px;
  flex: 0.3;
  top:50%;
  left: 50%;
  transform:translate(-50%,-50%);
}
</style>
