import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Dashboard from '../views/Dashboard.vue';
import About from '../views/About.vue';
import Profile from '../views/Profile.vue';
import Login from '../views/Login.vue';

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/dashboard', component: Dashboard, name: 'Dashboard', meta: { requiresAuth: true } },
  { path: '/about', component: About, name: 'About' },
  { path: '/profile', component: Profile, name: 'Profile', meta: { requiresAuth: true } },
  { path: '/login', component: Login, name: 'Login' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  console.log('Navegando para:', to.path); // Depuração
  // Comentar autenticação para teste
  // if (to.meta.requiresAuth) {
  //   const isAuthenticated = !!localStorage.getItem('authToken');
  //   if (!isAuthenticated) {
  //     return next({
  //       path: '/login',
  //       query: { redirect: to.fullPath },
  //     });
  //   }
  // }
  next();
});

export default router;