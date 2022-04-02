<template>
  <div class="control">
    <Button @click="minimize"><Icon icon="minimize_16" size="16" /></Button>
    <Button @click="maximize"><Icon icon="maximize_16" size="16" /></Button>
    <Button class="close" @click="close"><Icon icon="close_16" size="16" /></Button>
  </div>
</template>

<script setup>
import { useApp } from '/composables/useApp'
import { useWindow } from '/composables/useWindow'
import Button from './Button.vue'
import Icon from '/components/base/Icon.vue'

const { close } = useApp()
const { maximize, minimize } = useWindow()
</script>

<style lang="scss" scoped>
.control {
  display: flex;
}
</style>
