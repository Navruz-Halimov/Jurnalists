<template>
    <div class="main-posts">
      <b-container>
        <b-row>
          <b-col cols="12">
            <div class="main__title">{{$t('index.advert')}}</div>
          </b-col>
        </b-row>
        <b-row>
          <b-col 
            md="6" 
            class="main-posts__item"
            v-for="(post, index) in getPosts"
            :key="index.id"
          >
            <div class="main-posts__img">
              <img :src="post.image" alt="post">
            </div>
            <div class="main-posts__info">
              <div class="main-posts__date">{{post.date}}</div>
              <nuxt-link :to="'posts/'+post.id" class="main-posts__title">{{post.title}}</nuxt-link>
            </div>
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
      getPosts: 'getPosts'
    })
  },
  mounted() {
    this.$store.dispatch('getPosts');
  }
}
</script>