<template>
  <div class="common-layout">
    <el-container>
      <el-header height="60px">
        <el-row>
          <el-col :span="12" style="float: left">
            <img class="icon" alt="logo" height="30" src="@/assets/logo.png"/>
            <div style="position: relative;left: 20px">PokéDex</div>
          </el-col>
          <el-col :span="12" style="float: right">

          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-input v-model="searchStr" class="w-30 m-2" placeholder="搜索">
            <template #prefix>
              <el-icon class="el-icon-left">
                <Search />
              </el-icon>
            </template>
          </el-input>
          <el-scrollbar v-if="refreshed" :style="scrollbarHeight">
            <IndexPokemonCard
              v-for="pokemon of pokemonList"
              :key="pokemon.bid"
              :node="pokemon"
              @click="currentPokemon = pokemon"
            />
          </el-scrollbar>
        </el-aside>
        <el-main style="padding: 0">
          <el-tabs v-if="currentPokemon" style="height: 100%" type="border-card" class="border-card">
            <el-tab-pane label="资料">
              <PokemonProperties :pokemon="currentPokemon"/>
            </el-tab-pane>
            <el-tab-pane label="技能">技能</el-tab-pane>
            <el-tab-pane label="种族值">种族值</el-tab-pane>
            <el-tab-pane label="进化树">进化树</el-tab-pane>
            <el-tab-pane label="详情">详情</el-tab-pane>
          </el-tabs>
          <el-empty v-show="!currentPokemon" description="选择宝可梦以查看信息" />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { Search } from '@element-plus/icons-vue';
import { pokemonIndex } from "@/assets/data/pokemons/indexes";
import IndexPokemonCard from "@/components/index/IndexPokemonCard";
import PokemonProperties from "@/components/pane/PokemonProperties";

export default {
  name: 'PokeIndex',
  components:{
    PokemonProperties,
    Search,
    IndexPokemonCard
  },
  data() {
    return {
      searchStr: '',
      clientHeight: -1, //浏览器可视区域高度
      clientWidth: -1,
      refreshed: false,
      pokemonList: pokemonIndex,
      currentPokemon: null
    }
  },
  methods: {
    changeFixed(clientHeight, clientWidth) {
      this.clientHeight = clientHeight;
      this.clientWidth = clientWidth;
      this.refreshed = true;
    }
  },
  mounted() {
    this.changeFixed(
      `${document.documentElement.clientHeight}`,
      `${document.documentElement.clientWidth}`
    );
    const that = this;
    window.onresize = () => {
      return (() => {
        that.clientHeight = `${document.documentElement.clientHeight}`;
        that.clientWidth = `${document.documentElement.clientWidth}`;
      })();
    };
  },
  computed:{
    scrollbarHeight() {
      let sh = this.clientHeight - 102;
      console.log(sh);
      return {
        height: sh + 'px'
      };
    }
  },
  watch: {
    searchStr(newValue, oldValue) {
      if (newValue) {
        this.pokemonList = pokemonIndex.filter((pokemon)=>{
          return pokemon.label.indexOf(newValue) > -1;
        });
      } else {
        this.pokemonList = pokemonIndex;
      }
    }
  }
}
</script>

<style scoped>
.common-layout{
  height: 100%;
}
.el-container{
  height: 100%;
}
.scrollbar-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
.el-header {
  line-height: 60px;
  border-bottom: 1px solid #b1d5c8;
  position: relative;
}
.el-aside {

}
.border-card {
  height: 99%;
}
.el-container .icon {
  position:absolute;
  top:50%;
  transform:translate(-50%,-50%);
}
</style>
