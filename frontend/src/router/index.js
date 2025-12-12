import { createRouter, createWebHistory } from 'vue-router'

import MainLayout from '@/layouts/MainLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'

import Home from '@/pages/home/Home.vue'
import About from '@/pages/home/About.vue'
import Contact from '@/pages/home/Contacts.vue'
import Signup from '@/pages/auth/Signup.vue'
import LoginWithOtp from '@/pages/auth/LoginWithOtp.vue'
import LoginWithPassword from '@/pages/auth/LoginWithPassword.vue'
import { comma } from 'postcss/lib/list'



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
        meta: { requiresAuth: false,showNavbar: true,showFooter: false}
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



export default createRouter({
  history: createWebHistory(),
  routes
})




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




