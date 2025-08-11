<template>
    <section class="benefits">
        <div class="benefits_bg" :style="`background-image: url(${benefitsBg})`"></div>
        <div class="container">
            <div class="row">
                <div class="col-xl-4">
                    <div class="block-title text-left">
                        <p>Our benefits</p>
                        <h3>Agriculture & Eco<br>Farming</h3>
                        <div class="leaf">
                            <img :src="leafImg" alt="Decorative leaf">
                        </div>
                    </div>
                </div>
                <div class="col-xl-8 d-flex">
                    <div class="my-auto">
                        <div class="benefits_text">
                            <p>There are many variations of passages of available but the majority have suffered
                                alteration in some form, by injected humou or randomised words which don't look even
                                slightly believable. There are many variations of passages of available but the
                                majority have suffered alteration in some form, by injected humou or randomised
                                words which don't look even slightly believable.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="benefits_bottom_part">
                <div class="row">
                    <div v-for="(benefit, index) in benefits" :key="index" class="col-xl-3 col-lg-3 col-md-6">
                        <div class="benefits_single wow fadeInUp" :data-wow-delay="`${(index + 1) * 100}ms`">
                            <div class="icon-box">
                                <span :class="benefit.icon"></span>
                            </div>
                            <h3>{{ benefit.title }}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Import images
import benefitsBg from '@/assets/images/resources/benifits_bg.png'
import leafImg from '@/assets/images/resources/leaf.png'

// Benefits data
const benefits = [
    {
        icon: 'icon-tractor',
        title: 'We Use New technology'
    },
    {
        icon: 'icon-cart',
        title: 'professional farmers'
    },
    {
        icon: 'icon-watering-can',
        title: 'We\'re certified company'
    },
    {
        icon: 'icon-log',
        title: 'We deliver everywhere'
    }
]
</script>