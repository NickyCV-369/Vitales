<template>
    <section class="trusted_one" :style="{ backgroundImage: `url(${trustedBg})` }"
        v-observe-visibility="visibilityChanged">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 col-lg-6">
                    <div class="trusted_one_text">
                        <h2>
                            Our agrikol trusted by<br />
                            more than
                            <span class="counter">
                                <count-up :startVal="0" :endVal="startCounter ? 98750 : 0" />
                            </span>
                            <br />
                            clients
                        </h2>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <ul class="trusted_one_counter_box list-unstyled wow fadeInRight" data-wow-delay="100ms">
                        <li class="trusted_one_couter_single">
                            <div class="trusted_one_couter_icon">
                                <i class="icon-watering"></i>
                            </div>
                            <h3>
                                <span class="counter">
                                    <count-up :startVal="0" :endVal="startCounter ? 5493 : 0" />
                                </span>
                            </h3>
                            <p>Projects</p>
                        </li>
                        <li class="trusted_one_couter_single">
                            <div class="trusted_one_couter_icon">
                                <i class="icon-wheelbarrow"></i>
                            </div>
                            <h3>
                                <span class="counter">
                                    <count-up :startVal="0" :endVal="startCounter ? 1750 : 0" />
                                </span>
                            </h3>
                            <p>Products</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import CountUp from "vue-countup-v3";


// Import the image
import trustedBg from '~/assets/images/resources/trusted_one_bg.jpg'

const startCounter = ref(false)

const visibilityChanged = (isVisible, entry) => {
    if (isVisible) {
        startCounter.value = true;
    }
};
</script>