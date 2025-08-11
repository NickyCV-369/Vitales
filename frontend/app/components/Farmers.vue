<template>
    <section class="team_one">
        <div class="container">
            <div class="row">
                <div v-for="(farmer, index) in farmers" :key="index" class="col-xl-4 col-lg-4 col-md-6">
                    <div class="team_one_single wow fadeInUp animated">
                        <div class="team_one_image">
                            <img :src="farmer.image" :alt="farmer.name" />
                        </div>
                        <div class="team_one_deatils">
                            <p>farmer</p>
                            <h2><a href="#">{{ farmer.name }}</a></h2>
                            <div class="team_one_social">
                                <a href="#"><i class="fab fa-facebook-square"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import farmer1 from '@/assets/images/team/farmers-1.jpg'
import farmer2 from '@/assets/images/team/farmers-2.jpg'
import farmer3 from '@/assets/images/team/farmers-3.jpg'
import farmer4 from '@/assets/images/team/farmers-4.jpg'
import farmer5 from '@/assets/images/team/farmers-5.jpg'
import farmer6 from '@/assets/images/team/farmers-6.jpg'

const farmers = [
    { name: 'David James', image: farmer1 },
    { name: 'Jessica Brown', image: farmer2 },
    { name: 'Kevin Martin', image: farmer3 },
    { name: 'Sarah Albert', image: farmer4 },
    { name: 'John SMith', image: farmer5 },
    { name: 'Christine eve', image: farmer6 },
]
</script>

<style scoped></style>