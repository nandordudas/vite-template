<script setup lang="ts">
defineOptions({
  name: 'Counter',
  inheritAttrs: false,
})

const counterStore = useCounterStore()
const { count, doubleCount } = storeToRefs(counterStore)
</script>

<template>
  <UCard
    class="w-1/2 mx-auto"
    variant="subtle"
  >
    <template #header>
      <h3>Counter</h3>
    </template>

    <p>Count: {{ count }}</p>
    <p>Double Count: {{ doubleCount }}</p>

    <template #footer>
      <UButton @click="counterStore.increment">
        Increment
      </UButton>
    </template>
  </UCard>
</template>
