<template>
    <section class="blog_four">
        <div class="container">
            <div class="row">
                <!-- Left Content Block -->
                <div class="col-xl-4 col-lg-4">
                    <div class="block-title text-left">
                        <p>from the blog</p>
                        <h3>blog posts And<br>articles Updated<br>Daily</h3>
                        <div class="leaf">
                            <img :src="leafImg" alt="leaf" />
                        </div>
                    </div>
                    <div class="blog-four_btn">
                        <NuxtLink to="#" class="thm-btn">View All News</NuxtLink>
                    </div>
                </div>

                <!-- Loop Blog Posts -->
                <div v-for="(blog, index) in blogPosts" :key="index" class="col-xl-4 col-lg-4">
                    <div class="blog_four_single">
                        <div class="blog_four_image">
                            <img :src="blog.image" :alt="blog.title" />
                            <div class="blog_four_date_box">
                                <p>{{ blog.date }}</p>
                            </div>
                        </div>
                        <div class="blog-four_content">
                            <ul class="list-unstyled blog-four_meta">
                                <li>
                                    <NuxtLink :to="blog.link">
                                        <i class="far fa-user-circle"></i> {{ blog.author }}
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink :to="blog.link">
                                        <i class="far fa-comments"></i> {{ blog.comments }} Comments
                                    </NuxtLink>
                                </li>
                            </ul>
                            <NuxtLink :to="blog.link" class="blog_four_title">
                                <h3 v-html="blog.title"></h3>
                            </NuxtLink>
                            <div class="blog_four_read_more_btn">
                                <NuxtLink :to="blog.link"><i class="fa fa-angle-right"></i>Read More</NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
// Image imports
import blogImg1 from '@/assets/images/blog/blog-4-img-1.jpg'
import blogImg2 from '@/assets/images/blog/blog-4-img-2.jpg'
import leafImg from '@/assets/images/resources/leaf.png'

// Blog post data
const blogPosts = [
    {
        image: blogImg1,
        date: '30 Oct, 2019',
        author: 'Admin',
        comments: 2,
        title: 'Agriculture Miracle you<br>Don\'t Know About',
        link: '/news_detail',
    },
    {
        image: blogImg2,
        date: '30 Oct, 2019',
        author: 'Admin',
        comments: 2,
        title: 'Winter Wheat Harvest Gathering<br>Momentum',
        link: '/news_detail',
    },
]
</script>