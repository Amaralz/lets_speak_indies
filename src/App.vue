<script setup>
import HelloWorld from './components/HomeView.vue'
import TopBar from './components/TopBar.vue'
</script>

<template>
  <div id="app">

    <TopBar site-name="lets speak indies" />
    <HelloWorld />
    <router-view />
  </div>
</template>

<style scoped>
#app {
  padding-top: 60px;
}

</style>
