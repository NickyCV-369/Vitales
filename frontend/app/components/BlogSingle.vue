<template>
    <section class="news_detail">
        <div class="container">
            <div class="row">
                <div class="col-xl-8 col-lg-7">
                    <div class="news_detail_left">
                        <div class="news_detail_image_box">
                            <img :src="newsImage" alt="News Detail Image">
                            <div class="news_detail_date_box">
                                <p>30 Oct, 2019</p>
                            </div>
                        </div>
                        <ul class="list-unstyled news_detail__meta">
                            <li><nuxt-link to="/news_detail"><i class="far fa-user-circle"></i> Admin</nuxt-link></li>
                            <li><nuxt-link to="/news_detail"><i class="far fa-comments"></i> 2 Comments</nuxt-link></li>
                        </ul>
                        <div class="news_detail_content">
                            <h2>Amount of Freak Bread or Other Fruits</h2>
                            <p class="news_detail_one_text">There are many variations of passages of Lorem Ipsum
                                available, but the majority have suffered alteration in some injected or words...</p>
                            <p class="news_detail_two_text">Lorem Ipsum has been the industry's standard dummy text ever
                                since the 1500s, when an unknown printer took a galley of type...</p>
                            <p class="news_detail_three_text">Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry...</p>
                        </div>
                        <div class="news_detail__bottom">
                            <p class="news_detail__tags">
                                <span>Tags:</span>
                                <a href="#">Agriculture,</a>
                                <a href="#">Food,</a>
                                <a href="#">Economy</a>
                            </p>
                            <div class="news_detail__social-list">
                                <a href="#"><i class="fab fa-facebook-square"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                                <a href="#"><i class="fab fa-dribbble"></i></a>
                            </div>
                        </div>
                        <div class="author-one">
                            <div class="author-one__image">
                                <img :src="authorImage" alt="Author Image">
                            </div>
                            <div class="author-one__content">
                                <h3>Christine Eve</h3>
                                <p>It has survived not only five centuries, but also the leap into electronic
                                    typesetting, remaining unchanged...</p>
                            </div>
                        </div>
                        <div class="comment-one">
                            <h3 class="comment-one__title">2 Comments</h3>
                            <div class="comment-one__single">
                                <div class="comment-one__image">
                                    <img :src="commentImg1" alt="Comment 1">
                                </div>
                                <div class="comment-one__content">
                                    <h3>Sarah albert</h3>
                                    <p>It has survived not only five centuries, but also the leap into electronic
                                        typesetting...</p>
                                    <a href="#" class="thm-btn comment-one__btn">Reply</a>
                                </div>
                            </div>
                            <div class="comment-one__single">
                                <div class="comment-one__image">
                                    <img :src="commentImg2" alt="Comment 2">
                                </div>
                                <div class="comment-one__content">
                                    <h3>Kevin Martin</h3>
                                    <p>It has survived not only five centuries, but also the leap into electronic
                                        typesetting...</p>
                                    <a href="#" class="thm-btn comment-one__btn">Reply</a>
                                </div>
                            </div>
                        </div>
                        <div class="comment-form">
                            <h3 class="comment-form__title">Leave a Comment</h3>
                            <form @submit.prevent="handleSubmit" class="comment-one__form">
                                <div class="row">
                                    <div class="col-xl-6">
                                        <div class="comment_input_box">
                                            <input type="text" placeholder="Full name" v-model="formData.name"
                                                :class="{ 'is-invalid': errors.name }" />
                                            <span v-if="errors.name" class="error-text">{{ errors.name }}</span>
                                        </div>
                                    </div>
                                    <div class="col-xl-6">
                                        <div class="comment_input_box">
                                            <input type="text" placeholder="Email address" v-model="formData.email"
                                                :class="{ 'is-invalid': errors.email }" />
                                            <span v-if="errors.email" class="error-text">{{ errors.email }}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xl-12">
                                        <div class="comment_input_box">
                                            <textarea v-model="formData.message" placeholder="Write message"
                                                :class="{ 'is-invalid': errors.message }"></textarea>
                                            <span v-if="errors.message" class="error-text">{{ errors.message }}</span>
                                        </div>
                                        <button type="submit" class="thm-btn comment-form__btn">Submit Comment</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="col-xl-4 col-lg-5">
                    <div class="sidebar">
                        <div class="sidebar__single sidebar__search">
                            <form action="#" class="sidebar__search-form">
                                <input type="search" placeholder="Search">
                                <button type="submit"><i class="icon-magnifying-glass"></i></button>
                            </form>
                        </div>
                        <div class="sidebar__single sidebar__post">
                            <h3 class="sidebar__title">Latest Posts</h3>
                            <ul class="sidebar__post-list list-unstyled">
                                <li v-for="(post, index) in posts" :key="index">
                                    <div class="sidebar__post-image">
                                        <img :src="post.image" :alt="post.title" />
                                    </div>
                                    <div class="sidebar__post-content">
                                        <h3>
                                            <a href="#" class="sidebar__post-content_meta"><i
                                                    class="far fa-user-circle"></i> Admin</a>
                                            <nuxt-link :to="post.link">{{ post.title }}</nuxt-link>
                                        </h3>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="sidebar__single sidebar__category">
                            <h3 class="sidebar__title">All Categories</h3>
                            <ul class="sidebar__category-list list-unstyled">
                                <li v-for="(category, index) in categories" :key="index">
                                    <a href="#">{{ category }}</a>
                                </li>
                            </ul>
                        </div>
                        <div class="sidebar__single sidebar__tags">
                            <h3 class="sidebar__title">Popular Tags</h3>
                            <div class="sidebar__tags-list">
                                <a href="#">Agriculture,</a>
                                <a href="#">Food,</a>
                                <a href="#">Healthy,</a>
                                <a href="#">Economy,</a>
                                <a href="#">Organic,</a>
                                <a href="#">Farm,</a>
                                <a href="#">Dairy,</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script setup>
import newsImage from '@/assets/images/blog/news-detail-img-1.jpg'
import authorImage from '@/assets/images/blog/author-1-1.jpg'
import commentImg1 from '@/assets/images/blog/comment-1-1.png'
import commentImg2 from '@/assets/images/blog/comment-1-2.png'
import postImage1 from '~/assets/images/blog/lp-1-1.jpg';
import postImage2 from '~/assets/images/blog/lp-1-2.jpg';
import postImage3 from '~/assets/images/blog/lp-1-3.jpg';

const posts = ref([
    {
        image: postImage1,
        title: 'Agriculture Miracle you Don\'t Know About',
        link: '/news_detail'
    },
    {
        image: postImage2,
        title: 'Agriculture Miracle you Don\'t Know About',
        link: '/news_detail'
    },
    {
        image: postImage3,
        title: 'Agriculture Miracle you Don\'t Know About',
        link: '/news_detail'
    }
]);

const categories = ref([
    'Agriculture',
    'Organic Food',
    'Dairy Farm',
    'Economy Solution',
    'Harvests Innovations'
]);
const formData = ref({
    name: '',
    email: '',
    message: ''
});

const errors = reactive({
    name: '',
    email: '',
    message: ''
});

const validateForm = () => {
    errors.name = formData.value.name.trim() === '' ? 'Name is required' : '';
    errors.email = !formData.value.email
        ? 'Email is required'
        : !/\S+@\S+\.\S+/.test(formData.value.email)
            ? 'Email must be valid'
            : '';
    errors.message = formData.value.message.trim() === '' ? 'Message is required' : '';
};

const handleSubmit = () => {
    validateForm();
    if (!errors.name && !errors.email && !errors.message) {
        // Here, handle form submission logic (e.g., API call)
        console.log('Form submitted:', formData.value);
        // Reset form
        formData.value = { name: '', email: '', message: '' };
    }
};
</script>

<style scoped>
.is-invalid {
    border-color: red;
}

.error-text {
    color: red;
    font-size: 12px;
}
</style>
