<template>
    <section class="welcome_two">
        <div class="welcome_two_bg" :style="`background-image: url(${welcomeBg})`"></div>
        <div class="container">
            <div class="block-title text-center">
                <p>Welcome to agrikol</p>
                <h3>We've 40 Years Agriculture<br>Experiences</h3>
                <div class="leaf">
                    <img :src="leafImg" alt="Decorative leaf">
                </div>
            </div>
            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12">
                    <div class="welcome_two_text text-center">
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered alteration in<br>some form, by injected humour, or randomised words which don't
                            look even slightly believable.</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-6 col-lg-6 col-md-6">
                    <div class="welcome_two_single">
                        <div class="welcome_two_image_left">
                            <img :src="welcomeImg1" alt="Agriculture experience">
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6">
                    <div class="welcome_two_single">
                        <div class="welcome_two_image_right">
                            <img :src="welcomeImg2" alt="Farm landscape">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Import images
import welcomeBg from '@/assets/images/resources/welcome_2_bg.png'
import leafImg from '@/assets/images/resources/leaf.png'
import welcomeImg1 from '@/assets/images/resources/welcome-2_img-1.jpg'
import welcomeImg2 from '@/assets/images/resources/welcome-2_img-2.jpg'
</script>