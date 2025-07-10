<script setup>
import { ref, computed } from 'vue';
import TopBar from './components/TopBar.vue';
import SideBar from './components/SideBar.vue';
import Main from './components/Main.vue';

const topBar = ref(null);
const isSidebarOpen = computed(() => {
  const isOpen = topBar.value?.isSidebarOpen ?? false;
  console.log('isSidebarOpen:', isOpen); // Depuração
  return isOpen;
});

const closeSidebar = () => {
  if (topBar.value) {
    topBar.value.isSidebarOpen = false;
  }
};
</script>

<template>
  <div id="app">
    <TopBar ref="topBar" />
    <SideBar :is-open="isSidebarOpen" @close="closeSidebar" />
    <Main :class="{ shifted: isSidebarOpen }">
      <router-view />
    </Main>
  </div>
</template>

<style scoped>
#app {
  padding-top: 60px;
}

main {
  background-color: #f0f0f0;
  transition: margin-left 0.3s ease-in-out;
  margin-left: 0;
  padding: 1rem;
  min-height: calc(100vh - 60px);
  box-sizing: border-box;
}

main.shifted {
  margin-left: 250px;
}

@media (max-width: 768px) {
  main.shifted {
    margin-left: 0;
  }
}
</style>