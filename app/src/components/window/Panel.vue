<template>
  <div class="panel">
    <Menu />
    <div class="search"></div>
    <Control />
  </div>
</template>

<script setup>
import Control from './Control.vue'
import Menu from './Menu.vue'
</script>

<style lang="scss" scoped>
.panel {
  display: flex;
  justify-content: space-between;
  -webkit-app-region: drag;
}
</style>
