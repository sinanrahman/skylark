import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

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


createApp(App)
  .use(router)
  .mount('#app')


