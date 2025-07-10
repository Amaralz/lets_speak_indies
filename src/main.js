import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

console.log('main.js carregado'); // Depuração

const app = createApp(App);
app.use(router); // Registra o Vue Router antes de montar
app.mount('#app');