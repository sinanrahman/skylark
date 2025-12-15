<template>
  <div class="about-page">

    <video autoplay muted loop class="video-bg">
      <source src="/video/BMW M3 Competition - 4K Cinematic Short Video.mp4" type="video/mp4" />
    </video>

    <div class="overlay"></div>

    <section class="about-container">
      <div class="about-card">

        <div class="logo-box">
          <img src="/img/logo.png" alt="Skylark Logo" />
        </div>

        <h2 class="about-title">About Skylark Rent A Car</h2>

        <p class="about-text">
          Skylark Rent A Car is built to deliver simplified, premium,
          and reliable car rental experiences. Our mission is to make
          travel easier—whether it's a quick city ride, a family trip,
          or a business journey.
          <br /><br />
          With real-time booking, transparent pricing, doorstep pickup &
          delivery, and a fleet of well-maintained cars, Skylark ensures
          that your ride is comfortable, safe, and affordable.
          <br /><br />
          We believe in trust, innovation, and top-class service.
          Drive smarter. Drive Skylark.
        </p>

      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: "AboutPage",
};
</script>

<style scoped>
.about-page {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: "Poppins", sans-serif;
  overflow-x: hidden;
}


.video-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: cover;
  opacity: 0.9;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom right,
    rgba(0, 84, 149, 0.6),
    rgba(0, 157, 255, 0.4)
  );
  z-index: 0;
}

.about-container {
  position: relative;
  z-index: 2;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
}

.about-card {
  max-width: 950px;
  padding: 40px 50px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(15px);
  border-radius: 25px;
  border: 1px solid rgba(255, 255, 255, 0.35);
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.2);
  animation: fadeIn 1.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo-box {
  width: 120px;
  border-radius: 15px 5px 15px 5px;
  background: linear-gradient(135deg, #000000, #40606f, #000000);
  margin-bottom: 20px;
}

.logo-box img {
  width: 100%;
}

.about-title {
  font-size: 2.3rem;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  margin-bottom: 20px;
}

.about-text {
  font-size: 1.1rem;
  color: #eaf7ff;
  line-height: 1.7rem;
  text-align: center;
}

.logo {
  width: 100px;
  margin: 0 auto 20px auto;
  display: block;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .about-card {
    padding: 30px;
  }

  .about-title {
    font-size: 1.8rem;
  }

  .about-text {
    font-size: 1rem;
  }
}
</style>
