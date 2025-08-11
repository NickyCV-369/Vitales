<template>
    <section class="video-one" :style="`background-image:url(${videoBg})`">
        <div class="container text-center">
            <a href="https://www.youtube.com/watch?v=i9E_Blai8vk" class="video-one__btn videoOne">
                <i class="fa fa-play"></i>
            </a>
            <p>Moderne landbouwtypes</p>
            <h3>Landbouw is belangrijk voor de<br>toekomst van ontwikkeling</h3>
        </div>
    </section>
</template>

<script setup>
import videoBg from '@/assets/images/resources/video-bg-1.jpg'

onMounted(() => {
    new GLightbox({
        selector: ".videoOne",
        touchNavigation: true,
        loop: true,
        autoplayVideos: true,
    });
});
</script>