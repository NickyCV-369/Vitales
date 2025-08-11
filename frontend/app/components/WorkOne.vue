<template>
    <section class="work_one">
        <div class="container">
            <div class="block-title text-center">
                <p>how it works</p>
                <h3>follow 4 easy steps</h3>
                <div class="leaf">
                    <img :src="leafImg" alt="Leaf" />
                </div>
            </div>
            <div class="row">
                <div class="col-xl-3 col-lg-3 col-md-6" v-for="(step, index) in steps" :key="index">
                    <div class="work_one_single wow fadeInUp" :data-wow-delay="`${(index + 1) * 300}ms`"
                        :class="{ last_box: index === steps.length - 1 }">
                        <div class="work_one_icon_box">
                            <span :class="step.icon"></span>
                            <div class="work_one_count_box">
                                <h5>{{ step.count }}</h5>
                            </div>
                        </div>
                        <div class="work_one_content">
                            <h2 v-html="step.title"></h2>
                            <p>{{ step.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import leafImg from '@/assets/images/resources/leaf.png'

const steps = [
    {
        count: '01',
        icon: 'icon-calendar',
        title: 'Schedule Your<br>Experience',
        description: 'Quisqu tell us risus adpis\nviera bibe um urna.',
    },
    {
        count: '02',
        icon: 'icon-customer-service',
        title: 'Get Professional<br>advice',
        description: 'Quisqu tell us risus adpis\nviera bibe um urna.',
    },
    {
        count: '03',
        icon: 'icon-handshake',
        title: 'Meet our expert<br>people',
        description: 'Quisqu tell us risus adpis\nviera bibe um urna.',
    },
    {
        count: '04',
        icon: 'icon-harvest',
        title: 'now Get a best<br>products',
        description: 'Quisqu tell us risus adpis\nviera bibe um urna.',
    },
]
</script>