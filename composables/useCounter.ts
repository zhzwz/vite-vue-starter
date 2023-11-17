export function useCounter() {
  const count = ref(0)

  function increment() {
    count.value += 1
  }

  return { count, increment }
}
