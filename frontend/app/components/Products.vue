<template>
    <section class="product">
        <div class="container">
            <div class="row">
                <div class="col-xl-3 col-lg-3 col-md-6">
                    <div class="sidebar-wrapper style2">
                        <!-- Sidebar Search -->
                        <div class="single-sidebar">
                            <div class="sidebar-search-box">
                                <form class="search-form" action="#">
                                    <input placeholder="Zoeken" type="text" />
                                    <button type="submit">
                                        <i class="icon-magnifying-glass" aria-hidden="true"></i>
                                    </button>
                                </form>
                            </div>
                        </div>

                        <!-- Sidebar Categories -->
                        <div class="single-sidebar">
                            <div class="categories-box">
                                <div class="title">
                                    <h3>Categorieën</h3>
                                </div>
                                <ul class="categories clearfix">
                                    <li><a href="#">Nano-Mix Producten</a></li>
                                    <li><a href="#">Orthosiliciumzuur</a></li>
                                    <li><a href="#">Nano-Goud</a></li>
                                    <li><a href="#">Nano-Platina</a></li>
                                    <li><a href="#">Biostimulanten</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-9 col-lg-9">
                    <div class="product-items">
                        <div class="row">
                            <div class="col-xl-12">
                                <div class="showing-result-shorting">
                                    <div class="left">
                                        <div class="showing">
                                            <p>Toon {{ productList.length }} van {{ productList.length }} Resultaten</p>
                                        </div>
                                    </div>
                                    <div class="right">
                                        <div class="shorting">
                                            <select>
                                                <option selected>Standaard Sortering</option>
                                                <option>Naam A-Z</option>
                                                <option>Naam Z-A</option>
                                                <option>Nieuwste Eerst</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="all_products">
                            <div class="row">
                                <div v-for="product in productList" :key="product.id"
                                    class="col-xl-4 col-lg-4 col-md-6">
                                    <div class="all_products_single text-center">
                                        <div class="all_product_item_image">
                                            <img :src="product.image" :alt="product.name" />
                                                                                    <div class="all_product_hover">
                                            <div class="all_product_icon">
                                                <NuxtLink :to="product.link">
                                                    <span class="icon-arrow-right"></span>
                                                </NuxtLink>
                                            </div>
                                        </div>
                                        </div>
                                        <h4>
                                            <NuxtLink :to="product.link">{{ product.name }}</NuxtLink>
                                        </h4>
                                        <p>{{ product.subtitle }}</p>
                                    </div>
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
// Placeholder images - you can replace these with actual product images
import img1 from '@/assets/images/shop/shop_product_1.jpg'
import img2 from '@/assets/images/shop/shop_product_2.jpg'
import img3 from '@/assets/images/shop/shop_product_3.jpg'
import img4 from '@/assets/images/shop/shop_product_4.jpg'

const productList = [
    {
        id: 1,
        name: 'Plant Vitales Natural Nano Mix',
        subtitle: 'Geavanceerde Natuurlijke Nano-Elementenmix',
        image: img1,
        link: '/product-detail'
    },
    {
        id: 2,
        name: 'Plant Vitales SioH4 (Orthosiliciumzuur)',
        subtitle: 'Hoogwaardige Orthosiliciumzuur Oplossing',
        image: img2,
        link: '/sioh4'
    },
    {
        id: 3,
        name: 'Plant Vitales AuNPs (Nano-Goud)',
        subtitle: 'Geavanceerde Nano-Goud Biostimulant',
        image: img3,
        link: '/aunps'
    },
    {
        id: 4,
        name: 'Plant Vitales PtNPs (Nano-Platina)',
        subtitle: 'Geavanceerde Nano-Platina Biostimulant',
        image: img4,
        link: '/ptnps'
    }
]
</script>