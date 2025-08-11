<template>
    <section class="gallery_two">
        <div class="container">
            <div class="row masonry-layout">
                <div v-for="(image, index) in images" :key="index" class="col-xl-4 col-lg-6 col-md-6 masonry-item">
                    <div class="gallery_two_single">
                        <div class="gallery_two_image">
                            <img :src="image" alt="" />
                            <div class="gallery_two_hover_box">
                                <div class="gallery_two_icon">
                                    <a class="img-popup" :href="image">
                                        <span class="icon-plus-symbol"></span>
                                    </a>
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

// Import images
import img1 from '@/assets/images/gallery/gallery-2-img-1.jpg'
import img2 from '@/assets/images/gallery/gallery-2-img-2.jpg'
import img3 from '@/assets/images/gallery/gallery-2-img-3.jpg'
import img4 from '@/assets/images/gallery/gallery-2-img-4.jpg'
import img5 from '@/assets/images/gallery/gallery-2-img-5.jpg'
import img6 from '@/assets/images/gallery/gallery-2-img-6.jpg'
import img7 from '@/assets/images/gallery/gallery-2-img-7.jpg'

// Images array for rendering
const images = [img1, img2, img3, img4, img5, img6, img7]
// Ref for storing the Isotope instance
const isotope = ref(null);

onMounted(async () => {
    // Initialize Isotope for the masonry layout
    if (process.client) {
        // Dynamically import Isotope, ensuring it's imported correctly
        const Isotope = (await import("isotope-layout")).default || (await import("isotope-layout"));

        isotope.value = new Isotope(document.querySelector(".masonry-layout"), {
            itemSelector: ".masonry-item",
            layoutMode: "masonry",
            percentPosition: true,
            masonry: {
                columnWidth: ".masonry-item", // Optionally set column width
            },
        });

        // Re-layout Isotope once the next tick is completed (when images are loaded)
        nextTick(() => {
            isotope.value.layout();
        });
    }
});

onBeforeUnmount(() => {
    // Destroy the Isotope instance to clean up resources
    if (isotope.value) {
        isotope.value.destroy();
    }
});
onMounted(async () => {
    new GLightbox({
        selector: ".img-popup",
        touchNavigation: true,
        loop: true,
        autoplayVideos: true,
    });
});
</script>