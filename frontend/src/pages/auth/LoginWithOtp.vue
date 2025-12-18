<template>
    <form @submit.prevent="submitOtp" class="login-card">

        <h2 class="text-center mb-4">Login</h2>
        <h6 :class="msg.textColor">{{ msg.message }}</h6>

        <div class="form-floating mb-3">
            <input type="email" v-model="email" class="form-control input-glass" placeholder="Mail" required />
            <label>Email</label>
            <button @click="genOtp" class="btn btn-outline-info otp-btn" type="button">Send Otp</button>
        </div>

        <div class="form-floating mb-3">
            <input type="text" v-model="otp" class="form-control input-glass" placeholder="OTP" required />
            <label>OTP</label>
        </div>

        <button type="submit" class="btn login-btn w-100 mb-3">Login</button>

        <div class="text-center text-white mb-3">— OR —</div>

        <div class="d-flex flex-column gap-2 mt-2">
            <router-link to="/auth/login" class="btn google-btn">
                <i class="fa-brands fa-google me-2"></i>
                Continue with Username
            </router-link>
        </div>

        <div class="text-center mt-3 text-white">
            Don't have an account?
            <router-link to="/signup" class="text-white underline">
                Sign up
            </router-link>
        </div>

    </form>
</template>

<script>
import api from '@/services/api';
export default {
    data() {
        return {
            email: "",
            otp: "",
            msg: {
                textColor: "text-danger",
                message: ""
            },
            loading: false

        }
    },
    methods: {
        async genOtp() {
            if (this.email) {
                this.msg.message = 'Please Wait Generating Otp'
                this.msg.textColor = "text-warning"
            }
            try {
                const res = await api.post('/generateotp', {
                    email: this.email
                })
                this.loading = true
                console.log(this.email)
                if (!this.email) {
                    this.msg.message = 'Please Enter Email'
                    this.msg.textColor = "text-danger"
                    return
                }
                if (!res.data.status) {
                    this.msg.message = 'Cannot Generate OTP Now '
                    this.msg.textColor = "text-danger"
                    return
                }
                if (res.data.status) {
                    this.msg.message = 'Otp Send'
                    this.msg.textColor = "text-success"
                    return
                }

            } catch (err) {
                this.msg.message = err.response?.data?.message || 'error generating otp'
                this.msg.textColor = "text-danger"
            } finally {
                this.loading = false
            }
        },
        async submitOtp() {
            try {
                const res = await api.post('/loginwithotp', {
                    email: this.email,
                    otp: this.otp
                })
                console.log(res.data)
                this.msg.message = 'login success'
                this.msg.textColor = "text-success"
                this.$store.dispatch('login', res.data.user)
                this.$router.push("/")
            } catch (err) {
                this.msg.message = err.response?.data?.message || 'error while submitting otp'
                this.msg.textColor = "text-danger"
            } finally {
                this.loading = false
            }

        }
    }
}
</script>
