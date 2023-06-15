<template>
  <div>
    <!-- خدماتنا 2 -->
    <div class="container-fluid py-5">
      <div class="row d-flex justify-content-center">
        <div class="col-md-11">
          <div class="row align-items-center justify-content-around mb-2">
            <div class="col-lg-5 fw-bold align-middle text-center text-lg-end">
              <h1 class="mb-4 fw-bold" style="font-weight: 900 !important">
                ريح لتوصيل الطلبات بمكة
              </h1>
              <p class="fs-14">
                ريح تطبيق توصيل الطلبات يهدف لتوفير خدمة توصيل الطلبات إلى العملاء بمكة بكل سهولة
                ويسر، يتيح التطبيق طلب مجموعة متنوعة من المنتجات من المتاجر المحلية والمطاعم
                والصيدليات وغيرها، ويقوم فريق التطبيق بتوصيل الطلبات إلى المنزل أو المكتب في أسرع
                وقت ممكن.
              </p>
              <button class="btn m-0 p-0">
                <router-link
                  :to="{ name: 'contact' }"
                  class="btn fw-bold text-white rounded-3 mb-2 text-black ps-lg-4 pe-lg-4 px-5"
                  style="
                    background: linear-gradient(266.56deg, #2D7560 12.27%, #359277 77.29%);
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
