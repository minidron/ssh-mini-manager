<template>
  <div class="window">
    <Panel />
    <slot></slot>
  </div>
</template>

<script setup>
import Panel from './Panel.vue'
</script>

<style lang="scss" scoped>
.window {
  height: 100vh;
  background-color: $c-dp01;
}
</style>
