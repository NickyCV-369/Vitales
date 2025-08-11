<template>
    <div :class="`search-popup ${store.isActive ? 'active' : ''}`">
        <div class="search-popup__overlay custom-cursor__overlay" @click="changeMobileSearchStatus"></div>

        <div class="search-popup__inner">
            <form action="#" class="search-popup__form">
                <input type="text" name="search" placeholder="Type here to Search...." />
                <button type="submit"><i class="fa fa-search"></i></button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { useMainStore } from "~/stores/store";
const store = useMainStore();
const changeMobileSearchStatus = () => {
    store.toggle();
};
</script>