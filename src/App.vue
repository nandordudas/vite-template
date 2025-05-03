<script setup lang="ts">
defineOptions({
  name: 'App',
  inheritAttrs: false,
})
</script>

<template>
  <Suspense>
    <UApp>
      <RouterView />
    </UApp>
  </Suspense>
</template>
