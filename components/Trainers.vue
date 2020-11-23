<template>
    <div class="main-trainer">
      <b-container>
        <b-row>
          <b-col cols="12">
            <div class="main__title">{{$t('index.trainer')}}</div>
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
            <nuxt-link :to="localePath('/trainers/'+trainer.id)" class="main-trainer__link">
              <div class="main-trainer__img">
                <img :src="trainer.image" alt="">
                <div class="main-trainer__text" v-html="trainer.about_work"></div>
              </div>
            </nuxt-link>
            <nuxt-link :to="'trainers/'+trainer.id" class="main-trainer__name">{{trainer.name}}</nuxt-link>
            <nuxt-link :to="'trainers/'+trainer.id" class="main-trainer__name">{{trainer.name_kl}}</nuxt-link>            
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12">
            <nuxt-link :to="localePath('/about')" class="site__button">{{$t('btn_more.title')}}</nuxt-link>
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