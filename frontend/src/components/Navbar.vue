<script setup>

</script>
<template>

</template>

<style scoped>
      .navbar-glass {
      position: sticky;
      top: 0;
      z-index: 999;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(15px);
      -webkit-backdrop-filter: blur(15px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      padding: 0.5rem 2rem;
      transition: 0.3s;
    }

    .navbar-glass .navbar-brand {
      font-weight: 700;
      font-size: 1.5rem;
      color: #fff;
    }

    .navbar-glass .navbar-nav .nav-link {
      color: #fff;
      font-weight: 500;
      margin-right: 1rem;
      transition: color 0.3s;
    }

    .navbar-glass .navbar-nav .nav-link:hover {
      color: #00b4ff;
    }

    .navbar-brand {
      width: 20%;

      display: flex;
      align-items: center;
    }

    .navbar-brand img {
      width: 100px;
      background: linear-gradient(135deg,#000000, #40606f,#000000);
      border-radius: 15px 5px 15px 5px;
    }

    .navbar-brand span {
      width: 120px;
      font-style: italic;
    }

    .navbar-glass .btn-login {
      border-radius: 25px;
      padding: 0.4rem 1.2rem;
      font-weight: 600;
      color: #fff;
      background: linear-gradient(135deg, #15b7d3, #000000 ,);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.4);
      transition: 0.3s;
    }

    .navbar-glass .btn-login:hover {
      background: rgba(0, 180, 255, 0.6);
      color: #fff;
    }

    .navbar-glass .navbar-toggler {
      border: none;
      color: #fff;
    }

    .navbar-glass.scrolled {
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(20px);
    }
</style>