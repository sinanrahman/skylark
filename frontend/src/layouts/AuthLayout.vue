<template>
  <div class="auth-wrapper">

    <div class="circle c1"></div>
    <div class="circle c2"></div>
    <div class="circle c3"></div>

    <img src="/img/car.png" class="bg-car" />

    <div class="main-container">

      <div class="info-panel">
        <div class="logo-box">
          <img src="/img/logo.png" alt="Skylark Logo" />
        </div>
        <h1>SKYLARK</h1>
        <p>
          Premium rental cars for a smooth and stylish journey.
          Book your ride in seconds with comfort, safety, and trust.
        </p>
      </div>

      <div class="login-section">
        <router-view />
      </div>

    </div>
  </div>
</template>

<script setup>
</script>

<style>
.auth-wrapper {
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #007adf;
  overflow: hidden;
}

.circle {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  animation: float 8s infinite alternate ease-in-out;
}

.c1 {
  width: 250px;
  height: 250px;
  background: #90e0ff;
  top: -40px;
  left: -30px;
}

.c2 {
  width: 300px;
  height: 300px;
  background: #4db9ff;
  bottom: -60px;
  right: -50px;
}

.c3 {
  width: 180px;
  height: 180px;
  background: #77d1ff;
  top: 60%;
  left: 20%;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }

  100% {
    transform: translateY(-40px);
  }
}

.bg-car {
  position: absolute;
  width: 550px;
  opacity: 0.2;
  z-index: 1;
}

.main-container {
  width: 900px;
  height: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 25px;
  z-index: 2;
}


.info-panel {
  width: 50%;
  height: 100%;
  padding: 50px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: #007bdf68;
  box-shadow: 20px 20px 60px #0068be, -20px -20px 60px #008cff;
}

.logo-box {
  width: 120px;
  border-radius: 15px 5px 15px 5px;
  background: linear-gradient(135deg, #000000, #40606f, #000000);
  margin-bottom: 20px;
  display: flex;
  align-items: start;
  justify-content: center;
}

.logo-box img {
  width: 100%;
}

.info-panel h1 {
  font-size: 38px;
  letter-spacing: 2px;
  font-weight: bolder;
  font-style: italic;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.info-panel p {
  margin-top: 15px;
  font-size: 16px;
  text-align: center;
}

.login-section {
  width: 45%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-card {
  width: 100%;
  padding: 40px;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.064);
  backdrop-filter: blur(10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  transform: translateX(0);
  animation: fadeIn 1s ease;
}

.login-card h2 {
  color: white;
  margin-bottom: 20px;
  text-align: center;
}

.input-glass {
  background: rgba(255, 255, 255, 0.3);
  border: none;
  color: white;
  border-radius: 10px;
  padding: 12px;
  width: 100%;
  margin-bottom: 15px;
}

.input-glass::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.login-btn {
  background: #00b4ff;
  border: none;
  border-radius: 25px;
  padding: 12px;
  font-weight: 600;
  color: white;
  width: 100%;
  margin-bottom: 10px;
}

.google-btn {
  background: rgba(255, 255, 255, 0.4);
  border: none;
  border-radius: 25px;
  padding: 12px;
  color: #1a1a1a;
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.google-btn i {
  margin-right: 10px;
}


.login-card .or-text {
  color: white;
  text-align: center;
  margin: 10px 0;
}


@media(max-width: 768px) {
  .main-container {
    flex-direction: column;
    width: 90%;
    height: auto;
  }

  .info-panel {
    display: none;
  }

  .login-section {
    width: 100%;
  }

  .bg-car {
    width: 350px;
  }
}
</style>
