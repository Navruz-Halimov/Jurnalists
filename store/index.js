import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex) 

const store = () => new Vuex.Store({
  state: {
    mediaURL: 'http://mysterious-spire-81595.herokuapp.com  ',
    archives: [],
    compititions: [],
    projects: [],
    trainers: [],
    posts: [],
    releases: []
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
      return state.trainers;
    },
    getPosts(state) {
      return state.posts;
    },
    getRelease(state) {
      return state.releases
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
    setPosts(state, post) {
      state.posts = post
    },
    setReleases(state, release) {
      state.releases = release
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
    async getPosts({commit}) {
      await this.$axios.get('elonlar/')
        .then((res) => {
          commit('setPosts', res.data);
          console.log('setPosts', res)
        })
        .catch((error) => {
          console.log('setPosts', error)
        })
    },
    async getReleases({commit}) {
      await this.$axios.get('treninglar/matbuot/')
        .then((res) => {
          commit('setReleases', res.data)
          console.log('setReleases', res)
        })
        .catch((error) => {
          console.log('setReleases', error)
        })
    }   
  }
});

export default store