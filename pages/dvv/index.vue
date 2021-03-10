<template>
  <div class="dvv_page">
    <b-container class="links p-0 mb-5" fluid="fluid">
      <b-container>
        <b-row>
          <b-col class="p-0" lg="12">
            <Breadcrumb v-if="$i18n.locale == 'uz'" :crumbs="crumbs" />
            <Breadcrumb v-else :crumbsRu="crumbsRu" />
          </b-col>
        </b-row>
      </b-container>
    </b-container>
    <b-container class="dvv-section">
      <div class="projects__content text-center">
            <h1 class="projects__title">{{$t('dvv.news')}}</h1>
            <b-row>
              <b-col 
                lg="3" 
                class="main-project__item dvv-news-card"
                v-for="project in getProject"
                :key="project.id"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <nuxt-link :to="'projects/'+project.id" class="main-project__img">
                  <img :src="project.image" alt="image">
                  <div class="main-project__info">
                    <div class="main-project__title" v-if="$i18n.locale == 'uz'">{{project.title}}</div>
                    <div class="main-project__title" v-else>{{project.title_kl}}</div>
                    <div class="main-project__text" v-if="$i18n.locale == 'uz'" v-html="project.content"></div>
                    <div class="main-project__text" v-else v-html="project.content_kl"></div>
                  </div>
                </nuxt-link>
              </b-col>
            </b-row>
          </div>
      </b-container>
      <!-- Webinar -->
        <b-container class="text-center dvv-section">
          <h1 class="mb-5 projects__title">{{$t('dvv.webinar')}}</h1>
            <b-row>
              <b-col 
                class="webinar_card"
                v-for="project in getProject"
                :key="project.id"
                lg='4'
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <img class="dvv_img" :src="project.image" alt="image">
                <div class="webinar_title">
                    <div v-if="$i18n.locale == 'uz'">{{project.title}}</div>
                    <div v-else>{{project.title_kl}}</div>
                </div>
                <div class="d-flex justify-content-around"> 
                  <h6>10.03.2021</h6>
                  <nuxt-link :to="'projects/'+project.id">
                    Batafsil
                  </nuxt-link>
                </div>
                
              </b-col>
            </b-row>
        </b-container>
        <b-container class="text-center">
            <h1 class="projects__title">{{$t('dvv.oav')}}</h1>
            <b-col  
                v-for="project in getProject"
                :key="project.id"
              >
                <nuxt-link :to="'projects/'+project.id" class="main-project__img">
                  <img :src="project.image" alt="image">
                  <div class="main-project__info">
                    <div class="main-project__title" v-if="$i18n.locale == 'uz'">{{project.title}}</div>
                    <div class="main-project__title" v-else>{{project.title_kl}}</div>
                    <div class="main-project__text" v-if="$i18n.locale == 'uz'" v-html="project.content"></div>
                    <div class="main-project__text" v-else v-html="project.content_kl"></div>
                  </div>
                </nuxt-link>
              </b-col>
        </b-container>
  </div>
</template>
<script>

import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      crumbs: [
        { id: 1, title: 'Асосий', url: '/', disabled: false },
        { id: 2, title: 'DVV', url: '/dvv', disabled: true},
      ],
      crumbsRu: [
        { id: 1, title: 'Главный', url: '/', disabled: false },
        { id: 2, title: 'DVV', url: '/dvv', disabled: true},
      ],
      items: [
        // { title: "Home", href: "/" }, 
        // { title: "", active: true }
      ],
      
    }
  },
  mounted() {
    this.$store.dispatch('getProject')
    this.$store.dispatch('getDvv')
  },
  computed: {
    ... mapGetters({
      getProject: 'getProject',
      getDvv: 'getDvv'
    })
  }
}
</script>
