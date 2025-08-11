<template>
    <section class="funfact_one" v-observe-visibility="visibilityChanged">
        <div class="container">
            <ul class="counter_one_box list-unstyled">
                <li class="funfact_one_single">
                    <div class="funfact_one_icon">
                        <i class="icon-watering"></i>
                    </div>
                    <h3>
                        <span class="counter">
                            <count-up :startVal="0" :endVal="startCounter ? 5493 : 0" />
                        </span>
                    </h3>
                    <p>Projects</p>
                </li>
                <li class="funfact_one_single">
                    <div class="funfact_one_icon">
                        <i class="icon-wheelbarrow"></i>
                    </div>
                    <h3>
                        <span class="counter">
                            <count-up :startVal="0" :endVal="startCounter ? 1750 : 0" />
                        </span>
                    </h3>
                    <p>Products</p>
                </li>
                <li class="funfact_one_single">
                    <div class="funfact_one_icon">
                        <i class="icon-customer-review"></i>
                    </div>
                    <h3>
                        <span class="counter">
                            <count-up :startVal="0" :endVal="startCounter ? 2458 : 0" />
                        </span>
                    </h3>
                    <p>Satisfied</p>
                </li>
                <li class="funfact_one_single">
                    <div class="funfact_one_icon">
                        <i class="icon-meeting"></i>
                    </div>
                    <h3>
                        <span class="counter">
                            <count-up :startVal="0" :endVal="startCounter ? 1670 : 0" />
                        </span>
                    </h3>
                    <p>Community</p>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import CountUp from "vue-countup-v3";
// Visibility trigger
const startCounter = ref(false)
const visibilityChanged = (isVisible, entry) => {
    if (isVisible) {
        startCounter.value = true;
    }
};
</script>