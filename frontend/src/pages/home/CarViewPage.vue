<template>
    <div class="page-wrapper">
  <div class="car-view-wrapper">


    <div class="hero-slider">
      <div id="carGallery" class="carousel slide" data-bs-ride="carousel">

        <div class="carousel-indicators">
          <button
            v-for="(img, i) in images"
            :key="i"
            type="button"
            data-bs-target="#carGallery"
            :data-bs-slide-to="i"
            :class="{ active: i === 0 }"
          ></button>
        </div>

        <div class="carousel-inner">
          <div
            v-for="(img, i) in images"
            :key="img"
            class="carousel-item"
            :class="{ active: i === 0 }"
          >
            <img :src="img" />
          </div>
        </div>
      </div>

      <div class="glass-overlay">
        <h1>{{ car.name }}</h1>
        <p>{{ car.type }}</p>
        <div class="hero-price">₹{{ car.price }} / Day</div>
      </div>
    </div>


    <div class="car-content">
      <div class="row g-4">

        <div class="col-lg-4">
          <div class="neo-box">
            <h6>Car Details</h6>
            <ul class="info-list list-unstyled">
              <li><span>Fuel</span><strong>{{ car.fuel }}</strong></li>
              <li><span>Transmission</span><strong>{{ car.transmission }}</strong></li>
              <li><span>Seats</span><strong>{{ car.seats }}</strong></li>
            </ul>
          </div>
        </div>

        <div class="col-lg-8">
          <div class="neo-box">
            <h6>Description</h6>
            <p class="desc-text">{{ car.description }}</p>
          </div>
        </div>

        <div class="col-lg-12">
          <div class="neo-box">
            <h6>Features</h6>
            <div class="features-row">
              <div v-for="f in features" :key="f.text" class="feature-box">
                <i :class="f.icon"></i> {{ f.text }}
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="neo-box">
            <h6>Add Review</h6>
            <div class="rating-stars">
              <i
                v-for="i in 5"
                :key="i"
                class="bi"
                :class="i <= rating ? 'bi-star-fill' : 'bi-star'"
                @click="rating = i"
              ></i>
            </div>
          <textarea class="form-control mt-3" rows="3" placeholder="Write your review..."></textarea>

            <button class="btn btn-book w-100 mt-3">Submit</button>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="neo-box">
            <h6>User Reviews</h6>
            <div v-for="r in reviews" :key="r.name" class="user-review">
              <strong>{{ r.name }}</strong>
              <p>{{ r.text }}</p>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="neo-box text-center">
            <h6>Total Reviews</h6>
            <div class="total-rating">4.3 / 5</div>
            <p class="text-muted">Based on {{ reviews.length }} reviews</p>
          </div>
        </div>

      </div>

      <div class="action-bar">
        <button class="btn-book">Book Now</button>
       <router-link to="/cars" class="btn-back">
  Back to Cars
</router-link>

      </div>
    </div>

  </div>
  </div>
</template>

<script>
export default {
  name: "CarViewPage",

  data() {
    return {
      images: [
       "/img/cars/suv/bmw/bmwIx-1.jpg",
  "/img/cars/suv/bmw/bmwIx-2.jpg",
  "/img/cars/suv/bmw/bmwIx-3.jpg"
      ],
      car: {
        name: "BMW X5",
        type: "SUV • Automatic • 5 Seats",
        price: 6000,
        fuel: "Diesel",
        transmission: "Automatic",
        seats: 5,
        description:
          "Luxury SUV with premium interiors, smooth automatic transmission and advanced safety systems."
      },
      features: [
        { icon: "bi bi-snow", text: "AC" },
        { icon: "bi bi-music-note-beamed", text: "Music" },
        { icon: "bi bi-geo-alt-fill", text: "GPS" },
        { icon: "bi bi-shield-check", text: "Air Bags" },
        { icon: "bi bi-gear", text: "Automatic" }
      ],
      reviews: [
        { name: "John D", text: "Very smooth ride and clean interior." },
        { name: "Akhil R", text: "Luxury feel, worth every rupee." }
      ],
      rating: 3
    };
  },

  mounted() {
    if (window.bootstrap) {
      new window.bootstrap.Carousel(
        document.getElementById("carGallery")
      );
    }
  }
};
</script>

<style scoped>

.page-wrapper {
  font-family: 'Poppins', sans-serif;
  background: repeating-linear-gradient(#0a57a9, #81939cf1);
  min-height: 100vh;
  padding: 10px 20px 10px 30px;   
}

    .car-view-wrapper {
     
      max-width: 1200px;
      background: #eef5ff;
      border-radius: 30px;
      overflow: hidden;
      box-shadow:
        10px 10px 50px rgba(0, 122, 223, 0.15),
        -10px -10px 50px #ffffff;
    }

    .hero-slider {
      position: relative;
      height: 480px;
    }

    .carousel-item img {
      height: 480px;
      width: 100%;
      object-fit: cover;
    }

    .carousel-indicators {
      bottom: 20px;
    }

    .carousel-indicators [data-bs-target] {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.7);
      opacity: 0.6;
      margin: 0 6px;
      border: none;
    }

    .carousel-indicators .active {
      opacity: 1;
      background: #007adf;
      transform: scale(1.2);
    }

    .glass-overlay {
      position: absolute;
      top: 50%;
      left: 40px;
      transform: translateY(-50%);
      padding: 30px 42px;
      border-radius: 30px;
      background: rgba(255, 255, 255, 0.18);
      backdrop-filter: blur(18px);
      color: #fff;
      max-width: 520px;
    }

    .glass-overlay h1 {
      font-weight: 800;
      font-size: 36px;
    }

    .hero-price {
      background: linear-gradient(135deg, #00bfff, #007adf);
      padding: 12px 30px;
      border-radius: 40px;
      font-weight: 700;
      display: inline-block;
      margin-top: 10px;
    }

    .car-content {
      padding: 40px;
    }

    .neo-box {
      background: #eef5ff;
      border-radius: 28px;
      padding: 30px;
      height: 100%;
      transition: 0.35s ease;
      box-shadow:
        14px 14px 30px rgba(0, 122, 223, 0.18),
        -14px -14px 30px #ffffff;
    }

    .neo-box:hover {
      transform: translateY(-6px);
      box-shadow:
        inset 8px 8px 18px rgba(0, 122, 223, 0.15),
        inset -8px -8px 18px #ffffff,
        0 25px 40px rgba(0, 122, 223, 0.25);
    }

    .neo-box h6 {
      font-weight: 800;
      color: #0a2540;
      margin-bottom: 22px;
    }

    .info-list li {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      border-bottom: 1px dashed #cfe3ff;
      font-size: 15px;
    }

    .desc-text {
      color: #4a6f9d;
      line-height: 1.7;
      font-size: 15px;
    }

    .features-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
    }

    .feature-box {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 18px 22px;
      border-radius: 24px;
      background: #eef5ff;
      font-weight: 600;
      color: #0a2540;
      transition: 0.35s ease;
      box-shadow:
        10px 10px 22px rgba(0, 122, 223, 0.18),
        -10px -10px 22px #ffffff;
    }

    .feature-box i {
      font-size: 22px;
      color: #007adf;
    }

    .feature-box:hover {
      background: linear-gradient(135deg, #00bfff, #007adf);
      color: #fff;
      transform: translateY(-4px);
    }

    .feature-box:hover i {
      color: #fff;
    }

    .rating-stars i {
      color: #ffc107;
      font-size: 22px;
      margin-right: 4px;
      cursor: pointer;
    }

    .user-review {
      margin-bottom: 14px;
      padding-bottom: 12px;
      border-bottom: 1px dashed #cfe3ff;
    }

    .user-review:last-child {
      border-bottom: none;
    }

    .total-rating {
      font-size: 36px;
      font-weight: 800;
      color: #007adf;
      margin: 14px 0;
    }

    .action-bar {
      margin-top: 40px;
      display: flex;
      gap: 18px;
    }

    .btn-book {
      background: linear-gradient(135deg, #00bfff, #007adf);
      color: #fff;
      padding: 16px 36px;
      border-radius: 40px;
      font-weight: 700;
      border: none;
    }

    .btn-back {
      background: #eef5ff;
      padding: 16px 36px;
      border-radius: 40px;
      color: #007adf;
      border: none;
    }

    @media (max-width: 768px) {
      .carousel-item img {
        height: 300px;
      }

      .glass-overlay {
        top: auto;
        bottom: 20px;
        left: 20px;
        right: 20px;
        transform: none;
      }
    }
</style>
