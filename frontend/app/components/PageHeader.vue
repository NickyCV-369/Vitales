<template>
    <section class="page-header" :style="`background-image: url(${backgroundImage})`">
        <div class="container">
            <h2>{{ title }}</h2>
            <ul class="thm-breadcrumb list-unstyled">
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li><span>{{ title }}</span></li>
            </ul>
        </div>
    </section>
</template>

<script setup>
// Define props with TypeScript interface for better type safety
import backgroundImage from '@/assets/images/backgrounds/page-header-contact.jpg'
defineProps({
    title: {
        type: String,
        required: true,
    },

});

</script>

<style scoped></style>