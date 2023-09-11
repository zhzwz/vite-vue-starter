<script setup lang="ts">
definePage({
  redirect: '/home',
  meta: {
    title: 'Vite Vue Starter',
  },
})

const router = useRouter()

const routes = router.getRoutes()
</script>

<template>
  <RouterView name="nav" />
  <div class="h-full min-h-100vh w-full flex flex-col items-center justify-center">
    <div class="h-12 w-12 cursor-grab p-2 hover:rounded hover:bg-sky-100 hover:shadow hover:shadow-sky-200">
      <img src="/vite.svg" alt="vite">
    </div>
    <div class="flex gap-4">
      <template v-for="{ path, name } in routes" :key="path">
        <RouterLink :to="path" class="btn btn-primary" v-text="name" />
      </template>
    </div>
  </div>
</template>
