<template>
    <div class="page-wrapper">
        <slot />
    </div>
</template>

<script setup>
// Components in /components are auto-imported in Nuxt 3
// No need to manually import SearchPopup unless you've disabled auto-imports

useHead({
    title: "Agrikol - Vue Nuxt Template for Agriculture Farm & Farmers"
});

// No need for manual loading handling with NuxtLoadingIndicator
</script>

<style scoped>
/* Optional: Customize the loading indicator */
.nuxt-loading-indicator {
    background-color: green;
    /* Agriculture-themed color */
    height: 3px;
}
</style>