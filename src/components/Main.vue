<script setup>
console.log('Main.vue renderizado'); // Depuração
</script>

<template>
  <main>
    <slot />
  </main>
</template>

<style scoped>
main {
  display: block;
}
</style>