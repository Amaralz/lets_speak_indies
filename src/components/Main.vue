<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1 class="test">hello amigos da rede globo </h1>
</template>

<style scoped>
.test {
  color: #888;
}
</style>
