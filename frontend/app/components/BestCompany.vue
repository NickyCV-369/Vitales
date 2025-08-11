<template>
    <section class="best_company">
        <div class="container">
            <div class="row">
                <div class="col-xl-6">
                    <div class="company_image">
                        <img :src="companyImg" alt="Company" />
                    </div>
                </div>
                <div class="col-xl-6">
                    <div class="company_content">
                        <div class="block-title text-left">
                            <p>the best company</p>
                            <h3>We offer best agriculture services</h3>
                            <div class="leaf">
                                <img :src="leafImg" alt="Leaf" />
                            </div>
                        </div>
                        <ul class="company_list_box list-unstyled">
                            <li><i class="fa fa-check"></i>Every employee wears a photo ID badge.</li>
                            <li><i class="fa fa-check"></i>Mobiles are custom wrapped for easy identification.</li>
                            <li><i class="fa fa-check"></i>We are a fully insured nationally ranked brand.</li>
                            <li>
                                <i class="fa fa-check"></i>All work is backed by our exclusive “Streak-Free Guarantee”.
                            </li>
                            <li><i class="fa fa-check"></i>We offer multiple services to maintain your home.</li>
                            <li><i class="fa fa-check"></i>Our services are more affordable than you think.</li>
                        </ul>
                        <div class="company_button_box">
                            <div class="company_icon">
                                <img :src="companyIcon" alt="Company Icon" />
                            </div>
                            <div class="company_text">
                                <p>We Are ISO Certified Company</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import companyImg from '@/assets/images/resources/company-img-.jpg'
import leafImg from '@/assets/images/resources/leaf.png'
import companyIcon from '@/assets/images/resources/company-icon-1.png'
</script>