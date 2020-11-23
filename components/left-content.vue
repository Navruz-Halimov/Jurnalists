<template>
  <div class="left__content">
    <div class="left__top">
      <!-- <Posts />  -->
      <div class="left__item" v-for="post in posts" :key="post.id">
        <div class="left__date">{{post.date}}</div>
        <nuxt-link :to="'posts/'+post.id" class="left__content" v-html="post.title"></nuxt-link>
      </div>
    </div>
    <div class="left__bottom">
      <img src="../assets/images/Rectangle12.png" alt="">
      <b-form @submit.prevent="onSubmit">
        <b-form-group>
          <b-form-input 
            type="text" 
            required 
            placeholder="Name"
            v-model="form.name"
          >
          </b-form-input>
        </b-form-group>
        <b-form-group>
          <b-form-input 
            type="tel" 
            required 
            placeholder="+998 91 603 67 65"
            v-model="form.phone"
          >
          </b-form-input>
        </b-form-group>
        <b-form-textarea 
          required
          placeholder="Comment" 
          rows="8"
          v-model="form.comment"
        >
        </b-form-textarea>
        <b-button type="submit" variant="primary">Send</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>

export default {
  name: "left-content",
  data() {
    return {
      form: {
        name: '',
        phone: '',
        comment: ''
      },
      posts: ''
    }
  },
  methods: {
    // async onSubmit() {
    //   await this.$axios.post('contact/', this.form)
    //     .then((res) => {
    //       console.log('onSubmit', res)
    //     })
    //     .catch((error) => {
    //       console.log('onSubmit', error)
    //     })
    // },
    async onSubmit() {
      await this.$axios.post('contact/', this.form)
        .then(async () => {
          this.form = {
            name: '',
            phone: '',
            comment: ''
          }
          try {
            this.$toast.success({
              title: `Malumot junatilda`,
              message: `Tez orada siz bilan bog\'lanishadi`,
            })
          } catch (err) {
            console.log(err)
            this.$toast.error({
              title: `Malumot xato junatildi`,
              message: `Tekshirib qaytadan junating`,
            })
          }
        })
    },    

    async getPosts() {
      await this.$axios.get('elonlar/')
        .then((res) => {
          this.posts = res.data;
          console.log('getPosts', res)
        })
        .catch((res) => {
          console.log('getPosts', res)
        })
    }
  },
  mounted() {
    this.getPosts()
  }
}
</script>
