<template>
    <div class="site-header__header-one-wrap">
        <div class="topbar-one">
            <div class="topbar_bg" :style="`background-image: url(${headerBg})`"></div>
            <div class="container">
                <div class="topbar-one__left">
                    <a href="mailto:info@vitales.vn"><span class="icon-message"></span>info@vitales.vn</a>
                    <a href="tel:+84977884317"><span class="icon-phone-call"></span>+84 977884317</a>
                </div>
                <div class="topbar-one__middle">
                    <NuxtLink to="/" class="main-nav__logo">
                        <img :src="logo" class="main-logo" alt="Awesome Image" />
                    </NuxtLink>
                </div>
                <div class="topbar-one__right">
                    <div class="topbar-one__social">
                        <a href="#"><i class="fab fa-facebook-square"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-dribbble"></i></a>
                    </div>
                </div>
            </div>
        </div>

        <header class="main-nav__header-one">
            <nav :class="`header-navigation stricky clearfix ${sticky ? 'stricked-menu stricky-fixed' : ''}`">
                <div class="container clearfix">
                    <div class="main-nav__left">
                        <a href="#" class="main-nav__search search-popup__toggler" @click="changeMobileDrawerStatus">
                            <i class="icon-magnifying-glass"></i>
                        </a>
                        <a href="#" class="side-menu__toggler">
                            <i @click="mobileToggle = !mobileToggle" class="fa fa-bars"></i>
                        </a>
                    </div>
                    <div class="main-nav__main-navigation">
                        <ul class="main-nav__navigation-box">
                            <li v-for="(item, index) in navItems" :key="index"
                                :class="['dropdown', { current: $route.path === item.to }]">
                                <NuxtLink v-if="item.to" :to="item.to">{{ item.label }}</NuxtLink>
                                <a v-else href="#">{{ item.label }}</a>
                                <ul v-if="item.children">
                                    <li v-for="(child, childIndex) in item.children" :key="childIndex">
                                        <NuxtLink :to="child.to">{{ child.label }}</NuxtLink>
                                        <ul v-if="child.children">
                                            <li v-for="(grandchild, grandIndex) in child.children" :key="grandIndex">
                                                <NuxtLink :to="grandchild.to">{{ grandchild.label }}</NuxtLink>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="main-nav__right">
                        <div class="icon_cart_box">
                            <NuxtLink to="/cart">
                                <span class="icon-shopping-cart"></span>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </nav>

            <nav class="mobile-nav__container" :style="`display: ${mobileToggle ? 'block' : 'none'}`">
                <ul class="main-nav__navigation-box">
                    <li v-for="(item, index) in navItems" :key="index" class="dropdown">
                        <div class="menu-holder">
                            {{ item.label }}
                            <button v-if="item.children" class="dropdown-btn" @click="toggleMobileSubmenu(index)">
                                <i class="fa fa-angle-right"></i>
                            </button>
                        </div>
                        <ul v-if="item.children"
                            :style="`display: ${activeMobileSubmenu === index ? 'block' : 'none'}`">
                            <li v-for="(child, childIndex) in item.children" :key="childIndex">
                                <div v-if="child.children" class="menu-holder">
                                    {{ child.label }}
                                    <button class="dropdown-btn" @click="toggleMobileSubSubmenu(childIndex)">
                                        <i class="fa fa-angle-right"></i>
                                    </button>
                                </div>
                                <NuxtLink v-else :to="child.to">{{ child.label }}</NuxtLink>
                                <ul v-if="child.children"
                                    :style="`display: ${activeMobileSubSubmenu === childIndex ? 'block' : 'none'}`">
                                    <li v-for="(grandchild, grandIndex) in child.children" :key="grandIndex">
                                        <NuxtLink :to="grandchild.to">{{ grandchild.label }}</NuxtLink>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
</template>

<script setup>
// Imports
import { ref, onMounted, onUnmounted } from 'vue';
import headerBg from '@/assets/images/shapes/header-bg.png'
import logo from '@/assets/images/Vitales_photos/Vitales_logo.png'

// State
const sticky = ref(false);
const mobileToggle = ref(false);
const activeMobileSubmenu = ref(null);
const activeMobileSubSubmenu = ref(null);
// Navigation data
const navItems = ref([
    {
        label: 'Home',
        to: '/',
        children: null
    },
    {
        label: 'Distributeur',
        to: '/projects',
        children: null
    },
    {
                label: 'Winkel',
        to: '/product',
        children: null
      },
      {
        label: 'Over Ons',
        to: '/about',
        children: null
      },
      {
        label: 'Nieuws',
        to: '/news',
        children: null
    },
    {
        label: 'Contact',
        to: '/contact',
        children: null // No dropdown for contact
    }
]);
// Methods
const handleScroll = () => {
    sticky.value = window.scrollY > 70;
};

const changeMobileDrawerStatus = () => {
    const store = useMainStore();
    store.toggle();
};

const toggleMobileSubmenu = (index) => {
    activeMobileSubmenu.value = activeMobileSubmenu.value === index ? null : index;
    activeMobileSubSubmenu.value = null;
};

const toggleMobileSubSubmenu = (index) => {
    activeMobileSubSubmenu.value = activeMobileSubSubmenu.value === index ? null : index;
};

// Lifecycle hooks
onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* Your existing styles can remain mostly the same */
/* Add any additional styles needed for the mobile dropdowns */
.menu-holder {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.dropdown-btn {
    background: none;
    border: none;
    cursor: pointer;
}
</style>