<script setup>

</script>
<template>

</template>

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