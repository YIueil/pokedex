<template>
  <div class="demo-progress">
    HP:
    <el-progress :percentage="parseInt(ss[0]) / 1.5">
      {{ ss[0] }}
    </el-progress>
    ATK:
    <el-progress :percentage="ss[1] / 1.5">
      {{ ss[1] }}
    </el-progress>
    DEF:
    <el-progress :percentage="ss[2] / 1.5">
      {{ ss[2] }}
    </el-progress>
    S_ATK:
    <el-progress :percentage="ss[3] / 1.5">
      {{ ss[3] }}
    </el-progress>
    S_DEF:
    <el-progress :percentage="ss[4] / 1.5">
      {{ ss[4] }}
    </el-progress>
    SPD:
    <el-progress :percentage="ss[5] / 1.5">
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
