<template>
  <b-container>
    <b-row class="release">
      <div class="release__title">Матбуот Релиз</div>
      <b-row class="release__list">
        <b-col 
          md="4" 
          cols="6" 
          class="release__item"
          v-for="(release, index) in getRelease"
          :key="index.id"
        >
          <div class="release__img">
            <img :src="release.image" alt="">
          </div> 
          <div class="release__address">{{release.address}}</div>
          <div class="release__info">
            <div class="release__subtitle">{{release.title}}</div>
            <div class="release__data">{{release.data}}</div>
          </div>
        </b-col>
        <b-col md="4" cols="6" class="release__item">
          <div class="release__img">
            <img src="../assets/images/release1.png" alt="">
          </div> 
          <div class="release__address">Мирабадский район, Ташкент</div>
          <div class="release__info">
            <div class="release__subtitle">Mavzu (title)</div>
            <div class="release__data">18.10.2020</div>
          </div>
        </b-col>      
      </b-row>
    </b-row>
  </b-container>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters({
      getRelease: 'getRelease'
    })
  },
  mounted() {
    this.getRelease()
  }
}
</script>