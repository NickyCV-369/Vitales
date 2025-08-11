<template>
    <section class="recent-project our_projects">
        <div class="container">
            <div class="row">
                <div v-for="(project, index) in projects" :key="index" class="col-xl-4 col-lg-4">
                    <div class="recent_project_single mrb-30">
                        <div class="project_img_box">
                            <img :src="project.image" :alt="project.alt" />
                            <div class="project_content">
                                <h3 v-html="project.title"></h3>
                            </div>
                            <div class="hover_box">
                                <nuxt-link to="/projects_detail">
                                    <span class="icon-left-arrow"></span>
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-12">
                    <div class="our_projects_btn">
                        <a href="#" class="thm-btn">Load More Projects</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import img1 from '@/assets/images/project/recent-pro-img-1.jpg'
import img2 from '@/assets/images/project/recent-pro-img-2.jpg'
import img3 from '@/assets/images/project/recent-pro-img-3.jpg'
import img4 from '@/assets/images/project/recent-pro-img-4.jpg'
import img5 from '@/assets/images/project/recent-pro-img-5.jpg'
import img6 from '@/assets/images/project/recent-pro-img-6.jpg'

const projects = [
    { image: img1, alt: 'Recent Project Img', title: 'organic<br>solutions' },
    { image: img2, alt: 'Recent Project Img', title: 'Harvest<br>Innovations' },
    { image: img3, alt: 'Recent Project Img', title: 'Agriculture<br>farming' },
    { image: img4, alt: 'Recent Project Img', title: 'the Farming<br>season' },
    { image: img5, alt: 'Recent Project Img', title: 'ecological<br>farming' },
    { image: img6, alt: 'Recent Project Img', title: 'Natural way<br>of agriculture' }
]
</script>