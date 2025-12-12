<template>
  <div>
    <Navbar />
    <router-view />
    <FooterComponent />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import FooterComponent from "@/components/Footer.vue";

export default {
  components: { Navbar, FooterComponent }
};
</script>
