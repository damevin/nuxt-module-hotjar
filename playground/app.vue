<template>
  <div>
    Nuxt module playground!
    <button @click="initialize">
      Toggle HotJar
    </button>
  </div>
</template>

<script setup>
const { initialize } = useHotjar()
</script>
