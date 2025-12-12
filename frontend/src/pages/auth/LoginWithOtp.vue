<template>
    <form @submit.prevent="submitOtp" class="login-card">

        <h2 class="text-center mb-4">Login</h2>

        <div class="form-floating mb-3">
            <input type="email" v-model="email" class="form-control input-glass" placeholder="Mail" required />
            <label>Email</label>
        </div>

        <div class="form-floating mb-3">
            <input type="text" v-model="otp" class="form-control input-glass" placeholder="OTP" required />
            <label>OTP</label>
        </div>

        <button type="submit" class="btn login-btn w-100 mb-3">Login</button>

        <div class="text-center text-white mb-3">— OR —</div>

        <div class="d-flex flex-column gap-2 mt-2">
            <button type="button" class="btn google-btn" @click="router.push('/auth/loginWithOtp')">
                <i class="fa-brands fa-google me-2"></i>
                Continue with Username
            </button>
        </div>

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
