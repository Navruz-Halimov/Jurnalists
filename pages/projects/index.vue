<template>
  <div class="projects">
    <b-container class="links p-0 mb-5" fluid="fluid">
      <b-container>
        <b-row>
          <b-col class="p-0" lg="12">
            <div class="link">
              <a href="#">Asosiy</a> / <span>Trenerlar</span>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
    <b-container>
      <b-row class="mobile__view">
        <b-col class="p-0" lg="3">
          <left-content />
        </b-col>
        <b-col lg="9">
          <div class="projects__content">
            <h1 class="projects__title">Loyihalar</h1>
            <b-row>
              <b-col 
                cols="12" 
                sm="6" 
                md="6" 
                lg="4"
                v-for="(project, index) in getProject"
                :key="index.id"
              >
                <nuxt-link active-class="active" :to="'projects/'+project.id">
                  <div class="projects__card">
                    <img :src="project.image" alt="">
                    <h4>{{project.title}}</h4>
                    <p>
                      <b>{{project.title}}</b> <br />
                        {{project.content}}
                      </p>
                  </div>
                </nuxt-link>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>

import {mapGetters} from 'vuex'
export default {
  data () {
    return {}
  },
  mounted() {
    this.$store.dispatch('getProject')
  },
  computed: {
    ... mapGetters({
      getProject: 'getProject'
    })
  }
}
</script>
