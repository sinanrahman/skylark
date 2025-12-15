import { createRouter, createWebHistory } from 'vue-router'
import api from '@/services/api'

import MainLayout from '@/layouts/MainLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'

import Home from '@/pages/home/Home.vue'
import About from '@/pages/home/About.vue'
import Contact from '@/pages/home/Contacts.vue'
import Signup from '@/pages/auth/Signup.vue'
import LoginWithOtp from '@/pages/auth/LoginWithOtp.vue'
import LoginWithPassword from '@/pages/auth/LoginWithPassword.vue'



const routes = [
  // AUTH LAYOUT
  {
    path: '/auth',
    component: AuthLayout,
    children: [
      { path: 'login', component: LoginWithPassword },
      { path: 'loginWithOtp', component: LoginWithOtp }
    ]
  },

  // SIGNUP PAGE (WITHOUT LAYOUT)
  {
    path: '/signup',
    component: Signup
  },

  // MAIN LAYOUT ROUTES
  {
    path: '/',
    component: MainLayout,
    meta:{requiresAuth:true},
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
        meta: { requiresAuth: true,showFooter: true }
      },
      {
        path: 'about',
        name: 'About',
        component: About,     
        meta: { requiresAuth: true,showNavbar: true,showFooter: false}
      },
      {
        path: 'contact',
        name: 'ContactPage',
        component: Contact,
        meta: { requiresAuth: true,showNavbar: true,showFooter: false }
      }
    ]
  }
];





const router =  createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  // check meta from all matched routes (IMPORTANT!)
  // const requiresAuth = to.matched.some(
  //   route => route.meta.requiresAuth
  // )
  if (!to.meta.requiresAuth) return next();

  // if (!requiresAuth) return next()

  try {
    const res = await api.get('/profile',)
    console.log(res.data)
    console.log(res.status)
    next()
  } catch (err) {
    next('/auth/login') // ✅ correct path
  }
})

export default router


// router.beforeEach(async (to, from, next) => {
//   if (!to.meta.requiresAuth) return next();

//   const res = await fetch("http://localhost:3000/profile", {
//     credentials: "include"
//   });

//   if (res.status === 401) {
//     return next("/login");
//   }

//   next();
// });




