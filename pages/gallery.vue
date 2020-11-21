<template>
  <div class="gallery">
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
        <b-col lg="12">
          <h2 class="gallery__title">Galereya</h2>
        </b-col>
        <b-col lg="3">
          <div class="gallery__videos">
            <div class="video" v-for="video in videos" :key="video.id">
              <!-- <img src="../assets/images/9.png" alt=""> -->
              <video width="270" height="200" controls="controls" :poster="video.video">
                <source :src="video.video" type='video/ogg; codecs="theora, vorbis"'>
                <source :src="video.video" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
                <source :src="video.video" type='video/webm; codecs="vp8, vorbis"'>
                Элемент video не поддерживается вашим браузером. 
                <!-- <a :href="video.video">Скачайте видео</a>. -->
              </video>
              <p>{{video.title}}</p>
              <!-- <span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                    <path d="M2.97786 0.308689C1.71568 -0.415315 0.692383 0.177798 0.692383 1.63238V12.3666C0.692383 13.8226 1.71568 14.415 2.97786 13.6917L12.3601 8.31101C13.6227 7.58675 13.6227 6.41334 12.3601 5.68925L2.97786 0.308689Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0">
                    <rect width="14" height="14" fill="white"/>
                    </clipPath>
                    </defs>
                  </svg>
                </span> -->
              <!-- <div class="play">
                <p>{{video.title}}</p>
              </div> -->
            </div>
          </div>
        </b-col>
        <b-col lg="9">
          <div class="gallery__content">
            <b-row class="gallery__list">
              <b-col 
                lg="4" 
                md="4" 
                cols="6" 
                class="mb-4"
                v-for="gallery in gallerys"
                :key="gallery.id"
              >
                <div class="gallery__image">
                  <img :src="gallery.image" alt="">
                  <!-- <div class="gallery__text">
                    <i>
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.46387 3.59277H7.28027V4.53613H4.46387V7.44824H3.51367V4.53613H0.710938V3.59277H3.51367V0.666992H4.46387V3.59277Z" fill="white"/>
                      </svg>
                    </i>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                  </div> -->
                </div>
                <h4>{{gallery.title}}</h4>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gallerys: [],
      videos: []
    }
  },
  methods: {
    async getGallery() {
      await this.$axios.get('galeriya/pictures/')
        .then((res) => {
          this.gallerys = res.data;
          console.log('getGallery', res)
        })
        .catch((error) => {
          console.log('getGallery', error)
        })
    },
    async getVideo() {
      await this.$axios.get('galeriya/videos/')
        .then((res) => {
          this.videos = res.data
        })
        .catch((error) => {
          console.log('getVideo', error)
        })
    }
  },
  mounted() {
    this.getGallery(),
    this.getVideo()
  }
}
</script>
