
<template>
  <div id="app">

    <TopBar ref="topBar" />
    <SideBar :is-open="isSidebarOpen" @close="closeSidebar" />
    <Main :class="{ 'shifted': isSidebarOpen}">
      <router-view />
    </Main>
  </div>
</template>


  <script setup>
  import { ref, computed } from 'vue';
  /*import Main from './components/Main.vue'*/
  import TopBar from './components/TopBar.vue'
  import SideBar from './components/SideBar.vue';

  const topBar = ref(null);
  const isSidebarOpen = computed(() => topBar.value?.isSidebarOpen ?? false);

  const closeSidebar = () => {
    if (topBar.value) {
      topBar.value.isSidebarOpen = false;
    }
  };
  </script>

<style scoped>
#app {
  padding-top: 60px;
}

Main {
  transition: margin-left 0.3s ease-in-out;
  margin-left: 0;
  padding: 1rem;
}

Main.shifted {
  margin-left: 250px;
}

@media (max-width: 768px) {
  Main.shifted {
    margin-left: 0;
  }
}
</style>
