import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import OTPVerification from '../views/OTPVerification.vue'
import LocationServices from '../views/LocationServices.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/verify',
    name: 'OTPVerification',
    component: OTPVerification
  },
  {
    path: '/location',
    name: 'LocationServices',
    component: LocationServices,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router