<template>
  <div class="about-page">
    <b-container class="links p-0 mb-5" fluid="fluid">
      <b-container>
        <b-row>
          <b-col class="p-0" lg="12">
            <!-- <div class="link">
              <a href="#">Asosiy</a> / <span>Arxiv</span>
            </div> -->
            <Breadcrumb :crumbs="crumbs" />
          </b-col>
        </b-row>
      </b-container>
    </b-container>
    <b-container>
      <!-- <b-row class="about-page__top">
        <h1 class="about-page__title">Markaz  faoliyati haqida ma`lumotlar</h1>
        <b-row class="about-page__list">
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
      </b-row> -->
      <b-row class="leaders">
        <b-col cols="12">
          <div class="leaders__title">Raxbarlar</div>
          <b-row class="leaders__list">
            <b-col 
              sm="4" 
              class="leaders__item"
              v-for="leader in leaders"
              :key="leader.id"
            >
              <div class="leaders__img">
                <img :src="leader.image" alt="">
              </div>
              <div class="leaders__info">
                <div class="leaders__name">{{leader.name}}</div>
                <div class="leaders__position">{{leader.position}}</div>  
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row class="trainers">
        <b-col cols="12">
          <div class="trainers__title">Trenerlar</div>
          <b-row class="trainers__list">
            <b-col 
              md="3" 
              sm="6" 
              class="trainers__item"
              v-for="(trainer, index) in getTrainer"
              :key="index.id"
            >
              <nuxt-link :to="'trainers/'+trainer.id" class="main-trainer__link">
                <div class="main-trainer__img">
                  <img :src="trainer.image" alt="">
                  <div class="main-trainer__text" v-html="trainer.about_work"></div>
                </div>
                <div class="main-trainer__name">{{trainer.name}}</div>
              </nuxt-link>
            </b-col>       
          </b-row>
        </b-col>
      </b-row>
      <b-row class="about-me">
        <b-col cols="12">
          <div class="about-me__title">Biz haqimizda</div>
          <b-row v-for="about in abouts" :key="about.id">
            <b-col md="4">
              <div class="about-me__img">
                <img :src="about.image" alt="">
              </div>
            </b-col>
            <b-col md="8">
              <div class="about-me__text" v-html="about.content">                
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      abouts: [],
      leaders: [],
      crumbs: [
        { id: 1, title: 'Asosiy', url: '/', disabled: false },
        { id: 2, title: 'Biz haqimizda', url: '/about', disabled: true},
      ]
    }
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
    async getLeaders() {
      await this.$axios.get('haqimizda/user/')
        .then((res) => {
          this.leaders = res.data;
          console.log('getLeaders', res)
        })
        .catch((error) => {
          console.log('getLeaders', error)
        })
    }    
  },
  computed: {
    ... mapGetters({
      getTrainer: 'getTrainer'
    })
  },
  mounted() {
    this.getAbout(),
    this.getLeaders(),
    this.$store.dispatch('getTrainer')
  }

}
</script>