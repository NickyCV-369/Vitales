<template>
    <section class="about_one">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 col-lg-6">
                    <div class="about1_img wow fadeInUp" data-wow-delay="200ms">
                        <div class="about1_shape_1"></div>
                        <img :src="aboutImg1" alt="About-Img">
                        <div class="about1_icon-box">
                            <div class="circle">
                                <span class="icon-focus"></span>
                            </div>
                        </div>
                        <div class="about_img_2">
                            <img :src="aboutImg2" alt="Secondary about image">
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="block-title text-left wow fadeInUp" data-wow-delay="300ms">
                        <p>About agriculture</p>
                        <h3>We're leader in agriculture market</h3>
                        <div class="leaf">
                            <img :src="leafImg" alt="Decorative leaf">
                        </div>
                    </div>
                    <div class="about_content">
                        <div class="text">
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form, by injected humour, or randomised words which
                                don't look even slightly believable.</p>
                        </div>
                        <div class="about1_icon_wrap">
                            <div class="about1_icon_single">
                                <div class="about1_icon">
                                    <span class="icon-harvest"></span>
                                </div>
                                <p>Growing Fruits and Vegetables</p>
                            </div>
                            <div class="about1_icon_single">
                                <div class="about1_icon">
                                    <span class="icon-temperature"></span>
                                </div>
                                <p>Tips for Ripening your Fruits</p>
                            </div>
                        </div>
                        <div class="bottom_text">
                            <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
                                anything embarrassing hidden in the middle of text.</p>
                        </div>
                        <div class="about1__button-block">
                            <NuxtLink to="/about" class="thm-btn about_one__btn">Learn More</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Import images using Nuxt 3's asset system
import aboutImg1 from '@/assets/images/about/about-1-img-1.jpg'
import aboutImg2 from '@/assets/images/about/about-1-img-2.jpg'
import leafImg from '@/assets/images/resources/leaf.png'
</script>

<style scoped></style>