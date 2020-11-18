<template>
  <main class="main__page">
    <div class="main__slider">
      <!-- <swiper class="main__swiper" :options="header__slider">
        <swiper-slide>
          <img src="../assets/images/slider.png" alt="slider">
          <b-container>
            <b-row>
              <div class="swiper-caption">
                <div class="swiper-caption__title">Lorem ipsum dolor</div>
                <div class="swiper-caption__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                <nuxt-link to="" class="site__button">ko’proq</nuxt-link>
              </div>
            </b-row>
          </b-container>
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/images/slider.png" alt="slider">
          <b-container>
            <b-row>
              <div class="swiper-caption">
                <div class="swiper-caption__title">Lorem ipsum dolor2</div>
                <div class="swiper-caption__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                <nuxt-link to="" class="site__button">ko’proq</nuxt-link>
              </div>
            </b-row>
          </b-container>
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper> -->
      <b-carousel
        id="carousel-1"
        
        :interval="4000"
        controls
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        class="main__carousel"
      >
        <b-carousel-slide img-src="../assets/images/slider.png">
          <div class="carousel__title">Lorem ipsum dolor</div>
          <div class="carousel__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
          <div class="site__button">купрок</div>
        </b-carousel-slide>

        <b-carousel-slide img-src="../assets/images/slider.png">
          <div class="carousel__title">Lorem ipsum dolor</div>
          <div class="carousel__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
          <div class="site__button">купрок</div>
        </b-carousel-slide>

        <b-carousel-slide img-src="../assets/images/slider.png">
          <div class="carousel__title">Lorem ipsum dolor</div>
          <div class="carousel__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
          <div class="site__button">купрок</div>
        </b-carousel-slide>

      </b-carousel>
    </div>  
    <div class="main-posts">
      <b-container>
        <b-row>
          <b-col cols="12">
            <div class="main__title">E’lonlar</div>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="6">
            <div class="main-posts__item">
              <div class="main-posts__img">
                <img src="../assets/images/post1.png" alt="post">
              </div>
              <div class="main-posts__info">
                <div class="main-posts__date">08.11.2020</div>
                <nuxt-link to="" class="main-posts__title">КОРРУПЦИЯ ПОЛИКЛИНИКАДАН БОШЛАНАДИМИ?</nuxt-link>
              </div>
            </div>
          </b-col>
          <b-col md="6">
            <div class="main-posts__item">
              <div class="main-posts__img">
                <img src="../assets/images/post1.png" alt="post">
              </div>
              <div class="main-posts__info">
                <div class="main-posts__date">08.11.2020</div>
                <nuxt-link to="" class="main-posts__title">КОРРУПЦИЯ ПОЛИКЛИНИКАДАН БОШЛАНАДИМИ?</nuxt-link>
              </div>
            </div>
          </b-col>
          <b-col md="6">
            <div class="main-posts__item">
              <div class="main-posts__img">
                <img src="../assets/images/post1.png" alt="post">
              </div>
              <div class="main-posts__info">
                <div class="main-posts__date">08.11.2020</div>
                <nuxt-link to="" class="main-posts__title">КОРРУПЦИЯ ПОЛИКЛИНИКАДАН БОШЛАНАДИМИ?</nuxt-link>
              </div>
            </div>
          </b-col>
          <b-col md="6">
            <div class="main-posts__item">
              <div class="main-posts__img">
                <img src="../assets/images/post1.png" alt="post">
              </div>
              <div class="main-posts__info">
                <div class="main-posts__date">08.11.2020</div>
                <nuxt-link to="" class="main-posts__title">КОРРУПЦИЯ ПОЛИКЛИНИКАДАН БОШЛАНАДИМИ?</nuxt-link>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="main-trainer">
      <b-container>
        <b-row>
          <b-col cols="12">
            <div class="main__title">Trenerlar</div>
          </b-col>
        </b-row>
        <b-row class="main-trainer__list">
          <b-col lg="3" md="6" cols="12" class="main-trainer__item">
            <nuxt-link to="" class="main-trainer__link">
              <div class="main-trainer__img">
                <img src="../assets/images/trainer1.png" alt="">
                <div class="main-trainer__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
              </div>
              <div class="main-trainer__name">Valiyev Murodjon Akulovich</div>
            </nuxt-link>
          </b-col>
          <b-col lg="3" md="6" cols="12" class="main-trainer__item">
            <nuxt-link to="" class="main-trainer__link">
              <div class="main-trainer__img">
                <img src="../assets/images/trainer2.png" alt="">
                <div class="main-trainer__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
              </div>
              <div class="main-trainer__name">Valiyev Murodjon Akulovich</div>
            </nuxt-link>
          </b-col>
          <b-col lg="3" md="6" cols="12" class="main-trainer__item">
            <nuxt-link to="" class="main-trainer__link">
              <div class="main-trainer__img">
                <img src="../assets/images/trainer3.png" alt="">
                <div class="main-trainer__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
              </div>
              <div class="main-trainer__name">Valiyev Murodjon Akulovich</div>
            </nuxt-link>
          </b-col>
          <b-col lg="3" md="6" cols="12" class="main-trainer__item">
            <nuxt-link to="" class="main-trainer__link">
              <div class="main-trainer__img">
                <img src="../assets/images/trainer1.png" alt="">
                <div class="main-trainer__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
              </div>
              <div class="main-trainer__name">Valiyev Murodjon Akulovich</div>
            </nuxt-link>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12">
            <nuxt-link to="" class="site__button">ko’proq</nuxt-link>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="main-project">
      <b-container fluid>
        <b-container>
          <b-row>
            <b-col cols="12">
              <div class="main__title">Loyihalar</div>
            </b-col>
          </b-row>
          <b-row class="main-project__list">
            <b-col lg="3" md="6" cols="12" class="main-project__item">
              <nuxt-link to="/projects" class="main-project__img">
                <img src="../assets/images/trainer1.png" alt="">
                <div class="main-project__info">
                  <div class="main-project__title">Mavzu (title)</div>
                  <div class="main-project__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                </div>
              </nuxt-link>
            </b-col>
            <b-col lg="3" md="6" cols="12" class="main-project__item">
              <nuxt-link to="/projects" class="main-project__img">
                <img src="../assets/images/trainer2.png" alt="">
                <div class="main-project__info">
                  <div class="main-project__title">Mavzu (title)</div>
                  <div class="main-project__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                </div>
              </nuxt-link>
            </b-col>
            <b-col lg="3" md="6" cols="12" class="main-project__item">
              <nuxt-link to="/projects" class="main-project__img">
                <img src="../assets/images/trainer3.png" alt="">
                <div class="main-project__info">
                  <div class="main-project__title">Mavzu (title)</div>
                  <div class="main-project__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                </div>
              </nuxt-link>
            </b-col>
            <b-col lg="3" md="6" cols="12" class="main-project__item">
              <nuxt-link to="/projects" class="main-project__img">
                <img src="../assets/images/trainer1.png" alt="">
                <div class="main-project__info">
                  <div class="main-project__title">Mavzu (title)</div>
                  <div class="main-project__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                </div>
              </nuxt-link>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12">
              <nuxt-link to="/projects" class="site__button">ko’proq</nuxt-link>
            </b-col>
          </b-row>
        </b-container>
      </b-container>
    </div>
    <div class="main-compitition">
      <b-container>
        <b-row>
          <b-col cols="12">
            <div class="main__title">Tanlovlar</div>
          </b-col>
        </b-row>
        <b-row class="main-compitition__list">
          <b-col lg="4" cols="12" class="main-compitition__item">
            <div class="main-compitition__img">
              <img src="../assets/images/compitition1.png" alt="">
            </div>
            <div class="main-compitition__info">
              <nuxt-link to="" class="main-compitition__title">Mavzu (title)</nuxt-link>
              <div class="main-compitition__date">18.10.2020</div>
            </div>
          </b-col>
          <b-col lg="4" cols="12" class="main-compitition__item">
            <div class="main-compitition__img">
              <img src="../assets/images/compitition2.png" alt="">
            </div>
            <div class="main-compitition__info">
              <nuxt-link to="" class="main-compitition__title">Mavzu (title)</nuxt-link>
              <div class="main-compitition__date">18.10.2020</div>
            </div>
          </b-col>
          <b-col lg="4" cols="12" class="main-compitition__item">
            <div class="main-compitition__img">
              <img src="../assets/images/compitition3.png" alt="">
            </div>
            <div class="main-compitition__info">
              <nuxt-link to="" class="main-compitition__title">Mavzu (title)</nuxt-link>
              <div class="main-compitition__date">18.10.2020</div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="main-gallery">
      <b-container>
        <b-row>
          <b-col cols="12">
            <div class="main__title">Galereya</div>
          </b-col>
        </b-row>
        <b-row class="main-gallery__wrap">
          <b-col lg="5" class="main-gallery__movie">
            <iframe width="500" height="390" src="https://www.youtube.com/embed/t4vJJpiz5UQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </b-col>
          <b-col lg="6" offset-lg="1" class="main-gallery__slider">
            <VueSlickCarousel 
              :arrows="true" 
              :slidesToShow=2
              :focusOnSelect="true"
              :speed=500
              centerPadding='15px'
              :autoplay=true
              :autoplaySpeed=3000
              class="main-gallery__slick"
            >
              <div>
                <div class="main-gallery__img">
                  <img src="../assets/images/gallery1.png" alt="">
                </div>
                <div class="main-gallery__title">Title1</div>
              </div>
              <div>
                <div class="main-gallery__img">
                  <img src="../assets/images/gallery2.png" alt="">
                </div>
                <div class="main-gallery__title">Title2</div>
              </div>
              <div>
                <div class="main-gallery__img">
                  <img src="../assets/images/gallery1.png" alt="">
                </div>
                <div class="main-gallery__title">Title3</div>
              </div>
              <div>
                <div class="main-gallery__img">
                  <img src="../assets/images/gallery2.png" alt="">
                </div>
                <div class="main-gallery__title">Title4</div>
              </div>
            </VueSlickCarousel>
            <nuxt-link to="" class="site__button">ko’proq</nuxt-link>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="main-arxiv">
      <b-container>
        <b-row>
          <b-col cols="12">
            <div class="main__title">Arxiv</div>
          </b-col>
        </b-row>
        <b-row class="main-arxiv__list">
          <b-col lg="4" class="main-arxiv__item">
            <div class="main-arxiv__img">
              <img src="../assets/images/archive1.png" alt="">
            </div>
            <div class="main-arxiv__info">
              <nuxt-link to="" class="main-arxiv__title">Mavzu (title)</nuxt-link>
              <div class="main-arxiv__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. 
              </div>
            </div>
          </b-col>
          <b-col lg="4" class="main-arxiv__item">
            <div class="main-arxiv__img">
              <img src="../assets/images/archive2.png" alt="">
            </div>
            <div class="main-arxiv__info">
              <nuxt-link to="" class="main-arxiv__title">Mavzu (title)</nuxt-link>
              <div class="main-arxiv__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. 
              </div>
            </div>
          </b-col>
          <b-col lg="4" class="main-arxiv__item">
            <div class="main-arxiv__img">
              <img src="../assets/images/archive3.png" alt="">
            </div>
            <div class="main-arxiv__info">
              <nuxt-link to="" class="main-arxiv__title">Mavzu (title)</nuxt-link>
              <div class="main-arxiv__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. 
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row>
            <b-col cols="12">
              <nuxt-link to="" class="site__button">ko’proq</nuxt-link>
            </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="main-about">
      <b-container>
        <b-row>
          <b-col cols="12">
            <div class="main__title">Biz haqimizda</div>
          </b-col>
        </b-row>
        <b-row class="main-about__wrap">
          <b-col lg="5">
            <div class="main-about__img">
              <img src="../assets/images/about_img.png" alt="">
            </div>
          </b-col>
          <b-col lg="7" class="main-about__info">
            <div class="main-about__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </div>
            <div class="site__button">ko’proq</div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="main-map">
      <b-container>
        <b-row>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95936.3231296298!2d69.2019581794739!3d41.28688469734103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdd038c8c86def6e!2sGreatSoft%20Company!5e0!3m2!1sru!2s!4v1605532651698!5m2!1sru!2s" 
            width="100%" 
            height="350" 
            frameborder="0" 
            style="border:0;" 
            allowfullscreen="" 
            aria-hidden="false" 
            tabindex="0"
          ></iframe>
        </b-row>
      </b-container>

      
    </div>
  </main>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  data() {
    return {
      header__slider: {
        centeredSlides: true,
        spaceBetween: 10,
        loop: true,
        // autoplay: true,
        effect: 'fade',
        //  grabCursor: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      },
      gallery__slider: {
        slidesPerView: 2,
        spaceBetween: 0,
        navigation: {
          nextEl: '.swiper-card__next',
          prevEl: '.swiper-card__prev'
        },
      },
    }
  },
  components: { VueSlickCarousel },
}
</script>