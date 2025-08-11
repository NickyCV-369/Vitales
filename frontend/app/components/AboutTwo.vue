<template>
    <section class="about_two">
        <div class="container">
            <!-- Main Header -->
            <div class="row">
                <div class="col-xl-12">
                    <div class="block-title text-center">
                        <p>Over Vitales</p>
                        <h3>De Brug tussen Europese Biotechnologie en Aziatische Landbouw</h3>
                        <div class="leaf">
                            <img :src="leafImg" alt="leaf" />
                        </div>
                    </div>
                </div>
            </div>

            <!-- Two Column Layout -->
            <div class="row about-content">
                <!-- Left Column (50% width) -->
                <div class="col-xl-6 col-lg-6 col-md-6">
                    <div class="about_left_column">
                        <div class="visual-placeholder">
                            <!-- Visual placeholder - can be replaced with image later -->
                            <div class="placeholder-content">
                                <i class="icon-plant"></i>
                                <h4>Europese Biotechnologie</h4>
                                <p>Voor Aziatische Landbouw</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Column (50% width) -->
                <div class="col-xl-6 col-lg-6 col-md-6">
                    <div class="about_right_column">
                        <!-- Onze Missie -->
                        <div class="content-section">
                            <h4>Onze Missie</h4>
                            <ul>
                                <li>Meer weerbare gewassen telen die bestand zijn tegen droogte, ziektes en klimaatverandering.</li>
                                <li>Opbrengsten én voedingskwaliteit verhogen zonder afhankelijk te zijn van zware chemische middelen.</li>
                                <li>Duurzamer en efficiënter produceren met respect voor bodemgezondheid en het ecosysteem.</li>
                            </ul>
                        </div>

                        <!-- Onze Oplossingen -->
                        <div class="content-section">
                            <h4>Onze Oplossingen</h4>
                            <p>Onze biotechnologie richt zich direct op de fysiologie van de plant. Met een reeks van krachtige biostimulanten:</p>
                            <ul>
                                <li><b>Natural Nano Mix:</b> Meer dan 80 mineralen en sporenelementen in nanovorm voor maximale voedingsopname en Brix-verhoging.</li>
                                <li><b>SiOH4 (Orthosiliciumzuur):</b> Voor sterkere celwanden en verhoogde stressweerstand.</li>
                                <li><b>AuNPs (Nano-Goud):</b> Stimuleert fotosynthese en hormonale groei.</li>
                                <li><b>PtNPs (Nano-Platina):</b> Versterkt de energiehuishouding en celdeling op celniveau.</li>
                            </ul>
                        </div>

                        <!-- Waarom Vitales -->
                        <div class="content-section">
                            <h4>Waarom Vitales?</h4>
                            <ul>
                                <li>Exclusieve rechten op Plant Vitales in Azië</li>
                                <li>Wetenschap én praktijk: Wij ondersteunen niet alleen met producten maar ook met advies, trainingen en demonstraties.</li>
                                <li>Duurzaam ondernemen: Wij helpen boeren de balans te vinden tussen winstgevend telen en zorg voor het milieu.</li>
                            </ul>
                        </div>

                        <!-- Samenwerken -->
                        <div class="content-section">
                            <h4>Samenwerken?</h4>
                            <p>Vitales is meer dan een leverancier. Wij zijn een partner in groei, innovatie en duurzaamheid. Sluit je aan bij de toekomst van landbouw. Samen maken we de stap naar een gezondere planeet én betere opbrengsten.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Full-width CTA Section -->
            <div class="row">
                <div class="col-xl-12">
                    <div class="about-cta-section">
                        <h3>Samen bouwen aan een duurzame landbouw? Neem vandaag nog contact op!</h3>
                        <NuxtLink to="/contact" class="thm-btn">Contacteer ons</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import leafImg from '@/assets/images/resources/leaf.png'
</script>

<style scoped>
.about-content {
    margin-top: 60px;
    margin-bottom: 60px;
}

.about_left_column {
    padding-right: 30px;
}

.visual-placeholder {
    background: linear-gradient(135deg, var(--thm-base) 0%, #2d5a2d 100%);
    border-radius: 15px;
    padding: 60px 40px;
    text-align: center;
    color: white;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 500px;
}

.placeholder-content i {
    font-size: 80px;
    margin-bottom: 20px;
    display: block;
}

.placeholder-content h4 {
    font-size: 24px;
    margin-bottom: 10px;
    color: white;
}

.placeholder-content p {
    font-size: 16px;
    opacity: 0.9;
}

.about_right_column {
    padding-left: 30px;
}

.content-section {
    margin-bottom: 40px;
}

.content-section h4 {
    color: var(--thm-base);
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 15px;
    border-bottom: 2px solid var(--thm-base);
    padding-bottom: 8px;
}

.content-section p {
    color: #666;
    line-height: 1.7;
    margin-bottom: 15px;
}

.content-section ul {
    list-style: none;
    padding: 0;
}

.content-section ul li {
    color: #666;
    line-height: 1.6;
    margin-bottom: 12px;
    padding-left: 20px;
    position: relative;
}

.content-section ul li:before {
    content: "•";
    color: var(--thm-base);
    font-weight: bold;
    position: absolute;
    left: 0;
}

.contact-details {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
    margin-top: 15px;
}

.contact-details p {
    margin-bottom: 8px;
    color: #555;
}

.about-cta-section {
    background: var(--thm-base);
    padding: 60px 40px;
    text-align: center;
    border-radius: 15px;
    margin-top: 40px;
}

.about-cta-section h3 {
    color: white;
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 30px;
}

.about-cta-section .thm-btn {
    background: white;
    color: var(--thm-base);
    padding: 15px 40px;
    border-radius: 8px;
    font-weight: 600;
    text-decoration: none;
    display: inline-block;
    transition: all 0.3s ease;
}

.about-cta-section .thm-btn:hover {
    background: #f8f9fa;
    transform: translateY(-2px);
}

@media (max-width: 768px) {
    .about_left_column {
        padding-right: 15px;
        margin-bottom: 30px;
    }
    
    .about_right_column {
        padding-left: 15px;
    }
    
    .visual-placeholder {
        min-height: 300px;
        padding: 40px 20px;
    }
    
    .about-cta-section {
        padding: 40px 20px;
    }
    
    .about-cta-section h3 {
        font-size: 24px;
    }
}
</style>