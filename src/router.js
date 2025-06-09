import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'

// Definição das rotas
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    // Route level code-splitting
    // Gera um chunk separado (about.[hash].js) para esta rota
    // que é carregado de forma lazy quando a rota é visitada
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  // Rotas dinâmicas
  {
    path: '/user/:id',
    name: 'User',
    component: () => import('../views/UserView.vue'),
    props: true, // Passa os parâmetros da rota como props
    // Proteção de rota
    meta: { requiresAuth: true }
  },
  // Rotas aninhadas
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/DashboardView.vue'),
    children: [
      {
        path: 'profile',
        name: 'Profile',
        component: () => import('../views/dashboard/ProfileView.vue')
      },
      {
        path: 'settings',
        name: 'Settings',
        component: () => import('../views/dashboard/SettingsView.vue')
      }
    ]
  },
  // Rota de fallback para 404
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

// Criação do router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // Configurações adicionais
  scrollBehavior(to, from, savedPosition) {
    // Retorna para a posição salva ou para o topo da página
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Guarda de navegação global
router.beforeEach((to, from, next) => {
  // Verificação de autenticação
  if (to.meta.requiresAuth) {
    const isAuthenticated = checkAuth() // Implemente sua lógica de autenticação
    if (!isAuthenticated) {
      return next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  }
  next()
})

export default router