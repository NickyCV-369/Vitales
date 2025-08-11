<template>
    <section class="contact-one">
        <div class="container">
            <div class="row">
                <div class="col-xl-7">
                    <div class="contact-one__form__wrap">
                        <div class="block-title text-left">
                            <p>Contact met ons</p>
                            <h3>Schrijf ons een bericht</h3>
                            <div class="leaf">
                                <img :src="leafImage" alt="Leaf">
                            </div>
                        </div>
                        <form @submit.prevent="submitForm" class="contact-one__form">
                            <div class="row low-gutters">
                                <div class="col-md-6">
                                    <div class="input-group">
                                        <input v-model="form.name" type="text" name="name" placeholder="Naam">
                                    </div>
                                    <span v-if="errors.name" class="error">{{ errors.name }}</span>
                                </div>
                                <div class="col-md-6">
                                    <div class="input-group">
                                        <input v-model="form.email" type="email" name="email"
                                            placeholder="E-mailadres">
                                    </div>
                                    <span v-if="errors.email" class="error">{{ errors.email }}</span>
                                </div>
                                <div class="col-md-6">
                                    <div class="input-group">
                                        <input v-model="form.phone" type="text" name="phone" placeholder="Telefoonnummer">
                                    </div>
                                    <span v-if="errors.phone" class="error">{{ errors.phone }}</span>
                                </div>
                                <div class="col-md-6">
                                    <div class="input-group">
                                        <input v-model="form.subject" type="text" name="subject" placeholder="Onderwerp">
                                    </div>
                                    <span v-if="errors.subject" class="error">{{ errors.subject }}</span>
                                </div>
                                <div class="col-md-12">
                                    <div class="input-group">
                                        <textarea v-model="form.message" name="message"
                                            placeholder="Bericht"></textarea>
                                    </div>
                                    <span v-if="errors.message" class="error">{{ errors.message }}</span>
                                </div>
                                <div class="col-md-12">
                                    <div class="input-group contact__btn">
                                        <button type="submit" class="thm-btn contact-one__btn">Verstuur Bericht</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-xl-5">
                    <div class="have_questions">
                        <div class="block-title text-center">
                            <p>Neem contact op</p>
                            <h3>Laat van je horen</h3>
                            <div class="leaf">
                                <img :src="leafImage" alt="Leaf">
                            </div>
                        </div>
                        <div class="have_questions_text">
                            <p>
                                Heb je vragen of wil je meer weten over onze biotechnologische oplossingen? Stuur ons een bericht via het formulier — wij nemen zo snel mogelijk contact op.
                            </p>
                        </div>
                        <div class="have_questions_btn">
                            <a href="/about" class="thm-btn">Meer Informatie</a>
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
import contactImage from '~/assets/images/resources/contact_img.jpg';

const form = ref({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
});

const errors = ref({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
});

const submitForm = () => {
    errors.value = {};  // Reset errors

    // Validation checks
    if (!form.value.name) {
        errors.value.name = 'Name is required';
    }

    if (!form.value.email || !/\S+@\S+\.\S+/.test(form.value.email)) {
        errors.value.email = 'Valid email is required';
    }

    if (!form.value.phone) {
        errors.value.phone = 'Phone number is required';
    }

    if (!form.value.subject) {
        errors.value.subject = 'Subject is required';
    }

    if (!form.value.message) {
        errors.value.message = 'Message is required';
    }

    // If there are no errors, submit form (this is where actual form submission logic would go)
    if (Object.keys(errors.value).length === 0) {
        console.log('Form Submitted', form.value);
        // Add actual form submission logic here (e.g., sending the data to an API)
    }
};
</script>

<style scoped>
/* Scoped styles if needed (e.g., for error messages) */
.error {
    color: red;
    font-size: 12px;
}
</style>