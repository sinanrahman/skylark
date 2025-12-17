<template>

  <nav class="navbar navbar-expand-lg navbar-glass sticky-top">
    <div class="container-fluid">

      <router-link class="navbar-brand d-flex align-items-center" to="/">
        <img src="/img/logo.png" alt="Logo" class="me-2" style="height: 35px;" />
        <span class="fw-bold text-white">SKYLARK</span>
      </router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
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
            <router-link class="nav-link" to="/user-profile">
              <div class="profile">
                <img :src="user.dp" alt="">
              </div>
            </router-link>
          </li>
          <li class="nav-item">
            <button @click="logout" class="btn btn-login  ms-3">
              logout
            </button>
          </li>

        </ul>
      </div>

    </div>
  </nav>
</template>

<script>
  import api from '@/services/api'
  
  export default {
    name: 'Navbar',
  
    computed: {
      user() {
        return this.$store.state.user
      },
      isLoggedIn() {
        return this.$store.getters.isLoggedIn
      }
    },
  
    async created() {
      // Restore user ONLY if missing
      if (!this.$store.state.user) {
        await this.$store.dispatch('fetchUser')
      }
    },
  
    methods: {
      async logout() {
        await api.get('/logout')
        this.$store.dispatch('logout')
        this.$router.push('/auth/login')
      }
    }
  }
  </script>
  
  

<style scoped>
.navbar-glass {
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(18px) saturate(160%);
  -webkit-backdrop-filter: blur(18px) saturate(160%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  padding: 0.7rem 2rem;
  position: sticky;
  top: 0;
  z-index: 9999;
}

.navbar-glass::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #587c8d88, #62798588, #728a9688);
  mix-blend-mode: overlay;
  pointer-events: none;
}

.navbar-brand img {
  width: 95px;
  background: linear-gradient(135deg, #000000, #40606f, #000000);
  border-radius: 15px 5px 15px 5px;
}

.navbar-brand span {
  font-style: italic;
  color: white;
  font-weight: 700;
}

.nav-link {
  color: white !important;
  font-weight: 500;
  margin-right: 1rem;
  transition: 0.3s;
}

.nav-link:hover {
  color: #aee6ff !important;
}

.btn-login {
  border-radius: 25px;
  padding: 0.4rem 1.2rem;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(135deg, #db8f90, #4d616b);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: 0.3s;
}

.btn-login:hover {
  background: rgba(247, 4, 101, 0.2);
}


.navbar-toggler {
  border: none;
}

.navbar-toggler-icon {
  filter: invert(1);
}

.profile {
  border-radius: 50%;
  background-color: black;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
    img{
      width:100%;
      border-radius:50%;
    }
}

</style>
