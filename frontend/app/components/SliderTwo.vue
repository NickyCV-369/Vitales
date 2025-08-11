<template>
    <section class="banner-section banner-two">

        <div class="banner-carousel-two">
            <ClientOnly>
                <div ref="slider" class="my-slider">
                    <div class="slide-item" v-for="(slide, index) in slides" :key="index">
                        <div class="image-layer" :style="`background-image: url(${slide.image})`"></div>
                        <div class="auto-container">
                            <div class="content-box">
                                <div class="content">
                                    <div class="inner">
                                        <div class="sub-title">{{ slide.subtitle }}</div>
                                        <div class="big_text">
                                            <h2 v-html="slide.title"></h2>
                                        </div>
                                        <div class="description">
                                            <p>{{ slide.description }}</p>
                                        </div>
                                        <div class="link-box">
                                            <NuxtLink :to="slide.primaryCtaLink" class="thm-btn">{{ slide.primaryCta }}</NuxtLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ClientOnly>
        </div>
    </section>
</template>

<script setup>
import image1 from '@/assets/images/main-slider/slide_v2_1.jpg'
import image2 from '@/assets/images/main-slider/slide_v2_2.jpg'
import image3 from '@/assets/images/main-slider/slide_v2_1.jpg'

const slider = ref(null);

onMounted(async () => {
    if (typeof window !== "undefined") {
        const { tns } = await import("tiny-slider/src/tiny-slider");
        tns({
            container: slider.value,
            loop: true,
            autoplay: false,
            mode: "carousel",
            animateIn: "fadeIn",
            animateOut: "fadeOut",
            items: 1,
            gutter: 0,
            mouseDrag: true,
            preventScrollOnTouch: "auto",
            nav: true,
            autoplayButtonOutput: false,
            controls: false,
            dots: true,
            autoplayTimeout: 6000,
            speed: 1000,
        });
    }
});

// Slide data
const slides = [
    {
        image: image1,
        subtitle: 'Europese Biotechnology voor een Groene Aziatische Toekomst',
        title: 'Vitales',
        description: 'Wij versterken landbouw in Azië met exclusieve biotechnologische oplossingen van Plant Vitales. Voor sterkere planten, hogere opbrengsten en een duurzame toekomst.',
        primaryCta: 'Ontdek Onze Oplossingen',
        primaryCtaLink: '/product'
    },
    {
        image: image2,
        subtitle: 'Europese Biotechnology voor een Groene Aziatische Toekomst',
        title: 'Vitales',
        description: 'Wij versterken landbouw in Azië met exclusieve biotechnologische oplossingen van Plant Vitales. Voor sterkere planten, hogere opbrengsten en een duurzame toekomst.',
        primaryCta: 'Ontdek Onze Oplossingen',
        primaryCtaLink: '/product'
    },
    {
        image: image3,
        subtitle: 'Europese Biotechnology voor een Groene Aziatische Toekomst',
        title: 'Vitales',
        description: 'Wij versterken landbouw in Azië met exclusieve biotechnologische oplossingen van Plant Vitales. Voor sterkere planten, hogere opbrengsten en een duurzame toekomst.',
        primaryCta: 'Ontdek Onze Oplossingen',
        primaryCtaLink: '/product'
    }
]
</script>

<style scoped>
.description {
    margin-bottom: 30px;
    max-width: 600px;
}

.description p {
    color: #ffffff;
    font-size: 18px;
    line-height: 1.6;
    margin: 0;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.link-box {
    display: flex;
    align-items: center;
    justify-content: center;
}

.thm-btn {
    margin: 0;
    padding: 15px 30px;
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
    border-radius: 5px;
    transition: all 0.3s ease;
    display: inline-block;
    text-align: center;
    min-width: 200px;
}

.secondary-btn {
    background-color: transparent !important;
    border: 2px solid #ffffff !important;
    color: #ffffff !important;
}

.secondary-btn:hover {
    background-color: #ffffff !important;
    color: var(--thm-base) !important;
}
</style>