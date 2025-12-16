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
  
    async eated() {
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
  
<template>
  <nav class="navbar-glass">
    <div class="left">
  <img 
    src="/img/logo.png" 
    alt="SKYLARK" 
    class="logo-img"
  />
</div>

    <div class="right">
      <div class="admin-profile">
        <span>Admin</span>
        <!-- <img src="https://i.pravatar.cc/100"  alt="Admin" /> -->
        <img v-if="$store.state.user" :src="$store.state.user.dp || 'https://i.pravatar.cc/100'">

      </div>
      <button class="logout" type="button" @click="logout">Logout</button>
    </div>
  </nav>
</template>

<style scoped>

.navbar-glass{
  position:sticky;
  top:0;
  z-index:999;

  height:72px;
  width:100%;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 32px;

  background:rgba(255,255,255,0.65);
  backdrop-filter:blur(18px);
  -webkit-backdrop-filter:blur(18px);

  border-bottom:1px solid rgba(0,0,0,0.08);
  box-shadow:0 10px 30px rgba(0,0,0,0.12);
}

.left{
  display:flex;
  align-items:center;
    background: linear-gradient(135deg, #000000, #40606f, #000000);
  border-radius: 15px 5px 15px 5px;
}

.logo-img{
  height:42px;         
  object-fit:contain;
  cursor:pointer;
}

.right{
  display:flex;
  align-items:center;
  gap:20px;
}

.admin-profile{
  display:flex;
  align-items:center;
  gap:10px;
  font-weight:600;
  color:#111827;
}

.admin-profile img{
  width:42px;
  height:42px;
  border-radius:50%;
  object-fit:cover;

  border:2px solid rgba(255,255,255,0.8);
  box-shadow:0 0 14px rgba(1, 44, 62, 0.55);
  transition:0.3s;
}

.admin-profile img:hover{
  transform:scale(1.08);
  box-shadow:0 0 22px rgba(0,180,255,0.9);
}


.logout{
  padding:8px 20px;
  border-radius:22px;
  border:none;
  cursor:pointer;

  font-weight:600;
  color:#fff;
  background:linear-gradient(135deg,#15b7d3,#000);
  box-shadow:0 4px 14px rgba(0,0,0,0.3);

  transition:all .3s ease;
}

.logout:hover{
  transform:translateY(-1px);
  box-shadow:0 6px 20px rgba(0,0,0,0.45);
}
</style>
