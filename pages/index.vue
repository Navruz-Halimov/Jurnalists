<template>
  <main>
    <div class="main__slider">
      <swiper class="main__swiper" :options="header__slider">
        <swiper-slide>
          <img src="../assets/images/slider.png" alt="slider">
          <div class="swiper-caption">1</div>
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/images/slider.png" alt="slider">
          <div class="swiper-caption">2</div>
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/images/slider.png" alt="slider">
          <div class="swiper-caption">3</div>
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/images/slider.png" alt="slider">
          <div class="swiper-caption">4</div>
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>  
  </main>
</template>

<script>
export default {
  data() {
    return {
      header__slider: {
        centeredSlides: true,
        spaceBetween: 30,
        loop: true,
        autoplay: true,
        effect: 'fade',
        //  grabCursor: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
    }
  }
}
</script>