<template>
  <div class="page-wrapper">
    <div class="container">

      <div class="page-header">
        <h2>Book Your Ride</h2>
        <p class="text-muted">Choose your dates and enjoy a smooth drive with Skylark</p>
      </div>

      <div class="row booking-card">

        <div class="col-lg-5 p-0 slider-col">
          <div
            id="carSlider"
            class="carousel slide car-slider"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="/img/cars/suv/bmw/bmw-x5.jpg" alt="Car">
              </div>
              <div class="carousel-item">
                <img src="/img/cars/suv/bmw/bmw-x5-2.webp" alt="Car">
              </div>
              <div class="carousel-item">
                <img src="/img/cars/suv/bmw/bmw-x5-3.avif" alt="Car">
              </div>
            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#carSlider" data-bs-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carSlider" data-bs-slide="next">
              <span class="carousel-control-next-icon"></span>
            </button>

            <div class="car-overlay">
              <h4>BMW X5</h4>
              <div class="car-meta">SUV • Automatic • 5 Seats</div>
              <div class="car-features">
                <span>AC</span>
                <span>GPS</span>
                <span>Music</span>
                <span>Air Bags</span>
              </div>
              <div class="price-box">₹6,000 / day</div>
            </div>
          </div>
        </div>


        <div class="col-lg-7 form-col">
          <div class="booking-form">
            <form>
              <div class="row g-4">
                <div class="col-md-6">
                  <label>Pickup Date</label>
                  <input type="date" class="form-control" />
                </div>
                <div class="col-md-6">
                  <label>Return Date</label>
                  <input type="date" class="form-control" />
                </div>
                <div class="col-md-6">
                  <label>Pickup Location</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="col-md-6">
                  <label>Drop Location</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="col-md-6">
                  <label>Driver Option</label>
                  <select class="form-select">
                    <option>No Driver</option>
                    <option>With Driver</option>
                  </select>
                </div>
                <div class="col-md-6">
                  <label>Payment Method</label>
                  <select class="form-select">
                    <option>Cash</option>
                    <option>UPI</option>
                    <option>Card</option>
                  </select>
                </div>
              </div>

              <div class="summary-box mt-4">
                Duration <span>3 Days</span><br />
                Driver Fee <span>₹1,500</span>
                <hr />
                Total Amount <span>₹19,500</span>
              </div>

              <button class="btn-book">
                <i class="bi bi-calendar-check"></i> Confirm Booking
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarBooking",
  mounted() {
    if (window.bootstrap) {
      new window.bootstrap.Carousel(
        document.getElementById("carSlider")
      );
    }
  }
};
</script>

<style scoped>

.page-wrapper {
  font-family: "Poppins", sans-serif;
  background: linear-gradient(180deg, #81939cf1, #0a57a9);
  min-height: 100vh;
  padding: 40px 0;
}

.page-header {
  text-align: center;
  margin-bottom: 30px;
}

.page-header h2 {
  font-weight: 800;
  color: #0a2540;
}


.booking-card {
  background: #fff;
  border-radius: 26px;
  box-shadow: 0 25px 55px rgba(0, 0, 0, 0.12);
  overflow: hidden;

  display: flex;
  align-items: stretch;
}


.slider-col,
.form-col {
  display: flex;
  flex-direction: column;
}


.car-slider {
  position: relative;
  flex: 1;
  min-height: 100%;
}

.carousel-inner,
.carousel-item {
  height: 100%;
}



.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: transparent;
}

.car-overlay {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  padding: 24px 30px;
  color: #fff;

  background: linear-gradient(
    to top,
    rgba(10, 37, 64, 0.9),
    rgba(10, 37, 64, 0.55),
    rgba(10, 37, 64, 0.2),
    transparent
  );

  backdrop-filter: blur(6px);
}

.car-overlay h4 {
  font-weight: 800;
}

.car-meta {
  font-size: 13px;
  margin-bottom: 8px;
}

.car-features span {
  font-size: 12px;
  margin-right: 10px;
}

.price-box {
  margin-top: 10px;
  font-size: 16px;
  font-weight: 700;
  background: rgba(255, 255, 255, 0.2);
  padding: 8px 14px;
  border-radius: 14px;
  display: inline-block;
}


.booking-form {
  padding: 35px;
}

.form-control,
.form-select {
  border-radius: 14px;
  padding: 12px;
}


.summary-box {
  background: #f1f7ff;
  border-radius: 18px;
  padding: 18px;
}

.summary-box span {
  float: right;
  font-weight: 700;
  color: #0d6efd;
}


.btn-book {
  background: linear-gradient(135deg, #0d6efd, #00bfff);
  color: #fff;
  border-radius: 35px;
  padding: 14px;
  border: none;
  font-weight: 700;
  width: 100%;
  margin-top: 25px;
}

@media (max-width: 768px) {
  .booking-card {
    flex-direction: column;
  }

  .car-slider {
    height: 320px;
  }
}
</style>
