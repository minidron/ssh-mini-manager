<template>
  <div v-for="host in hosts" :key="host._host.Host">{{ host._host.Host }}</div>
</template>

<script setup>
import { useHosts } from '/composables/hosts'

const { hosts } = useHosts()
</script>
