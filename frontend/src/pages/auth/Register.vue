<template>
  <!-- Car Background -->
 <img src="/img/car.png" class="bg-car" />

  <!-- Glass Card -->
  <form @submit.prevent="submitRegister" class="login-card login-card-scroll">

    <h2 class="text-center mb-4">Signup</h2>

    <!-- Name -->
    <div class="form-floating mb-3">
      <input type="text" class="form-control input-glass" id="name" placeholder="Name">
      <label for="name">Name</label>
    </div>

    <!-- Username -->
    <div class="form-floating mb-3">
      <input type="text" class="form-control input-glass" id="username" placeholder="Username">
      <label for="username">Username</label>
    </div>

    <!-- Email -->
    <div class="form-floating mb-3">
      <input type="email" class="form-control input-glass" id="email" placeholder="Email" required>
      <label for="email">Email</label>
    </div>

    <!-- Password -->
    <div class="form-floating mb-3">
      <input type="password" class="form-control input-glass" id="password" placeholder="Password">
      <label for="password">Password</label>
    </div>

    <!-- Confirm Password -->
    <div class="form-floating mb-3">
      <input type="password" class="form-control input-glass" id="confirmPassword" placeholder="Confirm Password">
      <label for="confirmPassword">Confirm Password</label>
    </div>

    <!-- Phone -->
    <div class="form-floating mb-3">
      <input
        type="tel"
        class="form-control input-glass"
        id="phone"
        placeholder="Phone"
        required
        pattern="[0-9]{10}"
      >
      <label for="phone">Phone</label>
    </div>

    <!-- Role -->
    <div class="form-floating mb-3">
      <select id="role" class="form-select input-glass" required>
        <option value="">Select role</option>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
    </div>

    <!-- Profile Picture -->
    <div class="mb-3">
      <input
        type="file"
        id="profilePic"
        class="form-control input-glass custom-file"
        accept="image/*"
        @change="previewImage"
      >
    </div>

    <!-- Preview -->
    <div class="profile-pic-container">
      <img :src="previewUrl" alt="profile" id="previewImg">
    </div>

    <button class="btn login-btn w-100 mt-4 mb-3">Signup</button>

    <!-- Login Redirect -->
    <div class="text-center mt-3 mb-3 text-white">
      Already have an account?
      <router-link to="/login" class="underline text-white">
        Login
      </router-link>
    </div>

  </form>
</template>

<script >

</script>


<style scoped>
      * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    height: 100vh;
    background: #007adf;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Soft blurry background glow like your screenshot */
  body::before {
    content: '';
    position: absolute;
    width: 600px;
    height: 600px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 50%;
    filter: blur(80px);
    top: -100px;
    left: -100px;
  }

  body::after {
    content: '';
    position: absolute;
    width: 600px;
    height: 600px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 50%;
    filter: blur(100px);
    bottom: -150px;
    right: -150px;
  }

  /* Center background car image */
  .bg-car {
    position: absolute;
    width: 500px;
    opacity: 0.25;
    z-index: 1;
  }

  /* Glass Card */
  .login-card {
    z-index: 5;
    width: 350px;
    padding: 30px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    z-index: 2;
    animation: fadeIn 1s ease;
  }

  .login-card-scroll {
    max-height: 50vh;
    overflow-y: auto;
    padding-right: 5px;
  }

  /* Custom scrollbar (optional) */
  .login-card-scroll::-webkit-scrollbar {
    width: 6px;
  }

  .login-card-scroll::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.5);
    border-radius: 10px;
  }

  .login-card-scroll::-webkit-scrollbar-track {
    background: transparent;
  }


  .login-card h2 {
    color: #fff;
  }

  /* Glass Inputs */
  .input-glass {
    background: rgba(255, 255, 255, 0.3);
    border: none;
    border-radius: 10px;
    padding: 12px;
    color: #000000;
  }

  .input-glass::placeholder {
    color: rgba(0, 0, 0, 0.7);
  }

  .custom-file {
    background-color: rgba(255, 255, 255, 0.5);
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 8px;
    cursor: pointer;
    color: #333;
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
    margin: 12px;
  }

  .profile-pic-container img {
    width: 100%;
    /* w-full */
    height: 100%;
    /* h-full */
    object-fit: cover;
    /* object-cover */
  }

  /* Buttons */
  .login-btn {
    background: #00b4ff;
    border: none;
    padding: 12px;
    border-radius: 25px;
    font-weight: bold;
    color: white;
    transition: 0.3s;
  }

  .login-btn:hover {
    background: #0095e0;
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