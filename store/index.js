import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex) 

const store = () => new Vuex.Store({
  state: {
    mediaURL: 'http://fast-everglades-31601.herokuapp.com',
    archives: [],
    compititions: [],
    projects: [],
    trainers: [],
    abouts: [],
    posts: []
  },
  getters: {
    getArchive(state) {
      return state.archives;
    },
    getCompitition(state) {
      return state.compititions;
    },
    getProject(state) {
      return state.projects;
    },
    getTrainer(state) {
      return state.trainers
    },
    getAbout(state) {
      return state.abouts
    },
    getPosts(state) {
      return state.posts
    }
  },
  mutations: {
    setArchive(state, archive) {
      state.archives = archive
    },
    setCompitition(state, compitition) {
      state.compititions = compitition
    },
    setProject(state, project) {
      state.projects = project
    },
    setTrainer(state, trainer) {
      state.trainers = trainer
    },
    setAbout(state, about) {
      state.abouts = about
    },
    setPosts(state, post) {
      state.posts = post
    }
  },
  actions: {
    async getArchive({commit}) {
      await this.$axios.get('arxiv/')
        .then((res) => {
          commit('setArchive', res.data)
          console.log('setArchive', res)
        })
        .catch((error) => {
          console.log('setArchive', error)
        })
    },
    async getCompitition({commit}) {
      await this.$axios.get('tanlovlar/')
        .then((res) => {
          commit('setCompitition', res.data);
          console.log('setCompitition', res)
        })
        .catch((error) => {
          console.log('setCompitition', error)
        })
    },
    async getProject({commit}) {
      await this.$axios.get('loyihalar/')
        .then((res) => {
          commit('setProject', res.data.results);
          console.log('setProject', res)
        })
        .catch((error) => {
          console.log('setProject', error)
        })
    },
    async getTrainer({commit}) {
      await this.$axios.get('trenerlar/trenerlar/')
        .then((res) => {
          commit('setTrainer', res.data);
          console.log('setTrainer', res)
        })
        .catch((error) => {
          console.log('setTrainer', error)
        })
    },
    async getAbous({commit}) {
      await this.$axios.get('haqimizda/us/')
        .then((res) => {
          commit('setAbout', res.data);
          console.log('setAbout', res)
        })
        .catch((error) => {
          console.log('setAbout', res)
        })
    },
    async getPosts({commit}) {
      await this.$axios.get('elonlar/')
        .then((res) => {
          commit('setPosts', res.data);
          console.log('setPosts', res)
        })
        .catch((error) => {
          console.log('setPosts', error)
        })
    }    
  }
});

export default store