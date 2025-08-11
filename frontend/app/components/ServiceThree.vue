<template>
    <section class="service_three">
        <div class="container">
            <div class="row">
                <div v-for="(service, index) in services" :key="index" class="col-xl-3 col-lg-3 col-md-6">
                    <div class="service_three_single wow fadeInUp" :data-wow-delay="`${(index + 1) * 100}ms`">
                        <div class="service_three_image">
                            <img :src="service.image" :alt="service.title">
                        </div>
                        <div class="service_three_content">
                            <h2>
                                <NuxtLink to="/product">{{ service.title }}</NuxtLink>
                            </h2>
                            <p>{{ service.description }}</p>
                            <div class="service_three_read_more">
                                <NuxtLink to="/product">
                                    <i class="fa fa-angle-right"></i>Read More
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Import images
import serviceImg1 from '@/assets/images/service/service-3--img-1.jpg'
import serviceImg2 from '@/assets/images/service/service-3--img-2.jpg'
import serviceImg3 from '@/assets/images/service/service-3--img-3.jpg'
import serviceImg4 from '@/assets/images/service/service-3--img-4.jpg'

// Services data
const services = [
    {
        image: serviceImg1,
        title: 'Fresh vegetables',
        description: 'There are many variations of passages of available, but the majority have suffered.'
    },
    {
        image: serviceImg2,
        title: 'Agriculture products',
        description: 'There are many variations of passages of available, but the majority have suffered.'
    },
    {
        image: serviceImg3,
        title: 'ORGANIC Products',
        description: 'There are many variations of passages of available, but the majority have suffered.'
    },
    {
        image: serviceImg4,
        title: 'Dairy products',
        description: 'There are many variations of passages of available, but the majority have suffered.'
    }
]
</script>