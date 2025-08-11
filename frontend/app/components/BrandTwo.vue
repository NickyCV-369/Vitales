<template>
    <div class="brand-one brand-two">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="brand-one-carousel">
                        <ClientOnly>
                            <div ref="slider" class="my-slider">
                                <div class="slide-item" v-for="(brand, index) in brands" :key="index">
                                    <div class="single_brand_item">
                                        <a href="#">
                                            <img :src="brand.image" :alt="'brand-' + (index + 1)">
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </ClientOnly>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { ref, onMounted } from "vue";

// Import brand images
import brand1 from '@/assets/images/resources/brand-2-1.png'
import brand2 from '@/assets/images/resources/brand-2-2.png'
import brand3 from '@/assets/images/resources/brand-2-3.png'
import brand4 from '@/assets/images/resources/brand-2-4.png'
import brand5 from '@/assets/images/resources/brand-2-5.png'

// Brand data
const brands = [
    { image: brand1 },
    { image: brand2 },
    { image: brand3 },
    { image: brand4 },
    { image: brand5 },
    { image: brand1 },
    { image: brand2 },
    { image: brand3 },
    { image: brand4 },
    { image: brand5 }
]



const slider = ref(null);

onMounted(async () => {
    if (typeof window !== "undefined") {
        const { tns } = await import("tiny-slider/src/tiny-slider");

        const sliderInstance = tns({
            container: slider.value,
            loop: true,
            autoplay: true,
            gutter: 30,
            mouseDrag: true,
            preventScrollOnTouch: "auto",
            nav: false,
            autoplayButtonOutput: false,
            controls: false,
            dots: true,
            autoplayTimeout: 4000,
            speed: 1000,
            responsive: {
                0: { items: 1 },
                360: { items: 2 },
                575: { items: 3 },
                768: { items: 3 },
                992: { items: 4 },
                1200: { items: 5 },
            },
        });
    }
});
</script>