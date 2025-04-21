<script setup lang="ts">
defineOptions({
  name: 'Counter',
  inheritAttrs: false,
})

const counterStore = useCounterStore()
const { count, doubleCount } = storeToRefs(counterStore)
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Double Count: {{ doubleCount }}</p>

    <UButton @click.capture="counterStore.increment">
      Increment
    </UButton>
  </div>
</template>
