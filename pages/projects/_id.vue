<template>
  <div class="projects trainings">
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
      <b-row>
        <b-col class="p-0" lg="3">
          <left-content />
        </b-col>
        <b-col lg="9">
          <div class="projects__content">
            <h2>Mavzu (title)</h2>
            <div class="trainings__content">
              <b-row>
                <b-col lg="4">
                  <img src="../../assets/images/Rectangle21.png" alt="">
                </b-col>
                <b-col lg="6">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. </p>
                </b-col>
                <b-col lg="12">
                  <ul class="trainings__list">
                    <div>
                      <li>Lorem ipsum dolor sit amet, consectetur</li>
                      <li>Lorem ipsum dolor sit amet, consectetur</li>
                      <li>Lorem ipsum dolor sit amet, consectetur</li>
                    </div>
                    <div>
                      <li>Lorem ipsum dolor sit amet, consectetur</li>
                      <li>Lorem ipsum dolor sit amet, consectetur</li>
                      <li>Lorem ipsum dolor sit amet, consectetur</li>
                    </div>
                  </ul>
                </b-col>
                <b-col lg="12">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. </p>
                </b-col>
              </b-row>
            </div>
          </div>
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
    return {}
  }
}
</script>
