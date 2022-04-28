<template>
  <div class="menu">
    <Button @click="open"><Icon icon="menu_24" size="24" /></Button>
  </div>
</template>

<script setup>
import { useMenu } from '/composables/menu'
import Button from './Button.vue'
import Icon from '/components/base/Icon.vue'

const { open } = useMenu()
</script>
