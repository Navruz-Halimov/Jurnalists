import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex) 

const store = () => new Vuex.Store({
  state: {
    mediaURL: 'http://aqueous-lake-17748.herokuapp.com'
  },
  actions: {

  },
  mutations: {

  },
  getters: {
    
  }
});

export default store