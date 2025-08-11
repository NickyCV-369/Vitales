<template>
    <section class="project_detail">
        <div class="container">
            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12">
                    <div class="project_detail_image">
                        <img :src="projectImage" alt="Project Image">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-8 col-lg-7">
                    <div class="project_detail_left_content">
                        <div class="harvest_innovations_detail">
                            <h2>Harvest Innovations</h2>
                            <p>There are many variations of passages of psum available, but the majority have
                                suffered alteration in some form, by injected humour, or randomised words which
                                don't look even slightly believable...</p>

                            <p class="harvest_innovations_detail_bottom_text">Beyond more stoic this along goodness
                                hey this this wow manatee mongoose...</p>
                        </div>
                        <div class="project_challenges">
                            <h2>Project challenges</h2>
                            <ul class="list-unstyled project_challenges_box">
                                <li>
                                    <div class="project_challenges_icon">
                                        <span class="icon-growth"></span>
                                    </div>
                                    <div class="project_challenges_content">
                                        <h4>Attract and retain quality high paying customers</h4>
                                        <p>Lorem ipsum is simply free text used by copytyping refreshing...</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="project_challenges_icon">
                                        <span class="icon-temperature"></span>
                                    </div>
                                    <div class="project_challenges_content">
                                        <h4>Attract and retain quality high paying customers</h4>
                                        <p>Lorem ipsum is simply free text used by copytyping refreshing...</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="project_detail_last_text">
                            <p>Lorem ipsum is simply free text used by copytyping refreshing...</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-5">
                    <div class="project_information_box">
                        <h3>Project information</h3>
                        <ul class="project_information_list list-unstyled">
                            <li><span>Date:</span>06 Nov, 2019</li>
                            <li><span>Client:</span>Themeforest, Envato</li>
                            <li><span>Website:</span>agrikol.com</li>
                            <li><span>Location:</span>New York, USA</li>
                            <li><span>Value:</span>$25,60000</li>
                        </ul>
                        <div class="project_information__social">
                            <a href="#"><i class="fab fa-facebook-square"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-dribbble"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import projectImage from '@/assets/images/project/project-detail-img-1.jpg'
</script>