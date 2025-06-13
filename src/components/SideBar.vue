<template>
    <aside :class="['sidebar', {open: isOpen}]">
        <nav class="categories">
            <h2>Categorias</h2>
            <ul>
                <li v-for="category in categories" :key="category.path">
                    <router-link :to="category.path" @click="closeSidebar">
                        {{ category.name }}
                    </router-link>
                </li>
            </ul>
        </nav>
    </aside>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
    isOpen: {
        type:Boolean,
        required: true
    }
});

const emit = defineEmits(['close']);

const categories = ref ([
    { name: 'Home', path:'/' },
    { name: 'Dashboard', path:'/dashboard' },
    { name: 'Sobre', path:'/about' },
    { name: 'Perfil', path:'/profile' },
]);

const closeSidebar = () => {
    emit('close');
};


</script>

<style scoped>

.sidebar {
    background-color: #222;
    color:white;
    width: 250px;
    height: 100vh;
    position: fixed;
    top: 60px; /* abaixo da top bar*/
    left: 0;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
    z-index: 999;
    padding: 1rem;
    box-shadow: 2px 0 4px rgba(0, 0, 0, 0.2);
}

.sidebar.open {
    transform: translateX(0);
}

.categories h2 {
    margin: 0 0 1rem;
    font-size: 1.2rem;
}

.categories ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.categories li {
    margin-bottom: 0.5rem;
}

.categories a {
    color:white;
    text-decoration: none;
    font-size: 1rem;
    display: block;
    padding: 0.5rem;
    border-radius: 4px;
}

.categories a:hover {
    background-color: #444;
}

.router-link-active {
    background-color: #555;
}

</style>