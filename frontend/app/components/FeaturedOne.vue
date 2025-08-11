<template>
    <section class="featured-one">
        <div class="container">
            <div class="row">
                <div class="col-xl-6">
                    <div class="single_featured_box wow fadeInUp" data-wow-delay="200ms">
                        <img :src="leafImg" alt="Decorative leaf"><span>We Sale Best Agriculture Products</span><img
                            :src="leafImg" alt="Decorative leaf">
                    </div>
                </div>
                <div class="col-xl-6">
                    <div class="single_featured_box wow fadeInUp" data-wow-delay="300ms">
                        <img :src="leafImg" alt="Decorative leaf"><span>We've 40 years experience in field</span><img
                            :src="leafImg" alt="Decorative leaf">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Import image
import leafImg from '@/assets/images/resources/featured-leaf.png'
</script>