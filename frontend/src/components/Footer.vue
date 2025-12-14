<template>
  <footer class="text-light">
    <div class="container">
      <div class="row">

        <!-- Logo + About -->
        <div class="col-lg-4 col-md-6 mb-4">
          <router-link to="/">
            <img src="/img/logo.png" alt="Skylark" />
          </router-link>

          <p class="text-secondary mt-2">
            Skylark offers premium, affordable, and reliable vehicles for every journey.
            Experience hassle-free rentals, 24/7 support, and exceptional comfort.
          </p>
        </div>

        <!-- Quick Links -->
        <div class="col-lg-2 col-md-6 mb-4">
          <h5>Quick Links</h5>
          <ul class="list-unstyled">
            <li><router-link to="/" class="text-secondary">Home</router-link></li>
            <li><router-link to="/cars" class="text-secondary">Our Cars</router-link></li>
            <li><router-link to="/pricing" class="text-secondary">Pricing</router-link></li>
            <li><router-link to="/about" class="text-secondary">About Us</router-link></li>
          </ul>
        </div>

        <!-- Services -->
        <div class="col-lg-3 col-md-6 mb-4">
          <h5>Services</h5>
          <ul class="list-unstyled">
            <li><a href="#" class="text-secondary">Self-Drive Rentals</a></li>
            <li><a href="#" class="text-secondary">Chauffeur Service</a></li>
            <li><a href="#" class="text-secondary">Airport Pickup / Drop</a></li>
            <li><a href="#" class="text-secondary">Corporate Rentals</a></li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="col-lg-3 col-md-6 mb-4">
          <h5>Contact Us</h5>

          <p class="text-secondary mb-1">
            <i class="fa-solid fa-phone me-2"></i> +91 98765 43210
          </p>

          <p class="text-secondary mb-1">
            <i class="fa-solid fa-envelope me-2"></i> support@skylark.com
          </p>

          <p class="text-secondary">
            <i class="fa-solid fa-location-dot me-2"></i> Calicut, Kerala
          </p>

          <div class="social-icons d-flex gap-3 mt-3">
            <a href="#"><i class="fa-brands fa-facebook"></i></a>
            <a href="#"><i class="fa-brands fa-instagram"></i></a>
            <a href="#"><i class="fa-brands fa-youtube"></i></a>
            <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
          </div>
        </div>

      </div>

      <hr />

      <div class="text-center text-secondary copyright">
        © 2025 Skylark. All rights reserved.
      </div>

    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
footer {
  background: #0a0a0a;
  padding: 60px 0 30px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.5);
}

footer img {
  height: 70px;
  width: auto;
  margin-bottom: 15px;
}

footer p {
  font-size: 14px;
  line-height: 1.7;
}

footer h5 {
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 20px;
}

footer a {
  transition: 0.3s;
}

footer a:hover {
  color: #0ab3ff !important;
  text-decoration: none;
}

.social-icons a {
  font-size: 22px;
  color: #ccc;
  transition: 0.3s;
}

.social-icons a:hover {
  color: #0ab3ff;
}

hr {
  opacity: 0.15;
}

.copyright {
  font-size: 14px;
}
</style>
