<template>
  <b-container>
    <b-row class="release">
      <div class="release__title">Матбуот Релиз</div>
      <b-row class="release__list">
        <b-col 
          md="4" 
          cols="6" 
          class="release__item"
          v-for="release in getRelease"
          :key="release.id"
        >
          <div class="release__img">
            <img :src="release.image" alt="">
          </div> 
          <div class="release__address">{{release.address}}</div>
          <div class="release__info">
            <nuxt-link :to="'release/'+release.id" class="release__subtitle" v-html="release.title_of_trening"></nuxt-link>
            <div class="release__data">{{release.time}}</div>
          </div>
        </b-col>      
      </b-row>
    </b-row>
  </b-container>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  mounted() {
    this.$store.dispatch('getReleases') // action function name
  },
  computed: {
    ... mapGetters({
      getRelease: 'getRelease' // getter function name
    })
  }
}
</script>
