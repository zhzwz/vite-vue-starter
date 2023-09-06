<script setup lang="ts">
function onClick() {

}
</script>

<template>
  <button class="btn btn-primary" @click="onClick">
    <slot />
  </button>
</template>
