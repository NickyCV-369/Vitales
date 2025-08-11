<template>
    <section class="need_all">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 col-lg-6">
                    <div class="left_content">
                        <h2>Alles wat je nodig hebt voor duurzame en slimme landbouw</h2>
                        <p class="subtitle">Sterkere planten, gezondere oogst.</p>
                        <div class="need_image">
                            <img :src="needImage" alt="Agriculture Equipment">
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="need_right_content">
                        <div class="need_text">
                            <p>Bij Vitales brengen wij de kracht van Europese biotechnologie naar Azië. Onze producten versterken planten van binnenuit, verhogen de weerbaarheid tegen droogte, ziektes en hitte — zonder gebruik van zware chemicaliën. Samen bouwen we aan een landbouw die zowel de boer als het milieu versterkt.</p>
                        </div>
                        <div class="row">
                            <div v-for="(feature, index) in features" :key="index"
                                class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <div class="need_icon_single wow fadeInUp" :data-wow-delay="`${(index + 1) * 100}ms`">
                                    <div class="need_icon">
                                        <span :class="feature.icon"></span>
                                    </div>
                                    <h3>{{ feature.title }}</h3>
                                    <p>{{ feature.description }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Import image
import needImage from '@/assets/images/resources/need_img-1.jpg'

// Features data
const features = [
    {
        icon: 'icon-farmer',
        title: 'Biotechnologie op Maat',
        description: 'Wij combineren wetenschap met praktijk. Elk gewas krijgt de juiste biostimulant voor maximale groei en kwaliteit.'
    },
    {
        icon: 'icon-tractor',
        title: 'Vitales: De Innovatieve Partner',
        description: 'Als exclusief distributeur van Plant Vitales in Azië garanderen wij Europese topkwaliteit en lokale ondersteuning.'
    }
]
</script>

<style scoped>
.subtitle {
    color: var(--thm-base);
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 20px;
    line-height: 1.3;
    margin-top: 10px;
}

.left_content .subtitle {
    color: var(--thm-base);
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 20px;
    line-height: 1.3;
}

/* Make the green blocks equal height */
.need_icon_single {
    height: 100%;
    display: flex;
    flex-direction: column;
}

.need_icon_single h3 {
    margin-bottom: 10px;
    flex-grow: 0;
}

.need_icon_single p {
    flex-grow: 1;
    margin-bottom: 0;
}

/* Ensure the row has equal height columns */
.row .col-xl-6.col-lg-6.col-md-6.col-sm-6 {
    display: flex;
    padding: 0 15px;
}

.row .col-xl-6.col-lg-6.col-md-6.col-sm-6 .need_icon_single {
    width: 100%;
}

/* Add more space between the green blocks */
.row .col-xl-6.col-lg-6.col-md-6.col-sm-6:first-child {
    padding-right: 30px;
}

.row .col-xl-6.col-lg-6.col-md-6.col-sm-6:last-child {
    padding-left: 30px;
}
</style>