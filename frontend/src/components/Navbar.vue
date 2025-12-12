<template>
  <nav class="navbar navbar-expand-lg navbar-glass">
    <div class="container-fluid">

      <router-link class="navbar-brand" to="/">
        <img src="/img/logo.png" alt="Logo" class="me-2" />
        <span>SKYLARK</span>
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>


      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav align-items-lg-center">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/cars">Cars</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contact</router-link>
          </li>

          <li class="nav-item">
            <router-link class="btn btn-login ms-3" to="/auth/login">
              Login / Signup
            </router-link>
          </li>
        </ul>
      </div>

    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

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
  display: flex;
  align-items: center;
}

.navbar-brand img {
  width: 100px;
  background: linear-gradient(135deg, #000000, #40606f, #000000);
  border-radius: 15px 5px 15px 5px;
}

.navbar-brand span {
  width: 120px;
  font-style: italic;
  color: white;
}

.navbar-glass .nav-link {
  color: #fff;
  font-weight: 500;
  margin-right: 1rem;
  transition: color 0.3s;
}

.navbar-glass .nav-link:hover {
  color: #00b4ff;
}

.btn-login {
  border-radius: 25px;
  padding: 0.4rem 1.2rem;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(135deg, #15b7d3, #000000);
  border: 1px solid rgba(255, 255, 255, 0.4);
  transition: 0.3s;
}

.btn-login:hover {
  background: rgba(0, 180, 255, 0.6);
  color: #fff;
}

.navbar-toggler {
  border: none;
  color: #fff;
}
</style>
