<template>
  <div class="left__content">
    <div class="left__top">
      <Posts /> 
      <div class="left__item" v-for="post in posts" :key="post.id">
        <div class="left__date">08.11.2020</div>
        <nuxt-link :to="'posts/'+post.id" class="left__content">Lorem ipsum dolor sit amet, consectetur adipisicing eli</nuxt-link>
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
            type="text" 
            required 
            placeholder="Phone"
            v-model="form.phone"
          >
          </b-form-input>
        </b-form-group>
        <b-form-textarea 
          placeholder="Comment" 
          rows="8"
          v-model="form.content"
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
        content: ''
      },
      posts: ''
    }
  },
  methods: {
    async onSubmit() {
      await this.$axios.post('', this.form)
        .then((res) => {
          
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
  }
}
</script>
