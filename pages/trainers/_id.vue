<template>
  <div class="compitition-page page-item">
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
              <h1 class="archive-page__title">{{compititionItem.title}}</h1>
            </div>
          </b-row>
          <b-row>
            <b-col cols="12" class="page-item__content">
              <div class="page-item__img">
                <img :src="compititionItem.image" alt="">
              </div>
              <div class="page-item__text">
                {{compititionItem.text}}
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
      trainersItem: []
    }
  },
  methods: {
    async getTrainersItem() {
      await this.$axios.get(`trenerlar/trenerlar/${this.$route.params.id}/`)
        .then((res) => {
          this.trainersItem = res.data;
          console.log('trainersItem', res)
        })
        .catch((error) => {
          console.log('trainersItem', error)
        })
    }
  },
  mounted() {
    this.getTrainersItem();
  }
}
</script>