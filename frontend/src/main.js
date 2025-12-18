import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './stores/store'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import * as bootstrap from 'bootstrap'
import '@fortawesome/fontawesome-free/css/all.min.css'

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollSmoother } from "gsap/dist/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

window.bootstrap = bootstrap

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')