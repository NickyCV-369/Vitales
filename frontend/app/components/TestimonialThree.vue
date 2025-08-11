<template>
    <section class="testimonials-three">
        <div class="container">
            <div class="block-title text-center">
                <p>testimonials</p>
                <h3>What people say</h3>
                <div class="leaf">
                    <img :src="leaf" alt="leaf" />
                </div>
            </div>

            <div class="testimonials-three__carousel" ref="contentSlider">
                <div v-for="(item, index) in testimonials" :key="index" class="testimonials-three__single">
                    <div class="testimonials-three__content">
                        <div class="testimonials-three_icon">
                            <img :src="quoteIcon" alt="quote" />
                        </div>
                        <p>{{ item.quote }}</p>
                    </div>
                    <div class="testimonials-three__info">
                        <img :src="item.image" :alt="item.name" />
                        <h3>{{ item.name }}</h3>
                        <p>{{ item.role }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { onMounted } from 'vue'

// Nuxt image imports
import leaf from '@/assets/images/resources/leaf.png'
import quoteIcon from '@/assets/images/shapes/testi-qoute-3-1.png'
import person1 from '@/assets/images/testimonials/testimonial-3-img-1.png'
import person2 from '@/assets/images/testimonials/testimonial-3-img-2.png'
import person3 from '@/assets/images/testimonials/testimonial-3-img-3.png'

const testimonials = [
    {
        name: 'Kevin Smith',
        role: 'Founder',
        image: person1,
        quote:
            'There are many variations of passages of lorem ipsum but the majority have alteration in some form, by randomised words look.',
    },
    {
        name: 'Jessica Brown',
        role: 'Founder',
        image: person2,
        quote:
            'There are many variations of passages of lorem ipsum but the majority have alteration in some form, by randomised words look.',
    },
    {
        name: 'Daniyal Coper',
        role: 'Founder',
        image: person3,
        quote:
            'There are many variations of passages of lorem ipsum but the majority have alteration in some form, by randomised words look.',
    },
    {
        name: 'Kevin Smith',
        role: 'Founder',
        image: person1,
        quote:
            'There are many variations of passages of lorem ipsum but the majority have alteration in some form, by randomised words look.',
    },
]

// Slider refs
const contentSlider = ref(null)
onMounted(async () => {
    if (typeof window !== "undefined") {
        const { tns } = await import("tiny-slider/src/tiny-slider");
        const sliderInstanceTwo = tns({
            container: contentSlider.value,
            items: 1,
            slideBy: 1,
            mouseDrag: true,
            loop: true,
            gutter: 30,
            autoplay: true,
            preventScrollOnTouch: "auto",
            nav: false,
            autoplayButtonOutput: false,
            controls: false,
            dots: false,
            autoplayTimeout: 6000,
            speed: 1000,
            responsive: {
                640: { items: 2 },
                992: { items: 3 },
            },
        });
    }
})

</script>
<style scoped>
/* Optional minimal styles if needed to align layout, let me know if you want those */
</style>
