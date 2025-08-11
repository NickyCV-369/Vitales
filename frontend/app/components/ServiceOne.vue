<template>
    <section class="service_one">
        <div class="container">
            <div class="block-title text-center">
                <p>What we do</p>
                <h3>Services We Offer</h3>
                <div class="leaf">
                    <img :src="leafImg" alt="Decorative leaf">
                </div>
            </div>
            <div class="row">
                <div v-for="(service, index) in services" :key="index" class="col-xl-3 col-lg-3 col-md-6">
                    <div class="service_1_single wow fadeInUp" :data-wow-delay="`${(index + 1) * 100}ms`">
                        <div class="content">
                            <h3>{{ service.title }}</h3>
                            <p>{{ service.description }}</p>
                        </div>
                        <div class="service_1_img">
                            <img :src="service.image" :alt="service.title">
                            <div class="hover_box">
                                <NuxtLink to="/service-detail">
                                    <span class="icon-left-arrow"></span>
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
import leafImg from '@/assets/images/resources/leaf.png'
import serviceImg1 from '@/assets/images/service/service-1-img-1.jpg'
import serviceImg2 from '@/assets/images/service/service-1-img-2.jpg'
import serviceImg3 from '@/assets/images/service/service-1-img-3.jpg'
import serviceImg4 from '@/assets/images/service/service-1-img-4.jpg'

// Services data
const services = [
    {
        title: 'Fresh vegetables',
        description: 'Lorem ipsum is simply are many variations of pass of majority.',
        image: serviceImg1
    },
    {
        title: 'Organic fruits',
        description: 'Lorem ipsum is simply are many variations of pass of majority.',
        image: serviceImg2
    },
    {
        title: 'Dairy products',
        description: 'Lorem ipsum is simply are many variations of pass of majority.',
        image: serviceImg3
    },
    {
        title: 'Farm fresh eggs',
        description: 'Lorem ipsum is simply are many variations of pass of majority.',
        image: serviceImg4
    }
]

// Animation state
const animate = ref(false)

onMounted(() => {
    animate.value = true
})
</script>

<style scoped></style>