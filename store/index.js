import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex) 

const store = () => new Vuex.Store({
  state: {
    mediaURL: 'http://fast-everglades-31601.herokuapp.com',
    archives: [],
    compititions: [],
    projects: []
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
    }
  }
});

export default store