<template>
    <section class="blog-one news">
        <div class="container">
            <div class="row">
                <div v-for="(blog, index) in blogs" :key="index" class="col-xl-4 col-lg-4">
                    <div class="blog_one_single mb-30">
                        <div class="blog_one_image">
                            <div class="blog_image">
                                <img :src="blog.image" alt="Blog One Image">
                                <div class="blog_one_date_box">
                                    <p>{{ blog.date }}</p>
                                </div>
                            </div>
                            <div class="blog-one__content">
                                <ul class="list-unstyled blog-one__meta">
                                    <li>
                                        <NuxtLink to="/news_detail">
                                            <i class="far fa-user-circle"></i> Admin
                                        </NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/news_detail">
                                            <i class="far fa-comments"></i> 2 Comments
                                        </NuxtLink>
                                    </li>
                                </ul>
                                <NuxtLink to="/news_detail">
                                    <h3 v-html="blog.title"></h3>
                                </NuxtLink>
                                <div class="blog_one_text">
                                    <p>{{ blog.description }}</p>
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
import blog1 from '@/assets/images/blog/blog-1-img-1.jpg'
import blog2 from '@/assets/images/blog/blog-1-img-2.jpg'
import blog3 from '@/assets/images/blog/blog-1-img-3.jpg'
import blog4 from '@/assets/images/blog/blog-1-img-4.jpg'
import blog5 from '@/assets/images/blog/blog-1-img-5.jpg'
import blog6 from '@/assets/images/blog/blog-1-img-6.jpg'

const blogs = [
    {
        image: blog1,
        date: '30 Oct, 2019',
        title: 'Agriculture Miracle you<br>Don\'t Know About',
        description: 'There are lorem ipsum is simply free many variations of ipsum the majority suffered.'
    },
    {
        image: blog2,
        date: '30 Oct, 2019',
        title: 'Amount of Freak Bread<br>or Other Fruits',
        description: 'There are lorem ipsum is simply free many variations of ipsum the majority suffered.'
    },
    {
        image: blog3,
        date: '30 Oct, 2019',
        title: 'Winter Wheat Harvest<br>Gathering Momentum',
        description: 'There are lorem ipsum is simply free many variations of ipsum the majority suffered.'
    },
    {
        image: blog4,
        date: '30 Oct, 2019',
        title: 'Agriculture Miracle you<br>Don\'t Know About',
        description: 'There are lorem ipsum is simply free many variations of ipsum the majority suffered.'
    },
    {
        image: blog5,
        date: '30 Oct, 2019',
        title: 'Agriculture Miracle you<br>Don\'t Know About',
        description: 'There are lorem ipsum is simply free many variations of ipsum the majority suffered.'
    },
    {
        image: blog6,
        date: '30 Oct, 2019',
        title: 'Winter Wheat Harvest<br>Gathering Momentum',
        description: 'There are lorem ipsum is simply free many variations of ipsum the majority suffered.'
    }
]
</script>