<script setup>
import PageLoder from '../../components/pageloader/PageLoder.vue'
import ArticlesCom from '@/components/articles/ArticlesCom.vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import { ref, onMounted } from 'vue'

const router = useRouter()

const loading = ref('false')

const articles = ref([])
const fetchArticles = async () => {
  await axios
    .get('https://qrtas.almona.host/api/articles')
    .then((res) => {
      loading.value = true
      articles.value = res.data.articles
      loading.value = false
    })
    .catch((err) => {
      // router.beforeEach((to, from, next) => {
      //   if (err.message == 'Network Error') {
      //     next({ name: to.name }) // Redirect to the 'articles' page
      //   } else {
      //     next() // Continue with the navigation
      //   }
      // })
      // Check if it's a server error
      if (err.message == 'Network Error') {
        console.log('true,there is error of net work')
        router.push({ name: 'servererror' })
        // Navigate to the server error page
      } else {
        console.log('false,there is No error of net work')
        router.push({ name: 'articles' })
      }
    })
}

onMounted(fetchArticles)
</script>

<template>
  <!-- المدونة 2 -->
  <div class="container-fluid">
    <div class="row d-flex justify-content-center text-center my-lg-3 py-lg-3 banner-header">
      <strong>
        <h2 class="fw-900" style="font-size: 30px">المدونة</h2>
        <p>مجموعة مقالات مميزه عن ريح وما تقدمة</p>
      </strong>
    </div>
  </div>
  <div class="articles">
    <!-- اخر الاخبار -->
    <div v-if="loading">
      <PageLoder />
    </div>
    <div class="container-fluid pt-lg-5">
      <div v-if="!articles" class="alert alert-danger text-center" role="alert">
        لاتوجد مقالات !
      </div>
      <div class="container">
        <div class="row">
          <ArticlesCom
            class="col-md-6"
            v-for="article in articles"
            :key="article.id"
            :article="article"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.articles {
  direction: rtl;
  color: #1f1e1e;
}
/* phone */
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .articles .article_img {
    width: 100%;
    height: 235px;
  }
  .articles .article_img img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .articles .description p {
    font-size: 10px;
  }
}
</style>
