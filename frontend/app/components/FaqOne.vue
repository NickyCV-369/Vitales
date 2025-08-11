<template>
    <section class="faq_one">
        <div class="container">
            <div class="row">
                <!-- Left -->
                <div class="col-xl-6 col-lg-6">
                    <div class="faq_one_left">
                        <div class="block-title text-left">
                            <p>frequently asked questions</p>
                            <h3>have any question?</h3>
                            <div class="leaf">
                                <img :src="leafImg" alt="Leaf" />
                            </div>
                        </div>
                        <div class="faq_one_image" :style="`background-image: url(${faqImage});`">
                            <div class="phone_number">
                                <p>
                                    If you have emergency call now
                                    <a href="tel:888-999-0000">666 888 0000</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right -->
                <div class="col-xl-6 col-lg-6">
                    <div class="faq_one_right">
                        <div class="accordion-container-one">
                            <div v-for="(item, index) in faqs" :key="index" class="ac"
                                :class="{ 'is-active': activeIndex === index }">
                                <h2 class="ac-q" @click="toggleAccordion(index)">
                                    {{ item.question }}
                                </h2>
                                <div class="ac-a" :style="{
                                    maxHeight: activeIndex === index ? '200px' : '0',
                                    visibility: activeIndex === index ? 'visible' : 'hidden',
                                }">
                                    <p>{{ item.answer }}</p>
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
import { ref } from 'vue'

// Images
import leafImg from '@/assets/images/resources/leaf.png'
import faqImage from '@/assets/images/resources/faq_one_img-1.jpg'

// Accordion content
const faqs = [
    {
        question: 'Why are your tours so expensive?',
        answer:
            'Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, molestie ullamcorper vulputate vitae sodales commodo nisl. Nulla facilisi. Pellentesque est metus many of eration in some form.',
    },
    {
        question: 'Which payment methods are acceptable?',
        answer:
            'Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, molestie ullamcorper vulputate vitae sodales commodo nisl. Nulla facilisi. Pellentesque est metus many of eration in some form.',
    },
    {
        question: 'How to book the new tour for 2 persons?',
        answer:
            'Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, molestie ullamcorper vulputate vitae sodales commodo nisl. Nulla facilisi. Pellentesque est metus many of eration in some form.',
    },
]

const activeIndex = ref(0)

const toggleAccordion = (index) => {
    activeIndex.value = activeIndex.value === index ? null : index
}
</script>
<style scoped>
.ac {
    margin-top: 10px;
    padding: 10px;
    background: #ffffff;
    box-sizing: border-box;
    border-radius: 6px;
    transition: all 0.3s ease;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
}

.ac-q {
    font-size: 20px;
    color: #444;
    padding: 10px 30px 10px 10px;
    margin: 0;
    cursor: pointer;
    position: relative;
    font-weight: 400;
    font-family: var(--heading-font);
}

.ac-q::after {
    content: '+';
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
}

.ac.is-active .ac-q {
    color: #5a8b50;
}

.ac.is-active .ac-q::after {
    content: '\2013';
    /* minus sign */
    color: #5a8b50;
}

.ac-a {
    overflow: hidden;
    transition: max-height 0.3s ease, visibility 0.3s ease;
}

.ac-a p {
    color: #878e9c;
    margin: 0;
    padding: 10px 0;
    font-size: 16px;
    font-weight: 400;
}
</style>
