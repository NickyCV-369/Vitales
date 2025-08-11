<template>
    <section class="product-one">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 col-lg-6">
                    <div class="product_img wow fadeInUp" data-wow-delay="200ms">
                        <img :src="productImg" alt="Agriculture Product">
                        <div class="experience_box">
                            <h2>40 Year</h2>
                            <p>Of Experience</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="growing_product wow fadeInUp" data-wow-delay="300ms">
                        <div class="block-title text-left">
                            <p>fresh products</p>
                            <h3>Growing products</h3>
                            <div class="leaf">
                                <img :src="leafImg" alt="Decorative leaf">
                            </div>
                        </div>
                        <div class="growing_product_text">
                            <p>Lorem ipsum dolor sit amet nsectetur cing elit. Suspe ndisse suscipit sagittis leo
                                sit met entum estibu dignissim posuere cubilia durae. Leo sit met entum cubilia crae
                                onec.</p>
                        </div>
                        <div class="progress-levels">
                            <div v-for="(skill, index) in skills" :key="index" class="progress-box">
                                <div class="inner count-box">
                                    <div class="text">{{ skill.name }}</div>
                                    <div class="bar">
                                        <div class="bar-innner">
                                            <div class="bar-fill" :class="`bar-fill-${skill.type}`"
                                                :data-percent="skill.percent"></div>
                                        </div>
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
// Import images
import productImg from '@/assets/images/resources/product-1-img-1.jpg'
import leafImg from '@/assets/images/resources/leaf.png'

// Skills data
const skills = [
    {
        name: 'Agriculture',
        percent: '68',
        type: 'one'
    },
    {
        name: 'Organic',
        percent: '98',
        type: 'two'
    }
]
</script>