import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('../views/Services.vue')
  },
  {
    path: '/price',
    name: 'Price',
    component: () => import('../views/Price.vue')
  },
  {
    path: '/programs',
    name: 'Programs',
    component: () => import('../views/Programs.vue')
  },
  {
    path: '/appform',
    name: 'AppForm',
    component: () => import('../views/AppForm.vue')
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('../views/Contacts.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
