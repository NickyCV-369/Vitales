<template>
    <section class="team_one">
        <div class="container">
            <div class="block-title text-center">
                <p>our team members</p>
                <h3>meet the farmers</h3>
                <div class="leaf">
                    <img :src="leafImg" alt="Leaf" />
                </div>
            </div>
            <div class="row">
                <div class="col-xl-3 col-lg-3 col-md-6" v-for="(member, index) in teamMembers" :key="index">
                    <div class="team_one_single wow" :class="member.animation">
                        <div class="team_one_image">
                            <img :src="member.image" :alt="member.name" />
                        </div>
                        <div class="team_one_deatils">
                            <p>{{ member.role }}</p>
                            <h2><a href="#">{{ member.name }}</a></h2>
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
import leafImg from '@/assets/images/resources/leaf.png'
import team1 from '@/assets/images/team/team_1-img-1.jpg'
import team2 from '@/assets/images/team/team_1-img-2.jpg'
import team3 from '@/assets/images/team/team_1-img-3.jpg'
import team4 from '@/assets/images/team/team_1-img-4.jpg'

const teamMembers = [
    {
        name: 'David James',
        role: 'farmer',
        image: team1,
        animation: 'fadeInUp',
    },
    {
        name: 'Jessica Brown',
        role: 'farmer',
        image: team2,
        animation: 'fadeInDown',
    },
    {
        name: 'Kevin Martin',
        role: 'farmer',
        image: team3,
        animation: 'fadeInUp',
    },
    {
        name: 'Sarah Albert',
        role: 'farmer',
        image: team4,
        animation: 'fadeInDown',
    },
]
</script>