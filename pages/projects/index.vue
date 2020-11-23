<template>
  <div class="projects">
    <b-container class="links p-0 mb-5" fluid="fluid">
      <b-container>
        <b-row>
          <b-col class="p-0" lg="12">
            <!-- <i-breadcrumb>
              <nuxt-link to="/">Asosiy</nuxt-link> /
              <i-breadcrumb-item>Loyihalar</i-breadcrumb-item>
            </i-breadcrumb> -->
            <Breadcrumb :crumbs="crumbs" />
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
            <h1 class="projects__title">{{$t('projectsPage.title')}}</h1>
            <b-row>
              <b-col 
                lg="4" 
                md="6" 
                cols="12" 
                class="main-project__item"
                v-for="project in getProject.slice(0,4)"
                :key="project.id"
              >
                <nuxt-link :to="'projects/'+project.id" class="main-project__img">
                  <img :src="project.image" alt="">
                  <div class="main-project__info">
                    <div class="main-project__title">{{project.title}}</div>
                    <div class="main-project__text" v-html="project.content"></div>
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
    return {
      crumbs: [
        { id: 1, title: 'Asosiy', url: '/', disabled: false },
        { id: 2, title: 'Loyihalar', url: '/projects', disabled: true},
      ],
      items: [
        // { title: "Home", href: "/" }, 
        // { title: "", active: true }
      ]
    }
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
