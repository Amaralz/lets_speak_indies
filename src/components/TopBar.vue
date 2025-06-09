<template>
    <header class="top-bar">
        <div class="site-name">
            <h1>{{ siteName }}</h1>
        </div>
    </header>
</template>


<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    siteName: {
        type:String,
        default: 'lets speak indies'
    }
});
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

</style>