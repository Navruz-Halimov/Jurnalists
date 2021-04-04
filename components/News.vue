<template>
    <div class="main-posts">
      <b-container>
        <b-row>
          <b-col cols="12">
            <h2 class="main__title" data-aos="fade-up" data-aos-duration="800">
              Yangiliklar
            </h2>
          </b-col>
        </b-row>
        <b-row class="mobile__view">
        <b-col>
          <b-row>
          <b-col 
            lg="6" 
            class="main-posts__item"
            v-for="(newPost, index) in getNews"
            :key="index.id"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div class="main-posts__img">
              <img :src="newPost.image" alt="post">
            </div>
            <div class="main-posts__info">
              <div class="main-posts__date">{{newPost.date && newPost.date.replace('T', ' / ').replace('Z', ' ').slice(0, 10).split("-").reverse().join(".")}}</div>
              <nuxt-link :to="localePath('/news/'+newPost.id)" class="main-posts__title" v-if="$i18n.locale == 'uz'">{{newPost.title}}</nuxt-link>
              <nuxt-link :to="localePath('/news/'+newPost.id)" class="main-posts__title" v-else>{{newPost.title_kl}}</nuxt-link>
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
        { id: 1, title: 'Асосий', url: '/', disabled: false },
        { id: 2, title: 'Янгиликлар', url: '/news', disabled: true},
      ],
      crumbsRu: [
        { id: 1, title: 'Главный', url: '/', disabled: false },
        { id: 2, title: 'Новости', url: '/archive', disabled: true},
      ],
    }
  },
  computed: {
    ... mapGetters({
      getNews: 'getNews'
    })
  },
  mounted() {
    this.$store.dispatch('getNews');
  }
}
</script>