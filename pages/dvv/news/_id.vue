<template>
  <div class="projects trainings">
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
    <b-container>
      <b-row class="mobile__view">
        <b-col class="p-0 left__form" lg="3">
          <left-content />
        </b-col>
        <b-col lg="9">
          <b-row>
            <div class="col-12">
              <h1 class="archive-page__title" v-if="$i18n.locale == 'uz'">{{projectsItem.title}}</h1>
              <h1 class="archive-page__title" v-else>{{projectsItem.title_kl}}</h1>
            </div>
          </b-row>
          <b-row>
            <b-col cols="12" class="page-item__content">
              <div class="page-item__img">
                <!-- <img :src="projectsItem.image" alt=""> -->
              </div>
              <div class="page-item__text" v-html="projectsItem.content" v-if="$i18n.locale == 'uz'"></div>
              <div class="page-item__text" v-html="projectsItem.content_kl" v-else></div>
            </b-col>            
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      projectsItem: [],
      crumbs: [
        { id: 1, title: 'Асосий', url: '/', disabled: false },
        { id: 2, title: 'DVVI', url: '/uz/dvv', disabled: false},
      ],
      crumbsRu: [
        { id: 1, title: 'Главный', url: '/', disabled: false },
        { id: 2, title: 'DVVI', url: '/ru/dvv', disabled: false},
      ],
    }
  },
  methods: {
    async getProjectsItem() {
        await this.$axios.get(`dvv/news/${this.$route.params.id}/`)
        .then((res) => {
          this.projectsItem = res.data;
        })
        .catch((error) => {})
    }
  },
  created() {
    this.getProjectsItem()
    .then(() => {
      this.crumbs.push(
        { id: 3, title: this.projectsItem.id, url: '/dvv', disabled: true},
      );
      this.crumbsRu.push(
        { id: 3, title: this.projectsItem.id, url: '/dvv', disabled: true},
      );
    })
  },
}

</script>
