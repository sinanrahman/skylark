<template>
  <form @submit.prevent="login" class="login-card">


    <h2 class="text-center mb-4">Login</h2>
    <h6 class="text-danger">{{ msg }}</h6>
    <div class="form-floating mb-3">
      <input type="text" v-model="username" class="form-control input-glass" placeholder="Username" required />
      <label>Username</label>
    </div>

    <div class="form-floating mb-3">
      <input type="password" v-model="password" class="form-control input-glass" placeholder="Password" required />
      <label>Password</label>
    </div>

    <button type="submit" class="btn login-btn w-100 mb-3">Login</button>

    <div class="text-center text-white mb-3">— OR —</div>

    <router-link to="/auth/loginWithOtp" class="btn google-btn w-100" @click="router.push('/auth/loginWithOtp')">
      <i class="fa-brands fa-google me-2"></i>
      Continue with Mail
    </router-link>
    <div class="text-center mt-3 text-white">
      Don't have an account?
      <router-link to="/signup" class="text-white underline">
        Sign up
      </router-link>
    </div>

  </form>
</template>

<script>
import api from '@/services/api'

export default {
  data() {
    return {
      username: '',
      password: '',
      msg: '',
      loading: false
    }
  },

  methods: {
    async login() {
      if (!this.username || !this.password) {
        this.msg = 'All fields are required!'
        return
      }

      try {
        this.loading = true
        this.msg = ''

        const res = await api.post('/login', {
          username: this.username,
          password: this.password
        })
        this.$store.dispatch('login', res.data.user)
        this.$router.push('/')
      } catch (err) {
        this.msg =
          err.response?.data?.message ||
          'Invalid username or password'
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
