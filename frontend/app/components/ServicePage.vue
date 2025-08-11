<template>
    <section class="service_four service_page">
        <div class="container">
            <div class="service_four_top"></div>
            <div class="block-title text-center">
                <p>What we do</p>
                <h3>Services We Offer</h3>
                <div class="leaf">
                    <img :src="leafImage" alt="Leaf" />
                </div>
            </div>

            <div class="row">
                <div v-for="(service, index) in services" :key="index" class="col-xl-4 col-lg-4">
                    <div class="service_four_single wow fadeInLeft animated" :data-wow-delay="`${(index + 1) * 300}ms`"
                        style="visibility: visible;">
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
import leafImage from '@/assets/images/resources/leaf.png'

const services = [
    {
        title: 'fresh vegetables',
        icon: 'icon-temperature',
        description: 'There are many variations of passages of available, but the majority have suffered.'
    },
    {
        title: 'agriculture products',
        icon: 'icon-harvest',
        description: 'There are many variations of passages of available, but the majority have suffered.'
    },
    {
        title: 'organic products',
        icon: 'icon-growth',
        description: 'There are many variations of passages of available, but the majority have suffered.'
    }
]
</script>