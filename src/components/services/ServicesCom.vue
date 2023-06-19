<template>
  <div>
    <!-- خدماتنا 2 -->
    <div class="container-fluid py-3">
      <div class="row d-flex justify-content-center">
        <div class="col-md-11">
          <div class="row align-items-center justify-content-around mb-2">
            <div class="col-lg-6 fw-bold align-middle text-center text-lg-end">
              <h1 class="mb-4 fw-bold" style="font-weight: 900 !important">
                نقدم لك خدمات فائقة الجودة بمجال الثروة الحيوانية
              </h1>
              <p class="fs-14">
                نقدم لك مجموعة متنوعه من الحيوانات للشراء كانت أو للتضحية بعيد الأضحي بما في ذلك
                الذبائح الحيوانية وخدمات المسالخ ، والذبح .
              </p>
              <p class="fs-14">أيضا اختيار المواشي وتجهيزها التضحية وإيصالها الى باب منزلك</p>
              <button class="btn m-0 p-0">
                <router-link
                  :to="{ name: 'contact' }"
                  class="btn fw-bold text-white rounded-3 mb-2 text-black ps-lg-4 pe-lg-4 px-5"
                  style="
                    background: linear-gradient(266.56deg, #2d7560 12.27%, #359277 77.29%);
                    padding-top: 0.5rem !important;
                    padding-bottom: 0.8rem !important;
                  "
                  >تواصل معنا</router-link
                >
              </button>
            </div>
            <div class="col-lg-6 text-center mt-sm-4 text-lg-start">
              <img class="img-fluid rounded-3" src="@/assets/images/service.png" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
