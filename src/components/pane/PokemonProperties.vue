<template>
  <div class="main">
    <el-row>
      <el-col :offset="1" :span="5">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>{{ pokemon.label }}</span>
            </div>
          </template>
          <img class="img" width="250" v-bind:src="pData.urls[0]"
               alt="pokemon_icon"/>
        </el-card>
      </el-col>
      <el-col :offset="6" :span="12">
        <div class="basicProperties">
          <el-row class="line">
            <el-col :span="4" class="line-label">属性</el-col>
            <el-col :offset="2" :span="18" class="line-value">
              {{ pData.basic.category }}
              <el-tag
                v-for="type in pData.types"
                :key="type"
                :type="success"
                class="mx-1"
                effect="dark"
                round>
                {{ type }}
              </el-tag>
            </el-col>
          </el-row>
          <el-row class="line">
            <el-col :span="4" class="line-label">描述</el-col>
            <el-col :offset="2" :span="18" class="line-value">{{ pData.story }}</el-col>
          </el-row>
          <el-row class="line">
            <el-col :span="4" class="line-label">身高</el-col>
            <el-col :offset="2" :span="18" class="line-value">{{ pData.basic.height }}</el-col>
          </el-row>
          <el-row class="line">
            <el-col :span="4" class="line-label">体重</el-col>
            <el-col :offset="2" :span="18" class="line-value">{{ pData.basic.weight }}</el-col>
          </el-row>
          <el-row class="line">
            <el-col :span="4" class="line-label">特性</el-col>
            <el-col :offset="2" :span="18" class="line-value">{{ pData.basic.abilities.join(" / ") }}</el-col>
          </el-row>
          <el-row class="line">
            <el-col :span="4" class="line-label">蛋组</el-col>
            <el-col :offset="2" :span="18" class="line-value">{{ pData.basic.gender.join(" / ") }}</el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :offset="12" :span="12">
        <PokemonSS :pokemon="pokemon"></PokemonSS>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import PokemonSS from "@/components/pane/PokemonSS";
export default {
  name: 'PokemonProperties',
  components: {PokemonSS},
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
  width: 100%;
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
  margin-bottom: 20px;
}

.line-label {
  box-shadow: 0 0 6px rgba(0, 0, 0, .12);
  text-align: center;
  padding: 8px 10px 8px 10px;
}

.line-value {
  box-shadow: 0 0 6px rgba(0, 0, 0, .12);
  margin-left: 10px;
  padding: 8px 10px 8px 10px;
}

.mx-1 {
  position: relative;
  float: right;
  margin-right: 10px;
}

.box-card {
  width: 350px;
  height: 350px;
}

.img {
  padding: 0 20px 0 20px;
}

.basicProperties {

}
</style>
