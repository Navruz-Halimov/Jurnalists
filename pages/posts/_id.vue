<template>
  <div class="compitition-page page-item">
    <b-container class="links p-0 mb-5" fluid="fluid">
      <b-container>
        <b-row>
          <b-col class="p-0" lg="12">
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
              <h1 class="archive-page__title">{{postsItem.title}}</h1>
            </div>
          </b-row>
          <b-row>
            <b-col cols="12" class="page-item__content">
              <div class="page-item__img">
                <img :src="postsItem.image" alt="">
              </div>
              <div class="page-item__text" v-html="postsItem.about_work">
              </div>
            </b-col>            
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      postsItem: [],
      crumbs: [
        { id: 1, title: 'Asosiy', url: '/', disabled: false },
        // { id: 2, title: 'E’lonlar', url: '/', disabled: false},
      ]
    }
  },
  methods: {
    async getPostsItem() {
      await this.$axios.get(`elonlar/${this.$route.params.id}/`)
        .then((res) => {
          this.postsItem = res.data;
          console.log('postsItem', res)
        })
        .catch((error) => {
          console.log('postsItem', error)
        })
    }
  },
  created() {
    this.getPostsItem()
    .then(() => {
      this.crumbs.push(
        { id: 2, title: this.postsItem.title, url: '/posts', disabled: true},
      );
    })
  }
}
</script>