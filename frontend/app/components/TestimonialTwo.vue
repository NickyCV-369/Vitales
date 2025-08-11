<template>
    <section class="bx-testimonial bx-testimonial2">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="bx_testimonial_slider">
                        <div class="bx-testimonial_title">Getuigenissen</div>


                        <!-- Content Slider -->
                        <div ref="contentSlider" class="content-slider">
                            <div v-for="(testimonial, index) in testimonials" :key="'content-' + index">
                                <div class="bx_testimonial_single wow fadeInUp"
                                    :data-wow-delay="`${(index + 1) * 100}ms`">
                                    <div class="img-holder text-center">
                                        <img :src="testimonial.avatar" :alt="testimonial.name">
                                        <div class="quote_testimonial">
                                            <img :src="quoteIcon" alt="Quote icon">
                                        </div>
                                    </div>
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
import { ref, onMounted, onBeforeUnmount } from 'vue'

// Import images
import avatar1 from '~/assets/images/testimonials/bx-testi-1.png'
import avatar2 from '~/assets/images/testimonials/bx-testi-2.png'
import avatar3 from '~/assets/images/testimonials/bx-testi-3.png'
import quoteIcon from '~/assets/images/icon/quote_1.png'

// Testimonials data
const testimonials = [
    {
        avatar: avatar1,
        text: "Vitales producten hebben onze rijstproductie met 30% verhoogd. De planten zijn veel sterker en bestand tegen droogte. Een echte game-changer voor onze boerderij.",
        name: "Nguyen Van Minh",
        role: "Rijstboer"
    },
    {
        avatar: avatar2,
        text: "Als distributeur van Vitales in Vietnam ben ik onder de indruk van de Europese kwaliteit. Onze klanten zijn zeer tevreden met de resultaten van de biostimulanten.",
        name: "Tran Thi Lan",
        role: "Distributeur"
    },
    {
        avatar: avatar3,
        text: "De Nano-Goud technologie van Vitales heeft onze koffieplanten gered tijdens de droge periode. De wortels zijn sterker en de opbrengst is gestegen.",
        name: "Le Van Duc",
        role: "Koffieboer"
    }
]

// Slider refs
const contentSlider = ref(null)
onMounted(async () => {
    if (typeof window !== "undefined") {
        const { tns } = await import("tiny-slider/src/tiny-slider");
        const sliderInstanceTwo = tns({
            container: contentSlider.value,
            items: 1,
            autoplay: false,
            autoplayButtonOutput: false,
            mouseDrag: true,
            nav: true,
            controls: false
        });
    }
})

</script>