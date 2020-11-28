<template>
  <div class="main-search">
    <b-container>
      <h1>Search</h1>
      <div class="search__list" v-for="(search, index) in getInput" :key="index.id">
        <nuxt-link :to="localePath(`/posts/${search.id}`)" class="search__title">{{search.title}}</nuxt-link>
      </div>
    </b-container>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      
    }
  },
  methods: {
    
  },
  computed: {
    ... mapGetters({
      getInput: 'getInput'
    })
  },
  mounted() {
  }
}
</script>
<style>
  .main-search {
    padding: 50px 0;
  }
</style>