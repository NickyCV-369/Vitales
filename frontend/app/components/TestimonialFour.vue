<template>
    <section class="bx-testimonial">
        <div class="bx-testimonial_bg" :style="{ backgroundImage: `url(${bgImage})` }"></div>
        <div class="container">
            <div class="block-title text-center">
                <p>our team members</p>
                <h3>meet the farmers</h3>
                <div class="leaf">
                    <img :src="leafImage" alt="Leaf" />
                </div>
            </div>

            <div class="row">
                <div class="col-xl-12">
                    <div class="bx_testimonial_slider">
                        <!-- Thumbnails -->
                        <div class="slider-pager">
                            <ul class="thumb-box list-unstyled text-center">
                                <li v-for="(thumb, index) in thumbnails" :key="index">
                                    <a href="#" :data-slide-index="index" :class="{ active: activeIndex === index }"
                                        @click.prevent="goToSlide(index)">
                                        <div class="img-holder">
                                            <img :src="thumb" alt="thumb" />
                                            <div class="quote_testimonial">
                                                <img :src="quoteImage" alt="quote" />
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <!-- Tiny Slider Content -->
                        <div ref="testimonialSlider">
                            <div v-for="(testimonial, index) in testimonials" :key="index">
                                <div class="bx_testimonial_single clearfix">
                                    <div class="bx_testimonial_text text-center">
                                        <p>{{ testimonial.text }}</p>
                                        <h3>{{ testimonial.name }}</h3>
                                        <h6>{{ testimonial.role }}</h6>
                                    </div>
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
import { ref } from 'vue'


// Images
import bgImage from '~/assets/images/testimonials/bx-testi-bg.png'
import leafImage from '~/assets/images/resources/leaf.png'
import thumb1 from '~/assets/images/testimonials/bx-testi-1.png'
import thumb2 from '~/assets/images/testimonials/bx-testi-2.png'
import thumb3 from '~/assets/images/testimonials/bx-testi-3.png'
import quoteImage from '~/assets/images/icon/quote_1.png'

// Thumbnails
const thumbnails = [thumb1, thumb2, thumb3]

// Testimonials
const testimonials = [
    {
        text:
            'This is due to their excellent service, competitive pricing and customer support. It’s throughly refreshing to get such a personal touch.',
        name: 'Christine Rose',
        role: 'Customer'
    },
    {
        text:
            'This is due to their excellent service, competitive pricing and customer support. It’s throughly refreshing to get such a personal touch.',
        name: 'Christine Rose',
        role: 'Customer'
    },
    {
        text:
            'This is due to their excellent service, competitive pricing and customer support. It’s throughly refreshing to get such a personal touch.',
        name: 'Christine Rose',
        role: 'Customer'
    }
]

const activeIndex = ref(0)
const testimonialSlider = ref(null)


onMounted(async () => {
    if (typeof window !== "undefined") {
        const { tns } = await import("tiny-slider/src/tiny-slider");

        const sliderInstance = tns({
            container: testimonialSlider.value,
            items: 1,
            slideBy: 'page',
            autoplay: true,
            autoplayButtonOutput: false,
            mouseDrag: true,
            nav: false,
            controls: false,
            dots: false,
            speed: 500,
            autoplayTimeout: 5000
        });
    }
});

const goToSlide = (index) => {
    activeIndex.value = index
    if (testimonialSlider.value?.tns) {
        testimonialSlider.value.tns.goTo(index)
    }
}
</script>