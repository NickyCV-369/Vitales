<template>
    <section class="contact_one">
        <div class="container">
            <div class="row">
                <div class="col-xl-8">
                    <div class="contact_one_form_box">
                        <div class="block-title text-left">
                            <p>contact with us</p>
                            <h3>write us a message</h3>
                            <div class="leaf">
                                <img :src="leafImage" alt="Leaf" />
                            </div>
                        </div>

                        <form @submit.prevent="handleSubmit" class="contact_one_form">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="input_box">
                                        <input v-model="form.name" type="text" name="name" placeholder="Full name" />
                                        <span v-if="errors.name" class="text-danger">{{ errors.name }}</span>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="input_box">
                                        <input v-model="form.email" type="text" name="email"
                                            placeholder="Email Address" />
                                        <span v-if="errors.email" class="text-danger">{{ errors.email }}</span>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="input_box">
                                        <input v-model="form.phone" type="text" name="phone" placeholder="Phone" />
                                        <span v-if="errors.phone" class="text-danger">{{ errors.phone }}</span>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="input_box">
                                        <input v-model="form.subject" type="text" name="subject"
                                            placeholder="Subject" />
                                        <span v-if="errors.subject" class="text-danger">{{ errors.subject }}</span>
                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <div class="input_box">
                                        <textarea v-model="form.message" name="message"
                                            placeholder="Write Message"></textarea>
                                        <span v-if="errors.message" class="text-danger">{{ errors.message }}</span>
                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <div class="input_box">
                                        <button type="submit" class="thm-btn contact_one_btn">Send Message</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="col-xl-4">
                    <div class="google_map_home5">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
                            class="google-map__home5" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { reactive, ref } from 'vue'
import leafImage from '@/assets/images/resources/leaf.png'

// Reactive form data
const form = reactive({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
})

const errors = reactive({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
})

// Simple form validation
const validateForm = () => {
    let valid = true

    errors.name = form.name ? '' : 'Full name is required.'
    errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? '' : 'Valid email is required.'
    errors.phone = form.phone ? '' : 'Phone is required.'
    errors.subject = form.subject ? '' : 'Subject is required.'
    errors.message = form.message ? '' : 'Message cannot be empty.'

    for (const key in errors) {
        if (errors[key]) valid = false
    }

    return valid
}

const handleSubmit = () => {
    if (validateForm()) {
        // Submit the form or show a success message
        alert('Message sent successfully!')
        // Reset form
        Object.keys(form).forEach(key => form[key] = '')
    }
}
</script>