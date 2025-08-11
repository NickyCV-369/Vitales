<template>
    <div class="blog_two">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="block-title">
                        <p>our team members</p>
                        <h3>meet the farmers</h3>
                        <div class="leaf">
                            <img src="/assets/images/resources/leaf.png" alt="">
                        </div>
                    </div>
                    <div class="all_posts_btn">
                        <NuxtLink to="/news" class="thm-btn">View All Posts</NuxtLink>
                    </div>
                </div>
            </div>
            <div class="row">
                <div v-for="(post, index) in blogPosts" :key="index" class="col-xl-4 col-lg-6">
                    <div class="blog_two_single wow fadeInLeft" :data-wow-delay="`${(index + 1) * 300}ms`">
                        <div class="blog_two_image">
                            <img :src="post.image" alt="">
                            <div class="blog_two_date_box">
                                <p>{{ post.date }}</p>
                            </div>
                        </div>
                        <div class="blog-two_content">
                            <ul class="list-unstyled blog-two_meta">
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
                                <NuxtLink to="/news_detail" class="blog_two_title">
                                    {{ post.title }}
                                </NuxtLink>
                            </h3>
                            <div class="blog_two_text">
                                <p>{{ post.excerpt }}</p>
                            </div>
                            <div class="blog_two_read_more_btn">
                                <NuxtLink to="/news_detail">
                                    <i class="fa fa-angle-right"></i> Read More
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import blogImg1 from '@/assets/images/blog/blog-2-img-1.jpg'
import blogImg2 from '@/assets/images/blog/blog-2-img-2.jpg'
import blogImg3 from '@/assets/images/blog/blog-2-img-1.jpg'

const blogPosts = [
    {
        image: blogImg1,
        date: '30 Oct, 2019',
        author: 'Admin',
        comments: 2,
        title: "Agriculture Miracle you Don't Know About",
        excerpt:
            'There are lorem ipsum is simply free many variations of ipsum the majority suffered.',
    },
    {
        image: blogImg2,
        date: '30 Oct, 2019',
        author: 'Admin',
        comments: 2,
        title: 'Amount of Freak Bread or Other Fruits',
        excerpt:
            'There are lorem ipsum is simply free many variations of ipsum the majority suffered.',
    },
    {
        image: blogImg3,
        date: '30 Oct, 2019',
        author: 'Admin',
        comments: 2,
        title: 'Winter Wheat Harvest Gathering Momentum',
        excerpt:
            'There are lorem ipsum is simply free many variations of ipsum the majority suffered.',
    },
]
</script>