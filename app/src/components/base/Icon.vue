<template>
  <div class="icon" :style="style"></div>
</template>

<script>
export default {
  props: {
    icon: String,
    size: [Number, String],
  },

  computed: {
    style () {
      return {
        '--icon': `url('../img/icons/${this.icon}.svg')`,
        '--size': `${this.size}px`,
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.icon {
  width: var(--size);
  height: var(--size);
  mask-image: var(--icon);
  mask-size: 100% 100%;
  mask-repeat: no-repeat;
}
</style>
