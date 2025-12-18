<template>
    <div class="body">

        <section class="video-banner">
            <video autoplay muted loop playsinline class="bg-video">
                <source src="/video/BMW M3 Competition - 4K Cinematic Short Video.mp4" type="video/mp4" />
            </video>

            <div class="video-overlay">
                <h1 class="hero-title">
                    <span>Explore the world’s largest car sharing</span>
                    <span>& rental marketplace</span>
                </h1>

                <p>Luxury • Comfort • Affordable Prices</p>

                <router-link to="/cars" class="video-btn">
                    Explore Cars
                </router-link>
            </div>
        </section>

        <section class="home-section">
            <div class="container home-box">

                <section class="cars-feature">

                    <h2 class="cars-heading">Featured Cars</h2>

                    <!-- SEDAN -->
                    <div class="car-group">
                        <router-link :to="{ name: 'Cars', query: { category: 'Sedan' } }" class="car car1">
                            <img src="/img/home/sedan.png" alt="Sedan">
                        </router-link>
                        <div class="car-label sedan-text">SEDAN</div>
                    </div>

                    <!-- SUV -->
                    <div class="car-group">
                        <router-link :to="{ name: 'Cars', query: { category: 'SUV' } }" class="car car2">
                            <img src="/img/home/suv .png" alt="SUV">
                        </router-link>
                        <div class="car-label suv-text">SUV</div>
                    </div>

                    <!-- HATCHBACK -->
                    <div class="car-group">
                        <router-link :to="{ name: 'Cars', query: { category: 'Hatchback' } }" class="car car3">
                            <img src="../../../public/img/home/hatchback.png" alt="Hatchback">
                        </router-link>
                        <div class="car-label hatch-text">HATCHBACK</div>
                    </div>

                </section>



                <section class="feature-section">
                    <div class="feature-container">

                        <div class="feature-card">
                            <div class="media-box">

                                <video src="/video/benz.mp4" muted autoplay loop></video>
                                <div class="play-btn">▶</div>
                            </div>
                            <h3>Engineered to <br> Impress.</h3>
                            <p>
                                Precision design meets powerful performance, delivering a driving experience defined by
                                comfort.
                            </p>
                        </div>

                        <div class="feature-card">
                            <div class="media-box">
                                <video src="/video/bmw.mp4" muted autoplay loop></video>
                                <div class="play-btn">▶</div>
                            </div>
                            <h3>Power Dressed in Elegance.</h3>
                            <p>
                                Bold performance wrapped in iconic luxury, built to dominate both city streets and open
                                highways.
                            </p>
                        </div>

                        <div class="feature-card">
                            <div class="media-box">
                                <video src="/video/lexus.mp4" muted autoplay loop></video>
                                <div class="play-btn">▶</div>
                            </div>
                            <h3>Luxury Redefined on Every Road.</h3>
                            <p>
                                An expression of sophistication and strength, created for drivers who value style,
                                comfort, and performance.
                            </p>
                        </div>

                    </div>
                </section>
                <section class="ev-section">
                    <div class="ev-overlay"></div>

                    <div class="electric-lines">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div class="ev-content">
                        <span class="ev-tag">⚡ Electric Rentals</span>
                        <h1>Drive the Future.<br>Silently.</h1>
                        <p>
                            Discover premium electric cars for rent. Zero emissions, instant power,
                            and a smooth, quiet driving experience designed for the modern road.
                        </p>

                        <router-link :to="{ name: 'Cars', query: { fuel: 'Electric' } }" class="ev-btn">
                            Explore Electric Cars
                        </router-link>


                    </div>
                </section>
            </div>
            <section class="testimonial-section py-5">
                <div class="container">

                    <h2 class="text-center fw-bold mb-5 testimonial-title">
                        What Our Customers Say
                    </h2>

                    <!-- <div class="row g-4">

                        <div class="col-md-4">
                            <div class="testimonial-card">
                                <p class="review-text">
                                    “Skylark provided the best rental experience. Clean cars, smooth ride,
                                    and quick pickup. Highly recommended!”
                                </p>

                                <div class="d-flex align-items-center mt-3">
                                    <img src="https://i.pravatar.cc/90?img=12" class="review-img" alt="">
                                    <div class="ms-3">
                                        <h6 class="mb-0 text-white">Rahul Menon</h6>
                                        <div class="rating text-warning">
                                            ★★★★★
                                        </div>
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
                                    <img src="https://i.pravatar.cc/90?img=30" class="review-img" alt="">
                                    <div class="ms-3">
                                        <h6 class="mb-0 text-white">Aisha Kareem</h6>
                                        <div class="rating text-warning">
                                            ★★★★★
                                        </div>
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
                                    <img src="https://i.pravatar.cc/90?img=56" class="review-img" alt="">
                                    <div class="ms-3">
                                        <h6 class="mb-0 text-white">Vignesh P</h6>
                                        <div class="rating text-warning">
                                            ★★★★★
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> -->
                    <div class="row g-4">
                        <div class="col-md-4" v-for="review in testimonials" :key="review._id">
                            <div class="testimonial-card">


                                <div class="d-flex align-items-end justify-content-start mt-3">
                                    <img :src="review.avatar" class="review-img" alt="">
                                    <div class="ms-3">
                                        <h6 class="mb-0 text-white">{{ review.name }}</h6>
                                        <div class="rating text-warning" style="font-size:25px;">
                                            {{ '★'.repeat(review.rating) }}
                                        </div>
                                    </div>
                                </div>
                                <div class="review-text mt-3 ml-1">
                                    {{ review.message }}
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- SMALL REVIEW SECTION -->
                    <div class="review-form mt-5">
                        <h4 class="text-white mb-4 text-center">Write a Review</h4>

                        <div class="review-row">
                            <!-- Avatar -->
                            <!-- <img
      :src="reviewForm.avatar"
      class="review-avatar"
      alt="User"
    /> -->

                            <!-- Review Input -->
                            <textarea v-model="reviewForm.message" placeholder="Share your experience..."
                                class="review-input"></textarea>

                            <!-- Rating -->
                            <select v-model="reviewForm.rating" class="review-select">
                                <option disabled value="">★</option>
                                <option v-for="n in 5" :key="n" :value="n">
                                    {{ n }} ★
                                </option>
                            </select>

                            <!-- Button -->
                            <button @click="submitReview" class="review-btn">
                                Submit
                            </button>
                        </div>
                    </div>




                </div>
            </section>

        </section>

    </div>

</template>


<script>
import api from '@/services/api'

export default {
    name: "HomePage",

    data() {
        return {
            testimonials: [],
            reviewForm: {
                name: this.$store.state.user.name,
                avatar: this.$store.state.user.dp,
                message: '',
                rating: ''
            }
        }
    },


    methods: {
        async fetchTestimonials() {
            const res = await api.get('/testimonials')
            this.testimonials = res.data.data
        },

        async submitReview() {
            if (!this.reviewForm.message || !this.reviewForm.rating) {
                alert('All fields required')
                return
            }

            await api.post('/testimonials', this.reviewForm)

            // ✅ reset only form fields
            this.reviewForm.message = ''
            this.reviewForm.rating = ''

            this.fetchTestimonials()
        }

    },

    mounted() {
        this.fetchTestimonials()

        // set once on load
        this.reviewForm.name = this.$store.state.user.name
        this.reviewForm.avatar = this.$store.state.user.dp
    },

    watch: {
        '$store.state.user'(user) {
            if (user) {
                this.reviewForm.name = user.name
                this.reviewForm.avatar = user.dp
            }
        }
    }

}
</script>



<style scoped>
.body {
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    background: repeating-linear-gradient(#81939cf1, #0a57a9);
    color: #0a2540;
}

.video-banner {
    position: relative;
    min-height: 90vh;
    overflow: hidden;
    border-radius: 0 0 40px 40px;
    display: block;
}


.bg-video {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 90%;
    width: auto;
    height: auto;
    transform: translate(-50%, -50%);
    object-fit: cover;
    filter: brightness(0.6);
    z-index: 1;
}

.video-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    text-align: center;
    color: #fff;
    padding: 20px;
    width: 90%;
    max-width: 900px;
}

.hero-title {
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.2;
    text-align: center;
}

.hero-title span {
    display: block;
}

.video-overlay p {
    font-size: 1rem;
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
    display: inline-block;
    text-decoration: none;
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
    background: url("/img/home/car.jpg") center/cover no-repeat;
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
    backdrop-filter: blur(0px);
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

.car:hover+.car-label {
    color: rgba(255, 255, 255, 0.96);
    text-shadow: 0px 15px 40px rgba(255, 255, 255, 0.4);
}

.feature-section {
    border-radius: 20px;
    background: linear-gradient(135deg, #104980, #1b91eb);
    padding: 80px 6%;
    margin-bottom: 40px;
}

.feature-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
}

.feature-card h3 {
    font-size: 28px;
    font-weight: 500;
    margin: 20px 0 10px;
    color: white;
}

.feature-card p {
    font-size: 16px;
    color: rgb(226, 215, 215);
    line-height: 1.6;
}

.review-form {
    max-width: 900px;
    margin: auto;
}

.review-row {
    display: flex;
    align-items: center;
    gap: 12px;
    background: rgba(255, 255, 255, 0.15);
    padding: 15px;
    border-radius: 50px;
    backdrop-filter: blur(12px);
}

.review-avatar {
    width: 48px;
    border-radius: 50%;
    border: 2px solid #00bfff;
    overflow: scroll;
    scrollbar-width: none;
}

.review-input {
    flex: 1;
    resize: none;
    border-radius: 30px;
    padding: 10px 16px;
    border: none;
    outline: none;
}

.review-select {
    width: 80px;
    border-radius: 30px;
    border: none;
    padding: 6px;
}

.review-btn {
    background: linear-gradient(135deg, #00bfff, #007adf);
    color: white;
    border: none;
    border-radius: 30px;
    padding: 8px 20px;
    font-weight: 600;
    transition: 0.3s ease;
}

.review-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 191, 255, 0.4);
}

@media (max-width: 768px) {
    .review-row {
        flex-direction: column;
        border-radius: 20px;
    }

    .review-select,
    .review-btn {
        width: 100%;
    }
}


.media-box {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
}

.media-box img,
.media-box video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.play-btn {
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.75);
    color: #fff;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform 0.2s ease, background 0.2s ease;
}

.play-btn:hover {
    transform: scale(1.1);
    background: #000;
}


@media (max-width: 992px) {
    .feature-container {
        grid-template-columns: 1fr;
    }

    .feature-card h3 {
        font-size: 24px;
    }
}

.ev-section {
    position: relative;
    width: 100%;
    height: 90vh;
    background: url("/img/home/kiahome.jpg") center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    overflow: hidden;
    margin-bottom: 40px;
    border-radius: 20px;
}

.ev-overlay {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center,
            rgba(0, 0, 0, 0.274),
            rgba(0, 0, 0, 0.377));
    z-index: 1;
}

.electric-lines {
    position: absolute;
    inset: 0;
    z-index: 2;
    pointer-events: none;
}

.electric-lines span {
    position: absolute;
    width: 2px;
    height: 120%;
    background: linear-gradient(to bottom,
            transparent,
            rgba(0, 191, 255, 0.8),
            transparent);
    animation: electricMove 6s linear infinite;
    opacity: 0.6;
}

.electric-lines span:nth-child(1) {
    left: 30%;
    animation-delay: 0s;
}

.electric-lines span:nth-child(2) {
    left: 50%;
    animation-delay: 2s;
}

.electric-lines span:nth-child(3) {
    left: 70%;
    animation-delay: 4s;
}

@keyframes electricMove {
    from {
        transform: translateY(-120%);
    }

    to {
        transform: translateY(120%);
    }
}

.ev-content {
    position: relative;
    z-index: 3;
    max-width: 720px;
    color: #fff;
    padding: 0 20px;

}

.ev-tag {
    display: inline-block;
    margin-bottom: 16px;
    padding: 6px 16px;
    border-radius: 30px;
    background: rgba(0, 0, 0, 0.468);
    color: #00bfff;
    font-weight: 600;
    letter-spacing: 0.5px;
}

.ev-content h1 {
    font-size: clamp(42px, 6vw, 72px);
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 20px;
}

.ev-content p {
    font-size: 18px;
    line-height: 1.6;
    color: #dcdcdc;
    margin-bottom: 36px;
}


.ev-btn {
    display: inline-block;
    padding: 14px 40px;
    border-radius: 40px;
    background: linear-gradient(135deg, #00bfff, #007adf);
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

}

.ev-btn:hover {
    transform: translateY(-4px);
    box-shadow: 0 18px 40px rgba(0, 191, 255, 0.45);
}


@media (max-width: 768px) {
    .ev-content h1 {
        font-size: 40px;
    }

    .ev-content p {
        font-size: 16px;
    }
}

.testimonial-section {
    background: linear-gradient(135deg, #003b73, #0a7ac1);
    padding: clamp(40px, 8vw, 150px);
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
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
    transition: 0.4s ease;
    border: 1px solid rgba(255, 255, 255, 0.2);
    animation: fadeSlideUp 1.2s ease;
}

.testimonial-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.35);
    background: rgba(255, 255, 255, 0.22);
}

.review-text {
    font-size: 15px;
    font-weight: 500;
    font-family: monospace;
    line-height: 1.6;
    width: 100%;
    height: 80px;
    overflow: scroll;
    scrollbar-width: none;
}

.review-img {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    border: 2px solid #00bfff;
}

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

@media (max-width: 1400px) {

    .cars-feature {
        min-height: 75vh;
        height: auto;
        padding-top: 40px;
    }

    .car-label {
        font-size: 43px;
        font-weight: 700;
        letter-spacing: 2px;
        position: absolute;
        top: 65%;
    }

    .car img {
        width: 170px;
    }

    .car2 img {
        width: 85px;
    }

    .car1 {
        bottom: 30px;
    }

    .car2 {
        bottom: 25px;
    }

    .car3 {
        bottom: 30px;
    }
}

@media (max-width: 992px) {

    .cars-feature {
        min-height: 55vh;
        height: auto;
        padding-top: 40px;
    }

    .car-label {
        font-size: 38px;
        font-weight: 400;
        letter-spacing: 0px;
        position: absolute;
        top: 65%;
    }

    .car img {
        width: 120px;
    }

    .car2 img {
        width: 60px;
    }

    .car1 {
        bottom: 30px;
    }

    .car2 {
        bottom: 25px;
    }

    .car3 {
        bottom: 30px;
    }
}



@media (max-width: 768px) {

    .cars-feature {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 40px 20px;
    }

    .car-group {
        position: relative;
        margin: 20px 0;
    }

    .car,
    .car-label,
    .car img {
        display: none !important;
    }



    .testimonial-card {
        min-height: auto;
    }

    .review-text {
        font-size: 14px;
    }

}


@media (max-width: 576px) {

    .video-overlay h1 {
        font-size: 1.4rem;
    }

    .video-overlay p {
        font-size: 1rem;
    }


    .cars-feature {
        height: auto !important;
        padding: 20px 0;
    }

    .car,
    .car-label,
    .car img {
        display: none !important;
    }

    .video-btn {
        padding: 12px 26px;
        font-size: 0.95rem;
    }
}
</style>
