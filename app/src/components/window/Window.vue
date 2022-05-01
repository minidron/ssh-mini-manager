<template>
  <div class="window">
    <Panel />
    <Body><slot></slot></Body>
  </div>
</template>

<script setup>
import Body from './Body.vue'
import Panel from './Panel.vue'
</script>

<style lang="scss" scoped>
.window {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: $c-dp01;
}
</style>
