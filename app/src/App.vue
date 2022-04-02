<template>
    <Window />
</template>

<script setup>
import Window from '/components/window/Window.vue'
</script>

<style lang="scss">
html {
  font-size: $base-font-size;
  line-height: $base-line-height;
  font-family: $ff-default;
}

body {
  margin: 0;
  background-color: $c-dp00;
  cursor: default;
  user-select: none;
}
</style>
