<template>
  <div class="compitition-page page-item">
    <b-container class="links p-0 mb-5" fluid="fluid">
      <b-container>
        <b-row>
          <b-col class="p-0" lg="12">
            <Breadcrumb :crumbs="crumbs"/>
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
              <h1 class="archive-page__title" v-if="$i18n.locale == 'uz'">{{releaseItem.title_of_trening}}</h1>
              <h1 class="archive-page__title" v-else>{{releaseItem.title_of_trening_kl}}</h1>
            </div>
          </b-row>
          <b-row>
            <b-col cols="12" class="page-item__content">
              <div class="page-item__img">
                <!-- <img :src="releaseItem.image" alt=""> -->
              </div>
              <div class="page-item__text" v-if="$i18n.locale == 'uz'" v-html="releaseItem.content"></div>
              <div class="page-item__text" v-else v-html="releaseItem.content_kl"></div>
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
      releaseItem: []
    }
  },
  methods: {
    async getReleaseItem() {
      await this.$axios.get(`/treninglar/matbuot/${this.$route.params.id}/`)
        .then((res) => {
          this.releaseItem = res.data;
          console.log('releaseItem', res)
        })
        .catch((error) => {
          console.log('releaseItem', error)
        })
    }
  },
  mounted() {
    this.getReleaseItem()
  }
}
</script>