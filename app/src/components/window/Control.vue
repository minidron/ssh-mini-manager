<template>
  <div class="control">
    <Button @click="minimize"><Icon icon="minimize_16" size="16" /></Button>
    <Button @click="maximize"><Icon :icon="isMaximized ? 'unmaximize_16': 'maximize_16'" size="16" /></Button>
    <Button class="close" @click="close"><Icon icon="close_16" size="16" /></Button>
  </div>
</template>

<script setup>
import { useApp } from '/composables/useApp'
import Button from './Button.vue'
import Icon from '/components/base/Icon.vue'

const { close, isMaximized, maximize, minimize } = useApp()
</script>

<style lang="scss" scoped>
.control {
  display: flex;
}
</style>
