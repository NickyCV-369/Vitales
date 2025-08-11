<template>
    <section class="banner-section banner-one overflow-hidden">
        <div class="banner-carousel">
            <ClientOnly>
                <div ref="slider" class="my-slider">
                    <div class="slide-item" v-for="(slide, index) in slides" :key="index">
                        <div class="image-layer" :style="`background-image: url(${slide.image})`"></div>
                        <div class="auto-container">
                            <div class="content-box">
                                <div class="content">
                                    <div class="inner">
                                        <div class="sub-title">{{ slide.subtitle }}</div>
                                        <h1 v-html="slide.title"></h1>
                                        <div class="link-box">
                                            <NuxtLink to="/about" class="thm-btn">Discover More</NuxtLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ClientOnly>
        </div>
    </section>
</template>

<script setup>
import image1 from '@/assets/images/main-slider/slide_v1_1.jpg'
import image2 from '@/assets/images/main-slider/slide_v1_2.jpg'
import image3 from '@/assets/images/main-slider/slide_v1_3.jpg'

const slider = ref(null);

onMounted(async () => {
    if (typeof window !== "undefined") {
        const { tns } = await import("tiny-slider/src/tiny-slider");
        tns({
            container: slider.value,
            loop: true,
            autoplay: true,
            mode: "carousel",
            animateIn: "fadeIn",
            animateOut: "fadeOut",
            items: 1,
            gutter: 0,
            mouseDrag: true,
            preventScrollOnTouch: "auto",
            nav: true,
            autoplayButtonOutput: false,
            controls: false,
            dots: true,
            autoplayTimeout: 6000,
            speed: 1000,
        });
    }
});

// Slide data
const slides = [
    {
        image: image1,
        subtitle: 'The best Agriculture products',
        title: 'Welcome to<br>agriculture Form'
    },
    {
        image: image2,
        subtitle: 'The best Agriculture products',
        title: 'Welcome to<br>agriculture Form'
    },
    {
        image: image3,
        subtitle: 'The best Agriculture products',
        title: 'Welcome to<br>agriculture Form'
    }
]
</script>

<style scoped></style>