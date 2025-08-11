<template>
    <section class="service_four">
        <div class="container">
            <div class="service_four_top"></div>
            <div class="block-title text-center">
                <p>What we do</p>
                <h3>Services We Offer</h3>
                <div class="leaf">
                    <img :src="leafImg" alt="Decorative leaf">
                </div>
            </div>
            <div class="row">
                <div v-for="(service, index) in services" :key="index" class="col-xl-4 col-lg-4">
                    <div class="service_four_single">
                        <div class="service_four_icon">
                            <span :class="service.icon"></span>
                        </div>
                        <div class="service_four_deatils">
                            <h3>
                                <NuxtLink to="/service-detail" class="service_four_title">
                                    {{ service.title }}
                                </NuxtLink>
                            </h3>
                            <p>{{ service.description }}</p>
                        </div>
                        <div class="service_four_read_more">
                            <NuxtLink to="/service-detail">
                                <span class="icon-left-arrow"></span>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Import image
import leafImg from '~/assets/images/resources/leaf.png'

// Services data
const services = [
    {
        icon: 'icon-temperature',
        title: 'fresh vegetables',
        description: 'There are many variations of passages of available, but the majority have suffered.'
    },
    {
        icon: 'icon-harvest',
        title: 'agriculture products',
        description: 'There are many variations of passages of available, but the majority have suffered.'
    },
    {
        icon: 'icon-growth',
        title: 'organic products',
        description: 'There are many variations of passages of available, but the majority have suffered.'
    }
]
</script>