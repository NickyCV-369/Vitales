<template>
    <section class="location">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="location_single text-center">
                        <h2>{{ location.name }}</h2>
                        <p>{{ location.address }}</p>
                        <a :href="'mailto:' + location.email">{{ location.email }}</a><br>
                        <a :href="'tel:' + location.phone">{{ location.phone }}</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const location = ref({
            name: 'Vitales',
    address: 'Lakeview City, số 9, Đường Số 19, Phường An Phú, Quận 2, 700000 Hồ Chí Minh, Vietnam',
    email: 'info@vitales.vn',
            phone: '+84 977884317',
});
</script>

<style scoped>
/* Scoped styles here if needed */
</style>