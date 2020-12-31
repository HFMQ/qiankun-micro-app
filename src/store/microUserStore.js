import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default {
  namespaced: true,
  state: {
    currentUser: {
      fname: "hh"
    }
  },
  getters: {},
  mutations: {
    saveCurrent(state, payload) {
      state.currentUser = payload;
    }
  },
  actions: {
    login({ commit }, data) {
      commit("saveCurrent", data);
    }
  }
};
