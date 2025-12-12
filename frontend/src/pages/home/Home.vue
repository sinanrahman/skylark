<template>
    <div>

        <section class="video-banner">
            <video autoplay muted loop>
                <source src="./static/vid/BMW M3 Competition - 4K Cinematic Short Video.mp4" type="video/mp4" />
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
                            <img src="./static/img/home/sedan.png" alt="Sedan" />
                        </a>
                        <div class="car-label sedan-text">SEDAN</div>
                    </div>

                    <div class="car-group">
                        <a href="suv.html" class="car car2">
                            <img src="./static/img/home/suv .png" alt="SUV" />
                        </a>
                        <div class="car-label suv-text">SUV</div>
                    </div>

                    <div class="car-group">
                        <a href="hatchback.html" class="car car3">
                            <img src="./static/img/home/hatchback.png" alt="Hatchback" />
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


<script>
export default {
    name: "HomePage",

    data() {
        return {};
    },

    methods: {}
};
</script>


<style scoped>
body {
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    background: repeating-linear-gradient(#81939cf1, #0a57a9);
    color: #0a2540;
}

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
    background: url("./static/img/home/car.jpg") center/cover no-repeat;
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.35);
    border: 2px solid rgba(255, 255, 255, 0.25);
}

.cars-feature::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(to bottom,
            rgba(0, 122, 223, 0.45),
            rgba(0, 0, 0, 0.4));
    backdrop-filter: blur(2px);
    z-index: 1;
}

.cars-heading {
    position: relative;
    z-index: 3;
    text-align: center;
    padding-top: 35px;
    font-size: 2.7rem;
    font-weight: 700;
    color: #fff;
    letter-spacing: 2px;
    text-shadow: 0px 8px 25px rgba(0, 0, 0, 0.5);
}

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
}

.car1 {
    left: 18%;
    bottom: 40px;
}

.car2 {
    left: 45%;
    bottom: 30px;
}

.car3 {
    right: 15%;
    bottom: 40px;
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
    transition: 0.4s ease;
}

.sedan-text {
    left: 16%;
}

.suv-text {
    left: 44.5%;
    top: 68%;
}

.hatch-text {
    right: 4%;
}

.testimonial-section {
    background: linear-gradient(135deg, #003b73, #0a7ac1);
    padding: 150px;
}

.testimonial-title {
    color: #fff;
    font-size: 2.6rem;
}

.testimonial-card {
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 25px;
    color: #e9e9e9;
    min-height: 230px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
    transition: 0.4s ease;
}

.review-img {
    width: 55px;
    height: 55px;
    border-radius: 50%;
}

/* Responsive  */
@media (max-width: 992px) {
    .cars-feature {
        height: 55vh;
        padding-top: 40px;
    }

    .car-label {
        font-size: 28px;
        letter-spacing: 3px;
        top: 68%;
    }

    .car img {
        width: 120px !important;
    }

    .car2 img {
        width: 90px !important;
    }
}

@media (max-width: 768px) {
    .cars-feature {
        height: 48vh;
        padding-top: 30px;
    }

    .car-label {
        font-size: 12px;
        letter-spacing: 2px;
        top: 70%;
    }

    .car img {
        width: 90px !important;
    }
}

@media (max-width: 576px) {
    .cars-feature {
        height: auto !important;
        padding: 20px 0;
    }

    .car,
    .car-label,
    .car img {
        display: none !important;
    }
}
</style>
