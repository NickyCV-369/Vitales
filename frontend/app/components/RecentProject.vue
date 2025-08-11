<template>
    <section class="recent-project">
        <div class="container">
            <div class="block-title text-center">
                <p>verken projecten</p>
                <h3>onze recente projecten</h3>
                <div class="leaf">
                    <img :src="leafImg" alt="Decorative leaf">
                </div>
            </div>
            <div class="row">
                <div v-for="(project, index) in projects" :key="index" class="col-xl-4 col-lg-4">
                    <div class="recent_project_single">
                        <div class="project_img_box wow fadeInUp" :data-wow-delay="`${(index + 1) * 100}ms`">
                            <img :src="project.image" :alt="project.title">
                            <div class="project_content">
                                <h3>{{ project.title }}</h3>
                            </div>
                            <div class="hover_box">
                                <NuxtLink to="/projects">
                                    <span class="icon-left-arrow"></span>
                                </NuxtLink>
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
import leafImg from '@/assets/images/resources/leaf.png'
import projectImg1 from '@/assets/images/project/recent-pro-img-1.jpg'
import projectImg2 from '@/assets/images/project/recent-pro-img-2.jpg'
import projectImg3 from '@/assets/images/project/recent-pro-img-3.jpg'

// Projects data
const projects = [
    {
        title: 'biologische oplossingen',
        image: projectImg1
    },
    {
        title: 'Oogst Innovaties',
        image: projectImg2
    },
    {
        title: 'Landbouw teelt',
        image: projectImg3
    }
]
</script>