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
              <b-col cols="12" sm="6" md="6" lg="4">
                <nuxt-link active-class="active" to="/projectsitem">
                  <div class="projects__card">
                    <img src="../assets/images/55045629_21.png" alt="">
                    <h4>Mavzu (title)</h4>
                    <p>
                      <b>Mavzu (title)</b> <br />
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.</p>
                  </div>
                </nuxt-link>
              </b-col>
              <b-col cols="12" sm="6" md="6" lg="4">
                <nuxt-link active-class="active" to="/projectsitem">
                  <div class="projects__card">
                    <img src="../assets/images/55045629_23.png" alt="">
                    <h4>Mavzu (title)</h4>
                    <p>
                      <b>Mavzu (title)</b> <br />
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.</p>
                  </div>
                </nuxt-link>
              </b-col>
              <b-col cols="12" sm="6" md="6" lg="4">
                <nuxt-link active-class="active" to="/projectsitem">
                  <div class="projects__card">
                    <img src="../assets/images/55045629_22.png" alt="">
                    <h4>Mavzu (title)</h4>
                    <p>
                      <b>Mavzu (title)</b> <br />
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.</p>
                  </div>
                </nuxt-link>
              </b-col>
              <b-col cols="12" sm="6" md="6" lg="4">
                <nuxt-link active-class="active" to="/projectsitem">
                  <div class="projects__card">
                    <img src="../assets/images/55045629_21.png" alt="">
                    <h4>Mavzu (title)</h4>
                    <p>
                      <b>Mavzu (title)</b> <br />
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.</p>
                  </div>
                </nuxt-link>
              </b-col>
              <b-col cols="12" sm="6" md="6" lg="4">
                <nuxt-link active-class="active" to="/projectsitem">
                  <div class="projects__card">
                    <img src="../assets/images/55045629_23.png" alt="">
                    <h4>Mavzu (title)</h4>
                    <p>
                      <b>Mavzu (title)</b> <br />
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.</p>
                  </div>
                </nuxt-link>
              </b-col>
              <b-col cols="12" sm="6" md="6" lg="4">
                <nuxt-link active-class="active" to="/projectsitem">
                  <div class="projects__card">
                    <img src="../assets/images/55045629_22.png" alt="">
                    <h4>Mavzu (title)</h4>
                    <p>
                      <b>Mavzu (title)</b> <br />
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.</p>
                  </div>
                </nuxt-link>
              </b-col>
              <b-col cols="12" sm="6" md="6" lg="4">
                <nuxt-link active-class="active" to="/projectsitem">
                  <div class="projects__card">
                    <img src="../assets/images/55045629_21.png" alt="">
                    <h4>Mavzu (title)</h4>
                    <p>
                      <b>Mavzu (title)</b> <br />
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.</p>
                  </div>
                </nuxt-link>
              </b-col>
              <b-col cols="12" sm="6" md="6" lg="4">
                <nuxt-link active-class="active" to="/projectsitem">
                  <div class="projects__card">
                    <img src="../assets/images/55045629_23.png" alt="">
                    <h4>Mavzu (title)</h4>
                    <p>
                      <b>Mavzu (title)</b> <br />
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.</p>
                  </div>
                </nuxt-link>
              </b-col>
              <b-col cols="12" sm="6" md="6" lg="4">
                <nuxt-link active-class="active" to="/projectsitem">
                  <div class="projects__card">
                    <img src="../assets/images/55045629_22.png" alt="">
                    <h4>Mavzu (title)</h4>
                    <p>
                      <b>Mavzu (title)</b> <br />
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.</p>
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
import LeftContent from '../components/left-content'

export default {
  components: {
    LeftContent
  },
  data () {
    return {}
  }
}
</script>
