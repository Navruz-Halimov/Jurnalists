<template>
    <div class="main-trainer">
      <b-container>
        <b-row>
          <b-col cols="12">
            <div class="main__title">Trenerlar</div>
          </b-col>
        </b-row>
        <b-row class="main-trainer__list">
          <b-col 
            lg="3" 
            md="6" 
            cols="12" 
            class="main-trainer__item"
            v-for="(trainer, index) in getTrainer"
            :key="index.id"
          >
            <nuxt-link :to="'trainers/'+trainer.id" class="main-trainer__link">
              <div class="main-trainer__img">
                <img :src="trainer.image" alt="">
                <div class="main-trainer__text">{{trainer.about_work}}</div>
              </div>
              <div class="main-trainer__name">{{trainer.title}}</div>
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
            <nuxt-link to="/about" class="site__button">ko’proq</nuxt-link>
          </b-col>
        </b-row>
      </b-container>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ... mapGetters({
      getTrainer: 'getTrainer'
    })
  },
  mounted() {
    this.$store.dispatch('getTrainer');
  }
}
</script>