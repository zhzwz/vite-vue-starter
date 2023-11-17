<script setup lang="ts">
const _color = ref('rgb(248, 113, 113)') // color-red
</script>

<template>
  <div class="cssvars">COLOR</div>
</template>

<style scoped>
.cssvars {
  color: v-bind(_color);
}
</style>
