<template>
    <section class="banner-section banner-five">
        <!-- Static Round and Logo Images -->
        <div class="round_1">
            <img :src="round1" alt="round1" />
        </div>
        <div class="round_2">
            <img :src="round2" alt="round2" />
        </div>
        <div class="certified_logo">
            <img :src="certifiedLogo" alt="certified logo" />
        </div>

        <!-- Tiny Slider -->
        <div ref="slider" class="banner-carousel five">
            <div v-for="(slide, index) in slides" :key="index" class="slide-item">
                <div class="banner_five_bg" :style="{ backgroundImage: `url(${slide.bg})` }"></div>
                <div class="container">
                    <div class="row content-box">
                        <div class="col-xl-5 content">
                            <div class="inner">
                                <div class="large-title" v-html="slide.title"></div>
                                <p>{{ slide.description }}</p>
                                <div class="link-box">
                                    <NuxtLink to="/about" class="thm-btn">Discover More</NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'

// Image Imports
import round1 from '@/assets/images/main-slider/round_1.png'
import round2 from '@/assets/images/main-slider/round_2.png'
import certifiedLogo from '@/assets/images/main-slider/certified_logo.png'
import bannerBg from '@/assets/images/main-slider/banner-five-bg.jpg'


// Slide data
const slides = [
    {
        title: 'organic &<br> agriculture<br> Forming',
        description:
            'An qualisque constituam cum. Agam unum disputando ius et, mel id postea voluptua, et vel assum graece feugait.',
        bg: bannerBg,
    },
    {
        title: 'organic &<br> agriculture<br> Forming',
        description:
            'An qualisque constituam cum. Agam unum disputando ius et, mel id postea voluptua, et vel assum graece feugait.',
        bg: bannerBg,
    },
    {
        title: 'organic &<br> agriculture<br> Forming',
        description:
            'An qualisque constituam cum. Agam unum disputando ius et, mel id postea voluptua, et vel assum graece feugait.',
        bg: bannerBg,
    },
]



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
            nav: false,
            autoplayButtonOutput: false,
            controls: false,
            dots: false,
            autoplayTimeout: 6000,
            speed: 1000,
        });
    }
});
</script>