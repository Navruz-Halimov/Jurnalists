<template>
  <div class="guides-page">
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
              <h1 class="guides-page__title">Qo`llanmalar</h1>
            </div>
          </b-row>
          <b-row class="guides-page__list">
            <b-col 
              md="4" 
              cols="6" 
              class="guides-page__item"
              v-for="guide in guides"
              :key="guide.id"
            >
              <div class="guides-page__img">
                <img :src="guide.picture" alt="">
              </div>
              <div class="guides-page__subtitle">{{guide.title}}</div>
              <a :href="guide.pdf" target="_blank" download="true" class="guides-page__download">Download</a>
            </b-col>           
          </b-row>          
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      guides: [],
      crumbs: [
        { id: 1, title: 'Asosiy', url: '/', disabled: false },
        { id: 2, title: 'Qo`llanmalar', url: '/guides', disabled: true},
      ]
    }
  },
  methods: {
    async getGuides() {
      await this.$axios.get('qollanmalar/')
        .then((res) => {
          this.guides = res.data;
          console.log('getGuides', res)
        })
        .catch((error) => {
          conslo.log('getGuides', error)
        })
    }
  },
  mounted() {
    this.getGuides()
  }
}
</script>