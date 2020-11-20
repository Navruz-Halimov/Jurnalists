<template>
  <main class="main__page">
    <div class="main__slider">  
      <!-- v-if="slides[0] == '' -->
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
      <!-- <b-carousel
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

      </b-carousel> -->
      <b-alert show variant="danger" v-if="errored">Server not working</b-alert>
      <hooper 
        :settings="hooperSettings"
        class="hooper__slider"
      >
        <slide class="slider__item" v-for="slide in slides" :key="slide.id">
          <div class="slider__img">
            <img 
              :src="slide.image" 
              alt="img"
            >
          </div>
          <div class="slider__content">
            <b-container>
              <div class="slider__title">{{slide.title}}</div>
              <div class="slider__text">{{slide.text}}</div>
              <!-- <div class="site__button">Купрок</div> -->
            </b-container>
          </div>
        </slide>
        <hooper-navigation slot="hooper-addons"></hooper-navigation>
      </hooper>
    </div>  
    <Posts />
    <Trainer />
    <div class="main-project">
      <b-container fluid>
        <b-container>
          <b-row>
            <b-col cols="12">
              <div class="main__title">Loyihalar</div>
            </b-col>
          </b-row>
          <b-row class="main-project__list">
            <b-col 
              lg="3" 
              md="6" 
              cols="12" 
              class="main-project__item"
              v-for="project in getProject.slice(0,4)"
              :key="project.id"
            >
              <nuxt-link :to="'projects/'+project.id" class="main-project__img">
                <img :src="project.image" alt="">
                <div class="main-project__info">
                  <div class="main-project__title">{{project.title}}</div>
                  <div class="main-project__text" v-html="project.content"></div>
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
          <b-col 
            lg="4" 
            cols="12" 
            class="main-compitition__item"
            v-for="compitition in getCompitition"
            :key="compitition.id"
          >
            <nuxt-link :to="'compitition/'+compitition.id" class="main-compitition__img">
              <img :src="compitition.image" alt="">
            </nuxt-link>
            <div class="main-compitition__info">
              <nuxt-link :to="'compitition/'+compitition.id" class="main-compitition__title">{{compitition.title}}</nuxt-link>
              <div class="main-compitition__date">{{compitition.date}}</div>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12">
            <nuxt-link to="/compitition" class="site__button">ko’proq</nuxt-link>
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
            <b-alert show variant="danger" v-if="errored">Server not working</b-alert>
          </b-col>
        </b-row>
        <b-row class="main-arxiv__list">
          <b-col lg="4" class="main-arxiv__item" v-for="archive in getArchive" :key="archive.id">
            <div class="main-arxiv__img">
              <img :src="archive.image" alt="image">
            </div>
            <div class="main-arxiv__info">
              <nuxt-link :to="'archive/'+archive.id" class="main-arxiv__title">{{archive.title}}</nuxt-link>
              <div class="main-arxiv__text" v-html="archive.text"></div>
            </div>
          </b-col>
        </b-row>
        <b-row>
            <b-col cols="12">
              <nuxt-link to="/archive" class="site__button">ko’proq</nuxt-link>
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
        <b-row class="main-about__wrap" v-for="about in abouts" :key="about.id">
          <b-col lg="5">
            <div class="main-about__img">
              <img :src="about.image" alt="">
            </div>
          </b-col>
          <b-col lg="7" class="main-about__info">
            <div class="main-about__text" v-html="about.content">
              
            </div>
            <nuxt-link to="/about" class="site__button">ko’proq</nuxt-link>
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
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper';
import 'hooper/dist/hooper.css';

import {mapGetters} from 'vuex';

import Trainer from '../components/Trainers'
import Posts from '../components/Posts'
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
      hooperSettings: {
        infiniteScroll: true,
        wheelControl: false
      },
      abouts: [],
      slides: [],
      errored: false,
    }
  },
  components: { 
    VueSlickCarousel,
    Hooper,
    Slide, 
    HooperNavigation,
    Trainer,
    Posts
  },
  methods: {
    async getAbout() {
      await this.$axios.get('haqimizda/us/')
        .then((res) => {
          this.abouts = res.data;
          // console.log('getAbout', res);
        })
        .catch((error) => {
          // console.log(error);
          this.errored = true
        })
    },
    async getSlider() {
      await this.$axios.get('menu/')
        .then((res) => {
          this.slides = res.data;
          // console.log('getSlider', res);
        })
        .catch((error) => {
          // console.log('getSlider', error);
          this.errored = true;
        })
    }
  },
  mounted() {
    this.getAbout(),
    this.getSlider(),
    this.$store.dispatch('getArchive'),
    this.$store.dispatch('getCompitition'),
    this.$store.dispatch('getProject')
  },
  computed: {
    ... mapGetters({
      getArchive: 'getArchive',
      getCompitition: 'getCompitition',
      getProject: 'getProject'
    })
  }
}
</script>