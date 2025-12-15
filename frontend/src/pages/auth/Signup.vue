<template>
  <div class="register-wrapper">

     <img src="/img/car.png" class="bg-car" />

    <form @submit.prevent="submitRegister" class="login-card">

      <h2 class="text-center mb-4">Signup</h2>

      <div class="login-card-scroll">

        <div class="form-floating mb-3">
          <input v-model="name" id="name" type="text" class="form-control input-glass" placeholder=" ">
          <label for="name">Name</label>
        </div>

        <div class="form-floating mb-3">
          <input v-model="username" id="username" type="text" class="form-control input-glass" placeholder=" ">
          <label for="username">Username</label>
        </div>

        <!-- Email -->
        <div class="form-floating mb-3">
          <input v-model="email" id="email" type="email" class="form-control input-glass" placeholder=" ">
          <label for="email">Email</label>
        </div>

        <!-- Password -->
        <div class="form-floating mb-3">
          <input v-model="password" id="password" type="password" class="form-control input-glass" placeholder=" ">
          <label for="password">Password</label>
        </div>

        <!-- Confirm Password -->
        <div class="form-floating mb-3">
          <input v-model="confirmPassword" id="confirmPassword" type="password" class="form-control input-glass" placeholder=" ">
          <label for="confirmPassword">Confirm Password</label>
        </div>

        <!-- Phone -->
        <div class="form-floating mb-3">
          <input v-model="phone" id="phone" type="tel" class="form-control input-glass" placeholder=" ">
          <label for="phone">Phone</label>
        </div>

        <!-- Role -->
        <div class="form-floating mb-3">
      <select id="role" class="form-select input-glass" name="role" required>
        <option value="">Select role</option>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
    </div>

        <!-- Profile Pic -->
        <div class="mb-3">
          <input
            type="file"
            id="profilePic"
            class="form-control custom-file input-glass"
            accept="image/*"
            @change="previewImage"
          >
        </div>

        <!-- Preview -->
        <div class="profile-pic-container">
          <img :src="previewUrl" alt="">
        </div>

        <button class="btn login-btn w-100 mt-4 mb-3">Signup</button>

      </div>

      <div class="text-center mt-3 mb-3 bottom-text">
        <router-link to="/auth/login" class="login-link">
          already have an account? <span class="underline">login</span>
        </router-link>
      </div>

    </form>

  </div>
</template>


<script>
// export default {
//   data() {
//     return {
//       previewImg: "",
//       imageFile: null,

//       name: "",
//       username: "",
//       email: "",
//       phone: "",
//       role: "student",
//       password: "",
//       confirmPassword: ""
//     };
//   },

//   methods: {
//     onImageChange(e) {
//       const file = e.target.files[0];
//       this.imageFile = file;
//       this.previewImg = URL.createObjectURL(file);
//     },

//     async submitForm() {
//       // Frontend password check
//       if (this.password !== this.confirmPassword) {
//         alert("Passwords do not match!");
//         return;
//       }

//       const formData = new FormData();
//       formData.append("photo", this.imageFile);
//       formData.append("name", this.name);
//       formData.append("username", this.username);
//       formData.append("email", this.email);
//       formData.append("phone", this.phone);
//       formData.append("role", this.role);
//       formData.append("password", this.password);
//       formData.append("confirmPassword", this.confirmPassword); 

//       let data;

//       const res = await fetch("http://localhost:3000/register", {
//         method: "POST",
//         body: formData
//       });
//       try {
//         data = await res.json();
//       } catch (err) {
//         alert("Server returned an invalid response (HTML instead of JSON).");
//         return;
//       }

//       if (res.ok) {
//         this.$router.push("/login");
//       } else {
//       }
//     }
//   }
// };

</script>

<style scoped>
* {
  font-family: 'Poppins', sans-serif;
}

.register-wrapper {
  height: 100vh;
  background: #007adf;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}


.register-wrapper::before,
.register-wrapper::after {
  content: '';
  position: absolute;
  width: 600px;
  height: 600px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 50%;
}

.register-wrapper::before {
  top: -100px;
  left: -100px;
  filter: blur(80px);
}

.register-wrapper::after {
  bottom: -150px;
  right: -150px;
  filter: blur(100px);
}

/* Car */
.bg-car {
  position: absolute;
  width: 500px;
  opacity: 0.25;
  z-index: 1;
}

.input-glass {
  color: #000 !important;
  caret-color: #000;
}
.form-floating > .input-glass {
  height: 56px;
  padding: 1.25rem 0.75rem;
  background: hwb(0 98% 1% / 0.3);
  border-radius: 10px;
  color: #000 !important;
}

.input-glass:focus {
 background-color: #d1d5db;
  color: #000 !important;
}

.form-floating > label {
  padding: 0.75rem;
  color: #333;
}


.login-card {
  width: 350px !important;
  padding: 30px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(15px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.2);
  z-index: 3;
  animation: fadeIn 1s ease;
}

.login-card-scroll {
  max-height: 50vh;
  overflow-y: auto;
  padding-right: 5px;
}

.login-card-scroll::-webkit-scrollbar {
  width: 6px;
}
.login-card-scroll::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
}



.form-floating > .input-glass {
  height: 60px;                     
  padding: 1.625rem 0.75rem 0.625rem;
  background: rgba(255, 255, 255, 0.35);
  border: none;
  border-radius: 10px;
  color: #000;
  font-size: 16px;
  line-height: 1.5;
  caret-color: #000;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  transition: background 0.25s ease, box-shadow 0.25s ease;
}

.form-floating > .input-glass:focus,
.form-floating > .input-glass:not(:placeholder-shown) {
  color: #000;
}


.form-floating > label {
  padding: 0.75rem;
  color: #333;
}



/* File input */
.custom-file {
  background-color: rgba(255, 255, 255, 0.5) !important;
  border: 1px solid #ccc !important;
  border-radius: 8px !important;
  padding: 8px !important;
  cursor: pointer;
}

  .custom-file:hover {
    background-color: #e0e0e0;
  }


.profile-pic-container {
  width: 112px;
  height: 112px;
  border-radius: 5px;
  overflow: hidden;
  border: 2px solid #d1d5db;
  margin: 12px auto;
}

.profile-pic-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.login-btn {
  background: #00b4ff;
  color: white;
  border: none;
  border-radius: 25px;
  padding: 12px;
  font-weight: bold;
}
.login-btn:hover {
  background: #0088cc;
  transform: translateY(-2px);
  box-shadow: 0 8px 18px rgba(0,0,0,0.2);
  transition: 0.3s ease;
}


.bottom-text {
  color: white;
}

.login-link {
  color: white;
  text-decoration: none;
}

.underline {
  text-decoration: underline;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

</style>
