<template>
    <section class="blog-one">
        <div class="container">
            <div class="block-title text-center">
                <p>from the blog</p>
                <h3>News & Articles</h3>
                <div class="leaf">
                    <img :src="leafImg" alt="Decorative leaf">
                </div>
            </div>
            <div class="row">
                <div v-for="(post, index) in blogPosts" :key="index" class="col-xl-4 col-lg-4">
                    <div class="blog_one_single wow fadeInUp" :data-wow-delay="`${(index + 1) * 100}ms`">
                        <div class="blog_one_image">
                            <div class="blog_image">
                                <img :src="post.image" :alt="post.title">
                                <div class="blog_one_date_box">
                                    <p>{{ post.date }}</p>
                                </div>
                            </div>
                            <div class="blog-one__content">
                                <ul class="list-unstyled blog-one__meta">
                                    <li>
                                        <NuxtLink to="/news_detail">
                                            <i class="far fa-user-circle"></i> {{ post.author }}
                                        </NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/news_detail">
                                            <i class="far fa-comments"></i> {{ post.comments }} Comments
                                        </NuxtLink>
                                    </li>
                                </ul>
                                <h3>
                                    <NuxtLink to="/news_detail">{{ post.title }}</NuxtLink>
                                </h3>
                                <div class="blog_one_text">
                                    <p>{{ post.excerpt }}</p>
                                </div>
                                <div class="read_more_btn">
                                    <NuxtLink to="/news_detail">
                                        <i class="fa fa-angle-right"></i>Read More
                                    </NuxtLink>
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
// Import images
import leafImg from '@/assets/images/resources/leaf.png'
import blogImg1 from '@/assets/images/blog/blog-1-img-1.jpg'
import blogImg2 from '@/assets/images/blog/blog-1-img-2.jpg'
import blogImg3 from '@/assets/images/blog/blog-1-img-3.jpg'

// Blog posts data
const blogPosts = [
    {
        image: blogImg1,
        date: '30 Oct, 2019',
        author: 'Admin',
        comments: 2,
        title: "Agriculture Miracle you Don't Know About",
        excerpt: "There are lorem ipsum is simply free many variations of ipsum the majority suffered."
    },
    {
        image: blogImg2,
        date: '30 Oct, 2019',
        author: 'Admin',
        comments: 2,
        title: "Amount of Freak Bread or Other Fruits",
        excerpt: "There are lorem ipsum is simply free many variations of ipsum the majority suffered."
    },
    {
        image: blogImg3,
        date: '30 Oct, 2019',
        author: 'Admin',
        comments: 2,
        title: "Winter Wheat Harvest Gathering Momentum",
        excerpt: "There are lorem ipsum is simply free many variations of ipsum the majority suffered."
    }
]
</script>