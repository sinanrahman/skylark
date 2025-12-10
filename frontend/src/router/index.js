import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import './assets/styles/main.css'
import App from './App.vue'

import MainLayout from '@/layouts/Mainlayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'


import Home from '@/pages/home/Home.vue'
import Register from '@/pages/auth/register/Register.vue'
import LoginWithOtp from '@/pages/auth/LoginWithOtp.vue'
import LoginWithPassword from '@/pages/auth/LoginWithPassword.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
        meta: { requiresAuth: true }  
      }
    ]
  },

  {
    path: '/auth',
    component: AuthLayout,
    children: [
      { path: 'loginWithOtp', name: 'LoginWithOtp', component: LoginWithOtp },
      { path: 'loginWithPassword', name: 'LoginWithPassword', component: LoginWithPassword },
      { path: 'register', name: 'Register', component: Register }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {

  if (!to.meta.requiresAuth) return next()

  const res = await fetch("http://localhost:3000/profile", {
    credentials: "include"
  })

  if (res.status === 401) {
    return next("/auth/loginWithOtp")
  }

  next()
})

createApp(App)
  .use(router)
  .mount('#app')

