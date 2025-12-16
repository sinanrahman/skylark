<template>
  <div>
    <Navbar />
    <router-view />
    <FooterComponent v-if="$route.meta.showFooter" />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import FooterComponent from "@/components/Footer.vue";
import axios from "axios";

export default {
  components: { Navbar, FooterComponent },
  method:{

  }
};
</script>
<style scoped>
</style>
