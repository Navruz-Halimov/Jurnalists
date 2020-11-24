<template>
  <div class="main-search">
    <b-container>
      <div class="search__list" v-for="(search, index) in getInput" :key="index.id">
        <div class="search__title">{{search.title}}</div>
        <div class="div">{{search.content}}</div>
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
    console.log("getInput", this.$store.state.searchs)
  }
}
</script>
<style>
  .main-search {
    padding: 50px 0;
  }
</style>