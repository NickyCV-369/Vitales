<template>
    <section class="distributeur-section">
        <div class="container">
            <div class="row">
                <div class="col-xl-8">
                    <div class="distributeur-form__wrap">
                        <div class="block-title text-left">
                            <p class="subtitle">Distributeur Aanmelding</p>
                            <h3 class="main-title">Word Distributeur van Vitales</h3>
                            <div class="leaf">
                                <img :src="leafImage" alt="Leaf">
                            </div>
                        </div>
                        
                        <div class="intro-text">
                            <p>Ben jij geïnteresseerd om officiële distributeur te worden van onze innovatieve biotechnologische oplossingen? Vul onderstaand formulier in en wij nemen zo snel mogelijk contact met je op.</p>
                        </div>

                        <form @submit.prevent="submitForm" class="distributeur-form">
                            <div class="row low-gutters">
                                <div class="col-md-6">
                                    <div class="input-group">
                                        <input v-model="form.fullName" type="text" name="fullName" placeholder="Volledige Naam *" class="form-input">
                                    </div>
                                    <span v-if="errors.fullName" class="error">{{ errors.fullName }}</span>
                                </div>
                                <div class="col-md-6">
                                    <div class="input-group">
                                        <input v-model="form.companyName" type="text" name="companyName" placeholder="Bedrijfsnaam *" class="form-input">
                                    </div>
                                    <span v-if="errors.companyName" class="error">{{ errors.companyName }}</span>
                                </div>
                                <div class="col-md-6">
                                    <div class="input-group">
                                        <select v-model="form.country" name="country" class="form-select">
                                            <option value="">Selecteer Land *</option>
                                            <option value="Nederland">Nederland</option>
                                            <option value="België">België</option>
                                            <option value="Duitsland">Duitsland</option>
                                            <option value="Frankrijk">Frankrijk</option>
                                            <option value="Spanje">Spanje</option>
                                            <option value="Italië">Italië</option>
                                            <option value="Verenigd Koninkrijk">Verenigd Koninkrijk</option>
                                            <option value="Polen">Polen</option>
                                            <option value="Tsjechië">Tsjechië</option>
                                            <option value="Slowakije">Slowakije</option>
                                            <option value="Hongarije">Hongarije</option>
                                            <option value="Roemenië">Roemenië</option>
                                            <option value="Bulgarije">Bulgarije</option>
                                            <option value="Kroatië">Kroatië</option>
                                            <option value="Slovenië">Slovenië</option>
                                            <option value="Oostenrijk">Oostenrijk</option>
                                            <option value="Zwitserland">Zwitserland</option>
                                            <option value="Luxemburg">Luxemburg</option>
                                            <option value="Denemarken">Denemarken</option>
                                            <option value="Zweden">Zweden</option>
                                            <option value="Noorwegen">Noorwegen</option>
                                            <option value="Finland">Finland</option>
                                            <option value="Ierland">Ierland</option>
                                            <option value="Portugal">Portugal</option>
                                            <option value="Griekenland">Griekenland</option>
                                            <option value="Andere">Andere</option>
                                        </select>
                                    </div>
                                    <span v-if="errors.country" class="error">{{ errors.country }}</span>
                                </div>
                                <div class="col-md-6">
                                    <div class="input-group">
                                        <input v-model="form.phone" type="text" name="phone" placeholder="Telefoonnummer *" class="form-input">
                                    </div>
                                    <span v-if="errors.phone" class="error">{{ errors.phone }}</span>
                                </div>
                                <div class="col-md-6">
                                    <div class="input-group">
                                        <input v-model="form.email" type="email" name="email" placeholder="E-mailadres *" class="form-input">
                                    </div>
                                    <span v-if="errors.email" class="error">{{ errors.email }}</span>
                                </div>
                                <div class="col-md-6">
                                    <div class="input-group">
                                        <input v-model="form.website" type="text" name="website" placeholder="Website (optioneel)" class="form-input">
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="input-group">
                                        <textarea v-model="form.companyDescription" name="companyDescription" 
                                            placeholder="Korte Beschrijving van uw bedrijf *" class="form-textarea"></textarea>
                                    </div>
                                    <span v-if="errors.companyDescription" class="error">{{ errors.companyDescription }}</span>
                                </div>
                                <div class="col-md-12">
                                    <div class="input-group">
                                        <textarea v-model="form.whyDistributor" name="whyDistributor" 
                                            placeholder="Waarom wilt u distributeur worden? *" class="form-textarea"></textarea>
                                    </div>
                                    <span v-if="errors.whyDistributor" class="error">{{ errors.whyDistributor }}</span>
                                </div>
                                <div class="col-md-12">
                                    <div class="input-group submit-group">
                                        <button type="submit" class="submit-btn" :disabled="isSubmitting">
                                            <span v-if="isSubmitting" class="loading-spinner"></span>
                                            {{ isSubmitting ? 'Versturen...' : 'Aanmelden als Distributeur' }}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>

                        <!-- Success Message -->
                        <div v-if="showSuccess" class="success-message">
                            <div class="alert alert-success">
                                <div class="success-icon">
                                    <i class="fa fa-check-circle"></i>
                                </div>
                                <div class="success-content">
                                    <h4>Bedankt voor je aanmelding!</h4>
                                    <p>Wij nemen binnenkort contact met je op.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4">
                    <div class="info-sidebar">
                        <div class="block-title text-center">
                            <p class="subtitle">Distributeur Programma</p>
                            <h3 class="main-title">Partner met Vitales</h3>
                            <div class="leaf">
                                <img :src="leafImage" alt="Leaf">
                            </div>
                        </div>
                        <div class="info-content">
                            <p class="info-text">
                                Word onderdeel van ons groeiende netwerk van distributeurs en help boeren over de hele wereld toegang te krijgen tot onze innovatieve biotechnologische oplossingen.
                            </p>
                            <div class="benefits-section">
                                <h4>Voordelen van Partnership</h4>
                                <ul class="benefits-list">
                                    <li><i class="fa fa-check"></i> Exclusieve distributierechten</li>
                                    <li><i class="fa fa-check"></i> Technische ondersteuning</li>
                                    <li><i class="fa fa-check"></i> Marketing materiaal</li>
                                    <li><i class="fa fa-check"></i> Training en certificering</li>
                                    <li><i class="fa fa-check"></i> Concurrentievoordeel</li>
                                </ul>
                            </div>
                        </div>
                        <div class="sidebar-cta">
                            <a href="/product" class="cta-btn">Bekijk Producten</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- CTA Banner -->
        <div class="cta-banner">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="cta-content text-center">
                            <h3>Vragen over distributeurschap?</h3>
                            <p>Neem contact met ons op via <a href="mailto:info@vitales.vn">info@vitales.vn</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

// Importing images
import leafImage from '~/assets/images/resources/leaf.png';

const form = ref({
    fullName: '',
    companyName: '',
    country: '',
    phone: '',
    email: '',
    website: '',
    companyDescription: '',
    whyDistributor: ''
});

const errors = ref({});
const isSubmitting = ref(false);
const showSuccess = ref(false);

const submitForm = () => {
    errors.value = {};  // Reset errors
    isSubmitting.value = true;

    // Validation checks
    if (!form.value.fullName.trim()) {
        errors.value.fullName = 'Volledige naam is verplicht';
    }

    if (!form.value.companyName.trim()) {
        errors.value.companyName = 'Bedrijfsnaam is verplicht';
    }

    if (!form.value.country) {
        errors.value.country = 'Land is verplicht';
    }

    if (!form.value.phone.trim()) {
        errors.value.phone = 'Telefoonnummer is verplicht';
    }

    if (!form.value.email || !/\S+@\S+\.\S+/.test(form.value.email)) {
        errors.value.email = 'Geldig e-mailadres is verplicht';
    }

    if (!form.value.companyDescription.trim()) {
        errors.value.companyDescription = 'Bedrijfsbeschrijving is verplicht';
    }

    if (!form.value.whyDistributor.trim()) {
        errors.value.whyDistributor = 'Motivatie is verplicht';
    }

    // If there are no errors, submit form
    if (Object.keys(errors.value).length === 0) {
        // Simulate form submission
        setTimeout(() => {
            console.log('Form Submitted', form.value);
            isSubmitting.value = false;
            showSuccess.value = true;
            
            // Reset form
            form.value = {
                fullName: '',
                companyName: '',
                country: '',
                phone: '',
                email: '',
                website: '',
                companyDescription: '',
                whyDistributor: ''
            };
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                showSuccess.value = false;
            }, 5000);
        }, 1500);
    } else {
        isSubmitting.value = false;
    }
};
</script>

<style scoped>
.distributeur-section {
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    padding: 80px 0;
    min-height: 100vh;
}

.distributeur-form__wrap {
    background: white;
    padding: 50px;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
}

.block-title {
    margin-bottom: 40px;
}

.subtitle {
    color: #5e9054;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.main-title {
    color: #2c3e50;
    font-size: 42px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 20px;
}

.leaf {
    text-align: center;
    margin-top: 20px;
}

.leaf img {
    width: 60px;
    height: auto;
}

.intro-text {
    margin-bottom: 40px;
    font-size: 18px;
    line-height: 1.7;
    color: #6c757d;
    background: #f8f9fa;
    padding: 25px;
    border-radius: 15px;
    border-left: 5px solid #5e9054;
}

.distributeur-form {
    margin-top: 30px;
}

.input-group {
    margin-bottom: 25px;
}

.form-input,
.form-select,
.form-textarea {
    width: 100%;
    padding: 18px 20px;
    border: 2px solid #e9ecef;
    border-radius: 12px;
    background-color: #ffffff;
    font-size: 16px;
    color: #495057;
    transition: all 0.3s ease;
    font-family: inherit;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
    outline: none;
    border-color: #5e9054;
    box-shadow: 0 0 0 3px rgba(94, 144, 84, 0.1);
    transform: translateY(-2px);
}

.form-textarea {
    min-height: 120px;
    resize: vertical;
}

.form-select {
    cursor: pointer;
}

.form-select option {
    padding: 10px;
}

.submit-group {
    margin-top: 40px;
}

.submit-btn {
    width: 100%;
    padding: 18px 30px;
    background: linear-gradient(135deg, #5e9054 0%, #4a7c59 100%);
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.submit-btn:hover:not(:disabled) {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(94, 144, 84, 0.3);
}

.submit-btn:disabled {
    opacity: 0.7;
    cursor: not-allowed;
}

.loading-spinner {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top-color: white;
    animation: spin 1s ease-in-out infinite;
    margin-right: 10px;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}

.error {
    color: #dc3545;
    font-size: 14px;
    margin-top: 8px;
    display: block;
    font-weight: 500;
}

.success-message {
    margin-top: 30px;
}

.alert {
    padding: 25px;
    border-radius: 15px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 20px;
}

.alert-success {
    background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%);
    border: 2px solid #28a745;
    color: #155724;
}

.success-icon {
    font-size: 24px;
    color: #28a745;
}

.success-content h4 {
    margin-bottom: 8px;
    color: #155724;
    font-weight: 600;
}

.info-sidebar {
    background: white;
    padding: 40px 30px;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    height: fit-content;
    position: sticky;
    top: 30px;
}

.info-content {
    margin-top: 30px;
}

.info-text {
    font-size: 16px;
    line-height: 1.7;
    color: #6c757d;
    margin-bottom: 30px;
}

.benefits-section {
    margin-top: 30px;
}

.benefits-section h4 {
    color: #2c3e50;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;
}

.benefits-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.benefits-list li {
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid #f1f3f4;
}

.benefits-list li:last-child {
    border-bottom: none;
}

.benefits-list i {
    color: #5e9054;
    margin-right: 15px;
    font-size: 16px;
    background: #e8f5e8;
    padding: 8px;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.sidebar-cta {
    margin-top: 30px;
    text-align: center;
}

.cta-btn {
    display: inline-block;
    padding: 15px 30px;
    background: linear-gradient(135deg, #5e9054 0%, #4a7c59 100%);
    color: white;
    text-decoration: none;
    border-radius: 10px;
    font-weight: 600;
    transition: all 0.3s ease;
}

.cta-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(94, 144, 84, 0.3);
    color: white;
}

.cta-banner {
    background: linear-gradient(135deg, #5e9054 0%, #4a7c59 100%);
    padding: 50px 0;
    margin-top: 60px;
    border-radius: 20px 20px 0 0;
}

.cta-content h3 {
    color: white;
    margin-bottom: 15px;
    font-size: 28px;
    font-weight: 600;
}

.cta-content p {
    color: rgba(255, 255, 255, 0.9);
    font-size: 18px;
    margin: 0;
}

.cta-content a {
    color: white;
    text-decoration: none;
    font-weight: 600;
    border-bottom: 2px solid white;
    transition: all 0.3s ease;
}

.cta-content a:hover {
    color: #f8f9fa;
    border-bottom-color: #f8f9fa;
}

/* Responsive Design */
@media (max-width: 768px) {
    .distributeur-form__wrap,
    .info-sidebar {
        padding: 30px 20px;
    }
    
    .main-title {
        font-size: 32px;
    }
    
    .intro-text {
        font-size: 16px;
        padding: 20px;
    }
    
    .cta-banner {
        padding: 40px 20px;
    }
    
    .cta-content h3 {
        font-size: 24px;
    }
}

@media (max-width: 576px) {
    .distributeur-section {
        padding: 60px 0;
    }
    
    .main-title {
        font-size: 28px;
    }
    
    .form-input,
    .form-select,
    .form-textarea {
        padding: 15px 18px;
        font-size: 15px;
    }
}
</style> 