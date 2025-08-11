<template>
    <section class="why_choose_one">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 col-lg-6">
                    <div class="why_choose_one_left_content">
                        <div class="block-title text-left">
                            <p>Why Choose us</p>
                            <h3>Better agriculture for<br>better future</h3>
                            <div class="leaf">
                                <img :src="leafImg" alt="Leaf" />
                            </div>
                        </div>
                        <ul class="why_choose_list list-unstyled">
                            <li v-for="(item, index) in reasons" :key="index">
                                <div class="choose_count">
                                    <h2>{{ item.id }}</h2>
                                </div>
                                <div class="choose_text">
                                    <p v-html="item.text"></p>
                                </div>
                            </li>
                        </ul>
                        <div class="why_choose_btn">
                            <NuxtLink to="/about" class="thm-btn">Discover More</NuxtLink>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="why_choose_image_top">
                        <div class="why_choose_image" :style="{ backgroundImage: `url(${whyChooseImg})` }">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import leafImg from '@/assets/images/resources/leaf.png'
import whyChooseImg from '@/assets/images/resources/why_choose1_img-1.jpg'

const reasons = [
    {
        id: '01',
        text: 'Solution for small and large businesses voluptatem<br>accusantium doloremque laudantium',
    },
    {
        id: '02',
        text: 'Solution for small and large businesses voluptatem<br>accusantium doloremque laudantium',
    },
    {
        id: '03',
        text: 'Solution for small and large businesses voluptatem<br>accusantium doloremque laudantium',
    },
]
</script>