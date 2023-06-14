<script setup>
import PageLoder from '../../components/pageloader/PageLoder.vue'
const loading = ref('false')
import axios from 'axios'
import { ref, onMounted } from 'vue'

const articles = ref([])
const fetchArticles = async () => {
  try {
    loading.value = true
    const response = await axios.get('https://qrtas.almona.host/api/articles')
    articles.value = response.data.articles
    loading.value = false
  } catch (error) {
    console.error(error)
  }
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
      <div class="row d-flex justify-content-center">
        <div class="col-md-10">
          <div class="row">
            <div class="col-md-6 my-2" v-for="article in articles" :key="article.id">
              <div
                class="row g-0 border rounded-4 py-2 position-relative"
                style="border-color: #ebebec"
              >
                <div class="col-md-6 mb-md-0 article_img text-center">
                  <img
                    :src="article.image"
                    class="flex-shrink-0 rounded-3"
                    width="236"
                    height="192"
                    alt="img"
                  />
                </div>
                <div class="col-md-12 description col-lg-6 ps-md-0">
                  <span
                    ><FontAwesome :icon="['far', 'clock']" class="ps-2 text-yellow" />
                    <span class="text-muted"> {{ article.date }}</span>
                  </span>
                  <h5 class="mt-0 fw-bold">{{ article.title }}</h5>
                  <p v-snip="{ lines: 3 }" class="text-muted fs-14" v-html="article.desc"></p>
                  <router-link
                    class="btn text-decoration-none fw-bold text-white text-black border-2 ps-lg-4 pe-lg-4 px-4"
                    style="
                      background: linear-gradient(266.56deg, #2D7560 12.27%, #359277 77.29%);
                      padding-top: 0.8rem !important;
                      padding-bottom: 0.8rem !important;
                      border-radius: 12px;
                    "
                    :to="{ name: 'article', params: { id: article.id } }"
                    >شاهد المزيد</router-link
                  >
                </div>
              </div>
            </div>
          </div>
          <br />
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
