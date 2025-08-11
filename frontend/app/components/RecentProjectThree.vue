<template>
    <section class="recent_project_three">
        <div class="container-fullwidth">
            <div class="block-title text-center">
                <p>explore projects</p>
                <h3>our Recent projects</h3>
                <div class="leaf">
                    <img :src="leafImage" alt="leaf" />
                </div>
            </div>
            <div class="recent_project_three_carousel">
                <div class="my-slider" ref="slider">
                    <div class="project_three_single wow fadeInUp" v-for="(project, index) in projects" :key="index"
                        :data-wow-delay="project.delay">
                        <div class="project_three_image">
                            <img :src="project.image" :alt="project.title" />
                            <div class="project_three_content">
                                <h2>organic<br />solutions</h2>
                            </div>
                            <div class="project_three_hover_box">
                                <h2>Harvest<br />Innovations</h2>
                                <p>
                                    There are many new variations of available<br />
                                    but majority is simple free text.
                                </p>
                                <div class="project_three_btn">
                                    <NuxtLink to="/projects" class="thm-btn project_three_btn_hover">
                                        Read More
                                    </NuxtLink>
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
import { onMounted } from 'vue'


import leafImage from '@/assets/images/resources/leaf.png'
import projectImg1 from '@/assets/images/project/project-3-img-1.jpg'
import projectImg2 from '@/assets/images/project/project-3-img-2.jpg'
import projectImg3 from '@/assets/images/project/project-3-img-3.jpg'
import projectImg4 from '@/assets/images/project/project-3-img-4.jpg'

const projects = [
    { image: projectImg1, title: 'Project 1', delay: '300ms' },
    { image: projectImg2, title: 'Project 2', delay: '600ms' },
    { image: projectImg3, title: 'Project 3', delay: '900ms' },
    { image: projectImg4, title: 'Project 4', delay: '1200ms' }
]
const slider = ref(null);

onMounted(async () => {
    if (typeof window !== "undefined") {
        const { tns } = await import("tiny-slider/src/tiny-slider");
        const sliderInstance = tns({
            container: slider.value,
            items: 1,
            gutter: 5,
            autoplay: true,
            controls: false,
            nav: false,
            responsive: {
                640: { items: 2 },
                992: { items: 3 },
                1024: { items: 4 }
            }
        });
    }
});


</script>