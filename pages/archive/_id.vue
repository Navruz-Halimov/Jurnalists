<template>
  <div class="archive-page page-item">
    <b-container class="links p-0 mb-5" fluid="fluid">
      <b-container>
        <b-row>
          <b-col class="p-0" lg="12">
            <div class="link">
              <a href="#">Asosiy</a> / <span>Arxiv</span>
            </div>
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
              <h1 class="archive-page__title">{{archiveItem.title}}</h1>
            </div>
          </b-row>
          <b-row>
            <b-col cols="12" class="page-item__content">
              <div class="page-item__img">
                <img :src="archiveItem.image" alt="">
              </div>
              <div class="page-item__text">
                {{archiveItem.text}}
              </div>
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
      archiveItem: []
    }
  },
  methods: {
    async getArchiveItem() {
      await this.$axios.get(`arxiv/${this.$route.params.id}/`)
        .then((res) => {
          this.archiveItem = res.data;
          console.log('archiveItem', res)
        })
        .catch((error) => {
          console.log('getArchiveItem', error)
        })
    }
  },
  mounted() {
    this.getArchiveItem();
  }
}
</script>