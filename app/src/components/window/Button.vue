<template>
  <div class="btn"><slot></slot></div>
</template>

<style lang="scss" scoped>
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  transition: background-color .1s linear;
  -webkit-app-region: no-drag;

  &:hover {
    background-color: $c-dp04;
  }

  &:active {
    background-color: $c-dp08;
  }

  &.close {
    &:hover {
      background-color: $accent-red;
    }

    &:active {
      background-color: scale-color($accent-red, $whiteness: 6%);
    }
  }
}

:deep(.icon) {
  background-color: $c-text-high-emphasis;
}
</style>
