<script setup lang="ts">
definePage({
  redirect: '/home',
  meta: {
    title: 'Vite Vue Starter',
  },
})

const router = useRouter()
const routes = router.getRoutes()

const { count, increment } = useCounter()
</script>

<template>
  <RouterView name="nav" />
  <div class="h-full min-h-100vh w-full flex flex-col items-center justify-center">
    <div class="h-12 w-12 cursor-grab p-2 hover:rounded hover:bg-sky-100 hover:shadow hover:shadow-sky-200">
      <img src="/vite.svg" alt="vite">
    </div>

    <div class="flex flex-col gap-2">
      <div>Routes:</div>
      <template v-for="{ path, name } in routes" :key="path">
        <RouterLink :to="path" class="btn btn-primary">{{ name }}</RouterLink>
      </template>
    </div>

    <div>
      Count: {{ count }}
      <button @click="increment">increment</button>
    </div>
  </div>
</template>
