<script setup>
import { ref } from 'vue';

const siteName = ref('Lets speak indies');
const isSidebarOpen = ref(false);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
  console.log('Toggle Sidebar:', isSidebarOpen.value);
};

defineExpose({ isSidebarOpen });
</script>

<template>
  <header class="top-bar">
    <button class="menu-button" @click="toggleSidebar">
      <span class="material-icons">{{ isSidebarOpen ? 'close' : 'menu' }}</span>
    </button>
    <div class="site-name">
      <router-link to="/" tag="h1">{{ siteName }}</router-link>
    </div>
  </header>
</template>

<style scoped>
.top-bar {
  background-color: #333;
  color: white;
  padding: 1rem;
  display: flex;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.menu-button {
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  margin-right: 1rem;
}

.site-name {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.site-name h1 {
  margin: 0;
  font-size: 1.5rem;
}

.site-name a {
  color: white;
  text-decoration: none;
}
</style>