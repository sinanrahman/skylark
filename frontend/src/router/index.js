import { createRouter, createWebHistory } from 'vue-router'
import store from '@/stores/store'

import MainLayout from '@/layouts/MainLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'

import Home from '@/pages/home/Home.vue'
import Cars from '@/pages/home/Cars.vue'
import About from '@/pages/home/About.vue'
import Contact from '@/pages/home/Contacts.vue'
import CarBooking from '@/pages/home/CarBooking.vue'
import CarViewPage from '@/pages/home/CarViewPage.vue'
import UserProfile from '@/pages/home/UserProfile.vue'
import Gallery from '@/pages/home/Gallery.vue'


import Signup from '@/pages/auth/Signup.vue'
import LoginWithOtp from '@/pages/auth/LoginWithOtp.vue'
import LoginWithPassword from '@/pages/auth/LoginWithPassword.vue'

import AdminDashboard from '@/pages/admin/AdminDashboard.vue'
import AdminCars from '@/pages/admin/AdminCars.vue'
import AdminAddCars from '@/pages/admin/AdminAddCars.vue'
import AdminBooking from '@/pages/admin/AdminBooking.vue'
import AdminUsers from '@/pages/admin/AdminUsers.vue'
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

  { path: '/signup', component: Signup },

  {
    path: '/',
    component: MainLayout,
    meta: { requiresAuth: true },
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
      },
      {
        path: 'car-booking/:id',
        name: 'CarBooking',
        component: CarBooking,
        meta: { requiresAuth: true, showNavbar: true, showFooter: true }
      },
      {
        path: 'car/:id',
        name: 'CarViewPage',
        component: CarViewPage,
        meta: { requiresAuth: true, showNavbar: true, showFooter: true }
      },
      {
        path: 'user-profile',
        name: 'UserProfile',
        component: UserProfile,
        meta: { requiresAuth: true, showNavbar: true, showFooter: true }
      },
      {
        path: 'gallery',
        name: 'Gallery',
        component: Gallery,
        meta: { requiresAuth: true, showNavbar: true, showFooter: false }
      }
    ]
  },

  {
    path: '/admin',
    component: AdminLayout,
    meta: { requiresAuth: true, requiresAdmin: true },
    children: [
      { path: '', component: AdminDashboard },
      { path: 'cars', component: AdminCars },
      { path: 'add-cars', component: AdminAddCars },
      { path: 'bookings', component: AdminBooking },
      { path: 'users', component: AdminUsers },
      { path: 'issues', component: AdminIssues }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


router.beforeEach(async (to, from, next) => {
  try {
    const requiresAuth = to.matched.some(
      route => route.meta.requiresAuth
    )
    const requiresAdmin = to.matched.some(
      route => route.meta.requiresAdmin
    )

    if (!store.state.user) {
      await store.dispatch('fetchUser')
    }

    if (requiresAuth && !store.getters.isLoggedIn) {
      return next('/auth/login')
    }

    if (requiresAdmin && !store.getters.isAdmin) {
      return next('/')
    }

    next()
  } catch (err) {
    console.error('Router auth error:', err)

    store.commit('CLEAR_USER')

    return next('/auth/login')
  }
})


export default router
