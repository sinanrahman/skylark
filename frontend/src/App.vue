<template>
  <div>
    <Navbar v-if="route.meta.showNavbar" />
    <router-view />
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import Navbar from './components/Navbar.vue'

export default {

  name: 'App',
  components: {
    Navbar,
  },
  data(){
    const route = useRoute()
    return{
      route
    }
  }
}
</script>

<style>

</style>
