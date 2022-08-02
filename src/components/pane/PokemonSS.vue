<template>
  <div class="demo-progress">
    <el-row>
      <el-col style="text-align: center" :span="2">
        HP:
      </el-col>
      <el-col :span="width">
        <el-progress :stroke-width="strokeWidth" :text-inside="true" :percentage="ss[0] / 3" :color="customColors">
          {{ ss[0] }}
        </el-progress>
      </el-col>
    </el-row>

    <el-row>
      <el-col style="text-align: center" :span="2">
        攻击:
      </el-col>
      <el-col :span="width">
        <el-progress :stroke-width="strokeWidth" :text-inside="true" :percentage="ss[0] / 3" :color="customColors">
          {{ ss[1] }}
        </el-progress>
      </el-col>
    </el-row>

    <el-row>
      <el-col style="text-align: center" :span="2">
        防御:
      </el-col>
      <el-col :span="width">
        <el-progress :stroke-width="strokeWidth" :text-inside="true" :percentage="ss[0] / 3" :color="customColors">
          {{ ss[2] }}
        </el-progress>
      </el-col>
    </el-row>

    <el-row>
      <el-col style="text-align: center" :span="2">
        特攻:
      </el-col>
      <el-col :span="width">
        <el-progress :stroke-width="strokeWidth" :text-inside="true" :percentage="ss[0] / 3" :color="customColors">
          {{ ss[3] }}
        </el-progress>
      </el-col>
    </el-row>

    <el-row>
      <el-col style="text-align: center" :span="2">
        特防:
      </el-col>
      <el-col :span="width">
        <el-progress :stroke-width="strokeWidth" :text-inside="true" :percentage="ss[0] / 3" :color="customColors">
          {{ ss[4] }}
        </el-progress>
      </el-col>
    </el-row>

    <el-row>
      <el-col style="text-align: center" :span="2">
        速度:
      </el-col>
      <el-col :span="width">
        <el-progress :stroke-width="strokeWidth" :text-inside="true" :percentage="ss[0] / 3" :color="customColors">
          {{ ss[5] }}
        </el-progress>
      </el-col>
    </el-row>

    <el-row>
      <el-col style="text-align: center" :span="2">
        总和:
      </el-col>
      <el-col :span="width">
        <el-progress :stroke-width="strokeWidth" :text-inside="true" :percentage="ssCount / 10" :color="customColors">
          {{ ssCount }}
        </el-progress>
      </el-col>
    </el-row>
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
      strokeWidth: 25,
      width: 21,
      customColors: [
        {color: '#d4c89f', percentage: 10},
        {color: '#cec08e', percentage: 20},
        {color: '#d5b853', percentage: 30},
        {color: '#e6a23c', percentage: 40},
        {color: '#e6a23c', percentage: 50},
        {color: '#43b1ad', percentage: 60},
        {color: '#264fcb', percentage: 70},
        {color: '#8522c2', percentage: 80},
        {color: '#cb1e1e', percentage: 90},
        {color: '#ff0000', percentage: 100}
      ]
    }
  },
  computed: {
    ss() {
      const {data} = require("@/assets/data/pokemons/" + this.pokemon.bid + ".js");
      return data.ss;
    },
    ssCount() {
      return this.ss.reduce(function (accumulator, currentValue, currentIndex, array) {
        return accumulator + currentValue
      })
    }
  }
}
</script>

<style scoped>
.demo-progress {
}
.demo-progress .el-row {
  margin-top: 20px;
}
.demo-progress .el-progress--line {
  margin: 0 auto;
}
</style>
