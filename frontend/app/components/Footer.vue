<template>
    <div>
        <footer class="site-footer site-footer_two overflow-hidden">
            <div class="site-footer_farm_image">
                <img :src="footerFarmImg" alt="Farm Image" />
            </div>
            <div class="container">
                <div class="row no-gutters">
                    <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="footer-widget__column footer-widget__about wow fadeInUp" data-wow-delay="100ms">
                            <div class="footer-widget__title">
                                <h3>Over Vitales</h3>
                            </div>
                            <div class="footer-widget_about_text">
                                <p>Vitales brengt Europese biotechnologie naar Azië. Wij versterken landbouw met innovatieve, natuurlijke oplossingen voor sterkere planten en hogere opbrengsten.</p>
                            </div>
                            <form>
                                <div class="footer_input-box">
                                    <input type="Email" placeholder="Email Address">
                                    <button type="submit" class="button"><i class="fa fa-check"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="col-xl-2 col-lg-2 col-md-6">
                        <div class="footer-widget__column footer-widget__link wow fadeInUp" data-wow-delay="200ms">
                            <div class="footer-widget__title">
                                <h3>Verken</h3>
                            </div>
                            <ul class="footer-widget__links-list list-unstyled">
                                <li><a href="#">Over Ons</a></li>
                                <li><a href="#">Producten</a></li>
                                <li><a href="#">Projecten</a></li>
                                <li><a href="#">Laatste Nieuws</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-xl-3 col-lg-3 col-md-6">
                        <div class="footer-widget__column footer-widget__news wow fadeInUp" data-wow-delay="300ms">
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

                    <div class="col-xl-3 col-lg-3 col-md-6">
                        <div class="footer-widget__column footer-widget__contact wow fadeInUp" data-wow-delay="400ms">
                            <div class="footer-widget__title">
                                <h3>Contact</h3>
                            </div>
                            <div class="footer-widget_contact">
                                <p>Lakeview City 17 duong 19 phuong An Phu Quan 2 70000 HCM Vietnam</p>
                                <a href="mailto:info@vitales.vn">info@vitales.vn</a><br>
                                <a href="tel:+84977884317">+84 977884317</a>
                                <div class="site-footer__social">
                                    <a href="#"><i class="fab fa-facebook-square"></i></a>
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href="#"><i class="fab fa-instagram"></i></a>
                                    <a href="#"><i class="fab fa-dribbble"></i></a>
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
                    <p>© Alle rechten voorbehouden 2025. Vitales</p>
                </div>
                <div class="site-footer_bottom_menu">
                    <ul class="list-unstyled">
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Use</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <a @click="scrollTop" href="#" class="scroll-to-target scroll-to-top"
            :style="`display: ${scrollBtn ? 'block' : 'none'}`">
            <i class="fa fa-angle-up"></i>
        </a>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Import images
import footerFarmImg from '@/assets/images/resources/site-footer-farm.png'
import newsImg1 from '@/assets/images/resources/footer-1-img-1.jpg'
import newsImg2 from '@/assets/images/resources/footer-1-img-2.jpg'

// Scroll button logic
const scrollBtn = ref(false)

const handleScroll = () => {
    scrollBtn.value = window.scrollY > 70
}

const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped></style>