<template>
  <router-view />
</template>

<script>
  export default {
    created() {
      this.$store.dispatch('fetchUser')
    }
  }
  </script>
  
<style>
</style>

