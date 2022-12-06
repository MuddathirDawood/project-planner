import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/add',
    name: 'AddProject',
    component: () => import('../views/AddProject.vue')
  },
  {
    path: '/projects/:id',
    name: 'EditProject',
    component: () => import('../views/EditProject.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
