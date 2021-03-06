import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default {
  namespaced: true,
  state: {
    app: {
      name: "hf"
    }
  },
  getters: {},
  mutations: {
    saveApp(state, payload) {
      state.app = payload;
    }
  },
  actions: {
    getApp(data) {
      this.commit("saveApp", data);
    }
  }
};
