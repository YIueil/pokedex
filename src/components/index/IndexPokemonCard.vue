<template>
  <div class="node"
       :style="{
          boxShadow: `var(--el-box-shadow-light)`,
        }">
    <img style="height: 50px; flex: 0.3" v-bind:src="require('@/assets/icons/' + node.bid + '.png')"/>
    <span style="flex: 0.7">
        {{ node.label }}
      </span>
  </div>
</template>

<script>
export default {
  name: "IndexPokemonCard",
  props: {
    node: Object
  }
}
</script>

<style scoped>
.node {
  display: flex;
  line-height: 50px;
  cursor: pointer;
}
.node:hover {
  background: #ececec;
}
</style>
