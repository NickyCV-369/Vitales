<template>
    <section class="quote_one">
        <div class="quote_one_bg" :style="`background-image: url(${quote})`"></div>
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="quote_one_content">
                        <h2>“The discovery of agriculture was the first big<br> step toward a civilized life.”</h2>
                        <p>Mike hardson</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import quote from '@/assets/images/resources/quote_1-bg.png'

</script>

<style scoped></style>