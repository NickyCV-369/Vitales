<template>
    <div>
        <section class="product_detail">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6">
                        <div class="product_detail_image">
                            <img :src="productImage" alt="Plant Vitales PtNPs Nano-Platina">
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6">
                        <div class="product_detail_content">
                            <h2>Plant Vitales PtNPs (Nano-Platina)</h2>
                            <div class="product_detail_review_box">
                                <div class="product_detail_price_box">
                                    <p>Geavanceerde Nano-Platina Biostimulant</p>
                                </div>
                                <div class="product_detail_review">
                                    <a href="#"><i class="fa fa-star"></i></a>
                                    <a href="#"><i class="fa fa-star"></i></a>
                                    <a href="#"><i class="fa fa-star"></i></a>
                                    <a href="#"><i class="fa fa-star"></i></a>
                                    <a href="#"><i class="fa fa-star"></i></a>
                                    <span>Hoogwaardige Biostimulant</span>
                                </div>
                            </div>
                            <div class="product_detail_text">
                                <p>
                                    Plant Vitales PtNPs bevat platinananodeeltjes die de enzymatische activiteit verhogen, de celademhaling optimaliseren en de plantweerstand tegen extreme stressfactoren versterken. Voor maximale groei en kwaliteit van gewassen.
                                </p>
                            </div>
                            <ul class="list-unstyled product_detail_address">
                                <li>REF. VIT-PTN-004</li>
                                <li>Beschikbaar voor distributeurs</li>
                            </ul>
                            <div class="product-quantity-box">
                                <div class="input-box">
                                    <input class="quantity-spinner" type="number" value="1" name="quantity" disabled>
                                </div>
                                <div class="addto-cart-box">
                                    <a href="/contact" class="thm-btn">Contact Opnemen</a>
                                </div>
                                <div class="wishlist_btn">
                                    <a href="/distributeur" class="thm-btn">Distributeur Worden</a>
                                </div>
                            </div>
                            <ul class="list-unstyled category_tag_list">
                                <li>Categorie: Nano-Platina</li>
                                <li>Tags: Enzymactiviteit, Celademhaling, Stressweerstand</li>
                            </ul>
                            <div class="product_detail_share_box">
                                <div class="share_box_title">
                                    <h2>Deel met vrienden</h2>
                                </div>
                                <div class="share_box_social">
                                    <a href="#"><i class="fab fa-facebook-square"></i></a>
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href="#"><i class="fab fa-instagram"></i></a>
                                    <a href="#"><i class="fab fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ProductTabPtNPs />
            </div>
        </section>
        <SimilarProducts />
    </div>
</template>

<script setup>
import productImage from '@/assets/images/shop/shop_product_4.jpg'
</script>

<style lang="scss" scoped></style> 