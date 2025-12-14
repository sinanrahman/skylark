<script>
    import api from '@/services/api';
    export default{
        name: "HomePage",
        data(){
            return{}
        },
        methods:{
            async logout(){
                const res = await api.get('/logout')
                console.log(res.data)
            }
        }
    }
</script>
<template >
    <div class="home">
        <section class="video-banner">
            <video autoplay muted loop>
                <source src="/video/BMW M3 Competition - 4K Cinematic Short Video.mp4" type="video/mp4" />
            </video>

            <div class="video-overlay">
                <h1>Explore the world’s largest car sharing & <br /> rental marketplace</h1>
                <p>Luxury • Comfort • Affordable Prices</p>
                <button class="video-btn">Explore Cars</button>
            </div>
        </section>

        <section class="home-section">
           <div class="container home-box">

    <section class="cars-feature">
        <h2 class="cars-heading">Featured Cars</h2>

        <div class="car-group">
            <a href="sedan.html" class="car car1">
                <img src="/img/home/sedan.png" alt="Sedan" />
            </a>
            <div class="car-label sedan-text">SEDAN</div>
        </div>

        <div class="car-group">
            <a href="suv.html" class="car car2">
                <img src="/img/home/suv .png" alt="SUV" />
            </a>
            <div class="car-label suv-text">SUV</div>
        </div>

        <div class="car-group">
            <a href="hatchback.html" class="car car3">
                <img src="/img/home/hatchback.png" alt="Hatchback" />
            </a>
            <div class="car-label hatch-text">HATCHBACK</div>
        </div>
    </section>
</div>

        </section>

        <section class="testimonial-section py-5">
            <div class="container">
                <h2 class="text-center fw-bold mb-5 testimonial-title">
                    What Our Customers Say
                </h2>

                <div class="row g-4">

                    <div class="col-md-4">
                        <div class="testimonial-card">
                            <p class="review-text">
                                “Skylark provided the best rental experience. Clean cars, smooth ride,
                                and quick pickup. Highly recommended!”
                            </p>

                            <div class="d-flex align-items-center mt-3">
                                <img src="https://i.pravatar.cc/90?img=12" class="review-img" alt="" />
                                <div class="ms-3">
                                    <h6 class="mb-0 text-white">Rahul Menon</h6>
                                    <div class="rating text-warning">★★★★★</div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-md-4">
                        <div class="testimonial-card">
                            <p class="review-text">
                                “Affordable prices and professional service.
                                The car felt brand-new. Skylark is always my first choice now!”
                            </p>

                            <div class="d-flex align-items-center mt-3">
                                <img src="https://i.pravatar.cc/90?img=30" class="review-img" alt="" />
                                <div class="ms-3">
                                    <h6 class="mb-0 text-white">Aisha Kareem</h6>
                                    <div class="rating text-warning">★★★★★</div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-md-4">
                        <div class="testimonial-card">
                            <p class="review-text">
                                “Excellent customer support and hassle-free booking.
                                The airport pickup option saved my time. Loved the experience!”
                            </p>

                            <div class="d-flex align-items-center mt-3">
                                <img src="https://i.pravatar.cc/90?img=56" class="review-img" alt="" />
                                <div class="ms-3">
                                    <h6 class="mb-0 text-white">Vignesh P</h6>
                                    <div class="rating text-warning">★★★★★</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>

    </div>
</template>

<style scoped>
    .home {
      margin: 0;
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif;
      background: repeating-linear-gradient( #81939cf1,#0a57a9);
      color: #0a2540;
    }

    .navbar-glass {
      position: sticky;
      top: 0;
      z-index: 999;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(15px);
      -webkit-backdrop-filter: blur(15px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      padding: 0.5rem 2rem;
      transition: 0.3s;
    }

    .navbar-glass .navbar-brand {
      font-weight: 700;
      font-size: 1.5rem;
      color: #fff;
    }

    .navbar-glass .navbar-nav .nav-link {
      color: #fff;
      font-weight: 500;
      margin-right: 1rem;
      transition: color 0.3s;
    }

    .navbar-glass .navbar-nav .nav-link:hover {
      color: #00b4ff;
    }

    .navbar-brand {
      width: 20%;

      display: flex;
      align-items: center;
    }

    .navbar-brand img {
      width: 100px;
      background: linear-gradient(135deg, #000000, #40606f, #000000);
      border-radius: 15px 5px 15px 5px;
    }

    .navbar-brand span {
      width: 120px;
      font-style: italic;
    }

    .navbar-glass .btn-login {
      border-radius: 25px;
      padding: 0.4rem 1.2rem;
      font-weight: 600;
      color: #fff;
      background: linear-gradient(135deg, #15b7d3, #000000, );
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.4);
      transition: 0.3s;
    }

    .navbar-glass .btn-login:hover {
      background: rgba(0, 180, 255, 0.6);
      color: #fff;
    }

    .navbar-glass .navbar-toggler {
      border: none;
      color: #fff;
    }

    .navbar-glass.scrolled {
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(20px);
    }

    /* ===== VIDEO BANNER ===== */
    .video-banner {
      position: relative;
      height: 70vh;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      border-radius: 0 0 40px 40px;
      background: #87cefa;
    }

    .video-banner video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: brightness(0.6);
    }

    .video-overlay {
      position: absolute;
      text-align: center;
      color: white;
      z-index: 2;
      padding: 20px;
    }

    .video-overlay h1 {
      font-size: 3rem;
      font-weight: 700;
      letter-spacing: 1px;
    }

    .video-overlay p {
      font-size: 1.1rem;
      margin-top: 10px;
      opacity: 0.9;
    }

    .video-btn {
      margin-top: 20px;
      background: white;
      color: #007adf;
      padding: 10px 30px;
      border-radius: 30px;
      font-weight: 600;
      border: none;
      transition: 0.3s ease;
    }

    .video-btn:hover {
      background: #dff2ff;
    }

   .cars-feature {
      position: relative;
      height: 85vh;
      width: 90%;
      margin: 50px auto;
      border-radius: 40px;
      overflow: hidden;
        background: url("public/img/home/car.jpg") center/cover no-repeat;
      box-shadow: 0 25px 60px rgba(0, 0, 0, 0.35);
      border: 2px solid rgba(255, 255, 255, 0.25);
    }

    .cars-feature::before {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: inherit;
      background: linear-gradient(
        to bottom,
        rgba(0, 122, 223, 0.45),
        rgba(0, 0, 0, 0.4)
      );
      backdrop-filter: blur(2px);
      z-index: 1;
    }

    .cars-heading {
      position: relative;
      z-index: 3;
      text-align: center;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      padding-top: 35px;
      font-size: 2.7rem;
      font-weight: 700;
      color: #fff;
      letter-spacing: 2px;
      text-shadow: 0px 8px 25px rgba(0, 0, 0, 0.5);
    }

    /* ===== CAR IMAGES (Adjusted) ===== */
    .car {
      position: absolute;
      z-index: 4;
      transition: 0.5s ease;
    }

    .car img {
      width: 200px;                        
      filter: drop-shadow(0px 20px 25px rgba(0, 0, 0, 0.6));
      transition: transform 0.35s ease, filter 0.3s ease;
    }

    .car2 img {
      width: 120px;                        
      filter: drop-shadow(0px 20px 25px rgba(0, 0, 0, 0.6));
      transition: transform 0.35s ease, filter 0.3s ease;
    }

    .car1 { left: 18%; bottom: 40px; }
    .car2 { left: 45%; bottom: 30px; }
    .car3 { right: 15%; bottom: 40px; }

    .car:hover img {
      transform: scale(1.1);
      filter: drop-shadow(0 30px 50px rgba(255, 255, 255, 0.4));
    }

    .car-label {
      position: absolute;
      top: 72%;
      font-size: 58px;                      
      font-weight: 900;
      color: rgba(255, 255, 255, 0.15);
      line-height: 1;
      letter-spacing: 4px;
      z-index: 2;
      pointer-events: none;
      transition: 0.4s ease;
    }

    .sedan-text { left: 16%; }
    .suv-text   { left: 44.5%; top: 68%; }
    .hatch-text { right: 4%; }

    .car:hover + .car-label {
      color: rgba(255, 255, 255, 0.96);
      text-shadow: 0px 15px 40px rgba(255, 255, 255, 0.4);
    }

    .testimonial-section {
    background: linear-gradient(135deg, #003b73, #0a7ac1);
    padding: 150px;
  }

  .testimonial-title {
    color: #fff;
    font-size: 2.6rem;
    letter-spacing: 1px;
  }

  .testimonial-card {
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 25px;
    color: #e9e9e9;
    min-height: 230px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.25);
    transition: 0.4s ease;
    border: 1px solid rgba(255, 255, 255, 0.2);
    animation: fadeSlideUp 1.2s ease;
  }

  .testimonial-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 25px 45px rgba(0,0,0,0.35);
    background: rgba(255, 255, 255, 0.22);
  }

  .review-text {
    font-size: 15px;
    line-height: 1.6;
  }

  .review-img {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    border: 2px solid #00bfff;
  }

  /*animation */
  @keyframes fadeSlideUp {
    from {
      opacity: 0;
      transform: translateY(25px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

    /* ===== Responsive ===== */
    @media (max-width: 992px) {
      .car img { width: 160px; }
      .car-label { font-size: 40px; top: 70%; }

      .car1 { left: 12%; bottom: 90px; }
      .car3 { right: 12%; bottom: 90px; }
    }

    @media (max-width: 768px) {
      .cars-feature { height: 75vh; }
      .car img { width: 140px; }
      .car-label { font-size: 32px; }
    }

    @media (max-width: 768px) {
      .video-overlay h1 {
        font-size: 2rem;
      }
    }

    /* ============================
   RESPONSIVE CODE (FULL)
   ============================ */

/* --- Global Fix --- */
@media (max-width: 992px) {
  body {
    overflow-x: hidden;
  }

  .navbar-brand img {
    width: 70px !important;
  }

  .navbar-brand span {
    font-size: 1rem;
  }
}

/* --- Video Banner --- */
@media (max-width: 768px) {
  .video-banner {
    height: 55vh;
  }

  .video-overlay h1 {
    font-size: 1.8rem;
    line-height: 1.4;
  }

  .video-overlay p {
    font-size: 0.9rem;
  }

  .video-btn {
    padding: 8px 22px;
    font-size: 0.9rem;
  }
}

/* --- Featured Cars Section --- */
@media (max-width: 992px) {
  .cars-feature {
    height: 70vh;
  }

  .car img {
    width: 140px !important;
  }

  .car2 img {
    width: 100px !important;
  }

  .car1 { left: 10%; bottom: 30px; }
  .car2 { left: 40%; bottom: 20px; }
  .car3 { right: 10%; bottom: 30px; }

  .car-label {
    font-size: 40px;
    top: 72%;
  }
}

/* --- Mobile Phones (Max 600px) --- */
@media (max-width: 600px) {

  .cars-feature {
    height: 65vh;
  }

  .cars-heading {
    font-size: 1.8rem;
    padding-top: 20px;
  }

  .car img {
    width: 110px !important;
  }

  .car2 img {
    width: 80px !important;
  }

  .car1 {
    left: 5%;
    bottom: 25px;
  }
  .car2 {
    left: 35%;
    bottom: 20px;
  }
  .car3 {
    right: 5%;
    bottom: 25px;
  }

  .car-label {
    font-size: 28px;
    top: 75%;
  }
}

/* --- Extra Small (Below 450px) --- */
@media (max-width: 450px) {

  .cars-feature {
    height: 60vh;
  }

  .cars-heading {
    font-size: 1.5rem;
  }

  .car img {
    width: 85px !important;
  }

  .car2 img {
    width: 60px !important;
  }

  .car-label {
    font-size: 10px;
    letter-spacing: 0px;
  }
}

/* --- Testimonials --- */
@media (max-width: 992px) {
  .testimonial-section {
    padding: 70px 30px;
  }

  .testimonial-title {
    font-size: 2.1rem;
  }
}

@media (max-width: 768px) {
  .testimonial-title {
    font-size: 1.8rem;
  }

  .testimonial-card {
    min-height: auto;
    padding: 20px;
  }
}

@media (max-width: 576px) {
  .testimonial-card {
    padding: 18px;
  }

  .review-text {
    font-size: 14px;
  }

  .review-img {
    width: 45px;
    height: 45px;
  }
}

  </style>
