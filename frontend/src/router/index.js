import { createRouter, createWebHistory } from 'vue-router'

import MainLayout from '@/layouts/MainLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'

import Home from '@/pages/home/Home.vue'
import Register from '@/pages/auth/Register.vue'
import LoginWithOtp from '@/pages/auth/LoginWithOtp.vue'
import LoginWithPassword from '@/pages/auth/LoginWithPassword.vue'
import { comma } from 'postcss/lib/list'


  // {
  //   path: '/',
  //   component: MainLayout,
  //   children: [
  //     {
  //       path: '/',
  //       name: 'Home',
  //       component: Home,
  //       meta: { requiresAuth: true }
  //     }
  //   ]
  // },

const routes = [
  {
    path: '/auth',
    component: AuthLayout,
    children: [
      { path: 'login', component: LoginWithPassword },
       { path: 'loginWithOtp', component: LoginWithOtp },
    ]
  },
  {
    path:'/register',
    component:Register,
    
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})



