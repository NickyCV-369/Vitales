<template>
  <NuxtLayout>
    <NuxtLoadingIndicator color="#348feb" :height="height" />
    <NuxtPage />
    <SearchPopup />
  </NuxtLayout>
</template>

<script setup>
const height = 5;
if (process.client) {
  onMounted(() => {
    import("wow.js").then(({ default: WOW }) => {
      const wow = new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: true,
        live: true,
      });
      wow.init();
    });
  });
}
</script>
