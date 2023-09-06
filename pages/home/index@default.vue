<script setup lang="ts">
const filePath = new URL(import.meta.url).pathname
</script>

<template>
  <h1>{{ filePath }}</h1>
</template>
