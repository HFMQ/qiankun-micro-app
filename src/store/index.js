import Vue from "vue";
import Vuex from "vuex";
import microAppStore from "./microAppStore";
import microUserStore from "./microUserStore";

Vue.use(Vuex);

const modules = {
  microAppStore,
  microUserStore
};
export const microModules = modules;

export const microStore = new Vuex.Store({
  modules
});
// export default new Vuex.Store({
//   state: {
//     currentUser: {}
//   },
//   mutations: {
//     saveCurrent(state, payload) {
//       state.currentUser = payload;
//     }
//   },
//   actions: {
//     login(data) {
//       debugger;
//       this.commit('saveCurrent', data);
//     }
//   },
//   modules: {}
// })
