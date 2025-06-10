<template>
    <header class="top-bar">
        <button class="menu-button" @click="toggleSidebar">
            <span class="material-icons"> {{ isSidebarOpen ? 'close' : 'menu' }}</span>
        </button>
        <div class="site-name">
            <h1>{{ siteName }}</h1>
        </div>
        <div v-if="isAuthenticated" class="user-info">
            <span>Olá, {{ userName }}</span>
            <button @click="logout">Sair</button>
        </div>
    </header>
</template>


<script setup>
import { defineProps } from 'vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
    siteName: {
        type:String,
        default: 'lets speak indies'
    }
});

const isSidebarOpen = ref(false);
const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
};

const isAuthenticated = ref(!!localStorage.getItem('authToken'));
const userName = ref('Usuário');
const router = useRouter();

const logout = () => {
    localStorage.removeItem('authToken');
    isAuthenticated.value = false;
    router.push('/login');
};

defineExpose({ isSidebarOpen });

</script>

<style scoped>
.top-bar{
    background-color: #333;
    color:white;
    padding: 1rem;
    text-align: center;
    width: 100%;
    position:fixed;
    top: 0;
    left:0;
    z-index: 1000;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.site-name h1 {
    margin:0;
    font-size:1.5rem;
}

.menu-button {
    background: none;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    margin-right: 1rem;
}

.site-name h1{
    margin: 0;
    font-size: 1.5rem;
    flex-grow: 1;
    text-align: center;
}

.user-info{
    display: flex;
    align-items: center;
    gap: 1rem;
}

.user-info button {
    background-color: #ff4444;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 4px;
}

.user-info button:hover {
    background-color: #cc0000;
}

</style>