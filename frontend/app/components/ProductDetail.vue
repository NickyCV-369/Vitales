<template>
    <div>
        <section class="product_detail">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6">
                        <div class="product_detail_image">
                            <img :src="currentProduct.image" :alt="currentProduct.name">
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6">
                        <div class="product_detail_content">
                            <h2>{{ currentProduct.name }}</h2>
                            <div class="product_detail_review_box">
                                <div class="product_detail_price_box">
                                    <p>{{ currentProduct.subtitle }}</p>
                                </div>
                                <div class="product_detail_review">
                                    <a href="#"><i class="fa fa-star"></i></a>
                                    <a href="#"><i class="fa fa-star"></i></a>
                                    <a href="#"><i class="fa fa-star"></i></a>
                                    <a href="#"><i class="fa fa-star"></i></a>
                                    <a href="#"><i class="fa fa-star"></i></a>
                                    <span>{{ currentProduct.rating }}</span>
                                </div>
                            </div>
                            <div class="product_detail_text">
                                <p>{{ currentProduct.shortDescription }}</p>
                            </div>
                            <ul class="list-unstyled product_detail_address">
                                <li>REF. {{ currentProduct.ref }}</li>
                                <li>{{ currentProduct.availability }}</li>
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
                                <li>Categorie: {{ currentProduct.category }}</li>
                                <li>Tags: {{ currentProduct.tags }}</li>
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
                <ProductTab />
            </div>
        </section>
        <SimilarProducts />
    </div>

</template>

<script setup>
import productImage1 from '@/assets/images/shop/shop_product_1.jpg'
import productImage2 from '@/assets/images/shop/shop_product_2.jpg'
import productImage3 from '@/assets/images/shop/shop_product_3.jpg'
import productImage4 from '@/assets/images/shop/shop_product_4.jpg'

// Get the current route to determine which product to show
const route = useRoute()
const productId = route.query.product || 'natural-nano-mix'

// Define all products
const products = {
    'natural-nano-mix': {
        name: 'Plant Vitales Natural Nano Mix',
        subtitle: 'Geavanceerde Natuurlijke Nano-Elementenmix',
        shortDescription: 'Plant Vitales Natural Nano Mix bevat meer dan 80 essentiële mineralen en sporenelementen in de vorm van nanodeeltjes, nauwkeurig samengesteld naar de natuurlijke samenstelling van vulkanisch gesteente. Door de nanoformulering zijn deze elementen direct bio-beschikbaar, stimuleren ze plantmetabolisme op moleculair niveau en verbeteren ze de suikerrijkdom (Brix) en voedingswaarde van fruit en groenten.',
        image: productImage1,
        ref: 'VIT-NNM-001',
        category: 'Nano-Mix Producten',
        tags: 'Nano-mineralen, Biostimulant, Plantvoeding',
        rating: 'Hoogwaardige Biostimulant',
        availability: 'Beschikbaar voor distributeurs'
    },
    'sioh4': {
        name: 'Plant Vitales SioH4 (Orthosiliciumzuur)',
        subtitle: 'Hoogwaardige Orthosiliciumzuur Oplossing',
        shortDescription: 'Plant Vitales SioH4 biedt een stabiele, opneembare vorm van silicium die de structurele integriteit van planten versterkt, de natuurlijke weerstand tegen biotische en abiotische stress verhoogt en de opname van essentiële mineralen optimaliseert. Voor robuuste gewassen met verbeterde groei en kwaliteit.',
        image: productImage2,
        ref: 'VIT-SIO-002',
        category: 'Orthosiliciumzuur',
        tags: 'Celwandversterking, Stressresistentie, Nutrientopname',
        rating: 'Hoogwaardige Biostimulant',
        availability: 'Beschikbaar voor distributeurs'
    },
    'aunps': {
        name: 'Plant Vitales AuNPs (Nano-Goud)',
        subtitle: 'Geavanceerde Nano-Goud Biostimulant',
        shortDescription: 'Plant Vitales AuNPs is een hoogwaardige nanotechnologische biostimulant die met colloïdaal goud de fotosynthese, groei en stressweerbaarheid van planten versterkt. Door stimulatie van energieoverdracht, hormonale routes en antioxidatieve bescherming levert het direct merkbare verbeteringen in opbrengst, vitaliteit en plantontwikkeling – zelfs onder extreme omstandigheden.',
        image: productImage3,
        ref: 'VIT-AUN-003',
        category: 'Nano-Goud',
        tags: 'Fotosynthese, Metabolisme, Opbrengstverhoging',
        rating: 'Hoogwaardige Biostimulant',
        availability: 'Beschikbaar voor distributeurs'
    },
    'ptnps': {
        name: 'Plant Vitales PtNPs (Nano-Platina)',
        subtitle: 'Geavanceerde Nano-Platina Biostimulant',
        shortDescription: 'Plant Vitales PtNPs is een innovatieve biostimulant op basis van colloïdaal platinum in nanovorm. Dankzij zijn unieke katalytische en redoxactieve eigenschappen verbetert het de celademhaling, verhoogt het de delingssnelheid en versterkt het het natuurlijke afweersysteem van planten. Voor vitale, robuuste groei onder intensieve teeltomstandigheden.',
        image: productImage4,
        ref: 'VIT-PTN-004',
        category: 'Nano-Platina',
        tags: 'Celdeling, Redoxbalans, Stressweerbaarheid',
        rating: 'Hoogwaardige Biostimulant',
        availability: 'Beschikbaar voor distributeurs'
    }
}

// Get current product based on route
const currentProduct = computed(() => {
    return products[productId] || products['natural-nano-mix']
})
</script>

<style lang="scss" scoped></style>