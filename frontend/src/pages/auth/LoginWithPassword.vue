<template>
    <form @submit.prevent="submitLogin" class="login-card">

        <h2 class="text-center mb-4">Login</h2>

        <div class="form-floating mb-3">
            <input type="text" v-model="username" class="form-control input-glass" placeholder="Username" required />
            <label>Username</label>
        </div>

        <div class="form-floating mb-3">
            <input type="password" v-model="password" class="form-control input-glass" placeholder="Password"
                required />
            <label>Password</label>
        </div>

        <button type="submit" class="btn login-btn w-100 mb-3">Login</button>

        <div class="text-center text-white mb-3">— OR —</div>

        <button type="button" class="btn google-btn w-100" @click="router.push('/auth/loginWithOtp')">
            <i class="fa-brands fa-google me-2"></i>
            Continue with Mail
        </button>
        <div class="text-center mt-3 text-white">
            Don't have an account?
            <router-link to="/signup" class="text-white underline">
                Sign up
            </router-link>
        </div>

    </form>
</template>

<script >

</script>
