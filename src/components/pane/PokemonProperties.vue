<template>
  <el-space wrap class="main">
    <el-row>
      <el-col :span="5">
        <div class="img-box">
          {{ pokemon.label }}
          <img class="img" v-bind:src="pData.urls[0]"
               alt="pokemon_icon"/>
        </div>
      </el-col>
      <el-col :offset="4" :span="14">
        <el-row class="line --el-box-shadow-dark">
          <el-col :span="4" class="line-label --el-box-shadow-dark">属性</el-col>
          <el-col :offset="2" :span="18" class="line-value">{{ pData.basic.category }}</el-col>
        </el-row>
        <el-row class="line">
          <el-col :span="4" class="line-label --el-box-shadow-dark">描述</el-col>
          <el-col :offset="2" :span="18" class="line-value">{{ pData.story }}</el-col>
        </el-row>
        <el-row class="line">
          <el-col :span="4" class="line-label --el-box-shadow-dark">身高</el-col>
          <el-col :offset="2" :span="18" class="line-value">{{ pData.basic.height }}</el-col>
        </el-row>
        <el-row class="line">
          <el-col :span="4" class="line-label --el-box-shadow-dark">体重</el-col>
          <el-col :offset="2" :span="18" class="line-value">{{ pData.basic.weight }}</el-col>
        </el-row>
        <el-row class="line">
          <el-col :span="4" class="line-label --el-box-shadow-dark">特性</el-col>
          <el-col :offset="2" :span="18" class="line-value">{{ pData.basic.abilities.join(" / ") }}</el-col>
        </el-row>
        <el-row class="line">
          <el-col :span="4" class="line-label --el-box-shadow-dark">蛋组</el-col>
          <el-col :offset="2" :span="18" class="line-value">{{ pData.basic.gender.join(" / ") }}</el-col>
        </el-row>
      </el-col>
    </el-row>
  </el-space>
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

  },
  computed: {
    pData() {
      const {data} = require("@/assets/data/pokemons/" + this.pokemon.bid + ".js");
      return data;
    }
  }
}
</script>

<style scoped>
.main {
  margin-left: 20px;
}

.img-box {
  position: relative;
  height: 300px;
  width: 300px;
  border: 2px dotted rgba(0, 0, 0, 0.5);
  border-top: none;
  border-bottom: none;
  border-radius: 10px;
  text-align: center;
}

.img-box .img {
  position: absolute;
  height: 200px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.line {
  margin-bottom: 15px;
}

.line-label {
  box-shadow: 0 0 6px rgba(0, 0, 0, .12);
  text-align: center;
  padding: 5px 10px 5px 10px;
}

.line-value {
  box-shadow: 0 0 6px rgba(0, 0, 0, .12);
  margin-left: 10px;
  padding: 5px 10px 5px 10px;
}
</style>
