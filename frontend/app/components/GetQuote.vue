<template>
  <section class="get_quote">
    <div class="container">
      <div class="inner-container">
        <div class="row no-gutters">
          <div class="col-xl-8">
            <form @submit.prevent="handleSubmit" class="get_quote_one__form">
              <div class="get_quote_one_form_inner">
                <h3>Gratis Offerte Aanvragen</h3>
                <div class="row">
                  <div class="col-md-6">
                    <div class="input_box">
                      <input type="text" v-model="form.name" placeholder="Volledige naam" required>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input_box">
                      <input type="text" v-model="form.email" placeholder="E-mailadres" required>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input_box">
                      <input type="text" v-model="form.phone" placeholder="Telefoonnummer">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input_box">
                      <input type="text" v-model="form.subject" placeholder="Onderwerp">
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="input_box">
                      <textarea v-model="form.message" placeholder="Schrijf uw bericht"></textarea>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="input_box">
                      <button type="submit" class="thm-btn get_quote__btn">Verzoek Versturen</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="col-xl-4">
            <div class="get_quote_right" :style="`background-image: url(${quoteBg})`">
              <h3>Zoekt u naar<br> landbouw,<br> biologische & eco<br> diensten</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Import background image
import quoteBg from '~/assets/images/resources/get_quote_bg.jpg'

// Form data
const form = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

// Form submission handler
const handleSubmit = () => {
  // Implement your form submission logic here
  console.log('Form submitted:', form.value)
  // You can add API call or form processing logic
}
</script>