<template>
    <section class="all_products_two">
        <div class="container">
            <div class="block-title text-center">
                <p>Shop items</p>
                <h3>similar products</h3>
                <div class="leaf">
                    <img :src="leafImg" alt="Leaf" />
                </div>
            </div>

            <div class="all_products">
                <div class="row">
                    <div class="col-xl-3 col-lg-3 col-md-6" v-for="(product, index) in products" :key="index">
                        <div class="all_products_single text-center">
                            <div class="all_product_item_image">
                                <img :src="product.image" :alt="product.title" />
                                <div class="all_product_hover">
                                    <div class="all_product_icon">
                                        <a href="#"><span class="icon-shopping-cart"></span></a>
                                    </div>
                                </div>
                            </div>
                            <h4>{{ product.title }}</h4>
                            <p>{{ product.price }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import leafImg from '~/assets/images/resources/leaf.png'
import similarPro1 from '~/assets/images/shop/similar_pro_1.jpg'
import similarPro2 from '~/assets/images/shop/similar_pro_2.jpg'
import similarPro3 from '~/assets/images/shop/similar_pro_3.jpg'
import similarPro4 from '~/assets/images/shop/similar_pro_4.jpg'

const products = [
    { title: 'Split kiwi', price: '$5.98', image: similarPro1 },
    { title: 'Chinese cabbage', price: '$4.99', image: similarPro2 },
    { title: 'Chili pepper', price: '$4.98', image: similarPro3 },
    { title: 'Lemons', price: '$6.00', image: similarPro4 }
]
</script>