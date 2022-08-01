<template>
  <div class="demo-progress">
    HP:
    <el-progress :percentage="ss[0] / 1.5" :color="customColors">
      {{ ss[0] }}
    </el-progress>
    ATK:
    <el-progress :percentage="ss[1] / 1.5" :color="customColors">
      {{ ss[1] }}
    </el-progress>
    DEF:
    <el-progress :percentage="ss[2] / 1.5" :color="customColors">
      {{ ss[2] }}
    </el-progress>
    S_ATK:
    <el-progress :percentage="ss[3] / 1.5" :color="customColors">
      {{ ss[3] }}
    </el-progress>
    S_DEF:
    <el-progress :percentage="ss[4] / 1.5" :color="customColors">
      {{ ss[4] }}
    </el-progress>
    SPD:
    <el-progress :percentage="ss[5] / 1.5" :color="customColors">
      {{ ss[5] }}
    </el-progress>
  </div>
</template>

<script>
export default {
  name: "PokemonSS",
  props: {
    pokemon: {
      type: Object
    }
  },
  data() {
    return {
      customColors: [
        {color: '#d4c89f', percentage: 20},
        {color: '#e6a23c', percentage: 40},
        {color: '#5cb87a', percentage: 60},
        {color: '#ea2c2c', percentage: 80},
        {color: '#7b2ce0', percentage: 100}
      ]
    }
  },
  computed: {
    ss() {
      const {data} = require("@/assets/data/pokemons/" + this.pokemon.bid + ".js");
      return data.ss;
    }
  }
}
</script>

<style scoped>
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  width: 350px;
}
</style>
