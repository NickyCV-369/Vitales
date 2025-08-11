<template>
    <section class="achieved_one">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 col-lg-12">
                    <div class="achieved_one_left_img">
                        <img :src="achievedOneImg1" alt="Achieved One Image">
                    </div>
                </div>
                <div class="col-xl-6 col-lg-12">
                    <div class="achieved_one_right-content">
                        <div class="achieved_one_right_img">
                            <img :src="achievedOneImg2" alt="Achieved Two Image">
                        </div>
                        <div class="block-title">
                            <p>agrikol Success</p>
                            <h3>We Archived</h3>
                            <div class="leaf">
                                <img :src="leafImg" alt="Leaf">
                            </div>
                        </div>
                        <div class="achieved_one_text">
                            <p>
                                There are many variations of passages available but the majority have suffered
                                alteration in some form by inject humour or donec vel erat sollicitudin, dapibus dui
                                at, porttitor sem.
                            </p>
                        </div>
                        <div class="achieved_one_btn">
                            <NuxtLink to="/why_choose_us" class="thm-btn">Learn More</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import achievedOneImg1 from '@/assets/images/resources/achieved_1-img-1.jpg'
import achievedOneImg2 from '@/assets/images/resources/achieved_1-img-2.jpg'
import leafImg from '@/assets/images/resources/leaf.png'
</script>