<template>
  <div class="trainers-page">
    <b-container class="links p-0 mb-5" fluid="fluid">
      <b-container>
        <b-row>
          <b-col class="p-0" lg="12">
            <!-- <div class="link">
              <a href="#">Asosiy</a> / <span>Arxiv</span>
            </div> -->
            <Breadcrumb/>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
    <b-container>
      <b-row class="webinars">
        <h1 class="webinars__title">Vebinarlar</h1>
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
              <div class="webinars__subtitle">{{webinar.title}}</div>
              <nuxt-link to="" class="webinars__link" v-if="webinar.vebinar_type == 'online'">{{webinar.vebinar_type}}</nuxt-link>
              <div class="webinars__address" v-if="webinar.vebinar_type == 'offline'">{{webinar.vebinar_type}}</div>
            </div>
          </b-col>
          <b-col md="6" class="webinars__item">
            <div class="webinars__img">
              <img src="../assets/images/vebinar.png" alt="">
            </div>
            <div class="webinars__info">
              <div class="webinars__subtitle">Video (title)</div>
              <nuxt-link to="" class="webinars__link">https://link.style.ru</nuxt-link>
              <div class="webinars__address">Мирабадский район, Ташкент</div>
            </div>
          </b-col>
          <b-col md="6" class="webinars__item">
            <div class="webinars__img">
              <img src="../assets/images/vebinar.png" alt="">
            </div>
            <div class="webinars__info">
              <div class="webinars__subtitle">Video (title)</div>
              <nuxt-link to="" class="webinars__link">https://link.style.ru</nuxt-link>
              <div class="webinars__address">Мирабадский район, Ташкент</div>
            </div>
          </b-col>
          <b-col md="6" class="webinars__item">
            <div class="webinars__img">
              <img src="../assets/images/vebinar.png" alt="">
            </div>
            <div class="webinars__info">
              <div class="webinars__subtitle">Video (title)</div>
              <nuxt-link to="" class="webinars__link">https://link.style.ru</nuxt-link>
              <div class="webinars__address">Мирабадский район, Ташкент</div>
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
      webinars: []
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