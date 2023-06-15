<script setup>
import { reactive } from 'vue'
const aboutus = reactive([
  {
    id: 1,
    title:
      'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى ..'
  },
  {
    id: 2,
    title:
      'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى ..'
  },
  {
    id: 3,
    title:
      'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى ..'
  },
  {
    id: 4,
    title:
      'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى ..'
  }
  // Add more articles as needed
])
</script>
<template>
  <div class="home mt-4" style="direction: rtl" id="home">
    <div class="container-fluid py-5 py-lg-3">
      <div class="row d-flex justify-content-center">
        <div class="col-md-11">
          <div class="row align-items-center justify-content-around mb-2">
            <div class="col-lg-6 text-center mt-sm-4">
              <img
                format="webp"
                loading="lazy"
                class="img-fluid rounded-3"
                src="@/assets/images/about.png"
                alt="img"
              />
            </div>
            <div class="col-lg-6 fw-bold align-middle text-center text-lg-end">
              <ul class="p-0">
                <li class="my-3" v-for="item in aboutus" :key="item.id" style="list-style: none">
                  <div class="row">
                    <div class="col-1 align-middle align-self-center">
                      <span><FontAwesome :icon="['fas', 'tag']" class="text-yellow" /> </span>
                    </div>
                    <div class="col-11">
                      <span class="text-muted fs-14"> {{ item.title }} </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
