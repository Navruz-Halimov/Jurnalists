<template>
  <div class="archive-page">
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
      <b-row class="mobile__view">
        <b-col class="pl-0" lg="3">
          <left-content />
        </b-col>
        <b-col lg="9">
          <b-row>
            <div class="col-12">
              <h1 class="archive-page__title">Arxiv</h1>
            </div>
          </b-row>
          <b-row class="archive-page__list">
            <b-col md="6" class="archive-page__item" v-for="(archive, index) in getArchive" :key="index.id">
              <nuxt-link :to="'archive/'+archive.id" class="archive-page__img">
                <img 
                  :src="archive.image" 
                  alt=""
                >
              </nuxt-link>
              <nuxt-link :to="'archive/'+archive.id" class="archive-page__subtitle">{{archive.title}}</nuxt-link>
              <div class="archive-page__body" v-html="archive.text"></div>
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
        { id: 2, title: 'Arxiv', url: '/archive', disabled: true},
      ]
    }
  },
  mounted() {
    this.$store.dispatch('getArchive');
  },
  computed: {
    ... mapGetters({
      getArchive: 'getArchive'
    })
  }
}
</script>