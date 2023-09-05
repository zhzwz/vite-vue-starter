<script setup lang="ts">

</script>

<template>
  <div class="h-full min-h-100vh w-full flex flex-col items-center justify-center">
    <h1 class="text-sky">
      Vite Vue Starter
    </h1>
    <div class="h-12 w-12 cursor-grab p-2 hover:rounded hover:bg-sky-100 hover:shadow hover:shadow-sky-200">
      <img src="/vite.svg" alt="vite">
    </div>

    <h3 class="absolute bottom-2 left-2 text-sky-800">{{ $route.fullPath }}</h3>
  </div>
</template>
