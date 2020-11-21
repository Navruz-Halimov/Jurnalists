<template>
  <div class="compitition-page">
    <b-container class="links p-0 mb-5" fluid="fluid">
      <b-container>
        <b-row>
          <b-col class="p-0" lg="12">
            <!-- <div class="link">
              <a href="#">Asosiy</a> / <span>Tanlovlar</span>
            </div> -->
            <Breadcrumb :crumbs="crumbs" />
          </b-col>
        </b-row>
      </b-container>
    </b-container>
    <b-container>
      <b-row class="mobile__view">
        <b-col class="pl-0" lg="3">
          <left-content />
        </b-col>
        <b-col lg="9">
          <b-row>
            <div class="col-12">
              <h1 class="compitition-page__title">Tanlovlar</h1>
            </div>
          </b-row>
          <b-row class="compitition-page__list">
            <b-col 
              md="4" 
              cols="6" 
              class="compitition-page__item"
              v-for="(compitition, index) in getCompitition"
              :key="index.id" 
            >
              <nuxt-link :to="'compitition/' + compitition.id" class="compitition-page__img">
                <img :src="compitition.image" alt="image">
              </nuxt-link>
              <div class="compitition-page__info">
                <nuxt-link :to="'compitition/' + compitition.id" class="compitition-page__subtitle">{{compitition.title}}</nuxt-link>
                <div class="compitition-page__date">{{compitition.date}}</div>
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
      crumbs: [
        { id: 1, title: 'Asosiy', url: '/', disabled: false },
        { id: 2, title: 'Tanlovlar', url: '/compitition', disabled: true},
      ]
    }
  },  
  computed: {
    ... mapGetters({
      getCompitition: 'getCompitition'
    })
  },
  mounted() {
    this.$store.dispatch('getCompitition');
  }
}
</script>