<template>
    <section class="product-two">
        <div class="product_tow_bg" :style="`background-image: url(${productBg})`"></div>
        <div class="container">
            <div class="block-title text-center">
                <p>Landbouwbeheer</p>
                <h3>SPECIALE PRODUCTEN VOOR AGRICULTUUR</h3>
                <div class="leaf">
                    <img :src="leafImg" alt="Decorative leaf">
                </div>
            </div>
            <div class="row">
                <div v-for="(product, index) in products" :key="index" class="col-xl-6 col-lg-6">
                    <div class="product_two_thum wow fadeInUp" :data-wow-delay="`${(index + 1) * 100}ms`">
                        <img :src="product.image" :alt="product.title">
                        <div class="product_two_thum_hover">
                            <h2>{{ product.title }}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Import images
import productBg from '@/assets/images/resources/product-2-bg.png'
import leafImg from '@/assets/images/resources/leaf.png'
import managementImg1 from '@/assets/images/resources/management-1.jpg'
import managementImg2 from '@/assets/images/resources/management-2.jpg'

// Products data
const products = [
    {
        image: managementImg1,
        title: 'Vitales landbouwbedrijf'
    },
    {
        image: managementImg2,
        title: 'Vitales landbouwbedrijf'
    }
]
</script>