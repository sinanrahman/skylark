<template>
    <div id="smooth-wrapper">
        <section id="content">
            <section class="image-grid container">

                <picture class="image_cont">
                    <span class="brand-name">SKYLARK</span>
                    <source srcset="/img/home/defender.jpg" media="(min-width: 1500px)"> <img
                        src="/img/home/defender.jpg" alt="Landscape">
                </picture>

                <div v-for="(img, index) in photoList" :key="index" class="image_cont">
                    <img :src="img.url" :alt="img.alt">
                </div>

            </section>

            <div class="spacer"></div>
        </section>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const photoList = [
    { url: "/img/home/contact.jpg", alt: "Mountain range" },
    { url: "/img/cars/suv/bmw/bmw-x5.jpg", alt: "Forest path" },
    { url: "/img/cars/suv/benz/gWagon-2.jpg", alt: "Lake reflection" },
    { url: "/img/cars/sedan/audi/audiA6-1.jpg", alt: "Nature trail" },
    { url: "/img/cars/hatchback/suzuki/baleno-2.avif", alt: "Green valley" },
    { url: "/img/cars/sedan/bmw/bmwHybrid-1.avif", alt: "Aerial trees" },
    { url: "/img/cars/suv/audi/AudiQ7-3.jpg", alt: "Sunset clouds" }
];

let smoother;

onMounted(() => {
    smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#content",
        smooth: 2.5,
        effects: true,
    });

    smoother.effects(".image_cont img", { speed: "auto" });
});

onUnmounted(() => {
    if (smoother) smoother.kill();
});
</script>

<style scoped>
#smooth-wrapper {
    background-color: #000000;
    overflow: hidden;
    position: fixed;
    height: 100%;
    width: 100%;
}

#content {
    background-color: #000000;
}

.container {
    max-width: 1600px;
    margin: 0 auto;
}

.image-grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 20vh;
    padding: 10vh 2rem;
}

.image_cont {
    position: relative;
    overflow: hidden;
    background-color: #111;
}

.image_cont img {
    position: absolute;
    width: 100%;
    height: 140%;
    object-fit: cover;
    bottom: 0;
}

.image_cont:nth-child(1) {
    grid-column: 1 / -1;
    height: 80vh;
}

.image_cont:nth-child(even) {
    grid-column: 2 / span 5;
    height: 60vh;
}

.image_cont:nth-child(odd):not(:first-child) {
    grid-column: 7 / span 5;
    height: 70vh;
    margin-top: 10vh;
}

.spacer {
    height: 50vh;
}

.brand-name {
    font-size: 10rem;
    position: absolute;
    top: 50%;
    z-index: 20;
    width: 100%;
    text-align: center;

    color: rgba(255, 255, 255, 0.35);
    font-weight: 800;
    letter-spacing: 4px;

    background: linear-gradient(120deg,
            rgba(255, 255, 255, 0.4),
            rgba(255, 255, 255, 0.05));

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    text-shadow:
        0 4px 30px rgba(255, 255, 255, 0.25),
        0 0 60px rgba(255, 255, 255, 0.15);
}

@keyframes glow {
    0% {
        text-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
    }

    100% {
        text-shadow: 0 0 50px rgba(255, 255, 255, 0.5);
    }
}

.brand-name {
    animation: glow 3s ease-in-out infinite alternate;
}


@media (max-width: 768px) {

    .image_cont:nth-child(even),
    .image_cont:nth-child(odd) {
        grid-column: 1 / -1;
        height: 50vh;
        margin-top: 0;
    }

    .brand-name {
        font-size: 4rem;
    }
}
</style>