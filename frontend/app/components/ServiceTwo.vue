<template>
    <section class="service_two">
        <div class="container">
            <div class="block-title text-center">
                <p>What we do</p>
                <h3>Services We Offer</h3>
                <div class="leaf">
                    <img :src="leafImg" alt="Decorative leaf">
                </div>
            </div>
            <div class="row">
                <div class="col-xl-12">
                    <ul class="service_2_top list-unstyled">
                        <li v-for="(service, index) in services" :key="index" class="service_2_single">
                            <div class="service_2_image wow fadeInUp" :data-wow-delay="`${(index + 1) * 100}ms`">
                                <img :src="service.image" :alt="service.title">
                            </div>
                            <h3>
                                <NuxtLink to="/service-detail">{{ service.title }}</NuxtLink>
                            </h3>
                        </li>
                    </ul>
                </div>
            </div>
            <hr>
        </div>
    </section>
</template>

<script setup>
// Import images
import leafImg from '@/assets/images/resources/leaf.png'
import serviceImg1 from '@/assets/images/service/service-2-img-1.png'
import serviceImg2 from '@/assets/images/service/service-2-img-2.png'
import serviceImg3 from '@/assets/images/service/service-2-img-3.png'
import serviceImg4 from '@/assets/images/service/service-2-img-4.png'

// Services data
const services = [
    {
        image: serviceImg1,
        title: 'fresh vegetables'
    },
    {
        image: serviceImg2,
        title: 'Agriculture products'
    },
    {
        image: serviceImg3,
        title: 'organic products'
    },
    {
        image: serviceImg4,
        title: 'dairy products'
    }
]
</script>