import { createRouter, createWebHistory } from 'vue-router'

import MainLayout from '@/layouts/MainLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'

import Home from '@/pages/home/Home.vue'
import Cars from '@/pages/home/Cars.vue'
import About from '@/pages/home/About.vue'
import Contact from '@/pages/home/Contacts.vue'

import Signup from '@/pages/auth/Signup.vue'
import LoginWithOtp from '@/pages/auth/LoginWithOtp.vue'
import LoginWithPassword from '@/pages/auth/LoginWithPassword.vue'

import AdminDashboard from '@/pages/admin/AdminDashboard.vue'
import AdminCars from '@/pages/admin/AdminCars.vue'
import AdminAddCars from '@/pages/admin/AdminAddCars.vue'
import AdminBooking from '@/pages/admin/AdminBooking.vue'
import AdminUsers from '@/pages/admin/AdminUsers.vue'
import AdminReports from '@/pages/admin/AdminReports.vue'
import AdminIssues from '@/pages/admin/AdminIssues.vue'

const routes = [

  {
    path: '/auth',
    component: AuthLayout,
    children: [
      { path: 'login', component: LoginWithPassword },
      { path: 'loginWithOtp', component: LoginWithOtp }
    ]
  },

  {
    path: '/signup',
    component: Signup
  },


  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
        meta: { requiresAuth: true, showFooter: true }
      },
      {
        path: 'cars',
        name: 'Cars',
        component: Cars,
        meta: { requiresAuth: true, showNavbar: true, showFooter: true }
      },
      {
        path: 'about',
        name: 'About',
        component: About,
        meta: { requiresAuth: false, showNavbar: true, showFooter: false }
      },
      {
        path: 'contact',
        name: 'ContactPage',
        component: Contact,
        meta: { requiresAuth: true, showNavbar: true, showFooter: true }
      }
    ]
  },

 
  {
    path: '/admin',
    component: AdminLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'AdminDashboard',
        component: AdminDashboard,
        meta: { showNavbar: true, showFooter: false }
      },
      {
        path: 'cars',
        name: 'AdminCars',
        component: AdminCars,
        meta: { showNavbar: true, showFooter: false }
      },
      {
        path: 'add-cars',
        name: 'AdminAddCars',
        component: AdminAddCars,
        meta: { showNavbar: true, showFooter: false }
      },
      {
        path: 'bookings',
        name: 'AdminBooking',
        component: AdminBooking,
        meta: { showNavbar: true, showFooter: false }
      },
      {
        path: 'users',
        name: 'AdminUsers',
        component: AdminUsers,
        meta: { showNavbar: true, showFooter: false }
      },
      {
        path: 'reports',
        name: 'AdminReports',
        component: AdminReports,
        meta: { showNavbar: true, showFooter: false }
      },
      {
        path: 'issues',
        name: 'AdminIssues',
        component: AdminIssues,
        meta: { showNavbar: true, showFooter: false }
      }
    ]
  }

]

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




