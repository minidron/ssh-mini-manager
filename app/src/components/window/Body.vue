<template>
  <div class="body">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.body {
  overflow: auto;
  flex: 1;
  padding: 20px;
  box-sizing: border-box;
}
</style>
