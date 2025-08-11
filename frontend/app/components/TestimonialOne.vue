<template>
    <section class="testimonials-one">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 col-lg-6">
                    <div class="testimonials_one_left wow fadeInUp" data-wow-delay="200ms">
                        <div class="block-title text-left">
                            <p>testimonails</p>
                            <h3>What our customers are<br>talking about</h3>
                            <div class="leaf">
                                <img :src="leafImg" alt="Decorative leaf">
                            </div>
                        </div>
                        <div class="testimonials_one_text">
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form, by injected humour, or randomised words which
                                don't look even slightly believable.</p>
                        </div>
                        <div class="project_counted">
                            <div class="icon_box">
                                <span class="icon-farmer"></span>
                            </div>
                            <div class="project-content">
                                <h3 class="counter">4,850000</h3>
                                <p>Agriculture projects are completed</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="testimonials_one_content wow fadeInUp" data-wow-delay="300ms">
                        <div class="testimonials_one_carousel" ref="testimonialSlider">
                            <div v-for="(testimonial, index) in testimonials" :key="index"
                                class="testimonials_one_single_item">
                                <div class="text">
                                    <p>{{ testimonial.quote }}</p>
                                </div>
                                <div class="client_thumbnail">
                                    <div class="client_img">
                                        <img :src="testimonial.image" :alt="testimonial.name">
                                    </div>
                                    <div class="client_title">
                                        <h4>{{ testimonial.name }}</h4>
                                        <p>{{ testimonial.role }}</p>
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
import { ref, onMounted, onBeforeUnmount } from 'vue'

// Import images
import leafImg from '@/assets/images/resources/leaf.png'
import testimonialImg1 from '@/assets/images/testimonials/testimonial-1-img-1.png'


// Testimonials data
const testimonials = [
    {
        quote: "This is due to their excellent service, and augue homero consectetuer in nam. Eu quo laoreet propriae, malis exerci habemus has vocent persius eum ea.",
        name: "Kevin Hardson",
        role: "Customer",
        image: testimonialImg1
    },
    {
        quote: "This is due to their excellent service, and augue homero consectetuer in nam. Eu quo laoreet propriae, malis exerci habemus has vocent persius eum ea.",
        name: "Sarah Johnson",
        role: "Farm Owner",
        image: testimonialImg1
    },
    {
        quote: "This is due to their excellent service, and augue homero consectetuer in nam. Eu quo laoreet propriae, malis exerci habemus has vocent persius eum ea.",
        name: "Michael Brown",
        role: "Agricultural Consultant",
        image: testimonialImg1
    }
]

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
            nav: true,
            controls: false,
            dots: true,
            speed: 500,
            autoplayTimeout: 5000
        });
    }
});

</script>