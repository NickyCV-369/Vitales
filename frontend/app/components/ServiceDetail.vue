<template>
    <section class="service_detail">
        <div class="container">
            <div class="row">
                <div class="col-xl-4 col-lg-4">
                    <div class="service_details_left">
                        <ul class="list-unstyled service_all_list">
                            <li><a href="#">All Services</a></li>
                            <li class="active"><a href="#">Fresh Vegetables</a></li>
                            <li><a href="#">Agriculture Products</a></li>
                            <li><a href="#">Organic Products</a></li>
                            <li><a href="#">Dairy Products</a></li>
                        </ul>
                        <div class="need_help_box">
                            <h2>Need Help?</h2>
                            <p>
                                Speak with a human to filling out a form? Call corporate office and we will connect
                                you with a team member who can help.
                            </p>
                            <h3><span class="icon-phone-call"></span>666 888 0000</h3>
                        </div>
                        <div class="download_file_box">
                            <a href="#"><i class="icon-pdf"></i>Download PDF File</a>
                        </div>
                    </div>
                </div>

                <div class="col-xl-8 col-lg-8">
                    <div class="service_details_right">
                        <div class="service_details_One_img">
                            <img :src="serviceImg1" alt="Service Image 1" />
                        </div>

                        <div class="harvest_innovations">
                            <h2>Harvest Innovations</h2>
                            <p>
                                There are many variations of passages of psum available, but the majority have
                                suffered alteration in some form, by injected humour, or randomised words which
                                don't look even slightly believable...
                            </p>
                            <p class="harvest_innovations_bottom_text">
                                Beyond more stoic this along goodness hey this this wow manatee mongoose one as
                                since a far flustered impressive manifest far crud...
                            </p>
                        </div>

                        <div class="row">
                            <div class="col-xl-6 col-lg-6">
                                <div class="service_details_single_img_box">
                                    <img :src="serviceImg2" alt="Service Image 2" />
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6">
                                <div class="service_details_single_img_box">
                                    <img :src="serviceImg3" alt="Service Image 3" />
                                </div>
                            </div>
                        </div>

                        <div class="agriculture_solutions">
                            <h3>Agriculture Solutions</h3>
                            <p>
                                Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui
                                dolorem ipsum quia quaed inventore veritatis...
                            </p>
                        </div>

                        <ul class="list-unstyled">
                            <li><i class="fa fa-check"></i>Research beyond the business plan</li>
                            <li><i class="fa fa-check"></i>Marketing options and rates</li>
                            <li><i class="fa fa-check"></i>The ability to turnaround consulting</li>
                            <li><i class="fa fa-check"></i>Help companies into more profitable</li>
                        </ul>

                        <p class="service_details_last_text">
                            Lorem Ipsum has been the industry standard dummy text ever since the 1500s...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import serviceImg1 from '@/assets/images/service/service-detail_img_1.jpg'
import serviceImg2 from '@/assets/images/service/service-detail_img_2.jpg'
import serviceImg3 from '@/assets/images/service/service-detail_img_3.jpg'

</script>