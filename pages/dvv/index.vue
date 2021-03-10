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
            <h1 class="projects__title" v-if="getDvvNews">{{$t('dvv.news')}}</h1>
            <b-row>
              <b-col 
                lg="3" 
                class="main-project__item dvv-news-card"
                v-for="project in getDvvNews"
                :key="project.id"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <nuxt-link :to="'dvv/news/'+project.id" class="main-project__img">
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
          <h1 class="mb-5 projects__title" v-if="getTrainings">{{$t('dvv.webinar')}}</h1>
            <b-row>
              <b-col 
                class="webinar_card"
                v-for="project in getTrainings"
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
                  <h6>{{ChangeFormateDate(project.date.slice(0,10))}}</h6>
                  <nuxt-link :to="'dvv/trainings/'+project.id">
                    Batafsil
                  </nuxt-link>
                </div>
                
              </b-col>
            </b-row>
        </b-container>
        <b-container class="text-center dvv-section">
            <h1 class="projects__title" v-if="getOav">{{$t('dvv.oav')}}</h1>
            <b-row>
            <b-col 
                class="oav_card d-flex" 
                v-for="project in getOav"
                :key="project.id"
                lg='6'
                data-aos="fade-up"
                data-aos-duration="800"
              >
               
                <div> 
                  <img :src="project.image" alt="image" class="oav_img">
                </div>
                <div>
                  <div class="oav_txt">
                      <p v-if="$i18n.locale == 'uz'">{{project.title}}</p>
                      <p v-else>{{project.title_kl}}</p>
                      <!-- <div v-if="$i18n.locale == 'uz'" v-html="project.content"></div>
                      <div v-else v-html="project.content_kl"></div> -->
                  </div>
                

                    <nuxt-link :to="'dvv/oav/'+project.id">
                      Batafsil
                    </nuxt-link>
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
        { id: 1, title: 'Асосий', url: '/', disabled: false },
        { id: 2, title: 'DVV', url: '/dvv', disabled: true},
      ],
      crumbsRu: [
        { id: 1, title: 'Главный', url: '/', disabled: false },
        { id: 2, title: 'DVV', url: '/dvv', disabled: true},
      ],
      items: [
      ],
      
    }
  },
  methods: {
    ChangeFormateDate(oldDate)
        {
          return oldDate.split("-").reverse().join(".");
        }
  },
  mounted() {
    this.$store.dispatch('getProject')
    this.$store.dispatch('getDvvNews')
    this.$store.dispatch('getTrainings')
    this.$store.dispatch('getOav')
  },
  computed: {
    ... mapGetters({
      getProject: 'getProject',
      getDvvNews: 'getDvvNews',
      getTrainings: 'getTrainings',
      getOav: 'getOav'
    })
  }
}
</script>
