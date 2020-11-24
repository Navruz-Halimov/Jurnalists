<template>
  <div class="trainers-page">
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
      <b-row class="webinars">
        <h1 class="webinars__title">{{$t('trainingPage.vebinar')}}</h1>
        <b-row class="webinars__list">
          <b-col 
            md="6" 
            class="webinars__item"
            v-for="webinar in webinars"
            :key="webinar.id"
          >
            <div class="webinars__img">
              <img :src="webinar.image" alt="">
            </div>
            <div class="webinars__info">
              <div class="webinars__subtitle" v-if="$i18n.locale == 'uz'">{{webinar.title}}</div>
              <div class="webinars__subtitle" v-else>{{webinar.title_kl}}</div>
              <nuxt-link to="" class="webinars__link" v-if="webinar.vebinar_type == 'online'">{{webinar.url}}</nuxt-link>
              <div class="webinars__address" v-if="webinar.vebinar_type == 'offline'">{{webinar.address}}</div>
            </div>
          </b-col>
        </b-row>
      </b-row>
      <Release/>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      webinars: [],
      crumbs: [
        { id: 1, title: 'Asosiy', url: '/', disabled: false },
        { id: 2, title: 'Treninglar', url: '/training', disabled: true},
      ]
    }
  },
  methods: {
    async getWebinar() {
      await this.$axios.get('treninglar/treneringlar/')
        .then((res) => {
          this.webinars = res.data;
          console.log('getWebinar', res)
        })
        .catch((error) => {
          console.log('getWebinar', error)
        })
    }
  },
  mounted() {
    this.getWebinar()
  }
}
</script>