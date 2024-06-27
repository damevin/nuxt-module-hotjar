<template>
  <div>
    Nuxt module playground!
    <button @click="initialize">
      Toggle HotJar
    </button>


    {{ hotjarIsActive ? 'Hotjar is active' : 'Hotjar is not active' }}
  </div>
</template>

<script setup>
const { initialize, hotjarIsActive } = useHotjar()
</script>
