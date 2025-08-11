<template>
    <section class="details_one">
        <div class="container">
            <div class="row">
                <div v-for="(detail, index) in details" :key="index" class="col-xl-4 col-lg-4">
                    <div class="details_one_single">
                        <div class="details_one_icon">
                            <span :class="detail.icon"></span>
                        </div>
                        <div class="details_one_content">
                            <h2>{{ detail.title }}</h2>
                        </div>
                        <div class="details_one_count_box">
                            <h3>{{ detail.number }}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Details data
const details = [
    {
        icon: 'icon-harvest',
        title: 'Organic Agriculture\nResponsibility',
        number: '01'
    },
    {
        icon: 'icon-farmer',
        title: 'Innovative economy\nsolutions',
        number: '02'
    },
    {
        icon: 'icon-tractor',
        title: 'Better Live stock\nFarming',
        number: '03'
    }
]
</script>