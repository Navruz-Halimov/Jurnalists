<template>
  <div class="projects trainings">
    <b-container class="links p-0 mb-5" fluid="fluid">
      <b-container>
        <b-row>
          <b-col class="p-0" lg="12">
            <!-- <div class="link">
              <a href="#">Asosiy</a> / <span>Trenerlar</span>
            </div> -->
            <Breadcrumb/>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
    <b-container>
      <b-row>
        <b-col class="p-0" lg="3">
          <left-content />
        </b-col>
        <b-col lg="9">
          <b-row>
            <div class="col-12">
              <h1 class="archive-page__title">{{projectsItem.title}}</h1>
            </div>
          </b-row>
          <b-row>
            <b-col cols="12" class="page-item__content">
              <div class="page-item__img">
                <img :src="projectsItem.image" alt="">
              </div>
              <div class="page-item__text" v-html="projectsItem.content">
              </div>
            </b-col>            
          </b-row>
        </b-col>
        <b-col class="projects__content mt-5" lg="12">
          <b-row>
            <b-col cols="12" sm="6" md="6" lg="3">
              <nuxt-link active-class="active" to="/projectsitem">
                <div class="projects__card">
                  <img src="../../assets/images/55045629_21.png" alt="">
                  <h4>Mavzu (title)</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua.</p>
                </div>
              </nuxt-link>
            </b-col>
            <b-col cols="12" sm="6" md="6" lg="3">
              <nuxt-link active-class="active" to="/projectsitem">
                <div class="projects__card">
                  <img src="../../assets/images/55045629_23.png" alt="">
                  <h4>Mavzu (title)</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua.</p>
                </div>
              </nuxt-link>
            </b-col>
            <b-col cols="12" sm="6" md="6" lg="3">
              <nuxt-link active-class="active" to="/projectsitem">
                <div class="projects__card">
                  <img src="../../assets/images/55045629_22.png" alt="">
                  <h4>Mavzu (title)</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua.</p>
                </div>
              </nuxt-link>
            </b-col>
            <b-col cols="12" sm="6" md="6" lg="3">
              <nuxt-link active-class="active" to="/projectsitem">
                <div class="projects__card">
                  <img src="../../assets/images/Rectangle21.png" alt="">
                  <h4>Mavzu (title)</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua.</p>
                </div>
              </nuxt-link>
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
      projectsItem: []
    }
  },
  methods: {
    async getProjectsItem() {
      await this.$axios.get(`loyihalar/${this.$route.params.id}/`)
        .then((res) => {
          this.projectsItem = res.data;
          console.log('getProjectsItem', res)
        })
        .catch((error) => {
          console.log('getProjectsItem', res)
        })
    }
  },
  mounted() {
    this.getProjectsItem()
  }
}
</script>
