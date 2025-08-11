<template>
    <div>
        <footer class="site-footer site-footer_two overflow-hidden">
            <div class="site-footer_farm_image site-footer_two_img">
                <img :src="farmImg" alt="Farm Illustration">
            </div>
            <div class="container">
                <div class="row no-gutters">
                    <!-- About Column -->
                    <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="footer-widget__column footer-widget__about">
                            <div class="footer-widget__title">
                                <h3>Over Vitales</h3>
                            </div>
                            <div class="footer-widget_about_text">
                                <p>Vitales brengt Europese biotechnologie naar Azië. Wij versterken landbouw met innovatieve, natuurlijke oplossingen voor sterkere planten en hogere opbrengsten.</p>
                            </div>
                            <form @submit.prevent="handleSubscribe">
                                <div class="footer_input-box">
                                    <input type="email" v-model="subscribeEmail" placeholder="Email Address" required>
                                    <button type="submit" class="button"><i class="fa fa-check"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <!-- Links Column -->
                    <div class="col-xl-2 col-lg-2 col-md-6">
                        <div class="footer-widget__column footer-widget__link">
                            <div class="footer-widget__title">
                                <h3>Verken</h3>
                            </div>
                            <ul class="footer-widget__links-list type2 list-unstyled">
                                <li v-for="(link, index) in exploreLinks" :key="index">
                                    <NuxtLink :to="link.path">{{ link.text }}</NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- News Column -->
                    <div class="col-xl-3 col-lg-3 col-md-6">
                        <div class="footer-widget__column footer-widget__news">
                            <div class="footer-widget__title">
                                <h3>Nieuws</h3>
                            </div>
                            <ul class="footer-widget__news list-unstyled">
                                <li>
                                    <div class="footer-widget__news_text">
                                <p>Binnenkort meer updates over onze projecten.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- Contact Column -->
                    <div class="col-xl-3 col-lg-3 col-md-6">
                        <div class="footer-widget__column footer-widget__contact">
                            <div class="footer-widget__title">
                                <h3>Contact</h3>
                            </div>
                            <div class="footer-widget_contact">
                                <p>Lakeview City 17 duong 19 phuong An Phu Quan 2 70000 HCM Vietnam</p>
                                <a href="mailto:info@vitales.vn">info@vitales.vn</a><br>
                                <a href="tel:+84977884317">+84 977884317</a>
                                <div class="site-footer__social">
                                    <a v-for="(social, index) in socialLinks" :key="index" :href="social.url">
                                        <i :class="social.icon"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        <div class="site-footer_bottom site-footer-bottom-two">
            <div class="container">
                <div class="site-footer_bottom_copyright">
                    <p>© Alle rechten voorbehouden {{ currentYear }}. Vitales</p>
                </div>
                <div class="site-footer_bottom_menu">
                    <ul class="list-unstyled">
                        <li v-for="(link, index) in footerLinks" :key="index">
                            <a :href="link.url">{{ link.text }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <a @click.prevent="scrollToTop" href="#" class="scroll-to-target scroll-to-top"
            :style="`display: ${showScrollBtn ? 'block' : 'none'}`">
            <i class="fa fa-angle-up"></i>
        </a>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Import images
import farmImg from '@/assets/images/resources/site-footer-farm.png'
import newsImg1 from '@/assets/images/resources/footer-1-img-1.jpg'
import newsImg2 from '@/assets/images/resources/footer-1-img-2.jpg'

// Data
const showScrollBtn = ref(false)
const subscribeEmail = ref('')
const currentYear = new Date().getFullYear()

// Footer content
const exploreLinks = [
    { text: 'Over Ons', path: '/about' },
    { text: 'Producten', path: '/service' },
    { text: 'Distributeur', path: '/projects' },
    { text: 'Laatste Nieuws', path: '/news' },
    { text: 'Contact', path: '/contact' }
]

const newsItems = [
    {
        image: newsImg1,
        title: 'Learn 10 Best Tips for New Formers',
        date: '30 Oct, 2020'
    },
    {
        image: newsImg2,
        title: 'Farmer Sentiment Darkens Hopes Fade',
        date: '30 Oct, 2020'
    }
]

const socialLinks = [
    { icon: 'fab fa-facebook-square', url: '#' },
    { icon: 'fab fa-twitter', url: '#' },
    { icon: 'fab fa-instagram', url: '#' },
    { icon: 'fab fa-dribbble', url: '#' }
]

const footerLinks = [
    { text: 'Privacy Policy', url: '#' },
    { text: 'Terms of Use', url: '#' }
]

// Methods
const handleScroll = () => {
    showScrollBtn.value = window.scrollY > 70
}

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

const handleSubscribe = () => {
    // Handle subscription logic
    console.log('Subscribed with:', subscribeEmail.value)
    subscribeEmail.value = ''
}

// Lifecycle hooks
onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>