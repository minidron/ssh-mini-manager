<template>
  <div class="panel">
    <div class="menu"></div>
    <div class="search"></div>
    <Control />
  </div>
</template>

<script setup>
import Control from './Control.vue'
</script>

<style lang="scss" scoped>
.panel {
  display: flex;
  justify-content: space-between;
  -webkit-app-region: drag;
}
</style>
