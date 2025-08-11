<template>
  <section class="gallery_one">
    <div class="container-fullwidth">
      <div class="block-title text-center">
        <p>our gallery</p>
        <h3>checkout gallery</h3>
        <div class="leaf">
          <img :src="leafImg" alt="leaf" />
        </div>
      </div>

      <div class="gallery-slider">
        <div ref="slider" class="tiny-slider">
          <div v-for="(img, index) in galleryImages" :key="index" class="gallery_one_single">
            <div class="gallery_one_image">
              <img :src="img" :alt="'Gallery image ' + (index + 1)" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'

// Import images
import gallery1 from '@/assets/images/gallery/gallery-1-img-1.jpg'
import gallery2 from '@/assets/images/gallery/gallery-1-img-2.jpg'
import gallery3 from '@/assets/images/gallery/gallery-1-img-3.jpg'
import gallery4 from '@/assets/images/gallery/gallery-1-img-4.jpg'
import gallery5 from '@/assets/images/gallery/gallery-1-img-5.jpg'

import leafImg from '@/assets/images/resources/leaf.png'

// Slider DOM reference
const slider = ref(null)

const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5]

onMounted(async () => {
  if (typeof window !== "undefined") {
    const { tns } = await import("tiny-slider/src/tiny-slider");
    const sliderInstanceTwo = tns({
      container: slider.value,
      items: 5, // Changed from 1 to 5
      slideBy: 1,
      mouseDrag: true,
      loop: true,
      gutter: 30,
      autoplay: true,
      preventScrollOnTouch: "auto",
      nav: false,
      autoplayButtonOutput: false,
      controls: false,
      dots: false,
      autoplayTimeout: 6000,
      speed: 1000,
      responsive: {
        0: { items: 2 }, // Mobile first approach
        576: { items: 3 },
        768: { items: 4 },
        992: { items: 5 }, // Will show 5 items on desktop
      },
    });
  }
})
</script>

<style scoped>
/* Add these styles to ensure proper sizing */
.gallery-slider {
  width: 100%;
  overflow: hidden;
}

.tiny-slider {
  display: flex;
}

.gallery_one_single {
  flex: 0 0 auto;
  padding: 0 15px;
}

.gallery_one_image img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.container-fullwidth {
  width: 100%;
  max-width: 1500px;
  /* Adjust as needed */
  margin: 0 auto;
  padding: 0 15px;
}
</style>